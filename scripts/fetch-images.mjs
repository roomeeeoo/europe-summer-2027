// Descarga las fotos de Wikimedia Commons (licencias libres) y genera versiones WebP optimizadas.
// Uso: node scripts/fetch-images.mjs   (necesita ffmpeg en el PATH o FFMPEG=ruta)
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const list = JSON.parse(await readFile(path.join(root, 'scripts/images.json'), 'utf8'));
const cache = path.join(root, 'scripts/.cache');
const out = path.join(root, 'public/img');
await mkdir(cache, { recursive: true });
await mkdir(out, { recursive: true });
const ffmpeg = process.env.FFMPEG || 'ffmpeg';
const UA = 'TripSite/1.0 (personal non-commercial travel page)';
const exists = p => access(p).then(() => true, () => false);
const sleep = ms => new Promise(r => setTimeout(r, ms));

const credits = [];
for (const img of list) {
  const raw = path.join(cache, img.key + '.jpg');
  if (!(await exists(raw))) {
    const url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent(img.file) + '?width=1920';
    for (let attempt = 0; attempt < 4; attempt++) {
      const r = await fetch(url, { headers: { 'User-Agent': UA } });
      if (r.ok && (r.headers.get('content-type') || '').startsWith('image/')) {
        await writeFile(raw, Buffer.from(await r.arrayBuffer()));
        console.log('ok   ', img.key);
        break;
      }
      console.log('retry', img.key, r.status);
      await sleep(15000);
    }
    await sleep(4000);
  }
  if (!(await exists(raw))) { console.log('FAIL ', img.key); continue; }
  for (const w of [1600, 800]) {
    const dest = path.join(out, `${img.key}-${w}.webp`);
    if (await exists(dest)) continue;
    execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-i', raw, '-vf', `scale='min(${w},iw)':-2`, '-quality', w === 1600 ? '72' : '68', dest]);
  }
  credits.push({ key: img.key, author: img.author, license: img.license,
    source: 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(img.file.replace(/ /g, '_')) });
}
await writeFile(path.join(root, 'src/data/credits.json'), JSON.stringify(credits, null, 2));
console.log('Imágenes listas:', credits.length);


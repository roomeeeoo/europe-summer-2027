// Genera el "tráiler" que se reproduce con el scroll en la portada (técnica scroll-scrub, como scroll-world):
// fotos reales encadenadas con zoom lento y fundidos. Dos versiones nativas:
//   public/video/destino.mp4    1280x720  (escritorio)
//   public/video/destino-m.mp4  720x1280  (móvil, encuadre vertical propio por foto)
// Uso: node scripts/build-trailer.mjs   (requiere ffmpeg)
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cache = path.join(root, 'scripts/.cache');
const outDir = path.join(root, 'public/video');
mkdirSync(outDir, { recursive: true });
const ffmpeg = process.env.FFMPEG || 'ffmpeg';

// key = foto en scripts/.cache · fx = foco horizontal (0–1) para el recorte vertical · zoom = 'in' | 'out'
export const SHOTS = [
  { key: "ksamil3", fx: 0.5, zoom: "in" },
  { key: "butrint2", fx: 0.5, zoom: "out" },
  { key: "blueeye", fx: 0.5, zoom: "in" },
  { key: "gjipe", fx: 0.55, zoom: "in" },
  { key: "grama", fx: 0.5, zoom: "out" },
  { key: "himarasunset", fx: 0.6, zoom: "in" },
];
const FPS = 24, D = 3.4, F = 0.9;
const frames = Math.round(D * FPS);

function build(mode) {
  const [W, H] = mode === 'm' ? [576, 1024] : [1280, 720];
  const inputs = [], parts = [];
  SHOTS.forEach((s, i) => {
    inputs.push('-i', path.join(cache, s.key + '.jpg'));
    const z = s.zoom === 'in' ? `1+0.14*on/${frames}` : `1.14-0.14*on/${frames}`;
    // 1) recortar al formato final (vertical con foco propio), 2) ampliar ×3 para un zoom sin temblor, 3) zoompan
    const crop = mode === 'm'
      ? `crop='min(iw,ih*9/16)':ih:'(iw-min(iw,ih*9/16))*${s.fx}':0`
      : `crop=iw:'min(ih,iw*9/16)':0:'(ih-min(ih,iw*9/16))/2'`;
    parts.push(`[${i}:v]${crop},scale=${W * 3}:${H * 3},zoompan=z='${z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${H}:fps=${FPS},setsar=1,format=yuv420p[v${i}]`);
  });
  let last = 'v0';
  for (let i = 1; i < SHOTS.length; i++) {
    const off = (i * (D - F)).toFixed(2);
    const o = i === SHOTS.length - 1 ? 'vx' : `x${i}`;
    parts.push(`[${last}][v${i}]xfade=transition=fade:duration=${F}:offset=${off}[${o}]`);
    last = o;
  }
  // Atardecer progresivo: el final gana calidez
  parts.push(`[vx]eq=saturation=1.08:contrast=1.04[out]`);
  const out = path.join(outDir, mode === 'm' ? 'destino-m.mp4' : 'destino.mp4');
  execFileSync(ffmpeg, ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', parts.join(';'), '-map', '[out]',
    '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', mode === 'm' ? '30' : '30', '-tune', 'film', '-pix_fmt', 'yuv420p',
    '-g', mode === 'm' ? '6' : '10', '-keyint_min', mode === 'm' ? '6' : '10', '-sc_threshold', '0', '-movflags', '+faststart', out]);
  // póster = primer fotograma
  execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-i', out, '-frames:v', '1', '-quality', '70',
    path.join(outDir, mode === 'm' ? 'destino-m.webp' : 'destino.webp')]);
  console.log('ok', out);
}
build('d');
build('m');

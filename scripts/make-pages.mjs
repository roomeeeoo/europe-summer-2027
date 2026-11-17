// Genera los archivos HTML de cada página (todas comparten la misma plantilla).
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const T = 'Europe Summer 2027';
const pages = [
  ['index.html', 'home', T, '7 amigos, una casa en Sarandë y el mar más azul de Europa. Del 29 de junio al 6 de julio de 2027.', 'ksamil3'],
  ['destino.html', 'destino', `El destino · ${T}`, 'Comparamos 12 destinos de Europa: por qué Sarandë es la mejor relación calidad-precio.', 'aerial'],
  ['viaje.html', 'viaje', `Vuelos y casa · ${T}`, 'Vuelos desde Gran Canaria, ferry de Corfú y la casa de Sarandë para los 7.', 'corfu'],
  ['itinerario.html', 'itinerario', `Itinerario · ${T}`, 'Los 8 días del viaje con horarios, precios y mapa.', 'butrint2'],
  ['aventuras.html', 'aventuras', `Aventuras · ${T}`, 'Ksamil, el Ojo Azul, barco privado, Butrint y dónde comer barato.', 'kakome'],
  ['fiesta.html', 'fiesta', `Fiesta · ${T}`, 'Tres noches en el paseo marítimo de Sarandë.', 'sarandanight'],
  ['presupuesto.html', 'presupuesto', `Presupuesto · ${T}`, 'Lo que cuesta el viaje por persona y para el grupo de 7.', 'ksamil4'],
  ['info.html', 'info', `Info útil · ${T}`, 'Documentación, dinero, seguridad y calendario de reservas.', 'sarandabeach'],
];

for (const [file, js, title, desc, og] of pages) {
  const dark = js === 'fiesta';
  writeFileSync(path.join(root, file), `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="theme-color" content="${dark ? '#050C16' : '#06283D'}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:image" content="img/${og}-1600.webp" />
  <meta name="robots" content="noindex" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="preload" as="image" href="img/${og}-800.webp" imagesrcset="img/${og}-800.webp 800w, img/${og}-1600.webp 1600w" imagesizes="100vw" />
  <style>body{margin:0;background:${dark ? '#050C16' : '#fff'}}</style>
</head>
<body${dark ? ' class="night"' : ''}>
  <div id="app"></div>
  <script type="module" src="/src/pages/${js}.js"></script>
</body>
</html>
`);
}
console.log('ok', pages.length);

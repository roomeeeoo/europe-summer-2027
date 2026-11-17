# Malta Summer 2027

Web de presentación del viaje a Malta (21–27 junio 2027). 7 páginas, hecha con Vite + GSAP + Leaflet.

## Estructura

| Carpeta / archivo | Qué hay |
|---|---|
| `index.html`, `viaje.html`, `itinerario.html`, `experiencias.html`, `fiesta.html`, `presupuesto.html`, `info.html` | Las 7 páginas (se generan con `node scripts/make-pages.mjs`) |
| `src/data/trip.js`, `src/data/extra.js` | **Todos los datos y precios.** Para cambiar un precio, una fecha o un texto, edita aquí. |
| `src/pages/*.js` | El contenido y las animaciones de cada página |
| `src/js/` | Partes comunes: menú y cabecera (`layout.js`), motor de vídeo con scroll (`scrub.js`), mapa (`map.js`), iconos |
| `src/styles/` | Estilos: `base.css` (común), `home.css` (portada), `pages.css` (resto) |
| `public/img/` | Fotos optimizadas (WebP 800 y 1600 px) |
| `public/video/` | Vídeo de la portada que avanza con el scroll (versión horizontal y vertical) |
| `scripts/` | Descarga de fotos (`fetch-images.mjs`, lista en `images.json`) y montaje del vídeo (`build-trailer.mjs`) |
| `docs/` | Informe de la investigación |

## Comandos

```bash
npm install          # la primera vez
npm run dev          # ver la web en local (http://localhost:5173)
npm run build        # generar la versión final en dist/
npm run deploy       # publicar en GitHub Pages: https://roomeeeoo.github.io/malta-summer-2027/
```

Para añadir una foto: añade una entrada a `scripts/images.json` y ejecuta `npm run images` (necesita ffmpeg).
Para regenerar el vídeo de la portada: `node scripts/build-trailer.mjs`.

Fotos: Wikimedia Commons (licencias CC, créditos en la página "Info útil"). Mapa: © OpenStreetMap.

Hecho por Romeo.

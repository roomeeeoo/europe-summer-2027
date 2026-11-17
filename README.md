# Europe Summer 2027 · Rimini (Italia)

Web de presentación del viaje de 7 amigos a Rimini (29 jun – 6 jul 2027): vuelo directo Gran Canaria–Bolonia, un piso en Rimini 7 noches y máximo 650 € por persona. 8 páginas, hecha con Vite + GSAP + Leaflet.

Publicada en: https://roomeeeoo.github.io/europe-summer-2027/

## Estructura

| Carpeta / archivo | Qué hay |
|---|---|
| `index.html`, `destino.html`, `viaje.html`, `itinerario.html`, `aventuras.html`, `fiesta.html`, `presupuesto.html`, `info.html` | Las 8 páginas (se generan con `node scripts/make-pages.mjs`) |
| `src/data/trip.js` | **Todos los datos y precios.** Para cambiar un precio, una fecha o un texto, edita aquí. |
| `src/pages/*.js` | El contenido y las animaciones de cada página |
| `src/js/` | Partes comunes: menú y cabecera (`layout.js`), vídeo con scroll (`scrub.js`), mapa (`map.js`), iconos |
| `src/styles/` | Estilos: `base.css` (común), `home.css` (portada), `pages.css` (resto) |
| `public/img/` | Fotos optimizadas (WebP 800 y 1600 px) |
| `public/video/` | Vídeo de la portada que avanza con el scroll (horizontal y vertical) |
| `scripts/` | Descarga de fotos (`fetch-images.mjs`, lista en `images.json`) y montaje del vídeo (`build-trailer.mjs`) |

## Comandos

```bash
npm install          # la primera vez
npm run dev          # ver la web en local (http://localhost:5173)
npm run build        # generar la versión final en dist/
npm run deploy       # publicar en GitHub Pages (rama main)
```

El código fuente está en la rama `source`; la rama `main` contiene solo la web compilada que sirve GitHub Pages.

Para añadir una foto: añade una entrada a `scripts/images.json` y ejecuta `npm run images` (necesita ffmpeg).
Para regenerar el vídeo de la portada: `node scripts/build-trailer.mjs`.

Fotos: Wikimedia Commons (licencias CC / dominio público, créditos en "Info útil"). Mapa: © OpenStreetMap.
Precios consultados el 17 nov 2026 (Ryanair y Airbnb para las fechas exactas; el resto, estimaciones).

Hecho por Romeo.

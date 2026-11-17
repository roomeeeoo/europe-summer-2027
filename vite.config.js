import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = ['index', 'destino', 'viaje', 'itinerario', 'aventuras', 'fiesta', 'presupuesto', 'info'];

export default defineConfig({
  base: './', // rutas relativas: funciona en la raíz de un dominio o en una subcarpeta (GitHub Pages)
  build: {
    rollupOptions: { input: Object.fromEntries(pages.map(p => [p, resolve(__dirname, `${p}.html`)])) },
    chunkSizeWarningLimit: 700,
  },
});

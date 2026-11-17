import { icon } from './icons.js';

// Imagen responsive optimizada (WebP 800 / 1600)
export function img(key, alt, sizes = '100vw', lazy = true, cls = '') {
  return `<img src="img/${key}-800.webp" srcset="img/${key}-800.webp 800w, img/${key}-1600.webp 1600w" sizes="${sizes}" alt="${alt}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async" ${cls ? `class="${cls}"` : ''}>`;
}

const ST = {
  ok: ['st-ok', icon.check, 'Comprobado', 'Precio leído en la web oficial'],
  est: ['st-est', icon.tilde, 'Estimado', 'Cálculo propio con datos de la investigación'],
  sec: ['st-sec', icon.info, 'Guía 2025–26', 'Precio de guías o blogs recientes'],
  pend: ['st-pend', icon.alert, 'Por decidir', 'Aún no lo hemos decidido'],
  rec: ['st-rec', icon.star, 'Recomendado', 'La opción que proponemos'],
  var: ['st-est', icon.clock, 'Sujeto a cambios', 'Puede cambiar hasta que se compre'],
};
export const status = s => { const [c, i, t, title] = ST[s] || ST.est; return `<span class="st ${c}" title="${title}">${i}${t}</span>`; };

export const head = (kicker, title, lead, id = '') => `
  <header class="sec-head rv">
    ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
    <h2 class="h2" ${id ? `id="${id}-t"` : ''}>${title}</h2>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </header>`;

export const ext = (href, text) => `<a class="link" href="${href}" target="_blank" rel="noopener">${text}${icon.ext}</a>`;
export const maps = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
export const eur = (n, d = 0) => n.toLocaleString('es-ES', { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: 'always' }) + ' €';
export const range = ([a, b]) => `${a.toLocaleString('es-ES', { useGrouping: 'always' })}–${b.toLocaleString('es-ES', { useGrouping: 'always' })} €`;
export const pc = (pros = [], cons = []) => `<ul class="pc">${pros.map(p => `<li class="plus">${icon.plus}<span>${p}</span></li>`).join('')}${cons.map(p => `<li class="minus">${icon.minus}<span>${p}</span></li>`).join('')}</ul>`;

import '../styles/pages.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { img, head, maps } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { days } from '../data/trip.js';

gsap.registerPlugin(ScrollTrigger);

const block = b => `
  <li><div class="tl-when"><b>${b.t}</b></div>
  <div class="tl-body"><h3>${b.what}</h3><p>${b.how}</p>
  <div class="tl-meta"><span>${icon.clock}${b.dur}</span>${b.map ? `<a class="link" href="${maps(b.map)}" target="_blank" rel="noopener">${icon.pin}Ver en el mapa</a>` : ''}</div></div></li>`;

const daySection = d => `
  <section class="day-sec ${d.key ? 'key' : ''}" id="${d.id}">
    <div class="day-media">${img(d.img, d.title, '100vw')}
      <div class="wrap"><div>${d.key ? `<span class="party-tag key-tag">${icon.star}El día marcado</span> ` : ''}${d.party === true ? `<span class="party-tag">${icon.music}Noche de fiesta</span>` : d.party === 'opt' ? `<span class="party-tag">${icon.music}Fiesta opcional</span>` : ''}
      <div class="d" style="margin-top:8px">Día ${d.n} · ${d.date} · ${d.where}</div><h2>${d.title}</h2></div>
      <div class="day-cost"><b>${d.cost}</b><span>por persona</span></div></div>
    </div>
    <div class="wrap">
      <ol class="tl">${d.blocks.map(block).join('')}</ol>
      <div class="note blue planb">${icon.umbrella}<span><b>Plan B:</b> ${d.planB}</span></div>
    </div>
  </section>`;

const html = `
${pageHero('butrint2', 'Página 4 · Itinerario', 'Día a día', 'Italia, Grecia y Albania en ocho días. Con el viernes 2 de julio entero en Ksamil y tres noches de fiesta.')}
<nav class="chips-nav" aria-label="Días"><div class="wrap">${days.map(d => `<a href="#${d.id}">${d.date.replace(' jun', '').replace(' jul', '')}</a>`).join('')}<a href="#mapa">Mapa</a></div></nav>
<div style="padding-top:40px"><div class="wrap"><p class="small muted">Coste por persona y día sin vuelos, alojamiento ni la compra del súper (eso está en el presupuesto). Horarios de vuelos comprobados; buses y ferris con horarios de 2026.</p></div></div>
${days.map(daySection).join('')}
<section class="sec tint" id="mapa"><div class="wrap">
  ${head('El mapa', 'Todo lo que vamos a ver.', 'Toca un punto para ver la foto, el precio y cómo llegar.')}
  <div class="map-filters" data-mapfilters></div>
  <div class="map-shell"><div id="map" role="region" aria-label="Mapa interactivo de la ruta"></div></div>
</div></section>`;

mountPage('itinerario', html);
heroMotion();

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.day-media img').forEach(im => {
    gsap.fromTo(im, { scale: 1.2, yPercent: -6 }, { scale: 1, yPercent: 6, ease: 'none', scrollTrigger: { trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}
const mapEl = document.getElementById('map');
new IntersectionObserver((es, o) => { if (es.some(e => e.isIntersecting)) { o.disconnect(); import('../js/map.js').then(m => m.initMap(mapEl, document.querySelector('[data-mapfilters]'))); } }, { rootMargin: '500px' }).observe(mapEl);

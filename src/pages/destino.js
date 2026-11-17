import '../styles/pages.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { img, status, head } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { destinations, scoreLabels } from '../data/trip.js';

gsap.registerPlugin(ScrollTrigger);
const dots = n => `<span class="dots" aria-label="${n} de 5">${'●'.repeat(n)}<span style="opacity:.25">${'●'.repeat(5 - n)}</span></span>`;
const podium = destinations.slice(0, 3);
const photos = { rim: 'beach', opo: 'porto', jes: 'beach3' };

const why = [
  ['bologna', 'Vuelo directo', 'Gran Canaria–Bolonia sin escalas por 145,68 € ida y vuelta. Rimini está a una hora.'],
  ['beach', 'Playa', '15 km de arena fina, agua tranquila y tramos de playa libre gratis a un paseo del piso.'],
  ['club', 'Fiesta', 'La Riviera Romagnola es la zona de discotecas más famosa de Italia: Cocoricò, Peter Pan, Coconuts.'],
  ['piadina', 'Precio', 'Piso para 7 a 21 € por persona y noche, piadina a 5 € y todo en bus o andando. Cabe en 650 €.'],
];

const html = `
${pageHero('tiberio', 'Página 2 · El destino', 'Rimini', 'Buscamos lo más barato de Europa con playa y fiesta, a ser posible en Italia, y con un máximo de 650 € por persona. Ganó Rimini.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#por-que">Por qué</a><a href="#podio">El podio</a><a href="#comparativa">Comparativa</a><a href="#numeros">En números</a></div></nav>

<section class="sec" id="por-que"><div class="wrap">
  ${head('Por qué Rimini', 'Italia, playa y fiesta, por poco.', 'Es el único destino de Italia con vuelo directo desde Gran Canaria que cabe en 650 € con todo incluido.')}
  <div class="why-grid">${why.map(([k, t, p], i) => `<article class="why rv" style="--d:${i * 80}ms">${img(k, '', '(min-width:900px) 25vw, 100vw')}<div><span>0${i + 1}</span><h3>${t}</h3><p>${p}</p></div></article>`).join('')}</div>
</div></section>

<section class="sec tint" id="podio"><div class="wrap">
  ${head('El podio', 'Las tres mejores opciones.', 'Total por persona con vuelos, alojamiento, comida, transporte, actividades y fiesta.')}
  <div class="podium">
    ${podium.map(d => `
    <article class="card ${d.rank === 1 ? 'rec' : ''} rv">
      ${d.rank === 1 ? `<div class="card-img">${img(photos[d.id], d.name, '(min-width:1040px) 33vw, 100vw')}<span class="badge">${d.rank}º · ${d.verdict}</span></div>` : `<div class="card-body" style="padding-bottom:0"><span class="st st-sec">${d.rank}º · ${d.verdict}</span></div>`}
      <div class="card-body">
        <div><h3 class="h4" style="font-size:1.35rem">${d.name}</h3><p class="small muted" style="margin:4px 0 0">${d.where}</p></div>
        <div class="facts3"><div><span>Vuelos</span><b>${d.flight}</b></div><div><span>Allí</span><b>${d.ground}</b></div><div><span>Total pp</span><b>${d.total}</b></div></div>
        <p style="margin:0">${d.note}</p>
        <ul class="rows" style="font-size:.88rem">${scoreLabels.map((l, i) => `<li><span>${l}</span>${dots(d.s[i])}</li>`).join('')}</ul>
      </div>
    </article>`).join('')}
  </div>
</div></section>

<section class="sec" id="comparativa"><div class="wrap">
  ${head('Comparativa', 'Los 8 destinos.', 'Puntuación de 1 a 5. Desliza la tabla en el móvil.')}
  <div class="tbl-wrap rv"><table class="tbl cmp-tbl" style="min-width:1020px">
    <thead><tr><th scope="col">Destino</th><th scope="col">Vuelos i/v</th><th scope="col">Allí (semana)</th><th scope="col" class="hl">Total pp</th>${scoreLabels.map(l => `<th scope="col">${l}</th>`).join('')}</tr></thead>
    <tbody>${destinations.map(d => `<tr class="${d.rank === 1 ? 'win' : ''}"><td class="l"><b>${d.rank}. ${d.name}</b><br><span class="small muted">${d.where}</span></td><td>${d.flight}</td><td>${d.ground}</td><td class="hl"><b>${d.total}</b></td>${d.s.map(v => `<td>${dots(v)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>
  <p class="cap">${status('ok')} Vuelos leídos en Ryanair el 17 nov 2026 (una plaza). ${status('est')} El resto, estimaciones con precios de 2025–26. Rimini: 644 € es el presupuesto detallado del plan.</p>
  <div class="grid-2" style="margin-top:30px">
    <div class="note blue">${icon.info}<span><b>¿Y Oporto?</b> Es el plan B: también cabe en 650 € y el vuelo es el más barato, pero no es Italia y el Atlántico está frío (17–19 °C).</span></div>
    <div class="note blue">${icon.info}<span><b>¿Por qué no Roma o el Lago de Garda?</b> Roma: la vuelta cuesta 260,99 € y no hay playa sin coche. Garda: solo dormir ya cuesta 250–350 € por persona.</span></div>
  </div>
</div></section>

<section class="sec stone" id="numeros"><div class="wrap">
  ${head('En números', 'Rimini, por persona.', '')}
  <div class="kpis">
    <div class="kpi main rv"><span>Total recomendado</span><b>644 €</b><span>máximo 650 €</span></div>
    <div class="kpi rv"><span>Vuelo directo i/v</span><b>146 €</b></div>
    <div class="kpi rv"><span>Piso, por noche</span><b>21 €</b></div>
    <div class="kpi rv"><span>Piadina</span><b>4–7 €</b></div>
    <div class="kpi rv"><span>Tren a Bolonia</span><b>≈ 10 €</b></div>
  </div>
</div></section>`;

mountPage('destino', html);
heroMotion();
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.why img').forEach(im => gsap.fromTo(im, { scale: 1.2 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }));
}

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
const photos = { alb: 'ksamil3', alg: 'riviera', cfu: 'corfu' };

const why = [
  ['aerial', 'Paisaje', 'Agua turquesa, montañas que caen al mar, cañones, manantiales y calas sin carretera. Lo más parecido al Caribe en Europa.'],
  ['byrek', 'Precio', 'Cerveza a 2,40 € en bar, menú a 7–12 €, piso para 7 a 23 € por persona y noche. Lo más barato de toda la costa mediterránea.'],
  ['kakome', 'Aventura', 'Barco privado, snorkel, saltos, rutas a pie a playas escondidas, ruinas y el Ojo Azul. Una actividad distinta cada día.'],
  ['sarandanight', 'Fiesta', 'Sarandë tiene más de 20 bares-club seguidos y abiertos hasta las 4, casi sin entrada. Y Tirana para la última noche.'],
];

const html = `
${pageHero('aerial', 'Página 2 · El destino', 'Albania', 'Comparamos 12 destinos de Europa con vuelos desde Gran Canaria. Ganó la Riviera albanesa, y no por poco.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#por-que">Por qué</a><a href="#podio">El podio</a><a href="#comparativa">Comparativa</a><a href="#numeros">En números</a></div></nav>

<section class="sec" id="por-que"><div class="wrap">
  ${head('Por qué Albania', 'Lo tiene todo, y cuesta poco.', 'Buscábamos playas increíbles, aventura, fiesta y gente joven gastando lo mínimo. Es el único sitio que saca nota alta en todo a la vez.')}
  <div class="why-grid">${why.map(([k, t, p], i) => `<article class="why rv" style="--d:${i * 80}ms">${img(k, '', '(min-width:900px) 25vw, 100vw')}<div><span>0${i + 1}</span><h3>${t}</h3><p>${p}</p></div></article>`).join('')}</div>
</div></section>

<section class="sec tint" id="podio"><div class="wrap">
  ${head('El podio', 'Las tres mejores opciones.', 'El total incluye vuelos, alojamiento, comida, transporte, actividades y fiesta durante una semana.')}
  <div class="podium">
    ${podium.map(d => `
    <article class="card ${d.rank === 1 ? 'rec' : ''} rv">
      <div class="card-img">${img(photos[d.id], d.name, '(min-width:1040px) 33vw, 100vw')}<span class="badge">${d.rank}º · ${d.verdict}</span></div>
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
  ${head('Comparativa', 'Los 12 destinos.', 'Puntuación de 1 a 5. Desliza la tabla en el móvil.')}
  <div class="tbl-wrap rv"><table class="tbl cmp-tbl" style="min-width:1020px">
    <thead><tr><th scope="col">Destino</th><th scope="col">Vuelos i/v</th><th scope="col">Allí (semana)</th><th scope="col" class="hl">Total pp</th>${scoreLabels.map(l => `<th scope="col">${l}</th>`).join('')}</tr></thead>
    <tbody>${destinations.map(d => `<tr class="${d.rank === 1 ? 'win' : ''}"><td class="l"><b>${d.rank}. ${d.name}</b><br><span class="small muted">${d.where}</span></td><td>${d.flight}</td><td>${d.ground}</td><td class="hl"><b>${d.total}</b></td>${d.s.map(v => `<td>${dots(v)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>
  <p class="cap">${status('ok')} Vuelos de Albania, Corfú, Algarve, Zante y Budapest leídos en Ryanair el 17 nov 2026 (una plaza). ${status('est')} El resto, estimaciones con precios de 2025–26 (Numbeo, Hostelworld, guías). Albania: 870 € es el presupuesto detallado del plan, con seguro, imprevistos y las noches en Bérgamo y Corfú.</p>
  <div class="grid-2" style="margin-top:30px">
    <div class="note blue">${icon.info}<span><b>¿Por qué no Sunny Beach, si es más barato?</b> Son unos 7 h de bus desde Sofía en cada sentido, dos días perdidos. La fiesta es enorme, pero el paisaje y la aventura no tienen comparación.</span></div>
    <div class="note blue">${icon.info}<span><b>¿Y el Algarve?</b> Es el plan B perfecto: más fácil y con más ambiente español, pero dormir allí en julio cuesta el doble y Benagil solo se ve con tour oficial.</span></div>
  </div>
</div></section>

<section class="sec stone" id="numeros"><div class="wrap">
  ${head('En números', 'Albania frente a casa.', 'Precios medios de Numbeo (nov 2026) y de guías de 2025–26.')}
  <div class="kpis">
    <div class="kpi main rv"><span>Cerveza en un bar</span><b>2,40 €</b><span>Croacia 3,50 € · España ≈ 3 €</span></div>
    <div class="kpi rv"><span>Menú barato</span><b>8,80 €</b></div>
    <div class="kpi rv"><span>Byrek</span><b>≈ 1 €</b></div>
    <div class="kpi rv"><span>Piso para 7, por noche</span><b>23 € pp</b></div>
    <div class="kpi rv"><span>Entrada a Butrint</span><b>10 €</b></div>
  </div>
</div></section>`;

mountPage('destino', html);
heroMotion();
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.why img').forEach(im => gsap.fromTo(im, { scale: 1.2 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }));
}

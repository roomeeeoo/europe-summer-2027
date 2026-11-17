import '../styles/pages.css';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { img, status, head, eur } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { spots, trips, extras, restaurants, foodPrices, foodBudget, foodTips } from '../data/trip.js';

const dots = n => `<span aria-label="${n} de 5">${'●'.repeat(n)}<span style="opacity:.3">${'●'.repeat(5 - n)}</span></span>`;
const optTotal = extras.reduce((a, e) => a + e.price, 0);

const html = `
${pageHero('aquafan', 'Página 5 · Planes', 'Planes', 'Todo desde Rimini: playa, Aquafan, San Marino, el centro romano y dónde comer bien por 5 €.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#playas">Playas</a><a href="#excursiones">Excursiones</a><a href="#extras">Extras</a><a href="#comida">Comida</a></div></nav>

<section class="sec" id="playas"><div class="wrap">
  ${head('Playas', 'Dónde nos bañamos.', 'Arena fina y agua tranquila. Todas a pie, en bici o en Metromare.')}
  <div class="mosaic">
    ${spots.map((s, i) => `
    <article class="tile ${i === 0 ? 'big' : ''} rv">${img(s.img, s.name, i === 0 ? '100vw' : '(min-width:720px) 33vw, 50vw')}
      <div class="tile-txt"><span class="verdict">${dots(s.score)} ${s.verdict}</span><h3>${s.name}</h3><p>${s.why}</p>
      <div class="tile-meta"><span>${s.how}</span><span>${s.price}</span><span>${s.time}</span></div></div>
    </article>`).join('')}
  </div>
</div></section>

<section class="sec tint" id="excursiones"><div class="wrap">
  ${head('Excursiones', 'Lo que hace el viaje memorable.', 'Precios por persona. Todo en bus, tren o a pie.')}
  <div class="grid-2">
    ${trips.map(t => `
    <article class="card rv">
      <div class="card-img">${img(t.img, t.name, '(min-width:720px) 50vw, 100vw')}<span class="badge">${t.verdict}</span></div>
      <div class="card-body">
        <h3 class="h4" style="font-size:1.25rem">${t.name}</h3>
        <p style="margin:0">${t.what}</p>
        <div class="facts3" style="grid-template-columns:1fr 1fr"><div><span>Precio</span><b>${t.price}</b></div><div><span>Tiempo</span><b>${t.time}</b></div><div style="grid-column:1/-1"><span>Cómo llegar</span><b>${t.how}</b></div></div>
        <div>${status(t.status)}</div>
        <div class="note blue">${icon.sparkle}<span>${t.tip}</span></div>
      </div>
    </article>`).join('')}
  </div>
</div></section>

<section class="sec" id="extras"><div class="wrap">
  ${head('Extras', 'Si alguien quiere más.', 'No están en el presupuesto recomendado. Precio por persona.')}
  <div class="opts">${extras.map(e => `<div class="opt rv">${img(e.img, '', '72px')}<div><b>${e.name}</b><p>${e.worth}</p></div><span class="plus">+${e.price} €<small>${e.status === 'ok' ? 'comprobado' : 'estimado'}</small></span></div>`).join('')}</div>
  <div class="note blue" style="margin-top:20px">${icon.info}<span>Hacerlos todos sumaría <b>+${eur(optTotal)}</b> por persona. El escenario "más cómodo" del presupuesto ya incluye uno o dos de estos planes.</span></div>
</div></section>

<section class="sec stone" id="comida"><div class="wrap">
  ${head('Comida', 'Comer bien por muy poco.', 'Desayuno y cena en el piso, piadina o pizza al taglio a mediodía y algún aperitivo.')}
  <div class="restos">
    ${restaurants.map(r => `
    <article class="resto rv">${img(r.img, '', '88px')}
      <div><h3>${r.name}</h3><span class="w">${r.where}</span>
      <p>${r.what}</p><p><span class="pr">${r.price}</span> ${status('sec')}</p>
      <p class="small muted" style="margin-top:4px">${r.note}</p></div>
    </article>`).join('')}
  </div>
  <h3 class="h3" style="margin:56px 0 16px">Comida para los 8 días, por persona</h3>
  <div class="grid-3">${foodBudget.map(f => `<div class="cmp ${f.rec ? 'on' : ''} rv"><span class="small">${f.name}${f.rec ? ' · recomendado' : ''}</span><p class="price-big">${f.week} €</p><span class="small ${f.rec ? '' : 'muted'}">${f.day} al día</span><p class="small" style="margin:10px 0 0">${f.how}</p></div>`).join('')}</div>
  <div class="grid-2" style="margin-top:40px">
    <div><h3 class="h4" style="margin-bottom:8px">Precios de referencia ${status('sec')}</h3><ul class="rows">${foodPrices.map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('')}</ul><p class="cap">Numbeo (nov 2026) y guías de 2025–26.</p></div>
    <div><h3 class="h4" style="margin-bottom:8px">Cómo ahorrar</h3><ul class="pc">${foodTips.map(t => `<li class="plus">${icon.check}<span>${t}</span></li>`).join('')}</ul></div>
  </div>
</div></section>`;

mountPage('aventuras', html);
heroMotion();

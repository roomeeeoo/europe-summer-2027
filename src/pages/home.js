import '../styles/home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mountPage, PAGES } from '../js/layout.js';
import { img } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { createScrub } from '../js/scrub.js';
import { TRIP, pending } from '../data/trip.js';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = n => n.toLocaleString('es-ES', { useGrouping: 'always' });
document.body.classList.add('home');

// ---------------- Contenido ----------------
const stops = [
  { code: 'LPA', k: 'bologna', city: 'Gran Canaria → Bolonia', when: 'Mar 29 jun · 17:40', p: 'Vuelo directo. Solo mochila. Minibús a Rimini y a dormir.' },
  { code: 'RIM', k: 'beach', city: 'Rimini', when: '29 jun – 6 jul · 7 noches', p: 'Un piso para los 7, a un paseo de la playa. No cambiamos de casa en toda la semana.' },
  { code: 'JUE', k: 'aquafan', city: 'Aquafan', when: 'Jueves 1', p: 'Toboganes en Riccione y paseo por Viale Ceccarini.' },
  { code: '2 JUL', k: 'beach2', city: 'El día grande', when: 'Viernes 2 de julio', p: 'Playa por el día y, por la noche, un club de verdad de la Riviera.' },
  { code: 'SÁB', k: 'beachnight', city: 'Marina Centro', when: 'Sábado 3', p: 'Playa sin prisa y fiesta al lado de casa.' },
  { code: 'DOM', k: 'sanmarino', city: 'San Marino', when: 'Domingo 4', p: 'Otro país en lo alto de un monte, a 50 minutos en bus.' },
  { code: 'LPA', k: 'dusk', city: 'Vuelta a casa', when: 'Mar 6 jul · 17:05', p: 'Tren a Bolonia y vuelo directo. En casa por la tarde.' },
];
const destino = [
  { tag: 'Rimini', h: '15 km de arena.', p: 'Agua tranquila, playas libres gratis y el piso a un paseo.' },
  { tag: 'Ponte di Tiberio', h: '2.000 años.', p: 'Un puente romano que se sigue usando, en el centro histórico.' },
  { tag: 'Riccione', h: 'La Riviera de moda.', p: 'Aquafan, Viale Ceccarini y los clubs más famosos de Italia.' },
  { tag: 'San Marino', h: 'Otro país.', p: 'Tres torres en lo alto del monte Titano, a 50 minutos en bus.' },
  { tag: 'Cada tarde', h: 'Y así acaba cada día.', p: 'Del 29 de junio al 6 de julio de 2027. Por menos de 650 €.' },
];
const plan = [
  { k: 'beach3', h: 'Playa', p: 'Arena fina y agua tranquila. Las libres son gratis.', w: '7 días' },
  { k: 'aquafan2', h: 'Aquafan', p: 'El parque acuático más famoso de Italia.', w: '≈ 30 €' },
  { k: 'sanmarino2', h: 'San Marino', p: 'Un país medieval en lo alto de un monte.', w: 'Bus ≈ 6 €' },
  { k: 'tiberio2', h: 'Centro histórico', p: 'Puente de Tiberio, Arco de Augusto y aperitivo.', w: 'Gratis' },
  { k: 'riccione', h: 'Riccione', p: 'Viale Ceccarini y la playa de moda.', w: 'Metromare 2 €' },
  { k: 'piadina', h: 'Comida', p: 'Piadina, pizza al taglio y gelato.', w: '≈ 12,50 € al día' },
  { k: 'club', h: 'Fiesta', p: 'Un club grande el viernes y Marina Centro el sábado.', w: '3 noches' },
];
const beaches = [
  { k: 'beach', h: 'Marina Centro', where: 'Rimini · a un paseo del piso', p: 'Nuestra playa de cada día: arena fina y agua que no cubre en muchos metros.', f: ['Gratis en tramos libres', 'Set 18–30 €', 'Toda la semana'] },
  { k: 'riccionebeach', h: 'Riccione', where: 'A 20 min en Metromare', p: 'La playa de moda de la Riviera, junto a Viale Ceccarini.', f: ['Metromare ≈ 2 €', 'Jueves 1'] },
  { k: 'sanmarino', h: 'San Marino', where: 'A 50 min en bus', p: 'No es playa, pero las vistas a toda la costa desde la Guaita valen el viaje.', f: ['Bus ≈ 5–6 €', 'Domingo 4'] },
];
const scenes = [['portada', 'Portada'], ['ruta', 'La semana'], ['destino', 'El destino'], ['plan', 'El plan'], ['playas', 'Playas'], ['noche', 'Fiesta'], ['coste', 'Lo que cuesta'], ['final', 'El final']];

const html = `
<div class="nightbg" aria-hidden="true"></div>
<nav class="scenes" aria-label="Escenas">${scenes.map(([id, t]) => `<a href="#${id}" data-scene="${id}"><span>${t}</span><i></i></a>`).join('')}</nav>
<div class="scene-label" aria-hidden="true"><span data-scene-name>Portada</span><i>${scenes.map(() => '<b></b>').join('')}</i></div>

<section class="s1" id="portada" data-dark aria-label="Portada">
  <div class="s1-media">${img('beach', 'Playa de Rimini con sombrillas', '100vw', false)}</div>
  <div class="s1-title">
    <p class="s1-pre">7 amigos · Gran Canaria → Rimini, Italia</p>
    <h1 aria-label="Rimini, Europe Summer 2027"><span class="l1">${'RIMINI'.split('').map(c => `<span>${c}</span>`).join('')}</span><span class="l2">EUROPE SUMMER 2027</span></h1>
    <p class="s1-sub">Una semana de playa y fiesta en Italia por menos de 650 €.</p>
  </div>
  <a class="s1-cue" href="#ruta" aria-label="Empezar">${icon.down}</a>
  <div class="s1-ticket" aria-label="Datos del viaje">
    <div><span>Cuándo</span><b>29 jun – 6 jul</b></div>
    <div><span>Vuelo</span><b>LPA ⇄ Bolonia</b></div>
    <div><span>Quiénes</span><b>7 amigos</b></div>
    <div><span>Por persona</span><b>≈ ${TRIP.pp} €</b></div>
  </div>
</section>

<section class="route" id="ruta" data-dark aria-label="La semana">
  <div class="route-bg">${stops.map((s, i) => `<div class="route-ph ${i === 0 ? 'on' : ''}">${img(s.k, '', '100vw')}</div>`).join('')}</div>
  <div class="route-ui wrap">
    <p class="kicker">La semana · una sola casa</p>
    <div class="route-codes">${stops.map((s, i) => `<div class="route-stop ${i === 0 ? 'on' : ''}"><b>${s.code}</b><h3>${s.city}</h3><span>${s.when}</span><p>${s.p}</p></div>`).join('')}</div>
    <ol class="route-line" aria-hidden="true"><i data-routebar></i>${stops.map((s, i) => `<li class="${i === 0 ? 'on' : ''}"><span>${s.code === '2 JUL' ? 'VIE' : s.code}</span></li>`).join('')}</ol>
  </div>
</section>

<section class="s2" id="destino" data-dark aria-label="El destino">
  <div class="stage" data-stage></div>
  <div class="s2-intro"><p class="kicker">Rimini y la Riviera</p></div>
  <div class="s2-caps">${destino.map(d => `<div class="s2-cap"><small>${d.tag}</small><h3>${d.h}</h3><p>${d.p}</p></div>`).join('')}</div>
  <div class="s2-rail" aria-hidden="true">${destino.map(() => '<i><b></b></i>').join('')}</div>
</section>

<section class="s3" id="plan" aria-label="El plan">
  <div class="s3-head"><p class="kicker">El plan</p><h2 class="h2">Ocho días,<br>cero aburrimiento.</h2></div>
  <div class="s3-track">${plan.map(e => `<article class="exp">${img(e.k, '', '(min-width:1040px) 380px, 76vw')}<div><h3>${e.h}</h3><p>${e.p}</p><span class="where">${e.w}</span></div></article>`).join('')}</div>
  <div class="s3-count"><span>Desliza</span><i><b data-s3bar></b></i><span>${plan.length} planes</span></div>
</section>

<div id="playas">
  <div class="s4-intro"><div class="wrap"><p class="kicker">Las playas</p><h2 class="h2">Donde nos<br>vamos a bañar.</h2><p class="lead">A un paseo, un Metromare o un bus de casa.</p></div></div>
  ${beaches.map(b => `
  <section class="beach" data-dark aria-label="${b.h}">
    <div class="beach-img">${img(b.k, b.h, '100vw')}</div>
    <div class="beach-txt"><small>${icon.pin.replace('<svg', '<svg style="width:16px;height:16px"')}${b.where}</small><h3>${b.h}</h3><p>${b.p}</p><div class="beach-facts">${b.f.map(x => `<span>${x}</span>`).join('')}</div></div>
  </section>`).join('')}
</div>

<section class="s5" id="noche" data-dark aria-label="La fiesta">
  <div class="wrap">
    <div class="grid-l">
      <div>
        <p class="kicker">La fiesta</p>
        <h2 class="s5-title">Y de noche,<span>la Riviera.</span></h2>
        <p class="lead" style="color:#C9D8E2">La zona de discotecas más famosa de Italia: Cocoricò y Peter Pan en Riccione, Coconuts en Rimini y el lungomare lleno de bares. Miles de jóvenes italianos de vacaciones.</p>
      </div>
      <div class="collage">
        <figure class="c1">${img('beachnight', 'Sombrillas de Rimini de noche', '60vw')}<figcaption>Rimini de noche</figcaption></figure>
        <figure class="c2">${img('club', 'Ambiente de discoteca con láseres', '50vw')}<figcaption>Foto ilustrativa</figcaption></figure>
        <figure class="c3">${img('grandhotel', 'Grand Hotel de Rimini iluminado', '55vw')}<figcaption>Grand Hotel</figcaption></figure>
      </div>
    </div>
    <div class="nights">
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 1 · viernes 2 jul</span><div class="day">El club grande</div><p>Cocoricò o Peter Pan en Riccione, según el evento de ese viernes. Pre-copas en el piso para ahorrar.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 2 · sábado 3 jul</span><div class="day">Marina Centro</div><p>Coconuts y los bares del lungomare, a un paseo del piso y casi sin entrada.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 3 · lunes 5 jul</span><div class="day">La despedida</div><p>Atardecer en el puerto y bares del lungomare. Sin pasarse: el tren sale por la mañana.</p></div>
    </div>
    <div class="agechips" aria-label="Datos de la fiesta">
      <span class="agechip"><b class="a18">18+</b>Todos somos mayores de edad</span>
      <span class="agechip"><b class="a18">0–40 €</b>Entrada según el sitio</span>
      <span class="agechip"><b class="a18">60 €</b>Las 3 noches en el presupuesto</span>
    </div>
    <p style="margin-top:26px"><a class="btn" href="fiesta.html">Ver la página de fiesta ${icon.right}</a></p>
  </div>
</section>

<section class="s6" id="coste" aria-label="Lo que cuesta">
  <div class="wrap">
    <p class="kicker">Lo que nos va a costar · máximo 650 €</p>
    <p class="big-price"><span data-count="${TRIP.pp}">${TRIP.pp}</span><small> €</small></p>
    <p class="cost-sub">Por persona y todo incluido: vuelo directo, 7 noches de piso, minibús y trenes, comida, playa, Aquafan, San Marino, tres noches de fiesta, seguro e imprevistos. Solo con mochila.</p>
    <div class="split">
      <div class="split-row"><header><span>Se paga antes del viaje<br><span class="small muted">vuelos + piso</span></span><b>${TRIP.before} €</b></header><div class="bar"><i style="width:${Math.round(TRIP.before / TRIP.pp * 100)}%;background:var(--sea)"></i></div></div>
      <div class="split-row"><header><span>Lo que llevamos para gastar allí<br><span class="small muted">comida, transporte, planes, fiesta</span></span><b>${TRIP.during} €</b></header><div class="bar"><i style="width:${Math.round(TRIP.during / TRIP.pp * 100)}%;background:var(--lagoon)"></i></div></div>
    </div>
    <div class="vs">
      <div><span>Ahorrando al máximo</span><b>≈ ${TRIP.min} €</b></div>
      <div class="on"><span>Recomendado</span><b>≈ ${TRIP.pp} €</b></div>
      <div><span>Más cómodo</span><b>≈ ${fmt(TRIP.max)} €</b></div>
    </div>
    <p class="small muted" style="margin-top:18px">Grupo de 7: ≈ ${fmt(TRIP.group)} €. Vuelos comprobados en Ryanair y piso en Airbnb para nuestras fechas el 17 nov 2026; el resto son estimaciones con precios de 2025–26. El recomendado cabe en 650 € con poco margen: hay que comprar los vuelos pronto.</p>
    <p style="margin-top:22px"><a class="btn" href="presupuesto.html">Ver todos los números ${icon.right}</a></p>
  </div>
</section>

<section class="s7" id="final" data-dark aria-label="El final">
  <div class="s7-img">${img('dusk', 'La costa de Rimini al atardecer', '100vw')}</div>
  <div class="s7-txt">
    <p class="l">Siete amigos.</p>
    <p class="l">Una semana en Italia.</p>
    <p class="s">29 de junio – 6 de julio de 2027. Un vuelo directo, una casa y la Riviera entera por delante. Los vuelos ya están a la venta: solo falta decir que sí.</p>
  </div>
</section>
<section class="go" data-dark aria-label="Explora el plan">
  <div class="wrap">
    <h2 class="h3" style="margin-bottom:18px">Todo el plan, página a página</h2>
    <div class="go-grid">${PAGES.slice(1).map(p => `<a href="${p.href}">${img(p.img, '', '(min-width:720px) 33vw, 50vw')}<span><b>${p.title}</b><small>${p.sub}</small></span></a>`).join('')}</div>
    <div class="pendings"><b>Por decidir entre todos</b><ul>${pending.map(p => `<li>${p}</li>`).join('')}</ul></div>
  </div>
</section>`;

mountPage('inicio', html);

// ---------------- Escena activa + modo noche de la cabecera ----------------
const darkEls = $$('[data-dark]');
const sceneEls = scenes.map(([id]) => document.getElementById(id));
let raf = 0;
function sceneState() {
  raf = 0;
  const probe = 60;
  const isDark = darkEls.some(el => { const r = el.getBoundingClientRect(); return r.top <= probe && r.bottom > probe; });
  document.body.classList.toggle('is-night', isDark);
  let idx = 0;
  sceneEls.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= innerHeight * 0.5) idx = i; });
  $$('[data-scene]').forEach((a, i) => a.classList.toggle('on', i === idx));
  $('[data-scene-name]').textContent = scenes[idx][1];
  $$('.scene-label i b').forEach((b, i) => b.classList.toggle('on', i === idx));
  $('.scene-label').style.opacity = scrollY > innerHeight * 0.5 ? 1 : 0;
}
addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(sceneState); }, { passive: true });
sceneState();

// ---------------- Vídeo de la escena "destino" ----------------
const scrub = createScrub($('[data-stage]'), { desktop: 'video/destino.mp4', mobile: 'video/destino-m.mp4', posterD: 'video/destino.webp', posterM: 'video/destino-m.webp' });

// ---------------- La ruta: una parada por tramo de scroll ----------------
const phs = $$('.route-ph'), rStops = $$('.route-stop'), dots = $$('.route-line li'), rbar = $('[data-routebar]');
let curStop = 0;
const setStop = i => {
  if (i === curStop) return; curStop = i;
  phs.forEach((p, j) => p.classList.toggle('on', j === i));
  rStops.forEach((p, j) => p.classList.toggle('on', j === i));
  dots.forEach((d, j) => d.classList.toggle('on', j <= i));
};

if (reduce) {
  $('.s3-track').style.overflowX = 'auto';
  $('.route').classList.add('static');
} else {
  // ---- Portada: entrada + la foto se convierte en "billete" ----
  gsap.from('.s1-title .l1 span', { yPercent: 105, duration: 1.2, ease: 'expo.out', stagger: 0.06, delay: 0.1 });
  gsap.from('.s1-pre, .s1-title .l2, .s1-sub', { y: 30, opacity: 0, duration: 1, ease: 'power3.out', stagger: .12, delay: 0.55 });
  gsap.from('.s1-media img', { scale: 1.22, duration: 2.6, ease: 'power2.out' });
  const narrow = innerWidth < 720;
  gsap.timeline({ scrollTrigger: { trigger: '.s1', start: 'top top', end: '+=120%', scrub: 0.6, pin: true } })
    .to('.s1-media', { clipPath: narrow ? 'inset(12% 4% 22% 4% round 26px)' : 'inset(10% 7% 18% 7% round 34px)', ease: 'none' }, 0)
    .to('.s1-media img', { scale: 1.12, ease: 'none' }, 0)
    .to('.s1-title', { yPercent: -18, opacity: 0, ease: 'power1.in' }, 0)
    .to('.s1-cue', { opacity: 0, duration: .2 }, 0)
    .to('.s1-ticket', { opacity: 1, y: 0, ease: 'power2.out', duration: .5 }, .45)
    .fromTo('.s1-ticket', { y: 40 }, { y: 0, duration: .5 }, .45);

  // ---- La ruta: fijada; cada parada cambia la foto con fundido y zoom ----
  ScrollTrigger.create({
    trigger: '.route', start: 'top top', end: () => '+=' + innerHeight * (stops.length * 0.75), pin: true, scrub: true,
    onUpdate: self => {
      const p = self.progress;
      rbar.style.transform = `scaleY(${p})`;
      setStop(Math.min(stops.length - 1, Math.floor(p * stops.length)));
      phs.forEach((ph, j) => { ph.style.setProperty('--z', 1.14 - 0.14 * Math.min(1, Math.max(0, p * stops.length - j))); });
    },
  });

  // ---- Destino: el scroll controla el vídeo; textos sincronizados ----
  const caps = $$('.s2-cap'), bars = $$('.s2-rail b'), n = caps.length;
  ScrollTrigger.create({
    trigger: '.s2', start: 'top top', end: '+=480%', pin: true, scrub: true,
    onUpdate: self => {
      const p = self.progress;
      scrub.set(p);
      caps.forEach((c, i) => {
        const a = i / n, b = (i + 1) / n, local = (p - a) / (b - a);
        const o = local < 0 || local > 1 ? 0 : Math.min(1, local * 5, (1 - local) * 5 + (i === n - 1 ? 9 : 0));
        c.style.opacity = o; c.style.transform = `translateY(${(1 - Math.min(1, local * 5)) * 24}px)`;
      });
      bars.forEach((b, i) => { b.style.transform = `scaleX(${Math.min(1, Math.max(0, p * n - i))})`; });
    },
  });

  // ---- El plan: carrusel horizontal fijado ----
  const track = $('.s3-track');
  const dist = () => Math.max(0, track.scrollWidth - innerWidth);
  gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.s3', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.5, invalidateOnRefresh: true, onUpdate: s => { $('[data-s3bar]').style.transform = `scaleX(${s.progress})`; } } });

  // ---- Playas: cada foto se acerca al entrar ----
  $$('.beach').forEach(b => {
    gsap.fromTo($('img', b), { scale: 1.28 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: b, start: 'top bottom', end: 'top top', scrub: true } });
    gsap.from($('.beach-txt', b).children, { y: 40, opacity: 0, stagger: .08, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 35%' } });
  });

  // ---- Fiesta: collage con profundidad ----
  [['.c1', -60], ['.c2', 80], ['.c3', -30]].forEach(([s, y]) => gsap.to(s, { y, ease: 'none', scrollTrigger: { trigger: '.collage', start: 'top bottom', end: 'bottom top', scrub: true } }));
  gsap.from('.s5-title', { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: '.s5', start: 'top 70%' } });

  // ---- Coste: el número cuenta y las barras crecen ----
  const counter = $('[data-count]');
  ScrollTrigger.create({ trigger: '.s6', start: 'top 70%', once: true, onEnter: () => {
    const o = { v: 0 };
    gsap.to(o, { v: TRIP.pp, duration: 1.6, ease: 'power3.out', onUpdate: () => { counter.textContent = Math.round(o.v); } });
    gsap.to('.split-row .bar i', { scaleX: 1, duration: 1.3, ease: 'power3.out', stagger: .15, delay: .3 });
    gsap.from('.vs div', { y: 30, opacity: 0, duration: .8, stagger: .1, delay: .5, ease: 'power3.out' });
  } });

  // ---- Final ----
  gsap.timeline({ scrollTrigger: { trigger: '.s7', start: 'top top', end: '+=100%', scrub: 0.6, pin: true } })
    .fromTo('.s7-img img', { scale: 1.25 }, { scale: 1, ease: 'none' }, 0)
    .from('.s7-txt .l:nth-child(1)', { y: 50, opacity: 0, duration: .3 }, 0.05)
    .from('.s7-txt .l:nth-child(2)', { y: 50, opacity: 0, duration: .3 }, 0.3)
    .from('.s7-txt .s', { y: 30, opacity: 0, duration: .3 }, 0.55);
}
if (reduce) { $$('.split-row .bar i').forEach(i => { i.style.transform = 'scaleX(1)'; }); $$('.s2-cap').forEach(c => { c.style.opacity = 1; }); $('.s1-ticket').style.opacity = 1; }

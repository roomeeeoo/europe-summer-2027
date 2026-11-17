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
  { code: 'LPA', k: 'aerial', city: 'Gran Canaria', when: 'Mar 29 jun · 19:55', p: 'Despegamos los siete. Solo mochila. Escala de una noche en Bérgamo.' },
  { code: 'CFU', k: 'corfu', city: 'Corfú', when: 'Jue 1 jul', p: 'Desayuno en Grecia y ferry a Albania: 30 minutos de mar.' },
  { code: 'SAR', k: 'saranda', city: 'Sarandë', when: '1 – 6 jul · 5 noches', p: 'Nuestra casa toda la semana. Paseo marítimo, playa y fiesta a pie.' },
  { code: '2 JUL', k: 'ksamil2', city: 'Ksamil', when: 'Viernes 2 de julio', p: 'El día marcado: islas a nado, Butrint y primera noche grande.' },
  { code: 'SÁB', k: 'kakome', city: 'Barco privado', when: 'Sábado 3', p: 'Calas sin carretera y snorkel. Por la noche, la noche fuerte.' },
  { code: 'DOM', k: 'blueeye', city: 'Ojo Azul', when: 'Domingo 4', p: 'El manantial azul y Gjirokastër, la ciudad de piedra.' },
  { code: 'LPA', k: 'lekuresi', city: 'Vuelta a casa', when: 'Mar 6 jul · 19:20', p: 'Ferry a Corfú y vuelo por Bérgamo. En casa para cenar.' },
];
const destino = [
  { tag: 'Ksamil', h: 'Agua de Caribe.', p: 'A 25 minutos en bus de nuestra casa. Las islas se cruzan nadando.' },
  { tag: 'Butrint', h: '2.500 años de historia.', p: 'Una ciudad griega y romana escondida en un bosque, por 10 €.' },
  { tag: 'Syri i Kaltër', h: 'El Ojo Azul.', p: 'Un manantial que brota de 50 metros de profundidad. Entrada: 50 céntimos.' },
  { tag: 'Kakome', h: 'Solo en barco.', p: 'Calas sin carretera a media hora del puerto de Sarandë.' },
  { tag: 'Mirror Beach', h: 'Piedra blanca, agua clara.', p: 'Y todo a un bus de distancia. Sin cambiar de casa en toda la semana.' },
  { tag: 'Cada tarde', h: 'Y así acaba cada día.', p: 'Del 29 de junio al 6 de julio de 2027.' },
];
const plan = [
  { k: 'ksamil3', h: 'Playas', p: 'Ksamil, Mirror Beach, Kakome. Turquesa de verdad.', w: '5 playas' },
  { k: 'kakome', h: 'Barco privado', p: 'Un barco solo para los 7, calas y snorkel.', w: '34–50 € cada uno' },
  { k: 'blueeye2', h: 'Ojo Azul', p: 'El manantial más famoso de los Balcanes.', w: '50 céntimos' },
  { k: 'butrint', h: 'Butrint', p: 'Ruinas Patrimonio de la Humanidad entre lago y mar.', w: '≈ 10 €' },
  { k: 'saranda', h: 'Una sola casa', p: 'Cinco noches en el mismo piso. Sin maletas de un lado a otro.', w: '23 € por noche' },
  { k: 'byrek', h: 'Comida', p: 'Byrek a 1 €, gyros a 3 € y pescado a la brasa.', w: '≈ 16 € al día' },
  { k: 'sarandanight', h: 'Fiesta', p: 'Viernes, sábado y lunes en el paseo de Sarandë.', w: '3 noches' },
];
const beaches = [
  { k: 'ksamil1', h: 'Islas de Ksamil', where: 'Ksamil · 25 min en bus', p: 'Llegamos pronto, antes que los barcos, y cruzamos nadando a los islotes.', f: ['Gratis', 'Bus 200 lek', 'Viernes 2'] },
  { k: 'kakome', h: 'Kakome', where: 'Costa de Sarandë', p: 'Solo se llega en barco. Agua tan clara que el barco parece flotar.', f: ['Barco privado', 'Snorkel', 'Sábado 3'] },
  { k: 'ksamil5', h: 'Mirror Beach', where: 'Junto a Ksamil', p: 'Una cala de piedra blanca con menos gente. El último día de playa.', f: ['Gratis', 'Kayak ≈ 10 €', 'Lunes 5'] },
  { k: 'lekuresi', h: 'Lëkurësi', where: 'Sobre Sarandë', p: 'El castillo desde el que se ve toda la bahía y Corfú al atardecer.', f: ['Gratis', '40 min a pie', 'Jueves 1'] },
];
const scenes = [['portada', 'Portada'], ['ruta', 'La ruta'], ['destino', 'El destino'], ['plan', 'El plan'], ['playas', 'Playas'], ['noche', 'Fiesta'], ['coste', 'Lo que cuesta'], ['final', 'El final']];

const html = `
<div class="nightbg" aria-hidden="true"></div>
<nav class="scenes" aria-label="Escenas">${scenes.map(([id, t]) => `<a href="#${id}" data-scene="${id}"><span>${t}</span><i></i></a>`).join('')}</nav>
<div class="scene-label" aria-hidden="true"><span data-scene-name>Portada</span><i>${scenes.map(() => '<b></b>').join('')}</i></div>

<section class="s1" id="portada" data-dark aria-label="Portada">
  <div class="s1-media">${img('ksamil3', 'Agua turquesa en Ksamil', '100vw', false)}</div>
  <div class="s1-title">
    <p class="s1-pre">7 amigos · Gran Canaria → Sarandë</p>
    <h1 aria-label="Europe Summer 2027"><span class="l1">${'ALBANIA'.split('').map(c => `<span>${c}</span>`).join('')}</span><span class="l2">EUROPE SUMMER 2027</span></h1>
    <p class="s1-sub">Un solo sitio. El Caribe de Europa a precio de hace 15 años.</p>
  </div>
  <a class="s1-cue" href="#ruta" aria-label="Empezar">${icon.down}</a>
  <div class="s1-ticket" aria-label="Datos del viaje">
    <div><span>Cuándo</span><b>29 jun – 6 jul</b></div>
    <div><span>Ruta</span><b>LPA → CFU ⛴ SAR</b></div>
    <div><span>Quiénes</span><b>7 amigos</b></div>
    <div><span>Por persona</span><b>≈ ${TRIP.pp} €</b></div>
  </div>
</section>

<section class="route" id="ruta" data-dark aria-label="La ruta">
  <div class="route-bg">${stops.map((s, i) => `<div class="route-ph ${i === 0 ? 'on' : ''}">${img(s.k, '', '100vw')}</div>`).join('')}</div>
  <div class="route-ui wrap">
    <p class="kicker">La semana · una sola casa</p>
    <div class="route-codes">${stops.map((s, i) => `<div class="route-stop ${i === 0 ? 'on' : ''}"><b>${s.code}</b><h3>${s.city}</h3><span>${s.when}</span><p>${s.p}</p></div>`).join('')}</div>
    <ol class="route-line" aria-hidden="true"><i data-routebar></i>${stops.map((s, i) => `<li class="${i === 0 ? 'on' : ''}"><span>${s.code === '2 JUL' ? 'KSA' : s.code}</span></li>`).join('')}</ol>
  </div>
</section>

<section class="s2" id="destino" data-dark aria-label="El destino">
  <div class="stage" data-stage></div>
  <div class="s2-intro"><p class="kicker">Sarandë y alrededores</p></div>
  <div class="s2-caps">${destino.map(d => `<div class="s2-cap"><small>${d.tag}</small><h3>${d.h}</h3><p>${d.p}</p></div>`).join('')}</div>
  <div class="s2-rail" aria-hidden="true">${destino.map(() => '<i><b></b></i>').join('')}</div>
</section>

<section class="s3" id="plan" aria-label="El plan">
  <div class="s3-head"><p class="kicker">El plan</p><h2 class="h2">Ocho días,<br>cero aburrimiento.</h2></div>
  <div class="s3-track">${plan.map(e => `<article class="exp">${img(e.k, '', '(min-width:1040px) 380px, 76vw')}<div><h3>${e.h}</h3><p>${e.p}</p><span class="where">${e.w}</span></div></article>`).join('')}</div>
  <div class="s3-count"><span>Desliza</span><i><b data-s3bar></b></i><span>${plan.length} planes</span></div>
</section>

<div id="playas">
  <div class="s4-intro"><div class="wrap"><p class="kicker">Las playas</p><h2 class="h2">Donde nos<br>vamos a bañar.</h2><p class="lead">Todas a un bus, un barco o un paseo de casa.</p></div></div>
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
        <h2 class="s5-title">Y de noche,<span>Sarandë.</span></h2>
        <p class="lead" style="color:#C9D8E2">Más de veinte bares-club seguidos en el paseo marítimo, abiertos hasta las cuatro. Casi todos sin entrada, la cerveza a 2–3 € y gente de toda Europa.</p>
      </div>
      <div class="collage">
        <figure class="c1">${img('sarandanight', 'Paseo marítimo de Sarandë de noche', '60vw')}<figcaption>Sarandë de noche</figcaption></figure>
        <figure class="c2">${img('club', 'Ambiente de discoteca con láseres', '50vw')}<figcaption>Foto ilustrativa</figcaption></figure>
        <figure class="c3">${img('sarandanight2', 'Sarandë de noche desde la playa', '55vw')}<figcaption>El paseo</figcaption></figure>
      </div>
    </div>
    <div class="nights">
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 1 · viernes 2 jul</span><div class="day">El día clave</div><p>Venimos de Ksamil. Pre-copas en el piso y pub crawl por el paseo: la mejor forma de conocer gente.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 2 · sábado 3 jul</span><div class="day">La noche fuerte</div><p>El sábado es el día con más ambiente en Sarandë. Orange, Bluz, Lost Seaside y las terrazas.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 3 · lunes 5 jul</span><div class="day">La despedida</div><p>Última noche en el paseo después del barco al atardecer. Sin pasarse: el ferry sale temprano.</p></div>
    </div>
    <div class="agechips" aria-label="Edad mínima">
      <span class="agechip"><b class="a18">18+</b>Todos somos mayores de edad</span>
      <span class="agechip"><b class="a18">0–10 €</b>Entrada habitual</span>
      <span class="agechip"><b class="a18">A pie</b>Todo a 5–10 min de casa</span>
    </div>
    <p style="margin-top:26px"><a class="btn" href="fiesta.html">Ver la página de fiesta ${icon.right}</a></p>
  </div>
</section>

<section class="s6" id="coste" aria-label="Lo que cuesta">
  <div class="wrap">
    <p class="kicker">Lo que nos va a costar</p>
    <p class="big-price"><span data-count="${TRIP.pp}">${TRIP.pp}</span><small> €</small></p>
    <p class="cost-sub">Por persona y todo incluido: 4 vuelos, 5 noches en Sarandë y 2 de paso, dos ferris, buses, comida, barco, excursiones, tres noches de fiesta, seguro e imprevistos. Solo con mochila.</p>
    <div class="split">
      <div class="split-row"><header><span>Se paga antes del viaje<br><span class="small muted">vuelos + alojamientos</span></span><b>${TRIP.before} €</b></header><div class="bar"><i style="width:${Math.round(TRIP.before / TRIP.pp * 100)}%;background:var(--sea)"></i></div></div>
      <div class="split-row"><header><span>Lo que llevamos para gastar allí<br><span class="small muted">comida, ferry, buses, barco, fiesta</span></span><b>${TRIP.during} €</b></header><div class="bar"><i style="width:${Math.round(TRIP.during / TRIP.pp * 100)}%;background:var(--lagoon)"></i></div></div>
    </div>
    <div class="vs">
      <div><span>Ahorrando al máximo</span><b>≈ ${TRIP.min} €</b></div>
      <div class="on"><span>Recomendado</span><b>≈ ${TRIP.pp} €</b></div>
      <div><span>Más cómodo</span><b>≈ ${fmt(TRIP.max)} €</b></div>
    </div>
    <p class="small muted" style="margin-top:18px">Grupo de 7: ≈ ${fmt(TRIP.group)} €. Vuelos comprobados en Ryanair y alojamientos en Airbnb para nuestras fechas el 17 nov 2026; el resto son estimaciones con precios de 2025–26.</p>
    <p style="margin-top:22px"><a class="btn" href="presupuesto.html">Ver todos los números ${icon.right}</a></p>
  </div>
</section>

<section class="s7" id="final" data-dark aria-label="El final">
  <div class="s7-img">${img('himarasunset', 'Atardecer en la Riviera albanesa', '100vw')}</div>
  <div class="s7-txt">
    <p class="l">Siete amigos.</p>
    <p class="l">Un verano que no se repite.</p>
    <p class="s">29 de junio – 6 de julio de 2027. Una casa, siete amigos y el mar más azul de Europa. Los vuelos ya están a la venta: solo falta decir que sí.</p>
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

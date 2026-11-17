// Estructura común de todas las páginas: cabecera, menú, barra de progreso, "siguiente página" y pie.
import '@fontsource-variable/archivo/wdth.css';
import '../styles/base.css';
import { icon, mark } from './icons.js';
import { img } from './ui.js';

export const PAGES = [
  { id: 'inicio', href: './', title: 'Inicio', sub: 'La película del viaje', img: 'ksamil3' },
  { id: 'destino', href: 'destino.html', title: 'El destino', sub: 'Por qué Albania gana a 11 destinos', img: 'aerial' },
  { id: 'viaje', href: 'viaje.html', title: 'Vuelos y casas', sub: 'Cómo llegamos y dónde dormimos', img: 'corfu' },
  { id: 'itinerario', href: 'itinerario.html', title: 'Itinerario', sub: 'Los 8 días, uno a uno', img: 'butrint2' },
  { id: 'aventuras', href: 'aventuras.html', title: 'Aventuras', sub: 'Calas, barcos, Ojo Azul y comida', img: 'gjipe' },
  { id: 'fiesta', href: 'fiesta.html', title: 'Fiesta', sub: 'Tres noches y dónde salir', img: 'sarandanight' },
  { id: 'presupuesto', href: 'presupuesto.html', title: 'Presupuesto', sub: 'Lo que cuesta, sin sorpresas', img: 'ksamil4' },
  { id: 'info', href: 'info.html', title: 'Info útil', sub: 'Papeles, dinero y consejos', img: 'himara' },
];

const header = current => `
<a class="skip" href="#main">Saltar al contenido</a>
<div class="progress" aria-hidden="true"></div>
<header class="top" data-top>
  <a class="mark" href="./" aria-label="Europe Summer 2027, inicio">${mark}<span>Europe<br>Summer 27</span></a>
  <button class="menu-btn" type="button" data-menu-open aria-expanded="false" aria-controls="menu">${icon.menu}<span>Menú</span></button>
</header>
<div class="menu" id="menu" data-menu role="dialog" aria-modal="true" aria-label="Páginas del viaje">
  <div class="menu-head">
    <span class="mark">${mark}<span>Europe<br>Summer 27</span></span>
    <button class="menu-btn" type="button" data-menu-close>${icon.close}<span>Cerrar</span></button>
  </div>
  <nav>
    ${PAGES.map((p, i) => `<a href="${p.href}" ${p.id === current ? 'aria-current="page"' : ''} style="transition-delay:${60 + i * 40}ms">${img(p.img, '', '96px')}<span><b>${p.title}</b><span>${p.sub}</span></span>${icon.right}</a>`).join('')}
  </nav>
  <div class="menu-foot"><span>29 jun – 6 jul 2027 · Gran Canaria → Albania</span><span>Hecho por Romeo</span></div>
</div>`;

const nextBlock = current => {
  const i = PAGES.findIndex(p => p.id === current);
  const n = PAGES[(i + 1) % PAGES.length];
  return `<a class="next" href="${n.href}">${img(n.img, '', '100vw')}<div class="wrap"><span>Sigue: ${n.sub} ${icon.right}</span><p class="xl" style="font-size:clamp(2.6rem,10.5vw,9rem)">${n.title}</p></div></a>`;
};

const footer = () => `
<footer class="foot"><div class="wrap">
  <div class="row"><nav aria-label="Páginas">${PAGES.map(p => `<a href="${p.href}">${p.title}</a>`).join('')}</nav></div>
  <div class="row" style="margin-top:18px;border-top:1px solid rgba(255,255,255,.1);padding-top:16px">
    <span>Europe Summer 2027 · Riviera albanesa · 7 amigos · precios consultados el 17 nov 2026</span>
    <span class="by">Hecho por Romeo</span>
  </div>
</div></footer>`;

export function mountPage(current, mainHtml, { dark = false } = {}) {
  document.body.classList.toggle('night', dark);
  document.getElementById('app').innerHTML = header(current) + `<main id="main">${mainHtml}</main>` + nextBlock(current) + footer();
  wireChrome();
}

function wireChrome() {
  const top = document.querySelector('[data-top]');
  const menu = document.querySelector('[data-menu]');
  const openBtn = document.querySelector('[data-menu-open]');
  const open = () => { menu.classList.add('open'); openBtn.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; menu.querySelector('nav a')?.focus(); };
  const close = () => { menu.classList.remove('open'); openBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; openBtn.focus(); };
  openBtn.addEventListener('click', open);
  menu.querySelector('[data-menu-close]').addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) close(); });

  const bar = document.querySelector('.progress');
  let last = scrollY, ticking = false;
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    const solidFrom = document.querySelector('[data-solid-after]');
    const threshold = solidFrom ? solidFrom.offsetTop + solidFrom.offsetHeight - 80 : innerHeight * 0.6;
    top.classList.toggle('solid', y > threshold);
    top.classList.toggle('on-dark', document.body.classList.contains('night') || document.body.classList.contains('is-night'));
    top.classList.toggle('away', y > last + 6 && y > innerHeight);
    if (y < last - 6) top.classList.remove('away');
    document.body.classList.toggle('hdr-away', top.classList.contains('away'));
    last = y; ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Aparición suave (una vez)
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));

  // Chips de sección: marcar la activa
  const chips = [...document.querySelectorAll('.chips-nav a')];
  if (chips.length) {
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      chips.forEach(c => c.classList.toggle('on', c.getAttribute('href') === '#' + e.target.id));
      const a = chips.find(c => c.classList.contains('on'));
      a?.parentElement.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
    }), { rootMargin: '-40% 0px -55% 0px' });
    chips.forEach(c => { const t = document.querySelector(c.getAttribute('href')); if (t) so.observe(t); });
  }
}

// Cabecera de página interna con foto y zoom suave al hacer scroll
export const pageHero = (key, kicker, title, lead) => `
<section class="phero" data-solid-after>
  <div class="phero-img">${img(key, '', '100vw', false)}</div>
  <div class="wrap">
    <p class="kicker">${kicker}</p>
    <h1 class="xl" style="font-size:clamp(2.6rem,10.5vw,9rem)">${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </div>
</section>`;

export async function heroMotion() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  const im = document.querySelector('.phero-img img');
  if (!im) return;
  gsap.fromTo(im, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: 'power3.out' });
  gsap.to('.phero-img', { yPercent: 22, ease: 'none', scrollTrigger: { trigger: '.phero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.from('.phero .wrap > *', { y: 40, opacity: 0, duration: 1, stagger: .12, ease: 'power3.out', delay: .15 });
}

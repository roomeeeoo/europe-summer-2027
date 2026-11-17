import '../styles/pages.css';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { status, head } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { tips, timeline, links, keyFacts } from '../data/trip.js';
import credits from '../data/credits.json';

const tipIcon = { 'Documentación': icon.id, 'Dinero': icon.card, 'Seguridad': icon.shield, 'Salud': icon.sun, 'Equipaje': icon.bag, 'Ahorro': icon.piggy };
const checks = [
  'Precio real de 7 plazas en cada vuelo de Ryanair',
  'Horarios del ferry Corfú–Sarandë 2027',
  'Horario del bus Himarë–Tirana en verano 2027',
  'Días del pub crawl de Sarandë',
  'Camas reales de cada piso para 7 adultos',
  'Hotel en Corfú para el 30 de junio',
  'Seguro con cobertura de conexiones perdidas',
];

const html = `
${pageHero('himara', 'Página 8 · Info útil', 'Antes de salir', 'Papeles, dinero, seguridad, qué llevar y el calendario para reservar a tiempo.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#claves">Claves</a><a href="#consejos">Consejos</a><a href="#calendario">Calendario</a><a href="#comprobar">Comprobar</a><a href="#enlaces">Enlaces</a></div></nav>

<section class="sec" id="claves"><div class="wrap">
  ${head('Lo imprescindible', 'Cinco cosas que no se pueden olvidar.', '')}
  <ul class="agelist">${keyFacts.map(f => `<li class="rv"><span class="v v-duda">${icon.alert}</span><div>${f}</div></li>`).join('')}</ul>
</div></section>

<section class="sec tint" id="consejos"><div class="wrap">
  ${head('Consejos', 'Documentación, dinero y seguridad.', 'Recomendaciones de Exteriores (actualizadas nov 2026) y de viajeros.')}
  <div class="tips">${tips.map(t => `<div class="tip rv"><h3>${tipIcon[t.t] || icon.info}${t.t}</h3><ul>${t.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}</div>
</div></section>

<section class="sec stone" id="calendario"><div class="wrap">
  ${head('Calendario', 'Qué reservar y cuándo.', '')}
  <ol class="calendar">${timeline.map(t => `<li class="rv"><div><b>${t.when}</b><p>${t.what}</p></div></li>`).join('')}</ol>
</div></section>

<section class="sec" id="comprobar"><div class="wrap">
  ${head('Pendiente de comprobar', 'Antes de pagar nada.', 'Cosas que en noviembre de 2026 aún no se pueden confirmar.')}
  <ul class="rows">${checks.map(c => `<li><span>${c}</span>${status('pend')}</li>`).join('')}</ul>
</div></section>

<section class="sec tint" id="enlaces"><div class="wrap">
  ${head('Enlaces', 'Webs útiles.', '')}
  <ul class="linklist">${links.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener"><span>${t}</span>${icon.ext}</a></li>`).join('')}</ul>
  <details style="margin-top:40px"><summary style="cursor:pointer;font-weight:700;min-height:44px;display:flex;align-items:center">Créditos de las ${credits.length} fotos</summary>
    <ul class="credits">${credits.map(c => `<li><a href="${c.source}" target="_blank" rel="noopener">${c.key}</a> · ${c.author} · ${c.license}</li>`).join('')}</ul>
    <p class="small muted">Fotos de Wikimedia Commons con licencias Creative Commons o dominio público, recortadas y convertidas a WebP; el vídeo de la portada está montado con estas fotos. Mapa © colaboradores de OpenStreetMap.</p>
  </details>
</div></section>`;

mountPage('info', html);
heroMotion();

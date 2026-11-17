import '../styles/pages.css';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { status, head, eur } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { scenarios, TRIP } from '../data/trip.js';

const colors = ['#12A6B5', '#FFC845', '#06324F', '#5FC7C9', '#E07A1F', '#C9922E', '#E1262D', '#8FAEC0', '#4B5D73', '#B8C7D1', '#7A3E9D', '#2E8B57'];
const rec = scenarios.rows.map(r => [r[0], r[2]]);
const recTotal = rec.reduce((a, [, v]) => a + v, 0);
const n = v => eur(v);

const html = `
${pageHero('beach3', 'Página 7 · Presupuesto', 'Lo que cuesta', 'Todos los gastos del viaje, por persona y para el grupo de 7. Sin calculadoras: los números ya están hechos.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#resumen">Resumen</a><a href="#desglose">Desglose</a><a href="#escenarios">Escenarios</a><a href="#pagos">Cuándo se paga</a><a href="#ahorro">Ahorrar más</a></div></nav>

<section class="sec" id="resumen"><div class="wrap">
  ${head('Resumen', `Unos ${TRIP.pp} € por persona.`, 'Escenario recomendado, solo con mochila, todo incluido: 8 días, vuelo directo, 7 noches de piso, minibús y trenes, Aquafan, San Marino, tres noches de fiesta, seguro e imprevistos. Cabe en el máximo de 650 €.')}
  <div class="kpis">
    <div class="kpi main rv"><span>Recomendado por persona</span><b>${n(TRIP.pp)}</b><span>${n(TRIP.group)} para los 7</span></div>
    <div class="kpi rv"><span>Ahorro máximo</span><b>${n(TRIP.min)}</b></div>
    <div class="kpi rv"><span>Más cómodo</span><b>${n(TRIP.max)}</b></div>
    <div class="kpi rv"><span>Por día</span><b>≈ 80 €</b></div>
  </div>
  <div class="grid-2" style="margin-top:22px">
    <div class="cmp on rv"><span class="small">Se paga antes del viaje</span><p class="price-big">${n(TRIP.before)}</p><p class="small" style="margin:6px 0 0">Vuelos (170 €) y piso (150 €). El piso tiene cancelación gratuita; los vuelos no.</p></div>
    <div class="cmp rv"><span class="small">Llevamos para gastar allí</span><p class="price-big">${n(TRIP.during)}</p><p class="small muted" style="margin:6px 0 0">Comida, minibús y trenes, tasa turística, playa, entradas, fiesta, seguro e imprevistos.</p></div>
  </div>
</div></section>

<section class="sec tint" id="desglose"><div class="wrap">
  ${head('Desglose', `En qué se van los ${TRIP.pp} €.`, '')}
  <div class="stack rv" aria-hidden="true">${rec.map(([k, v], i) => v ? `<i style="width:${(v / recTotal) * 100}%;background:${colors[i]}" title="${k}"></i>` : '').join('')}</div>
  <div class="stack-legend">${rec.filter(([, v]) => v).map(([k, v]) => `<span><span><i style="background:${colors[rec.findIndex(r => r[0] === k)]}"></i>${k}</span><b>${n(v)}</b></span>`).join('')}</div>
  <div class="grid-2" style="margin-top:34px">
    <div class="tip rv"><h3>${icon.people}Compartido (÷ 7)</h3><ul><li>Piso de Rimini (1.050 €)</li><li>Minibús de la primera noche (≈ 180–260 €)</li><li>Sombrillas y pedalò</li><li>Bote del súper (≈ 30 € cada uno)</li></ul></div>
    <div class="tip rv"><h3>${icon.id}Individual</h3><ul><li>Vuelos y maleta, si alguien la quiere</li><li>Trenes, Metromare y bus a San Marino</li><li>Entradas (Aquafan, clubs)</li><li>Copas y comidas fuera</li><li>Tasa turística y seguro de viaje</li></ul></div>
  </div>
</div></section>

<section class="sec" id="escenarios"><div class="wrap">
  ${head('Escenarios', 'Ahorro, recomendado y cómodo.', 'Desliza la tabla en el móvil.')}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:560px">
    <thead><tr><th scope="col">€ por persona</th>${scenarios.cols.map((c, i) => `<th scope="col" class="${i === 1 ? 'hl' : ''}">${c}</th>`).join('')}</tr></thead>
    <tbody>${scenarios.rows.map(r => `<tr><th scope="row" style="font-weight:600">${r[0]}</th>${r.slice(1).map((v, i) => `<td class="${i === 1 ? 'hl' : ''}">${n(v)}</td>`).join('')}</tr>`).join('')}</tbody>
    <tfoot><tr><td>Total por persona</td>${scenarios.totals.map((v, i) => `<td class="${i === 1 ? 'hl' : ''}">${n(v)}</td>`).join('')}</tr>
    <tr><td>Grupo de 7</td>${scenarios.totals.map((v, i) => `<td class="${i === 1 ? 'hl' : ''}">${n(v * 7)}</td>`).join('')}</tr></tfoot>
  </table></div>
  <div class="grid-3" style="margin-top:26px">
    <div class="cmp rv"><span class="small">Ahorro máximo</span><p class="small" style="margin:8px 0 0">Vuelos comprados ya, piso de Cattolica (830 €, sin cancelación gratuita), cocinar casi siempre, playa libre, solo San Marino y fiesta sin club grande.</p></div>
    <div class="cmp on rv"><span class="small">Recomendado</span><p class="small" style="margin:8px 0 0">El piso de Rimini, Aquafan y San Marino, sombrilla algún día, un club grande y dos noches de bares.</p></div>
    <div class="cmp rv"><span class="small">Más cómodo</span><p class="small" style="margin:8px 0 0">Hotel Jana con desayuno (1.434 €), más comidas fuera, sombrilla diaria, Aquafan y Mirabilandia y dos clubs grandes. Se pasa de 650 €.</p></div>
  </div>
  <p class="cap">${status('ok')} Vuelos y alojamientos con precios de Ryanair y Airbnb para nuestras fechas (17 nov 2026). ${status('est')} El resto, estimado con precios de 2025–26.</p>
</div></section>

<section class="sec stone" id="pagos"><div class="wrap">
  ${head('Cuándo se paga', 'Poco a poco.', 'Ahorrando desde diciembre, son unos 90 € al mes por persona.')}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:480px">
    <thead><tr><th scope="col">Cuándo</th><th scope="col">Qué</th><th scope="col" class="hl">Por persona</th></tr></thead>
    <tbody>
      <tr><td class="l">Dic 2026</td><td class="l">Los 2 vuelos</td><td class="hl">≈ 170 €</td></tr>
      <tr><td class="l">Dic 2026 (se paga después)</td><td class="l">Piso con cancelación gratuita</td><td class="hl">≈ 150 €</td></tr>
      <tr><td class="l">Abr–may 2027</td><td class="l">Seguro de viaje</td><td class="hl">≈ 15 €</td></tr>
      <tr><td class="l">Junio 2027</td><td class="l">Dinero para allí</td><td class="hl">≈ 309 €</td></tr>
    </tbody></table></div>
</div></section>

<section class="sec" id="ahorro"><div class="wrap">
  ${head('Ahorrar más', 'Cómo bajar de 550 €.', '')}
  <div class="grid-2">
    <div class="tip rv"><h3>${icon.piggy}Trucos</h3><ul><li>Piso de Cattolica en vez de Rimini: −31 €</li><li>Solo San Marino (sin Aquafan): −25 €</li><li>Fiesta sin club grande: −25 €</li><li>Playa libre siempre: −10 €</li><li>Comprar los vuelos ya: −10 €</li><li><b>Resultado: ≈ 543 €</b></li></ul></div>
    <div class="tip rv"><h3>${icon.alert}Ojo</h3><ul><li>El recomendado cabe en 650 € por solo 6 €: si los vuelos suben, hay que recortar en fiesta o actividades.</li><li>7 plazas al precio más bajo puede que no queden: comprar pronto.</li><li>Casi todos los precios de Rimini son estimados (2025–26): trenes, minibús y clubs de 2027 aún no están publicados.</li></ul></div>
  </div>
</div></section>`;

mountPage('presupuesto', html);
heroMotion();

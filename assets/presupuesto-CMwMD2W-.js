import{A as r,i as d,p,h as o,T as l,b as n,m,j as v,c as u}from"./trip-DOfB1fXw.js";/* empty css              */const c=["#12A6B5","#FFC845","#06324F","#5FC7C9","#E07A1F","#C9922E","#E1262D","#8FAEC0","#4B5D73","#B8C7D1","#7A3E9D","#2E8B57"],t=r.rows.map(s=>[s[0],s[2]]),h=t.reduce((s,[,a])=>s+a,0),i=s=>u(s),b=`
${p("beach3","Página 7 · Presupuesto","Lo que cuesta","Todos los gastos del viaje, por persona y para el grupo de 7. Sin calculadoras: los números ya están hechos.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#resumen">Resumen</a><a href="#desglose">Desglose</a><a href="#escenarios">Escenarios</a><a href="#pagos">Cuándo se paga</a><a href="#ahorro">Ahorrar más</a></div></nav>

<section class="sec" id="resumen"><div class="wrap">
  ${o("Resumen",`Unos ${l.pp} € por persona.`,"Escenario recomendado, solo con mochila, todo incluido: 8 días, vuelo directo, 7 noches de piso, minibús y trenes, Aquafan, San Marino, tres noches de fiesta, seguro e imprevistos. Cabe en el máximo de 650 €.")}
  <div class="kpis">
    <div class="kpi main rv"><span>Recomendado por persona</span><b>${i(l.pp)}</b><span>${i(l.group)} para los 7</span></div>
    <div class="kpi rv"><span>Ahorro máximo</span><b>${i(l.min)}</b></div>
    <div class="kpi rv"><span>Más cómodo</span><b>${i(l.max)}</b></div>
    <div class="kpi rv"><span>Por día</span><b>≈ 80 €</b></div>
  </div>
  <div class="grid-2" style="margin-top:22px">
    <div class="cmp on rv"><span class="small">Se paga antes del viaje</span><p class="price-big">${i(l.before)}</p><p class="small" style="margin:6px 0 0">Vuelos (170 €) y piso (150 €). El piso tiene cancelación gratuita; los vuelos no.</p></div>
    <div class="cmp rv"><span class="small">Llevamos para gastar allí</span><p class="price-big">${i(l.during)}</p><p class="small muted" style="margin:6px 0 0">Comida, minibús y trenes, tasa turística, playa, entradas, fiesta, seguro e imprevistos.</p></div>
  </div>
</div></section>

<section class="sec tint" id="desglose"><div class="wrap">
  ${o("Desglose",`En qué se van los ${l.pp} €.`,"")}
  <div class="stack rv" aria-hidden="true">${t.map(([s,a],e)=>a?`<i style="width:${a/h*100}%;background:${c[e]}" title="${s}"></i>`:"").join("")}</div>
  <div class="stack-legend">${t.filter(([,s])=>s).map(([s,a])=>`<span><span><i style="background:${c[t.findIndex(e=>e[0]===s)]}"></i>${s}</span><b>${i(a)}</b></span>`).join("")}</div>
  <div class="grid-2" style="margin-top:34px">
    <div class="tip rv"><h3>${d.people}Compartido (÷ 7)</h3><ul><li>Piso de Rimini (1.050 €)</li><li>Minibús de la primera noche (≈ 180–260 €)</li><li>Sombrillas y pedalò</li><li>Bote del súper (≈ 30 € cada uno)</li></ul></div>
    <div class="tip rv"><h3>${d.id}Individual</h3><ul><li>Vuelos y maleta, si alguien la quiere</li><li>Trenes, Metromare y bus a San Marino</li><li>Entradas (Aquafan, clubs)</li><li>Copas y comidas fuera</li><li>Tasa turística y seguro de viaje</li></ul></div>
  </div>
</div></section>

<section class="sec" id="escenarios"><div class="wrap">
  ${o("Escenarios","Ahorro, recomendado y cómodo.","Desliza la tabla en el móvil.")}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:560px">
    <thead><tr><th scope="col">€ por persona</th>${r.cols.map((s,a)=>`<th scope="col" class="${a===1?"hl":""}">${s}</th>`).join("")}</tr></thead>
    <tbody>${r.rows.map(s=>`<tr><th scope="row" style="font-weight:600">${s[0]}</th>${s.slice(1).map((a,e)=>`<td class="${e===1?"hl":""}">${i(a)}</td>`).join("")}</tr>`).join("")}</tbody>
    <tfoot><tr><td>Total por persona</td>${r.totals.map((s,a)=>`<td class="${a===1?"hl":""}">${i(s)}</td>`).join("")}</tr>
    <tr><td>Grupo de 7</td>${r.totals.map((s,a)=>`<td class="${a===1?"hl":""}">${i(s*7)}</td>`).join("")}</tr></tfoot>
  </table></div>
  <div class="grid-3" style="margin-top:26px">
    <div class="cmp rv"><span class="small">Ahorro máximo</span><p class="small" style="margin:8px 0 0">Vuelos comprados ya, piso de Cattolica (830 €, sin cancelación gratuita), cocinar casi siempre, playa libre, solo San Marino y fiesta sin club grande.</p></div>
    <div class="cmp on rv"><span class="small">Recomendado</span><p class="small" style="margin:8px 0 0">El piso de Rimini, Aquafan y San Marino, sombrilla algún día, un club grande y dos noches de bares.</p></div>
    <div class="cmp rv"><span class="small">Más cómodo</span><p class="small" style="margin:8px 0 0">Hotel Jana con desayuno (1.434 €), más comidas fuera, sombrilla diaria, Aquafan y Mirabilandia y dos clubs grandes. Se pasa de 650 €.</p></div>
  </div>
  <p class="cap">${n("ok")} Vuelos y alojamientos con precios de Ryanair y Airbnb para nuestras fechas (17 nov 2026). ${n("est")} El resto, estimado con precios de 2025–26.</p>
</div></section>

<section class="sec stone" id="pagos"><div class="wrap">
  ${o("Cuándo se paga","Poco a poco.","Ahorrando desde diciembre, son unos 90 € al mes por persona.")}
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
  ${o("Ahorrar más","Cómo bajar de 550 €.","")}
  <div class="grid-2">
    <div class="tip rv"><h3>${d.piggy}Trucos</h3><ul><li>Piso de Cattolica en vez de Rimini: −31 €</li><li>Solo San Marino (sin Aquafan): −25 €</li><li>Fiesta sin club grande: −25 €</li><li>Playa libre siempre: −10 €</li><li>Comprar los vuelos ya: −10 €</li><li><b>Resultado: ≈ 543 €</b></li></ul></div>
    <div class="tip rv"><h3>${d.alert}Ojo</h3><ul><li>El recomendado cabe en 650 € por solo 6 €: si los vuelos suben, hay que recortar en fiesta o actividades.</li><li>7 plazas al precio más bajo puede que no queden: comprar pronto.</li><li>Casi todos los precios de Rimini son estimados (2025–26): trenes, minibús y clubs de 2027 aún no están publicados.</li></ul></div>
  </div>
</div></section>`;m("presupuesto",b);v();

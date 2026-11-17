import{A as r,i as d,p,h as i,T as o,b as c,m as v,j as m,c as u}from"./trip-Dz351KtT.js";/* empty css              */const n=["#12A6B5","#FFC845","#06324F","#5FC7C9","#E07A1F","#C9922E","#E1262D","#8FAEC0","#4B5D73","#B8C7D1"],t=r.rows.map(s=>[s[0],s[2]]),h=t.reduce((s,[,a])=>s+a,0),e=s=>u(s),b=`
${p("ksamil4","Página 7 · Presupuesto","Lo que cuesta","Todos los gastos del viaje, por persona y para el grupo de 7. Sin calculadoras: los números ya están hechos.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#resumen">Resumen</a><a href="#desglose">Desglose</a><a href="#escenarios">Escenarios</a><a href="#pagos">Cuándo se paga</a><a href="#ahorro">Ahorrar más</a></div></nav>

<section class="sec" id="resumen"><div class="wrap">
  ${i("Resumen",`Unos ${o.pp} € por persona.`,"Escenario recomendado, solo con mochila, todo incluido: 8 días, 4 vuelos, 5 noches en Sarandë y 2 de paso, dos ferris, barco, excursiones, tres noches de fiesta, seguro e imprevistos.")}
  <div class="kpis">
    <div class="kpi main rv"><span>Recomendado por persona</span><b>${e(o.pp)}</b><span>${e(o.group)} para los 7</span></div>
    <div class="kpi rv"><span>Ahorro máximo</span><b>${e(o.min)}</b></div>
    <div class="kpi rv"><span>Más cómodo</span><b>${e(o.max)}</b></div>
    <div class="kpi rv"><span>Por día</span><b>≈ 123 €</b></div>
  </div>
  <div class="grid-2" style="margin-top:22px">
    <div class="cmp on rv"><span class="small">Se paga antes del viaje</span><p class="price-big">${e(o.before)}</p><p class="small" style="margin:6px 0 0">Vuelos (340 €) y alojamientos (183 €). Todo con cancelación gratuita menos los vuelos.</p></div>
    <div class="cmp rv"><span class="small">Llevamos para gastar allí</span><p class="price-big">${e(o.during)}</p><p class="small muted" style="margin:6px 0 0">Comida, ferry, buses, barco, entradas, fiesta, eSIM, seguro e imprevistos. Mejor en efectivo (lek).</p></div>
  </div>
</div></section>

<section class="sec tint" id="desglose"><div class="wrap">
  ${i("Desglose",`En qué se van los ${o.pp} €.`,"")}
  <div class="stack rv" aria-hidden="true">${t.map(([s,a],l)=>a?`<i style="width:${a/h*100}%;background:${n[l]}" title="${s}"></i>`:"").join("")}</div>
  <div class="stack-legend">${t.filter(([,s])=>s).map(([s,a])=>`<span><span><i style="background:${n[t.findIndex(l=>l[0]===s)]}"></i>${s}</span><b>${e(a)}</b></span>`).join("")}</div>
  <div class="grid-2" style="margin-top:34px">
    <div class="tip rv"><h3>${d.people}Compartido (÷ 7)</h3><ul><li>Casa de Sarandë y alojamientos de Bérgamo y Corfú</li><li>Barco privado (240–350 €)</li><li>Taxis (2 coches)</li><li>Bote del súper (≈ 25 € cada uno)</li></ul></div>
    <div class="tip rv"><h3>${d.id}Individual</h3><ul><li>Vuelos y maleta, si alguien la quiere</li><li>Ferry y buses</li><li>Entradas (Butrint, Ojo Azul)</li><li>Copas y comidas fuera</li><li>eSIM y seguro de viaje</li></ul></div>
  </div>
</div></section>

<section class="sec" id="escenarios"><div class="wrap">
  ${i("Escenarios","Ahorro, recomendado y cómodo.","Desliza la tabla en el móvil.")}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:560px">
    <thead><tr><th scope="col">€ por persona</th>${r.cols.map((s,a)=>`<th scope="col" class="${a===1?"hl":""}">${s}</th>`).join("")}</tr></thead>
    <tbody>${r.rows.map(s=>`<tr><th scope="row" style="font-weight:600">${s[0]}</th>${s.slice(1).map((a,l)=>`<td class="${l===1?"hl":""}">${e(a)}</td>`).join("")}</tr>`).join("")}</tbody>
    <tfoot><tr><td>Total por persona</td>${r.totals.map((s,a)=>`<td class="${a===1?"hl":""}">${e(s)}</td>`).join("")}</tr>
    <tr><td>Grupo de 7</td>${r.totals.map((s,a)=>`<td class="${a===1?"hl":""}">${e(s*7)}</td>`).join("")}</tr></tfoot>
  </table></div>
  <div class="grid-3" style="margin-top:26px">
    <div class="cmp rv"><span class="small">Ahorro máximo</span><p class="small" style="margin:8px 0 0">Vuelos comprados ya, Villa Luiza en Sarandë (324 €), hotel barato en Corfú, comer de súper y street food, sin barco privado (barco compartido), dos noches de fiesta suaves.</p></div>
    <div class="cmp on rv"><span class="small">Recomendado</span><p class="small" style="margin:8px 0 0">Los alojamientos elegidos, barco privado, Butrint y Ojo Azul, dos cenas de pescado, tres noches de fiesta.</p></div>
    <div class="cmp rv"><span class="small">Más cómodo</span><p class="small" style="margin:8px 0 0">Maleta de 10 kg, Villa Sunrise Panorama en Sarandë, comer fuera, rafting o día en Corfú, más fiesta.</p></div>
  </div>
  <p class="cap">${c("ok")} Vuelos y alojamientos con precios de Ryanair y Airbnb para nuestras fechas (17 nov 2026). ${c("est")} El resto, estimado con precios de 2025–26.</p>
</div></section>

<section class="sec stone" id="pagos"><div class="wrap">
  ${i("Cuándo se paga","Poco a poco.","Ahorrando desde diciembre, son unos 140 € al mes por persona.")}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:480px">
    <thead><tr><th scope="col">Cuándo</th><th scope="col">Qué</th><th scope="col" class="hl">Por persona</th></tr></thead>
    <tbody>
      <tr><td class="l">Dic 2026</td><td class="l">Los 4 vuelos</td><td class="hl">≈ 340 €</td></tr>
      <tr><td class="l">Dic 2026 (se paga después)</td><td class="l">Alojamientos con cancelación gratuita</td><td class="hl">≈ 183 €</td></tr>
      <tr><td class="l">Abr–may 2027</td><td class="l">Seguro de viaje y eSIM</td><td class="hl">≈ 35 €</td></tr>
      <tr><td class="l">Junio 2027</td><td class="l">Cambiar euros a lek para allí</td><td class="hl">≈ 428 €</td></tr>
    </tbody></table></div>
</div></section>

<section class="sec" id="ahorro"><div class="wrap">
  ${i("Ahorrar más","Cómo bajar de 900 €.","")}
  <div class="grid-2">
    <div class="tip rv"><h3>${d.piggy}Trucos</h3><ul><li>Comprar los vuelos ya, en grupos de 2–3: −40 €</li><li>Villa Luiza en Sarandë en vez de Sol Levante: −37 €</li><li>Barco compartido (18–40 €) en vez de privado: −15 €</li><li>Una noche de fiesta menos: −25 €</li><li><b>Resultado: ≈ 870 €</b></li></ul></div>
    <div class="tip rv"><h3>${d.alert}Ojo</h3><ul><li>Los vuelos se compran en billetes separados: un retraso nos puede dejar en tierra. Seguro con cobertura de conexiones.</li><li>7 plazas al precio más bajo puede que no queden: comprar pronto.</li><li>Ferry y buses de 2027 aún no publicados.</li></ul></div>
  </div>
</div></section>`;v("presupuesto",b);m();

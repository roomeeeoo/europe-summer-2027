import{B as t,i as r,p as v,h as i,b as s,C as m,c,D as d,E as u,F as b,a as p,G as h,H as y,I as g,m as $,j as f}from"./trip-DOfB1fXw.js";/* empty css              */const R=[["Mar",29,"way","Vuelo"],["Mié",30,"trip","RIM"],["Jue",1,"trip","RIM"],["Vie",2,"trip party key","RIM"],["Sáb",3,"trip party","RIM"],["Dom",4,"trip","RIM"],["Lun",5,"trip party","RIM"],["Mar",6,"way","Vuelo"]],e=a=>c(a,a%1?2:0),w=`
${v("bologna","Página 3 · Vuelos y casa","El viaje","Cuándo vamos, el vuelo directo a Bolonia y el piso de Rimini donde pasamos la semana.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap">
  <a href="#fechas">Fechas</a><a href="#vuelos">Vuelos</a><a href="#alternativas">Alternativas</a><a href="#equipaje">Equipaje</a><a href="#llegada">Llegada</a><a href="#alojamiento">Alojamiento</a><a href="#traslados">Transporte</a>
</div></nav>

<section class="sec" id="fechas"><div class="wrap">
  ${i("Fechas","Del martes 29 de junio al martes 6 de julio.","Ryanair solo vuela de Gran Canaria a Bolonia los martes y sábados en verano de 2027. De martes a martes: 7 noches en Rimini y el viernes 2 de julio en plena semana.")}
  <div class="cal-strip rv">${R.map(([a,l,n,o])=>`<div class="cal-day ${n}"><span>${a}</span><b>${l}</b><small>${o}</small></div>`).join("")}</div>
  <div class="legend"><span><i style="background:var(--sea)"></i>En Rimini</span><span><i style="background:var(--lagoon-mist);border:1px solid var(--line)"></i>Día de vuelo</span><span><i style="background:var(--red)"></i>Noche de fiesta</span><span><i style="background:var(--yellow)"></i>2 de julio</span></div>
</div></section>

<section class="sec tint" id="vuelos"><div class="wrap">
  ${i("Vuelos","Directo a Bolonia.","Sin escalas, ida y vuelta con Ryanair. Rimini está a una hora del aeropuerto.")}
  <div class="route rv" aria-label="Ruta LPA, BLQ, Rimini">
    <div class="stop"><b>LPA</b><span>Gran Canaria</span></div><div class="seg"><em>4 h 10</em></div>
    <div class="stop"><b>BLQ</b><span>Bolonia</span></div><div class="seg dash"><em>1 h</em></div>
    <div class="stop"><b>RIM</b><span>Rimini</span></div>
  </div>
  <h3 class="h4" style="margin-bottom:12px">Lo que Ryanair ya cobra en julio 2027 ${s("ok")}</h3>
  <div class="legs">${m.map(a=>`<a class="leg" href="${a.url}" target="_blank" rel="noopener"><b>${a.leg} · ${a.code}</b><span class="p">${e(a.price)}</span><span class="m">${a.day} · ${a.time}<br>${a.dur} · ver en Ryanair</span></a>`).join("")}</div>
  <div class="kpis" style="margin-top:22px">
    <div class="kpi main rv"><span>Ida y vuelta, por persona</span><b>${e(d)}</b><span>${c(d*7,2)} para los 7</span></div>
    <div class="kpi rv"><span>Realista comprando 7 plazas</span><b>≈ 170 €</b></div>
  </div>
  <p class="cap">Precio más barato de una plaza, consultado en Ryanair el 17 nov 2026. Al comprar 7 plazas puede subir: por eso contamos 170 €. Cuanto antes se compren, mejor. ${s("var")}</p>
</div></section>

<section class="sec" id="alternativas"><div class="wrap">
  ${i("Alternativas","Lo que comparamos.","Vuelos directos desde Gran Canaria a Italia, comprobados en Ryanair el 17 nov 2026.")}
  <div class="grid-3">
    ${u.map(a=>`
    <article class="card ${a.best?"rec":""} rv">
      <div class="card-body">
        <div style="display:flex;gap:8px;flex-wrap:wrap">${a.best?s("rec"):""}<span class="st st-sec">${a.badge}</span></div>
        <h3 class="h4" style="font-size:1.25rem">${a.name}</h3>
        <div><span class="price-big">${a.price}</span><div class="small muted">ida y vuelta, una plaza ${s(a.status)}</div><div class="small" style="margin-top:4px">Para 7: <b>${a.real}</b></div></div>
        <dl class="meta"><div><dt>Ruta</dt><dd>${a.route}</dd></div><div><dt>Ida</dt><dd>${a.out}</dd></div><div><dt>Vuelta</dt><dd>${a.back}</dd></div></dl>
        ${b(a.pros,a.cons)}
      </div>
    </article>`).join("")}
  </div>
  <p class="cap">Roma (vuelta 260,99 €), Pisa y Venecia-Treviso (sin vuelos en verano) quedaron fuera.</p>
</div></section>

<section class="sec stone" id="equipaje"><div class="wrap">
  ${i("Equipaje","Solo mochila.","La mochila de 40×20×25 cm es gratis. Una maleta de cabina costaría 12–36 € por vuelo y nos sacaría de los 650 €.")}
  <div class="compare">
    <div class="cmp on rv"><span class="small">${s("rec")}</span><h3 class="h3" style="margin-top:8px">Mochila gratis</h3><p class="price-big">0 €</p><ul><li>Una semana de playa cabe de sobra.</li><li>Con check-in online, directos al control.</li><li>Se puede compartir una maleta facturada entre varios si hace falta.</li></ul></div>
    <div class="cmp rv"><span class="small">Si alguien la necesita</span><h3 class="h3" style="margin-top:8px">Priority + 10 kg</h3><p class="price-big">+24–72 €</p><ul><li>12–36 € por cada uno de los 2 vuelos.</li><li>Comprarlo junto con el billete.</li></ul></div>
  </div>
</div></section>

<section class="sec tint" id="llegada"><div class="wrap">
  ${i("La primera noche","Aterrizamos a las 22:50.","A esa hora ya no hay un tren útil de Bolonia a Rimini, así que reservamos un minibús para los 7.")}
  <div class="grid-2">
    <figure class="ph rv">${p("bologna","Piazza Maggiore de Bolonia","(min-width:720px) 50vw, 100vw")}</figure>
    <div>
      <ul class="rows">
        <li><span>Minibús aeropuerto → Rimini</span><b>≈ 180–260 € (7) ${s("est")}</b></li>
        <li><span>Por persona</span><b>≈ 30 €</b></li>
        <li><span>Duración</span><b>≈ 1 h 15</b></li>
        <li><span>Último tren útil Bolonia → Rimini</span><b>22:34 (llega 23:50) ${s("ok")}</b></li>
        <li><span>Check-in en el piso</span><b>Autónomo, pactado</b></li>
      </ul>
      <p class="small muted">La vuelta sí es en tren: Rimini → Bolonia (≈ 10 €, 1 h) y Marconi Express hasta el aeropuerto (12,80 €, 8 min).</p>
    </div>
  </div>
</div></section>

<section class="sec" id="alojamiento"><div class="wrap">
  ${i("Alojamiento","Un piso para toda la semana.","Precio real en Airbnb y Booking para 7 adultos y nuestras fechas exactas (17 nov 2026).")}
  <div class="stays">
    ${h.map(a=>`
    <article class="stay ${a.best?"rec":""} rv">
      <div class="stay-img">${p(a.img,a.place,"(min-width:900px) 40vw, 100vw")}<span class="badge">${a.night}</span></div>
      <div class="stay-body">
        <p class="kicker" style="margin:0">${a.place} · nuestra casa</p>
        <h3 class="h3" style="font-size:1.5rem">${a.pick}</h3>
        <p class="small muted" style="margin:0">${a.beds} · ${a.rating}</p>
        <div class="facts3"><div><span>Total (7)</span><b>${e(a.total)}</b></div><div><span>Por persona</span><b>${e(a.pp)}</b></div><div><span>Estado</span><b>${s(a.status)}</b></div></div>
        <p style="margin:0">${a.why}</p>
        <details class="alts"><summary>Alternativas en las mismas fechas</summary><ul class="rows">${a.alts.map(([l,n,o])=>`<li><a class="link" href="${o}" target="_blank" rel="noopener">${l}</a><b>${e(n)}</b></li>`).join("")}</ul></details>
        ${y(a.url,"Ver fotos y reservar")}
      </div>
    </article>`).join("")}
  </div>
  <div class="kpis" style="margin-top:28px">
    <div class="kpi main rv"><span>Las 7 noches, por persona</span><b>${t.pp} €</b><span>${t.group.toLocaleString("es-ES",{useGrouping:"always"})} € para el grupo</span></div>
    <div class="kpi rv"><span>Por persona y noche</span><b>21,43 €</b></div>
  </div>
  <div class="grid-2" style="margin-top:22px">
    <div class="note blue">${r.bed}<span><b>Camas:</b> el piso tiene 5 camas para 7 (camas dobles o sofá cama). Confirmarlo con el anfitrión antes de pagar.</span></div>
    <div class="note">${r.alert}<span><b>Grupos de jóvenes:</b> en Rimini algunos pisos y hoteles no aceptan grupos o piden fianza. Preguntarlo por escrito al reservar.</span></div>
  </div>
</div></section>

<section class="sec stone" id="traslados"><div class="wrap">
  ${i("Transporte","Sin coche, sin problema.","Nadie conduce: tren, Metromare, bus, bici o andando.")}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:620px">
    <thead><tr><th scope="col">Qué</th><th scope="col" style="text-align:left">Precio</th><th scope="col" style="text-align:left">Detalles</th><th scope="col" style="text-align:left">Estado</th></tr></thead>
    <tbody>${g.map(a=>`<tr><td class="l"><b>${a.name}</b></td><td class="l">${a.price}</td><td class="l">${a.what}</td><td class="l">${s(a.status)}</td></tr>`).join("")}</tbody>
  </table></div>
</div></section>`;$("viaje",w);f();

import{i as l,B as t,p as m,h as e,b as s,C as u,c as v,D as p,E as b,F as y,a as c,G as d,H as h,I as g,m as $,j as f}from"./trip-BaQuDotF.js";/* empty css              */const w=[["Mar",29,"way","BGY"],["Mié",30,"way","CFU"],["Jue",1,"trip","SAR"],["Vie",2,"trip party key","SAR"],["Sáb",3,"trip party","SAR"],["Dom",4,"trip","SAR"],["Lun",5,"trip party","SAR"],["Mar",6,"way","LPA"]],i=a=>v(a,a%1?2:0),S=`
${m("corfu","Página 3 · Vuelos y casa","El viaje","Cuándo vamos, cómo llegamos desde Gran Canaria y la casa de Sarandë donde pasamos la semana.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap">
  <a href="#fechas">Fechas</a><a href="#vuelos">Vuelos</a><a href="#alternativas">Alternativas</a><a href="#equipaje">Equipaje</a><a href="#ferry">Ferry</a><a href="#alojamiento">Alojamiento</a><a href="#traslados">Traslados</a>
</div></nav>

<section class="sec" id="fechas"><div class="wrap">
  ${e("Fechas","Del martes 29 de junio al martes 6 de julio.","Ryanair solo vuela de Gran Canaria a Italia los martes y sábados en verano de 2027. Por eso el viaje va de martes a martes: 5 noches seguidas en Sarandë, con el viernes 2 de julio entero en Ksamil.")}
  <div class="cal-strip rv">${w.map(([a,n,o,r])=>`<div class="cal-day ${o}"><span>${a}</span><b>${n}</b><small>${r}</small></div>`).join("")}</div>
  <div class="legend"><span><i style="background:var(--sea)"></i>En Sarandë</span><span><i style="background:var(--lagoon-mist);border:1px solid var(--line)"></i>De camino</span><span><i style="background:var(--red)"></i>Noche de fiesta</span><span><i style="background:var(--yellow)"></i>2 de julio</span></div>
</div></section>

<section class="sec tint" id="vuelos"><div class="wrap">
  ${e("Vuelos","Por Corfú, ida y vuelta.","No hay vuelo directo a Albania. La forma de llegar a Sarandë sin buses largos es volar a Corfú y cruzar en ferry. Cuatro vuelos de Ryanair en billetes separados.")}
  <div class="route rv" aria-label="Ruta de ida LPA, BGY, CFU, Sarandë">
    <div class="stop"><b>LPA</b><span>Gran Canaria</span></div><div class="seg"><em>4 h 10</em></div>
    <div class="stop"><b>BGY</b><span>Bérgamo</span></div><div class="seg"><em>1 h 55</em></div>
    <div class="stop"><b>CFU</b><span>Corfú</span></div><div class="seg dash"><em>ferry</em></div>
    <div class="stop"><b>SAR</b><span>Sarandë</span></div>
  </div>
  <div class="route rv" aria-label="Ruta de vuelta Sarandë, CFU, BGY, LPA" style="margin-top:-10px">
    <div class="stop"><b>SAR</b><span>Sarandë</span></div><div class="seg dash"><em>ferry</em></div>
    <div class="stop"><b>CFU</b><span>Corfú</span></div><div class="seg"><em>1 h 55</em></div>
    <div class="stop"><b>BGY</b><span>Bérgamo</span></div><div class="seg"><em>4 h 25</em></div>
    <div class="stop"><b>LPA</b><span>Gran Canaria</span></div>
  </div>
  <h3 class="h4" style="margin-bottom:12px">Lo que Ryanair ya cobra en julio 2027 ${s("ok")}</h3>
  <div class="legs">${u.map(a=>`<a class="leg" href="${a.url}" target="_blank" rel="noopener"><b>${a.leg} · ${a.code}</b><span class="p">${i(a.price)}</span><span class="m">${a.day} · ${a.time}<br>${a.dur} · ver en Ryanair</span></a>`).join("")}</div>
  <div class="kpis" style="margin-top:22px">
    <div class="kpi main rv"><span>Los 4 vuelos, por persona</span><b>${i(p)}</b><span>${v(p*7,2)} para los 7</span></div>
    <div class="kpi rv"><span>Realista comprando 7 plazas</span><b>≈ 340 €</b></div>
  </div>
  <p class="cap">Precio más barato de una plaza en cada vuelo, consultado en Ryanair el 17 nov 2026. Al comprar 7 plazas puede subir: por eso contamos 340 €. ${s("var")}</p>
  <div class="note blue" style="margin-top:18px">${l.info}<span><b>Billetes separados:</b> si un vuelo se retrasa y perdemos el siguiente, nadie nos recoloca. En la vuelta hay 1 h 50 de margen en Bérgamo (mismo aeropuerto, sin control de pasaportes). Con solo mochila es suficiente, pero conviene un seguro que cubra conexiones.</span></div>
  <div class="note" style="margin-top:12px">${l.info}<span>El descuento de residente canario <b>no se aplica</b>: todos los vuelos son internacionales.</span></div>
</div></section>

<section class="sec" id="alternativas"><div class="wrap">
  ${e("Alternativas","Lo que comparamos.","Todo comprobado en Ryanair el 17 nov 2026. Precio de los 4 vuelos por persona.")}
  <div class="grid-3">
    ${b.map(a=>`
    <article class="card ${a.best?"rec":""} rv">
      <div class="card-body">
        <div style="display:flex;gap:8px;flex-wrap:wrap">${a.best?s("rec"):""}<span class="st st-sec">${a.badge}</span></div>
        <h3 class="h4" style="font-size:1.25rem">${a.name}</h3>
        <div><span class="price-big">${a.price}</span><div class="small muted">4 vuelos por persona, una plaza ${s(a.status)}</div><div class="small" style="margin-top:4px">Para 7: <b>${a.real}</b></div></div>
        <dl class="meta"><div><dt>Ruta</dt><dd>${a.route}</dd></div><div><dt>Ida</dt><dd>${a.out}</dd></div><div><dt>Vuelta</dt><dd>${a.back}</dd></div></dl>
        ${y(a.pros,a.cons)}
      </div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec stone" id="equipaje"><div class="wrap">
  ${e("Equipaje","Solo mochila.","La mochila de 40×20×25 cm es gratis en los cuatro vuelos. Una maleta de cabina costaría 12–36 € por vuelo: hasta 144 € más por persona.")}
  <div class="compare">
    <div class="cmp on rv"><span class="small">${s("rec")}</span><h3 class="h3" style="margin-top:8px">Mochila gratis</h3><p class="price-big">0 €</p><ul><li>Una semana de playa cabe de sobra.</li><li>Sin colas: con check-in online, directos al control.</li><li>Ideal para cambiar de sitio cuatro veces.</li></ul></div>
    <div class="cmp rv"><span class="small">Si alguien la necesita</span><h3 class="h3" style="margin-top:8px">Priority + 10 kg</h3><p class="price-big">+48–144 €</p><ul><li>12–36 € por cada uno de los 4 vuelos.</li><li>Comprarlo junto con el billete.</li><li>Una maleta facturada de 20 kg: 29–81 € por vuelo.</li></ul></div>
  </div>
</div></section>

<section class="sec tint" id="ferry"><div class="wrap">
  ${e("El ferry","De Grecia a Albania en 30 minutos.","Ida el jueves 1 de julio desde el puerto nuevo de Corfú y vuelta el martes 6 a primera hora desde Sarandë.")}
  <div class="grid-2">
    <figure class="ph rv">${c("ksamilboat","Ferry llegando a la costa albanesa","(min-width:720px) 50vw, 100vw")}</figure>
    <div>
      <ul class="rows">
        <li><span>Compañías</span><b>Ionian Seaways · Finikas</b></li>
        <li><span>Duración</span><b>30–45 min (rápido) · 55–70 (ferry)</b></li>
        <li><span>Precio</span><b>≈ 25–30 € por trayecto ${s("sec")}</b></li>
        <li><span>Salidas desde Corfú</span><b>08:30 a 22:30 (2026)</b></li>
        <li><span>Salidas desde Sarandë</span><b>06:00 a 20:00 (2026)</b></li>
        <li><span>Hora</span><b>Grecia va 1 h por delante</b></li>
        <li><span>Del aeropuerto al puerto</span><b>Bus 15 · 1,10–1,70 €</b></li>
      </ul>
      <p class="small muted">Horario de julio 2026. El de 2027 se publica en primavera: comprar el billete online unos días antes. Llevar DNI o pasaporte: es frontera exterior de la UE.</p>
      ${d("https://www.ionianseaways.com/","Ionian Seaways")} &nbsp; ${d("https://www.finikas-lines.com/","Finikas Lines")}
    </div>
  </div>
</div></section>

<section class="sec" id="alojamiento"><div class="wrap">
  ${e("Alojamiento","Una casa para toda la semana.","Cinco noches seguidas en Sarandë, más dos noches solo para dormir de camino. Precios reales de Airbnb para 7 adultos y nuestras fechas exactas, con cancelación gratuita y 0 € al reservar (17 nov 2026).")}
  <div class="stays">
    ${h.map(a=>`
    <article class="stay ${a.best?"rec":""} rv">
      <div class="stay-img">${c(a.img,a.place,"(min-width:900px) 40vw, 100vw")}<span class="badge">${a.night}</span></div>
      <div class="stay-body">
        <p class="kicker" style="margin:0">${a.place}${a.best?" · nuestra casa":" · de paso"}</p>
        <h3 class="h3" style="font-size:1.5rem">${a.pick}</h3>
        <p class="small muted" style="margin:0">${a.beds} · ${a.rating}</p>
        <div class="facts3"><div><span>Total (7)</span><b>${i(a.total)}</b></div><div><span>Por persona</span><b>${i(a.pp)}</b></div><div><span>Estado</span><b>${s(a.status)}</b></div></div>
        <p style="margin:0">${a.why}</p>
        ${a.alts.length?`<details class="alts"><summary>Alternativas en las mismas fechas</summary><ul class="rows">${a.alts.map(([n,o,r])=>`<li><a class="link" href="${r}" target="_blank" rel="noopener">${n}</a><b>${i(o)}</b></li>`).join("")}</ul></details>`:""}
        ${d(a.url,a.status==="ok"?"Ver fotos y reservar":"Buscar hoteles para estas fechas")}
      </div>
    </article>`).join("")}
  </div>
  <div class="kpis" style="margin-top:28px">
    <div class="kpi main rv"><span>Las 7 noches, por persona</span><b>≈ ${t.pp} €</b><span>${t.group.toLocaleString("es-ES",{useGrouping:"always"})} € para el grupo</span></div>
    <div class="kpi rv"><span>En Sarandë, por persona y noche</span><b>22,86 €</b></div>
  </div>
  <div class="grid-2" style="margin-top:22px">
    <div class="note blue">${l.bed}<span><b>Camas:</b> algunos pisos tienen menos camas que personas (camas dobles o sofá cama). Confirmar con el anfitrión antes de pagar.</span></div>
    <div class="note blue">${l.info}<span><b>Hostales:</b> en Sarandë hay camas desde 12–16 € (Saranda Backpackers, 9,6/10), pero en julio el piso entero sale igual o más barato y tiene cocina.</span></div>
  </div>
</div></section>

<section class="sec stone" id="traslados"><div class="wrap">
  ${e("Traslados","Sin coche, sin problema.","Nadie conduce: todo en bus, ferry, barco o taxi compartido entre los 7.")}
  <div class="tbl-wrap rv"><table class="tbl" style="min-width:620px">
    <thead><tr><th scope="col">Qué</th><th scope="col" style="text-align:left">Precio</th><th scope="col" style="text-align:left">Detalles</th><th scope="col" style="text-align:left">Estado</th></tr></thead>
    <tbody>${g.map(a=>`<tr><td class="l"><b>${a.name}</b></td><td class="l">${a.price}</td><td class="l">${a.what}</td><td class="l">${s(a.status)}</td></tr>`).join("")}</tbody>
  </table></div>
</div></section>`;$("viaje",S);f();

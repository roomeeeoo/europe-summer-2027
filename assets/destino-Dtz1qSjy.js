import{i as n,p as m,h as o,a as t,k as l,l as c,b as r,m as v,j as b}from"./trip-DOfB1fXw.js";/* empty css              */import d from"./gsap-DRhTDw2I.js";import{ScrollTrigger as u}from"./ScrollTrigger-CcPJIpJ9.js";d.registerPlugin(u);const p=a=>`<span class="dots" aria-label="${a} de 5">${"●".repeat(a)}<span style="opacity:.25">${"●".repeat(5-a)}</span></span>`,h=c.slice(0,3),$={rim:"beach",opo:"porto",jes:"beach3"},y=[["bologna","Vuelo directo","Gran Canaria–Bolonia sin escalas por 145,68 € ida y vuelta. Rimini está a una hora."],["beach","Playa","15 km de arena fina, agua tranquila y tramos de playa libre gratis a un paseo del piso."],["club","Fiesta","La Riviera Romagnola es la zona de discotecas más famosa de Italia: Cocoricò, Peter Pan, Coconuts."],["piadina","Precio","Piso para 7 a 21 € por persona y noche, piadina a 5 € y todo en bus o andando. Cabe en 650 €."]],g=`
${m("tiberio","Página 2 · El destino","Rimini","Buscamos lo más barato de Europa con playa y fiesta, a ser posible en Italia, y con un máximo de 650 € por persona. Ganó Rimini.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#por-que">Por qué</a><a href="#podio">El podio</a><a href="#comparativa">Comparativa</a><a href="#numeros">En números</a></div></nav>

<section class="sec" id="por-que"><div class="wrap">
  ${o("Por qué Rimini","Italia, playa y fiesta, por poco.","Es el único destino de Italia con vuelo directo desde Gran Canaria que cabe en 650 € con todo incluido.")}
  <div class="why-grid">${y.map(([a,s,i],e)=>`<article class="why rv" style="--d:${e*80}ms">${t(a,"","(min-width:900px) 25vw, 100vw")}<div><span>0${e+1}</span><h3>${s}</h3><p>${i}</p></div></article>`).join("")}</div>
</div></section>

<section class="sec tint" id="podio"><div class="wrap">
  ${o("El podio","Las tres mejores opciones.","Total por persona con vuelos, alojamiento, comida, transporte, actividades y fiesta.")}
  <div class="podium">
    ${h.map(a=>`
    <article class="card ${a.rank===1?"rec":""} rv">
      ${a.rank===1?`<div class="card-img">${t($[a.id],a.name,"(min-width:1040px) 33vw, 100vw")}<span class="badge">${a.rank}º · ${a.verdict}</span></div>`:`<div class="card-body" style="padding-bottom:0"><span class="st st-sec">${a.rank}º · ${a.verdict}</span></div>`}
      <div class="card-body">
        <div><h3 class="h4" style="font-size:1.35rem">${a.name}</h3><p class="small muted" style="margin:4px 0 0">${a.where}</p></div>
        <div class="facts3"><div><span>Vuelos</span><b>${a.flight}</b></div><div><span>Allí</span><b>${a.ground}</b></div><div><span>Total pp</span><b>${a.total}</b></div></div>
        <p style="margin:0">${a.note}</p>
        <ul class="rows" style="font-size:.88rem">${l.map((s,i)=>`<li><span>${s}</span>${p(a.s[i])}</li>`).join("")}</ul>
      </div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec" id="comparativa"><div class="wrap">
  ${o("Comparativa","Los 8 destinos.","Puntuación de 1 a 5. Desliza la tabla en el móvil.")}
  <div class="tbl-wrap rv"><table class="tbl cmp-tbl" style="min-width:1020px">
    <thead><tr><th scope="col">Destino</th><th scope="col">Vuelos i/v</th><th scope="col">Allí (semana)</th><th scope="col" class="hl">Total pp</th>${l.map(a=>`<th scope="col">${a}</th>`).join("")}</tr></thead>
    <tbody>${c.map(a=>`<tr class="${a.rank===1?"win":""}"><td class="l"><b>${a.rank}. ${a.name}</b><br><span class="small muted">${a.where}</span></td><td>${a.flight}</td><td>${a.ground}</td><td class="hl"><b>${a.total}</b></td>${a.s.map(s=>`<td>${p(s)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>
  <p class="cap">${r("ok")} Vuelos leídos en Ryanair el 17 nov 2026 (una plaza). ${r("est")} El resto, estimaciones con precios de 2025–26. Rimini: 644 € es el presupuesto detallado del plan.</p>
  <div class="grid-2" style="margin-top:30px">
    <div class="note blue">${n.info}<span><b>¿Y Oporto?</b> Es el plan B: también cabe en 650 € y el vuelo es el más barato, pero no es Italia y el Atlántico está frío (17–19 °C).</span></div>
    <div class="note blue">${n.info}<span><b>¿Por qué no Roma o el Lago de Garda?</b> Roma: la vuelta cuesta 260,99 € y no hay playa sin coche. Garda: solo dormir ya cuesta 250–350 € por persona.</span></div>
  </div>
</div></section>

<section class="sec stone" id="numeros"><div class="wrap">
  ${o("En números","Rimini, por persona.","")}
  <div class="kpis">
    <div class="kpi main rv"><span>Total recomendado</span><b>644 €</b><span>máximo 650 €</span></div>
    <div class="kpi rv"><span>Vuelo directo i/v</span><b>146 €</b></div>
    <div class="kpi rv"><span>Piso, por noche</span><b>21 €</b></div>
    <div class="kpi rv"><span>Piadina</span><b>4–7 €</b></div>
    <div class="kpi rv"><span>Tren a Bolonia</span><b>≈ 10 €</b></div>
  </div>
</div></section>`;v("destino",g);b();matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll(".why img").forEach(a=>d.fromTo(a,{scale:1.2},{scale:1,ease:"none",scrollTrigger:{trigger:a.parentElement,start:"top bottom",end:"bottom top",scrub:!0}}));

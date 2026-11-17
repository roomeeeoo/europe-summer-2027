import{i as n,p as v,h as e,a as t,k as r,l as d,b as l,m,j as u}from"./trip-BaQuDotF.js";/* empty css              */import p from"./gsap-DRhTDw2I.js";import{ScrollTrigger as b}from"./ScrollTrigger-CcPJIpJ9.js";p.registerPlugin(b);const c=a=>`<span class="dots" aria-label="${a} de 5">${"●".repeat(a)}<span style="opacity:.25">${"●".repeat(5-a)}</span></span>`,h=d.slice(0,3),$={alb:"ksamil3",alg:"riviera",cfu:"corfu"},g=[["aerial","Paisaje","Agua turquesa, montañas que caen al mar, cañones, manantiales y calas sin carretera. Lo más parecido al Caribe en Europa."],["byrek","Precio","Cerveza a 2,40 € en bar, menú a 7–12 €, piso para 7 a 23 € por persona y noche. Lo más barato de toda la costa mediterránea."],["kakome","Aventura","Barco privado, snorkel, saltos, rutas a pie a playas escondidas, ruinas y el Ojo Azul. Una actividad distinta cada día."],["sarandanight","Fiesta","Sarandë tiene más de 20 bares-club seguidos y abiertos hasta las 4, casi sin entrada, a cinco minutos andando de casa."]],y=`
${v("aerial","Página 2 · El destino","Albania","Comparamos 12 destinos de Europa con vuelos desde Gran Canaria. Ganó Sarandë, en la Riviera albanesa: un solo sitio con todo cerca.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#por-que">Por qué</a><a href="#podio">El podio</a><a href="#comparativa">Comparativa</a><a href="#numeros">En números</a></div></nav>

<section class="sec" id="por-que"><div class="wrap">
  ${e("Por qué Albania","Lo tiene todo, y cuesta poco.","Buscábamos playas increíbles, aventura, fiesta y gente joven gastando lo mínimo. Es el único sitio que saca nota alta en todo a la vez.")}
  <div class="why-grid">${g.map(([a,s,o],i)=>`<article class="why rv" style="--d:${i*80}ms">${t(a,"","(min-width:900px) 25vw, 100vw")}<div><span>0${i+1}</span><h3>${s}</h3><p>${o}</p></div></article>`).join("")}</div>
</div></section>

<section class="sec tint" id="podio"><div class="wrap">
  ${e("El podio","Las tres mejores opciones.","El total incluye vuelos, alojamiento, comida, transporte, actividades y fiesta durante una semana.")}
  <div class="podium">
    ${h.map(a=>`
    <article class="card ${a.rank===1?"rec":""} rv">
      <div class="card-img">${t($[a.id],a.name,"(min-width:1040px) 33vw, 100vw")}<span class="badge">${a.rank}º · ${a.verdict}</span></div>
      <div class="card-body">
        <div><h3 class="h4" style="font-size:1.35rem">${a.name}</h3><p class="small muted" style="margin:4px 0 0">${a.where}</p></div>
        <div class="facts3"><div><span>Vuelos</span><b>${a.flight}</b></div><div><span>Allí</span><b>${a.ground}</b></div><div><span>Total pp</span><b>${a.total}</b></div></div>
        <p style="margin:0">${a.note}</p>
        <ul class="rows" style="font-size:.88rem">${r.map((s,o)=>`<li><span>${s}</span>${c(a.s[o])}</li>`).join("")}</ul>
      </div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec" id="comparativa"><div class="wrap">
  ${e("Comparativa","Los 12 destinos.","Puntuación de 1 a 5. Desliza la tabla en el móvil.")}
  <div class="tbl-wrap rv"><table class="tbl cmp-tbl" style="min-width:1020px">
    <thead><tr><th scope="col">Destino</th><th scope="col">Vuelos i/v</th><th scope="col">Allí (semana)</th><th scope="col" class="hl">Total pp</th>${r.map(a=>`<th scope="col">${a}</th>`).join("")}</tr></thead>
    <tbody>${d.map(a=>`<tr class="${a.rank===1?"win":""}"><td class="l"><b>${a.rank}. ${a.name}</b><br><span class="small muted">${a.where}</span></td><td>${a.flight}</td><td>${a.ground}</td><td class="hl"><b>${a.total}</b></td>${a.s.map(s=>`<td>${c(s)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>
  <p class="cap">${l("ok")} Vuelos de Albania, Corfú, Algarve, Zante y Budapest leídos en Ryanair el 17 nov 2026 (una plaza). ${l("est")} El resto, estimaciones con precios de 2025–26 (Numbeo, Hostelworld, guías). Sarandë: 986 € es el presupuesto detallado del plan, con seguro, imprevistos, dos ferris y las noches de paso en Bérgamo y Corfú.</p>
  <div class="grid-2" style="margin-top:30px">
    <div class="note blue">${n.info}<span><b>¿Por qué no Sunny Beach, si es más barato?</b> Son unos 7 h de bus desde Sofía en cada sentido, dos días perdidos. La fiesta es enorme, pero el paisaje y la aventura no tienen comparación.</span></div>
    <div class="note blue">${n.info}<span><b>¿Y el Algarve?</b> Es el plan B perfecto: más fácil y con más ambiente español, pero dormir allí en julio cuesta el doble y Benagil solo se ve con tour oficial.</span></div>
  </div>
</div></section>

<section class="sec stone" id="numeros"><div class="wrap">
  ${e("En números","Albania frente a casa.","Precios medios de Numbeo (nov 2026) y de guías de 2025–26.")}
  <div class="kpis">
    <div class="kpi main rv"><span>Cerveza en un bar</span><b>2,40 €</b><span>Croacia 3,50 € · España ≈ 3 €</span></div>
    <div class="kpi rv"><span>Menú barato</span><b>8,80 €</b></div>
    <div class="kpi rv"><span>Byrek</span><b>≈ 1 €</b></div>
    <div class="kpi rv"><span>Piso para 7, por noche</span><b>23 € pp</b></div>
    <div class="kpi rv"><span>Entrada a Butrint</span><b>10 €</b></div>
  </div>
</div></section>`;m("destino",y);u();matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll(".why img").forEach(a=>p.fromTo(a,{scale:1.2},{scale:1,ease:"none",scrollTrigger:{trigger:a.parentElement,start:"top bottom",end:"bottom top",scrub:!0}}));

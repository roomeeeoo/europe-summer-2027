import{e as c,i as o,p as n,h as e,s as l,a as i,t as d,b as p,c as r,r as t,f as m,d as v,g as $,m as u,j as h}from"./trip-Dz351KtT.js";/* empty css              */const b=s=>`<span aria-label="${s} de 5">${"●".repeat(s)}<span style="opacity:.3">${"●".repeat(5-s)}</span></span>`,g=c.reduce((s,a)=>s+a.price,0),y=`
${n("kakome","Página 5 · Aventuras","Aventuras","Todo desde Sarandë: calas a las que solo se llega en barco, un manantial azul eléctrico, ruinas de 2.500 años y dónde comer por 3 €.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#playas">Playas</a><a href="#excursiones">Excursiones</a><a href="#extras">Extras</a><a href="#comida">Comida</a></div></nav>

<section class="sec" id="playas"><div class="wrap">
  ${e("Playas y calas","Dónde nos bañamos.",'De imprescindible a "si sobra tiempo". Todas sin coche.')}
  <div class="mosaic">
    ${l.map((s,a)=>`
    <article class="tile ${a===0?"big":""} rv">${i(s.img,s.name,a===0?"100vw":"(min-width:720px) 33vw, 50vw")}
      <div class="tile-txt"><span class="verdict">${b(s.score)} ${s.verdict}</span><h3>${s.name}</h3><p>${s.why}</p>
      <div class="tile-meta"><span>${s.how}</span><span>${s.price}</span><span>${s.time}</span></div></div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec tint" id="excursiones"><div class="wrap">
  ${e("Excursiones","Lo que hace el viaje memorable.","Precios por persona. Todo en bus, barco o a pie.")}
  <div class="grid-2">
    ${d.map(s=>`
    <article class="card rv">
      <div class="card-img">${i(s.img,s.name,"(min-width:720px) 50vw, 100vw")}<span class="badge">${s.verdict}</span></div>
      <div class="card-body">
        <h3 class="h4" style="font-size:1.25rem">${s.name}</h3>
        <p style="margin:0">${s.what}</p>
        <div class="facts3" style="grid-template-columns:1fr 1fr"><div><span>Precio</span><b>${s.price}</b></div><div><span>Tiempo</span><b>${s.time}</b></div><div style="grid-column:1/-1"><span>Cómo llegar</span><b>${s.how}</b></div></div>
        <div>${p(s.status)}</div>
        <div class="note blue">${o.sparkle}<span>${s.tip}</span></div>
      </div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec" id="extras"><div class="wrap">
  ${e("Extras","Si alguien quiere más.","No están en el presupuesto recomendado. Precio por persona.")}
  <div class="opts">${c.map(s=>`<div class="opt rv">${i(s.img,"","72px")}<div><b>${s.name}</b><p>${s.worth}</p></div><span class="plus">+${s.price} €<small>${s.status==="ok"?"comprobado":"estimado"}</small></span></div>`).join("")}</div>
  <div class="note blue" style="margin-top:20px">${o.info}<span>Hacerlos todos sumaría <b>+${r(g)}</b> por persona. El escenario "más cómodo" del presupuesto ya incluye uno o dos de estos planes.</span></div>
</div></section>

<section class="sec stone" id="comida"><div class="wrap">
  ${e("Comida","Comer bien por muy poco.","Desayuno y cena en el piso, street food a mediodía y un par de cenas de pescado.")}
  <div class="restos">
    ${t.map(s=>`
    <article class="resto rv">${i(s.img,"","88px")}
      <div><h3>${s.name}</h3><span class="w">${s.where}</span>
      <p>${s.what}</p><p><span class="pr">${s.price}</span> ${p("sec")}</p>
      <p class="small muted" style="margin-top:4px">${s.note}</p></div>
    </article>`).join("")}
  </div>
  <h3 class="h3" style="margin:56px 0 16px">Comida para los 8 días, por persona</h3>
  <div class="grid-3">${m.map(s=>`<div class="cmp ${s.rec?"on":""} rv"><span class="small">${s.name}${s.rec?" · recomendado":""}</span><p class="price-big">${s.week} €</p><span class="small ${s.rec?"":"muted"}">${s.day} al día</span><p class="small" style="margin:10px 0 0">${s.how}</p></div>`).join("")}</div>
  <div class="grid-2" style="margin-top:40px">
    <div><h3 class="h4" style="margin-bottom:8px">Precios de referencia ${p("sec")}</h3><ul class="rows">${v.map(([s,a])=>`<li><span>${s}</span><b>${a}</b></li>`).join("")}</ul><p class="cap">Numbeo (nov 2026) y guías de 2025–26.</p></div>
    <div><h3 class="h4" style="margin-bottom:8px">Cómo ahorrar</h3><ul class="pc">${$.map(s=>`<li class="plus">${o.check}<span>${s}</span></li>`).join("")}</ul></div>
  </div>
</div></section>`;u("aventuras",y);h();

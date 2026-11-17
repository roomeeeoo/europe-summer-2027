import{e as c,i as o,p as l,h as e,s as n,a as i,t as r,b as p,c as d,r as t,f as m,d as v,g as $,m as u,j as h}from"./trip-DC3lKahQ.js";/* empty css              */const b=a=>`<span aria-label="${a} de 5">${"●".repeat(a)}<span style="opacity:.3">${"●".repeat(5-a)}</span></span>`,g=c.reduce((a,s)=>a+s.price,0),y=`
${l("gjipe","Página 5 · Aventuras","Aventuras","Calas a las que solo se llega en barco, un manantial azul eléctrico, ruinas de 2.500 años y dónde comer por 3 €.")}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#playas">Playas</a><a href="#excursiones">Excursiones</a><a href="#extras">Extras</a><a href="#comida">Comida</a></div></nav>

<section class="sec" id="playas"><div class="wrap">
  ${e("Playas y calas","Dónde nos bañamos.",'De imprescindible a "si sobra tiempo". Todas sin coche.')}
  <div class="mosaic">
    ${n.map((a,s)=>`
    <article class="tile ${s===0?"big":""} rv">${i(a.img,a.name,s===0?"100vw":"(min-width:720px) 33vw, 50vw")}
      <div class="tile-txt"><span class="verdict">${b(a.score)} ${a.verdict}</span><h3>${a.name}</h3><p>${a.why}</p>
      <div class="tile-meta"><span>${a.how}</span><span>${a.price}</span><span>${a.time}</span></div></div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec tint" id="excursiones"><div class="wrap">
  ${e("Excursiones","Lo que hace el viaje memorable.","Precios por persona. Todo en bus, barco o a pie.")}
  <div class="grid-2">
    ${r.map(a=>`
    <article class="card rv">
      <div class="card-img">${i(a.img,a.name,"(min-width:720px) 50vw, 100vw")}<span class="badge">${a.verdict}</span></div>
      <div class="card-body">
        <h3 class="h4" style="font-size:1.25rem">${a.name}</h3>
        <p style="margin:0">${a.what}</p>
        <div class="facts3" style="grid-template-columns:1fr 1fr"><div><span>Precio</span><b>${a.price}</b></div><div><span>Tiempo</span><b>${a.time}</b></div><div style="grid-column:1/-1"><span>Cómo llegar</span><b>${a.how}</b></div></div>
        <div>${p(a.status)}</div>
        <div class="note blue">${o.sparkle}<span>${a.tip}</span></div>
      </div>
    </article>`).join("")}
  </div>
</div></section>

<section class="sec" id="extras"><div class="wrap">
  ${e("Extras","Si alguien quiere más.","No están en el presupuesto recomendado. Precio por persona.")}
  <div class="opts">${c.map(a=>`<div class="opt rv">${i(a.img,"","72px")}<div><b>${a.name}</b><p>${a.worth}</p></div><span class="plus">+${a.price} €<small>${a.status==="ok"?"comprobado":"estimado"}</small></span></div>`).join("")}</div>
  <div class="note blue" style="margin-top:20px">${o.info}<span>Hacerlos todos sumaría <b>+${d(g)}</b> por persona. El escenario "más cómodo" del presupuesto ya incluye Grama y la Cueva del Pirata.</span></div>
</div></section>

<section class="sec stone" id="comida"><div class="wrap">
  ${e("Comida","Comer bien por muy poco.","Desayuno y cena en el piso, street food a mediodía y un par de cenas de pescado.")}
  <div class="restos">
    ${t.map(a=>`
    <article class="resto rv">${i(a.img,"","88px")}
      <div><h3>${a.name}</h3><span class="w">${a.where}</span>
      <p>${a.what}</p><p><span class="pr">${a.price}</span> ${p("sec")}</p>
      <p class="small muted" style="margin-top:4px">${a.note}</p></div>
    </article>`).join("")}
  </div>
  <h3 class="h3" style="margin:56px 0 16px">Comida para los 8 días, por persona</h3>
  <div class="grid-3">${m.map(a=>`<div class="cmp ${a.rec?"on":""} rv"><span class="small">${a.name}${a.rec?" · recomendado":""}</span><p class="price-big">${a.week} €</p><span class="small ${a.rec?"":"muted"}">${a.day} al día</span><p class="small" style="margin:10px 0 0">${a.how}</p></div>`).join("")}</div>
  <div class="grid-2" style="margin-top:40px">
    <div><h3 class="h4" style="margin-bottom:8px">Precios de referencia ${p("sec")}</h3><ul class="rows">${v.map(([a,s])=>`<li><span>${a}</span><b>${s}</b></li>`).join("")}</ul><p class="cap">Numbeo (nov 2026) y guías de 2025–26.</p></div>
    <div><h3 class="h4" style="margin-bottom:8px">Cómo ahorrar</h3><ul class="pc">${$.map(a=>`<li class="plus">${o.check}<span>${a}</span></li>`).join("")}</ul></div>
  </div>
</div></section>`;u("aventuras",y);h();

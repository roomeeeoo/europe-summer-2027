const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./map-Dudc-DEP.js","./trip-DOfB1fXw.js","./trip-C9erxWgE.css","./map-CIGW-MKW.css"])))=>i.map(i=>d[i]);
import{p as l,z as i,i as e,h as n,m as p,j as c,_ as d,a as m,o as v}from"./trip-DOfB1fXw.js";/* empty css              */import t from"./gsap-DRhTDw2I.js";import{ScrollTrigger as u}from"./ScrollTrigger-CcPJIpJ9.js";t.registerPlugin(u);const $=a=>`
  <li><div class="tl-when"><b>${a.t}</b></div>
  <div class="tl-body"><h3>${a.what}</h3><p>${a.how}</p>
  <div class="tl-meta"><span>${e.clock}${a.dur}</span>${a.map?`<a class="link" href="${v(a.map)}" target="_blank" rel="noopener">${e.pin}Ver en el mapa</a>`:""}</div></div></li>`,g=a=>`
  <section class="day-sec ${a.key?"key":""}" id="${a.id}">
    <div class="day-media">${m(a.img,a.title,"100vw")}
      <div class="wrap"><div>${a.key?`<span class="party-tag key-tag">${e.star}El día marcado</span> `:""}${a.party===!0?`<span class="party-tag">${e.music}Noche de fiesta</span>`:a.party==="opt"?`<span class="party-tag">${e.music}Fiesta opcional</span>`:""}
      <div class="d" style="margin-top:8px">Día ${a.n} · ${a.date} · ${a.where}</div><h2>${a.title}</h2></div>
      <div class="day-cost"><b>${a.cost}</b><span>por persona</span></div></div>
    </div>
    <div class="wrap">
      <ol class="tl">${a.blocks.map($).join("")}</ol>
      <div class="note blue planb">${e.umbrella}<span><b>Plan B:</b> ${a.planB}</span></div>
    </div>
  </section>`,y=`
${l("tiberio2","Página 4 · Itinerario","Día a día","Una semana con una sola casa en Rimini: playa, Aquafan, San Marino y tres noches de fiesta. El viernes 2 de julio, la noche grande.")}
<nav class="chips-nav" aria-label="Días"><div class="wrap">${i.map(a=>`<a href="#${a.id}">${a.date.replace(" jun","").replace(" jul","")}</a>`).join("")}<a href="#mapa">Mapa</a></div></nav>
<div style="padding-top:40px"><div class="wrap"><p class="small muted">Coste por persona y día sin vuelos, alojamiento ni la compra del súper (eso está en el presupuesto). Horarios de vuelos comprobados; trenes y buses con horarios de 2026.</p></div></div>
${i.map(g).join("")}
<section class="sec tint" id="mapa"><div class="wrap">
  ${n("El mapa","Todo lo que vamos a ver.","Toca un punto para ver la foto, el precio y cómo llegar.")}
  <div class="map-filters" data-mapfilters></div>
  <div class="map-shell"><div id="map" role="region" aria-label="Mapa interactivo de la ruta"></div></div>
</div></section>`;p("itinerario",y);c();matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll(".day-media img").forEach(a=>{t.fromTo(a,{scale:1.2,yPercent:-6},{scale:1,yPercent:6,ease:"none",scrollTrigger:{trigger:a.parentElement,start:"top bottom",end:"bottom top",scrub:!0}})});const o=document.getElementById("map");new IntersectionObserver((a,r)=>{a.some(s=>s.isIntersecting)&&(r.disconnect(),d(()=>import("./map-Dudc-DEP.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(s=>s.initMap(o,document.querySelector("[data-mapfilters]"))))},{rootMargin:"500px"}).observe(o);

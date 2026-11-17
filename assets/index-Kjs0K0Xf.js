import{i as k,T as n,a as u,P as V,u as D,m as G}from"./trip-DOfB1fXw.js";import r from"./gsap-DRhTDw2I.js";import{ScrollTrigger as $}from"./ScrollTrigger-CcPJIpJ9.js";function B(a,{desktop:e,mobile:t,posterD:o,posterM:l}){const f=matchMedia("(max-width: 860px), (pointer: coarse)").matches&&innerHeight>=innerWidth*.9,M=f?t:e,i=f?l:o;a.insertAdjacentHTML("afterbegin",`
    <img class="scrub-poster" src="${i}" alt="" aria-hidden="true">
    <video class="scrub-video" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video>`);const s=a.querySelector("video"),m=a.querySelector(".scrub-poster");let p=0,b=!1,w=!1,h=!1;const y=()=>{if(!w||!s.duration)return;if(s.seeking){b=!0;return}const v=Math.min(s.duration-.04,Math.max(0,p*s.duration));Math.abs(s.currentTime-v)>.008&&(s.currentTime=v)};s.addEventListener("seeked",()=>{h||(h=!0,m.classList.add("gone")),b&&(b=!1,y())});const I=async()=>{try{const L=await(await fetch(M)).blob();s.src=URL.createObjectURL(L),await new Promise(F=>s.addEventListener("loadedmetadata",F,{once:!0})),w=!0,y()}catch{}},x=new IntersectionObserver(v=>{v.some(L=>L.isIntersecting)&&(x.disconnect(),I())},{rootMargin:"150% 0px"});x.observe(a);const j=()=>{s.play().then(()=>{s.pause(),y()}).catch(()=>{}),removeEventListener("touchstart",j)};return addEventListener("touchstart",j,{passive:!0}),{set(v){p=v,y()}}}r.registerPlugin($);$.config({ignoreMobileResize:!0});const C=matchMedia("(prefers-reduced-motion: reduce)").matches,c=(a,e=document)=>e.querySelector(a),d=(a,e=document)=>[...e.querySelectorAll(a)],P=a=>a.toLocaleString("es-ES",{useGrouping:"always"});document.body.classList.add("home");const g=[{code:"LPA",k:"bologna",city:"Gran Canaria → Bolonia",when:"Mar 29 jun · 17:40",p:"Vuelo directo. Solo mochila. Minibús a Rimini y a dormir."},{code:"RIM",k:"beach",city:"Rimini",when:"29 jun – 6 jul · 7 noches",p:"Un piso para los 7, a un paseo de la playa. No cambiamos de casa en toda la semana."},{code:"JUE",k:"aquafan",city:"Aquafan",when:"Jueves 1",p:"Toboganes en Riccione y paseo por Viale Ceccarini."},{code:"2 JUL",k:"beach2",city:"El día grande",when:"Viernes 2 de julio",p:"Playa por el día y, por la noche, un club de verdad de la Riviera."},{code:"SÁB",k:"beachnight",city:"Marina Centro",when:"Sábado 3",p:"Playa sin prisa y fiesta al lado de casa."},{code:"DOM",k:"sanmarino",city:"San Marino",when:"Domingo 4",p:"Otro país en lo alto de un monte, a 50 minutos en bus."},{code:"LPA",k:"dusk",city:"Vuelta a casa",when:"Mar 6 jul · 17:05",p:"Tren a Bolonia y vuelo directo. En casa por la tarde."}],S=[{tag:"Rimini",h:"15 km de arena.",p:"Agua tranquila, playas libres gratis y el piso a un paseo."},{tag:"Ponte di Tiberio",h:"2.000 años.",p:"Un puente romano que se sigue usando, en el centro histórico."},{tag:"Riccione",h:"La Riviera de moda.",p:"Aquafan, Viale Ceccarini y los clubs más famosos de Italia."},{tag:"San Marino",h:"Otro país.",p:"Tres torres en lo alto del monte Titano, a 50 minutos en bus."},{tag:"Cada tarde",h:"Y así acaba cada día.",p:"Del 29 de junio al 6 de julio de 2027. Por menos de 650 €."}],A=[{k:"beach3",h:"Playa",p:"Arena fina y agua tranquila. Las libres son gratis.",w:"7 días"},{k:"aquafan2",h:"Aquafan",p:"El parque acuático más famoso de Italia.",w:"≈ 30 €"},{k:"sanmarino2",h:"San Marino",p:"Un país medieval en lo alto de un monte.",w:"Bus ≈ 6 €"},{k:"tiberio2",h:"Centro histórico",p:"Puente de Tiberio, Arco de Augusto y aperitivo.",w:"Gratis"},{k:"riccione",h:"Riccione",p:"Viale Ceccarini y la playa de moda.",w:"Metromare 2 €"},{k:"piadina",h:"Comida",p:"Piadina, pizza al taglio y gelato.",w:"≈ 12,50 € al día"},{k:"club",h:"Fiesta",p:"Un club grande el viernes y Marina Centro el sábado.",w:"3 noches"}],O=[{k:"beach",h:"Marina Centro",where:"Rimini · a un paseo del piso",p:"Nuestra playa de cada día: arena fina y agua que no cubre en muchos metros.",f:["Gratis en tramos libres","Set 18–30 €","Toda la semana"]},{k:"riccionebeach",h:"Riccione",where:"A 20 min en Metromare",p:"La playa de moda de la Riviera, junto a Viale Ceccarini.",f:["Metromare ≈ 2 €","Jueves 1"]},{k:"sanmarino",h:"San Marino",where:"A 50 min en bus",p:"No es playa, pero las vistas a toda la costa desde la Guaita valen el viaje.",f:["Bus ≈ 5–6 €","Domingo 4"]}],E=[["portada","Portada"],["ruta","La semana"],["destino","El destino"],["plan","El plan"],["playas","Playas"],["noche","Fiesta"],["coste","Lo que cuesta"],["final","El final"]],z=`
<div class="nightbg" aria-hidden="true"></div>
<nav class="scenes" aria-label="Escenas">${E.map(([a,e])=>`<a href="#${a}" data-scene="${a}"><span>${e}</span><i></i></a>`).join("")}</nav>
<div class="scene-label" aria-hidden="true"><span data-scene-name>Portada</span><i>${E.map(()=>"<b></b>").join("")}</i></div>

<section class="s1" id="portada" data-dark aria-label="Portada">
  <div class="s1-media">${u("beach","Playa de Rimini con sombrillas","100vw",!1)}</div>
  <div class="s1-title">
    <p class="s1-pre">7 amigos · Gran Canaria → Rimini, Italia</p>
    <h1 aria-label="Rimini, Europe Summer 2027"><span class="l1">${"RIMINI".split("").map(a=>`<span>${a}</span>`).join("")}</span><span class="l2">EUROPE SUMMER 2027</span></h1>
    <p class="s1-sub">Una semana de playa y fiesta en Italia por menos de 650 €.</p>
  </div>
  <a class="s1-cue" href="#ruta" aria-label="Empezar">${k.down}</a>
  <div class="s1-ticket" aria-label="Datos del viaje">
    <div><span>Cuándo</span><b>29 jun – 6 jul</b></div>
    <div><span>Vuelo</span><b>LPA ⇄ Bolonia</b></div>
    <div><span>Quiénes</span><b>7 amigos</b></div>
    <div><span>Por persona</span><b>≈ ${n.pp} €</b></div>
  </div>
</section>

<section class="route" id="ruta" data-dark aria-label="La semana">
  <div class="route-bg">${g.map((a,e)=>`<div class="route-ph ${e===0?"on":""}">${u(a.k,"","100vw")}</div>`).join("")}</div>
  <div class="route-ui wrap">
    <p class="kicker">La semana · una sola casa</p>
    <div class="route-codes">${g.map((a,e)=>`<div class="route-stop ${e===0?"on":""}"><b>${a.code}</b><h3>${a.city}</h3><span>${a.when}</span><p>${a.p}</p></div>`).join("")}</div>
    <ol class="route-line" aria-hidden="true"><i data-routebar></i>${g.map((a,e)=>`<li class="${e===0?"on":""}"><span>${a.code==="2 JUL"?"VIE":a.code}</span></li>`).join("")}</ol>
  </div>
</section>

<section class="s2" id="destino" data-dark aria-label="El destino">
  <div class="stage" data-stage></div>
  <div class="s2-intro"><p class="kicker">Rimini y la Riviera</p></div>
  <div class="s2-caps">${S.map(a=>`<div class="s2-cap"><small>${a.tag}</small><h3>${a.h}</h3><p>${a.p}</p></div>`).join("")}</div>
  <div class="s2-rail" aria-hidden="true">${S.map(()=>"<i><b></b></i>").join("")}</div>
</section>

<section class="s3" id="plan" aria-label="El plan">
  <div class="s3-head"><p class="kicker">El plan</p><h2 class="h2">Ocho días,<br>cero aburrimiento.</h2></div>
  <div class="s3-track">${A.map(a=>`<article class="exp">${u(a.k,"","(min-width:1040px) 380px, 76vw")}<div><h3>${a.h}</h3><p>${a.p}</p><span class="where">${a.w}</span></div></article>`).join("")}</div>
  <div class="s3-count"><span>Desliza</span><i><b data-s3bar></b></i><span>${A.length} planes</span></div>
</section>

<div id="playas">
  <div class="s4-intro"><div class="wrap"><p class="kicker">Las playas</p><h2 class="h2">Donde nos<br>vamos a bañar.</h2><p class="lead">A un paseo, un Metromare o un bus de casa.</p></div></div>
  ${O.map(a=>`
  <section class="beach" data-dark aria-label="${a.h}">
    <div class="beach-img">${u(a.k,a.h,"100vw")}</div>
    <div class="beach-txt"><small>${k.pin.replace("<svg",'<svg style="width:16px;height:16px"')}${a.where}</small><h3>${a.h}</h3><p>${a.p}</p><div class="beach-facts">${a.f.map(e=>`<span>${e}</span>`).join("")}</div></div>
  </section>`).join("")}
</div>

<section class="s5" id="noche" data-dark aria-label="La fiesta">
  <div class="wrap">
    <div class="grid-l">
      <div>
        <p class="kicker">La fiesta</p>
        <h2 class="s5-title">Y de noche,<span>la Riviera.</span></h2>
        <p class="lead" style="color:#C9D8E2">La zona de discotecas más famosa de Italia: Cocoricò y Peter Pan en Riccione, Coconuts en Rimini y el lungomare lleno de bares. Miles de jóvenes italianos de vacaciones.</p>
      </div>
      <div class="collage">
        <figure class="c1">${u("beachnight","Sombrillas de Rimini de noche","60vw")}<figcaption>Rimini de noche</figcaption></figure>
        <figure class="c2">${u("club","Ambiente de discoteca con láseres","50vw")}<figcaption>Foto ilustrativa</figcaption></figure>
        <figure class="c3">${u("grandhotel","Grand Hotel de Rimini iluminado","55vw")}<figcaption>Grand Hotel</figcaption></figure>
      </div>
    </div>
    <div class="nights">
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 1 · viernes 2 jul</span><div class="day">El club grande</div><p>Cocoricò o Peter Pan en Riccione, según el evento de ese viernes. Pre-copas en el piso para ahorrar.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 2 · sábado 3 jul</span><div class="day">Marina Centro</div><p>Coconuts y los bares del lungomare, a un paseo del piso y casi sin entrada.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 3 · lunes 5 jul</span><div class="day">La despedida</div><p>Atardecer en el puerto y bares del lungomare. Sin pasarse: el tren sale por la mañana.</p></div>
    </div>
    <div class="agechips" aria-label="Datos de la fiesta">
      <span class="agechip"><b class="a18">18+</b>Todos somos mayores de edad</span>
      <span class="agechip"><b class="a18">0–40 €</b>Entrada según el sitio</span>
      <span class="agechip"><b class="a18">60 €</b>Las 3 noches en el presupuesto</span>
    </div>
    <p style="margin-top:26px"><a class="btn" href="fiesta.html">Ver la página de fiesta ${k.right}</a></p>
  </div>
</section>

<section class="s6" id="coste" aria-label="Lo que cuesta">
  <div class="wrap">
    <p class="kicker">Lo que nos va a costar · máximo 650 €</p>
    <p class="big-price"><span data-count="${n.pp}">${n.pp}</span><small> €</small></p>
    <p class="cost-sub">Por persona y todo incluido: vuelo directo, 7 noches de piso, minibús y trenes, comida, playa, Aquafan, San Marino, tres noches de fiesta, seguro e imprevistos. Solo con mochila.</p>
    <div class="split">
      <div class="split-row"><header><span>Se paga antes del viaje<br><span class="small muted">vuelos + piso</span></span><b>${n.before} €</b></header><div class="bar"><i style="width:${Math.round(n.before/n.pp*100)}%;background:var(--sea)"></i></div></div>
      <div class="split-row"><header><span>Lo que llevamos para gastar allí<br><span class="small muted">comida, transporte, planes, fiesta</span></span><b>${n.during} €</b></header><div class="bar"><i style="width:${Math.round(n.during/n.pp*100)}%;background:var(--lagoon)"></i></div></div>
    </div>
    <div class="vs">
      <div><span>Ahorrando al máximo</span><b>≈ ${n.min} €</b></div>
      <div class="on"><span>Recomendado</span><b>≈ ${n.pp} €</b></div>
      <div><span>Más cómodo</span><b>≈ ${P(n.max)} €</b></div>
    </div>
    <p class="small muted" style="margin-top:18px">Grupo de 7: ≈ ${P(n.group)} €. Vuelos comprobados en Ryanair y piso en Airbnb para nuestras fechas el 17 nov 2026; el resto son estimaciones con precios de 2025–26. El recomendado cabe en 650 € con poco margen: hay que comprar los vuelos pronto.</p>
    <p style="margin-top:22px"><a class="btn" href="presupuesto.html">Ver todos los números ${k.right}</a></p>
  </div>
</section>

<section class="s7" id="final" data-dark aria-label="El final">
  <div class="s7-img">${u("dusk","La costa de Rimini al atardecer","100vw")}</div>
  <div class="s7-txt">
    <p class="l">Siete amigos.</p>
    <p class="l">Una semana en Italia.</p>
    <p class="s">29 de junio – 6 de julio de 2027. Un vuelo directo, una casa y la Riviera entera por delante. Los vuelos ya están a la venta: solo falta decir que sí.</p>
  </div>
</section>
<section class="go" data-dark aria-label="Explora el plan">
  <div class="wrap">
    <h2 class="h3" style="margin-bottom:18px">Todo el plan, página a página</h2>
    <div class="go-grid">${V.slice(1).map(a=>`<a href="${a.href}">${u(a.img,"","(min-width:720px) 33vw, 50vw")}<span><b>${a.title}</b><small>${a.sub}</small></span></a>`).join("")}</div>
    <div class="pendings"><b>Por decidir entre todos</b><ul>${D.map(a=>`<li>${a}</li>`).join("")}</ul></div>
  </div>
</section>`;G("inicio",z);const H=d("[data-dark]"),N=E.map(([a])=>document.getElementById(a));let R=0;function q(){R=0;const a=60,e=H.some(o=>{const l=o.getBoundingClientRect();return l.top<=a&&l.bottom>a});document.body.classList.toggle("is-night",e);let t=0;N.forEach((o,l)=>{o&&o.getBoundingClientRect().top<=innerHeight*.5&&(t=l)}),d("[data-scene]").forEach((o,l)=>o.classList.toggle("on",l===t)),c("[data-scene-name]").textContent=E[t][1],d(".scene-label i b").forEach((o,l)=>o.classList.toggle("on",l===t)),c(".scene-label").style.opacity=scrollY>innerHeight*.5?1:0}addEventListener("scroll",()=>{R||(R=requestAnimationFrame(q))},{passive:!0});q();const J=B(c("[data-stage]"),{desktop:"video/destino.mp4",mobile:"video/destino-m.mp4",posterD:"video/destino.webp",posterM:"video/destino-m.webp"}),U=d(".route-ph"),W=d(".route-stop"),X=d(".route-line li"),Y=c("[data-routebar]");let T=0;const Q=a=>{a!==T&&(T=a,U.forEach((e,t)=>e.classList.toggle("on",t===a)),W.forEach((e,t)=>e.classList.toggle("on",t===a)),X.forEach((e,t)=>e.classList.toggle("on",t<=a)))};if(C)c(".s3-track").style.overflowX="auto",c(".route").classList.add("static");else{r.from(".s1-title .l1 span",{yPercent:105,duration:1.2,ease:"expo.out",stagger:.06,delay:.1}),r.from(".s1-pre, .s1-title .l2, .s1-sub",{y:30,opacity:0,duration:1,ease:"power3.out",stagger:.12,delay:.55}),r.from(".s1-media img",{scale:1.22,duration:2.6,ease:"power2.out"});const a=innerWidth<720;r.timeline({scrollTrigger:{trigger:".s1",start:"top top",end:"+=120%",scrub:.6,pin:!0}}).to(".s1-media",{clipPath:a?"inset(12% 4% 22% 4% round 26px)":"inset(10% 7% 18% 7% round 34px)",ease:"none"},0).to(".s1-media img",{scale:1.12,ease:"none"},0).to(".s1-title",{yPercent:-18,opacity:0,ease:"power1.in"},0).to(".s1-cue",{opacity:0,duration:.2},0).to(".s1-ticket",{opacity:1,y:0,ease:"power2.out",duration:.5},.45).fromTo(".s1-ticket",{y:40},{y:0,duration:.5},.45),$.create({trigger:".route",start:"top top",end:()=>"+="+innerHeight*(g.length*.75),pin:!0,scrub:!0,onUpdate:i=>{const s=i.progress;Y.style.transform=`scaleY(${s})`,Q(Math.min(g.length-1,Math.floor(s*g.length))),U.forEach((m,p)=>{m.style.setProperty("--z",1.14-.14*Math.min(1,Math.max(0,s*g.length-p)))})}});const e=d(".s2-cap"),t=d(".s2-rail b"),o=e.length;$.create({trigger:".s2",start:"top top",end:"+=480%",pin:!0,scrub:!0,onUpdate:i=>{const s=i.progress;J.set(s),e.forEach((m,p)=>{const b=p/o,w=(p+1)/o,h=(s-b)/(w-b),y=h<0||h>1?0:Math.min(1,h*5,(1-h)*5+(p===o-1?9:0));m.style.opacity=y,m.style.transform=`translateY(${(1-Math.min(1,h*5))*24}px)`}),t.forEach((m,p)=>{m.style.transform=`scaleX(${Math.min(1,Math.max(0,s*o-p))})`})}});const l=c(".s3-track"),f=()=>Math.max(0,l.scrollWidth-innerWidth);r.to(l,{x:()=>-f(),ease:"none",scrollTrigger:{trigger:".s3",start:"top top",end:()=>"+="+f(),pin:!0,scrub:.5,invalidateOnRefresh:!0,onUpdate:i=>{c("[data-s3bar]").style.transform=`scaleX(${i.progress})`}}}),d(".beach").forEach(i=>{r.fromTo(c("img",i),{scale:1.28},{scale:1,ease:"none",scrollTrigger:{trigger:i,start:"top bottom",end:"top top",scrub:!0}}),r.from(c(".beach-txt",i).children,{y:40,opacity:0,stagger:.08,duration:.9,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 35%"}})}),[[".c1",-60],[".c2",80],[".c3",-30]].forEach(([i,s])=>r.to(i,{y:s,ease:"none",scrollTrigger:{trigger:".collage",start:"top bottom",end:"bottom top",scrub:!0}})),r.from(".s5-title",{y:60,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".s5",start:"top 70%"}});const M=c("[data-count]");$.create({trigger:".s6",start:"top 70%",once:!0,onEnter:()=>{const i={v:0};r.to(i,{v:n.pp,duration:1.6,ease:"power3.out",onUpdate:()=>{M.textContent=Math.round(i.v)}}),r.to(".split-row .bar i",{scaleX:1,duration:1.3,ease:"power3.out",stagger:.15,delay:.3}),r.from(".vs div",{y:30,opacity:0,duration:.8,stagger:.1,delay:.5,ease:"power3.out"})}}),r.timeline({scrollTrigger:{trigger:".s7",start:"top top",end:"+=100%",scrub:.6,pin:!0}}).fromTo(".s7-img img",{scale:1.25},{scale:1,ease:"none"},0).from(".s7-txt .l:nth-child(1)",{y:50,opacity:0,duration:.3},.05).from(".s7-txt .l:nth-child(2)",{y:50,opacity:0,duration:.3},.3).from(".s7-txt .s",{y:30,opacity:0,duration:.3},.55)}C&&(d(".split-row .bar i").forEach(a=>{a.style.transform="scaleX(1)"}),d(".s2-cap").forEach(a=>{a.style.opacity=1}),c(".s1-ticket").style.opacity=1);

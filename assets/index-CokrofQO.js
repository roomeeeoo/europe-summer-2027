import{i as w,T as r,a as u,P as z,u as K,m as D}from"./trip-Dz351KtT.js";import n from"./gsap-DRhTDw2I.js";import{ScrollTrigger as k}from"./ScrollTrigger-CcPJIpJ9.js";function G(a,{desktop:e,mobile:i,posterD:t,posterM:l}){const f=matchMedia("(max-width: 860px), (pointer: coarse)").matches&&innerHeight>=innerWidth*.9,S=f?i:e,o=f?l:t;a.insertAdjacentHTML("afterbegin",`
    <img class="scrub-poster" src="${o}" alt="" aria-hidden="true">
    <video class="scrub-video" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video>`);const s=a.querySelector("video"),m=a.querySelector(".scrub-poster");let p=0,b=!1,$=!1,h=!1;const y=()=>{if(!$||!s.duration)return;if(s.seeking){b=!0;return}const g=Math.min(s.duration-.04,Math.max(0,p*s.duration));Math.abs(s.currentTime-g)>.008&&(s.currentTime=g)};s.addEventListener("seeked",()=>{h||(h=!0,m.classList.add("gone")),b&&(b=!1,y())});const F=async()=>{try{const L=await(await fetch(S)).blob();s.src=URL.createObjectURL(L),await new Promise(R=>s.addEventListener("loadedmetadata",R,{once:!0})),$=!0,y()}catch{}},x=new IntersectionObserver(g=>{g.some(L=>L.isIntersecting)&&(x.disconnect(),F())},{rootMargin:"150% 0px"});x.observe(a);const M=()=>{s.play().then(()=>{s.pause(),y()}).catch(()=>{}),removeEventListener("touchstart",M)};return addEventListener("touchstart",M,{passive:!0}),{set(g){p=g,y()}}}n.registerPlugin(k);k.config({ignoreMobileResize:!0});const B=matchMedia("(prefers-reduced-motion: reduce)").matches,c=(a,e=document)=>e.querySelector(a),d=(a,e=document)=>[...e.querySelectorAll(a)],A=a=>a.toLocaleString("es-ES",{useGrouping:"always"});document.body.classList.add("home");const v=[{code:"LPA",k:"aerial",city:"Gran Canaria",when:"Mar 29 jun · 19:55",p:"Despegamos los siete. Solo mochila. Escala de una noche en Bérgamo."},{code:"CFU",k:"corfu",city:"Corfú",when:"Jue 1 jul",p:"Desayuno en Grecia y ferry a Albania: 30 minutos de mar."},{code:"SAR",k:"saranda",city:"Sarandë",when:"1 – 6 jul · 5 noches",p:"Nuestra casa toda la semana. Paseo marítimo, playa y fiesta a pie."},{code:"2 JUL",k:"ksamil2",city:"Ksamil",when:"Viernes 2 de julio",p:"El día marcado: islas a nado, Butrint y primera noche grande."},{code:"SÁB",k:"kakome",city:"Barco privado",when:"Sábado 3",p:"Calas sin carretera y snorkel. Por la noche, la noche fuerte."},{code:"DOM",k:"blueeye",city:"Ojo Azul",when:"Domingo 4",p:"El manantial azul y Gjirokastër, la ciudad de piedra."},{code:"LPA",k:"lekuresi",city:"Vuelta a casa",when:"Mar 6 jul · 19:20",p:"Ferry a Corfú y vuelo por Bérgamo. En casa para cenar."}],P=[{tag:"Ksamil",h:"Agua de Caribe.",p:"A 25 minutos en bus de nuestra casa. Las islas se cruzan nadando."},{tag:"Butrint",h:"2.500 años de historia.",p:"Una ciudad griega y romana escondida en un bosque, por 10 €."},{tag:"Syri i Kaltër",h:"El Ojo Azul.",p:"Un manantial que brota de 50 metros de profundidad. Entrada: 50 céntimos."},{tag:"Kakome",h:"Solo en barco.",p:"Calas sin carretera a media hora del puerto de Sarandë."},{tag:"Mirror Beach",h:"Piedra blanca, agua clara.",p:"Y todo a un bus de distancia. Sin cambiar de casa en toda la semana."},{tag:"Cada tarde",h:"Y así acaba cada día.",p:"Del 29 de junio al 6 de julio de 2027."}],C=[{k:"ksamil3",h:"Playas",p:"Ksamil, Mirror Beach, Kakome. Turquesa de verdad.",w:"5 playas"},{k:"kakome",h:"Barco privado",p:"Un barco solo para los 7, calas y snorkel.",w:"34–50 € cada uno"},{k:"blueeye2",h:"Ojo Azul",p:"El manantial más famoso de los Balcanes.",w:"50 céntimos"},{k:"butrint",h:"Butrint",p:"Ruinas Patrimonio de la Humanidad entre lago y mar.",w:"≈ 10 €"},{k:"saranda",h:"Una sola casa",p:"Cinco noches en el mismo piso. Sin maletas de un lado a otro.",w:"23 € por noche"},{k:"byrek",h:"Comida",p:"Byrek a 1 €, gyros a 3 € y pescado a la brasa.",w:"≈ 16 € al día"},{k:"sarandanight",h:"Fiesta",p:"Viernes, sábado y lunes en el paseo de Sarandë.",w:"3 noches"}],O=[{k:"ksamil1",h:"Islas de Ksamil",where:"Ksamil · 25 min en bus",p:"Llegamos pronto, antes que los barcos, y cruzamos nadando a los islotes.",f:["Gratis","Bus 200 lek","Viernes 2"]},{k:"kakome",h:"Kakome",where:"Costa de Sarandë",p:"Solo se llega en barco. Agua tan clara que el barco parece flotar.",f:["Barco privado","Snorkel","Sábado 3"]},{k:"ksamil5",h:"Mirror Beach",where:"Junto a Ksamil",p:"Una cala de piedra blanca con menos gente. El último día de playa.",f:["Gratis","Kayak ≈ 10 €","Lunes 5"]},{k:"lekuresi",h:"Lëkurësi",where:"Sobre Sarandë",p:"El castillo desde el que se ve toda la bahía y Corfú al atardecer.",f:["Gratis","40 min a pie","Jueves 1"]}],E=[["portada","Portada"],["ruta","La ruta"],["destino","El destino"],["plan","El plan"],["playas","Playas"],["noche","Fiesta"],["coste","Lo que cuesta"],["final","El final"]],V=`
<div class="nightbg" aria-hidden="true"></div>
<nav class="scenes" aria-label="Escenas">${E.map(([a,e])=>`<a href="#${a}" data-scene="${a}"><span>${e}</span><i></i></a>`).join("")}</nav>
<div class="scene-label" aria-hidden="true"><span data-scene-name>Portada</span><i>${E.map(()=>"<b></b>").join("")}</i></div>

<section class="s1" id="portada" data-dark aria-label="Portada">
  <div class="s1-media">${u("ksamil3","Agua turquesa en Ksamil","100vw",!1)}</div>
  <div class="s1-title">
    <p class="s1-pre">7 amigos · Gran Canaria → Sarandë</p>
    <h1 aria-label="Europe Summer 2027"><span class="l1">${"ALBANIA".split("").map(a=>`<span>${a}</span>`).join("")}</span><span class="l2">EUROPE SUMMER 2027</span></h1>
    <p class="s1-sub">Un solo sitio. El Caribe de Europa a precio de hace 15 años.</p>
  </div>
  <a class="s1-cue" href="#ruta" aria-label="Empezar">${w.down}</a>
  <div class="s1-ticket" aria-label="Datos del viaje">
    <div><span>Cuándo</span><b>29 jun – 6 jul</b></div>
    <div><span>Ruta</span><b>LPA → CFU ⛴ SAR</b></div>
    <div><span>Quiénes</span><b>7 amigos</b></div>
    <div><span>Por persona</span><b>≈ ${r.pp} €</b></div>
  </div>
</section>

<section class="route" id="ruta" data-dark aria-label="La ruta">
  <div class="route-bg">${v.map((a,e)=>`<div class="route-ph ${e===0?"on":""}">${u(a.k,"","100vw")}</div>`).join("")}</div>
  <div class="route-ui wrap">
    <p class="kicker">La semana · una sola casa</p>
    <div class="route-codes">${v.map((a,e)=>`<div class="route-stop ${e===0?"on":""}"><b>${a.code}</b><h3>${a.city}</h3><span>${a.when}</span><p>${a.p}</p></div>`).join("")}</div>
    <ol class="route-line" aria-hidden="true"><i data-routebar></i>${v.map((a,e)=>`<li class="${e===0?"on":""}"><span>${a.code==="2 JUL"?"KSA":a.code}</span></li>`).join("")}</ol>
  </div>
</section>

<section class="s2" id="destino" data-dark aria-label="El destino">
  <div class="stage" data-stage></div>
  <div class="s2-intro"><p class="kicker">Sarandë y alrededores</p></div>
  <div class="s2-caps">${P.map(a=>`<div class="s2-cap"><small>${a.tag}</small><h3>${a.h}</h3><p>${a.p}</p></div>`).join("")}</div>
  <div class="s2-rail" aria-hidden="true">${P.map(()=>"<i><b></b></i>").join("")}</div>
</section>

<section class="s3" id="plan" aria-label="El plan">
  <div class="s3-head"><p class="kicker">El plan</p><h2 class="h2">Ocho días,<br>cero aburrimiento.</h2></div>
  <div class="s3-track">${C.map(a=>`<article class="exp">${u(a.k,"","(min-width:1040px) 380px, 76vw")}<div><h3>${a.h}</h3><p>${a.p}</p><span class="where">${a.w}</span></div></article>`).join("")}</div>
  <div class="s3-count"><span>Desliza</span><i><b data-s3bar></b></i><span>${C.length} planes</span></div>
</section>

<div id="playas">
  <div class="s4-intro"><div class="wrap"><p class="kicker">Las playas</p><h2 class="h2">Donde nos<br>vamos a bañar.</h2><p class="lead">Todas a un bus, un barco o un paseo de casa.</p></div></div>
  ${O.map(a=>`
  <section class="beach" data-dark aria-label="${a.h}">
    <div class="beach-img">${u(a.k,a.h,"100vw")}</div>
    <div class="beach-txt"><small>${w.pin.replace("<svg",'<svg style="width:16px;height:16px"')}${a.where}</small><h3>${a.h}</h3><p>${a.p}</p><div class="beach-facts">${a.f.map(e=>`<span>${e}</span>`).join("")}</div></div>
  </section>`).join("")}
</div>

<section class="s5" id="noche" data-dark aria-label="La fiesta">
  <div class="wrap">
    <div class="grid-l">
      <div>
        <p class="kicker">La fiesta</p>
        <h2 class="s5-title">Y de noche,<span>Sarandë.</span></h2>
        <p class="lead" style="color:#C9D8E2">Más de veinte bares-club seguidos en el paseo marítimo, abiertos hasta las cuatro. Casi todos sin entrada, la cerveza a 2–3 € y gente de toda Europa.</p>
      </div>
      <div class="collage">
        <figure class="c1">${u("sarandanight","Paseo marítimo de Sarandë de noche","60vw")}<figcaption>Sarandë de noche</figcaption></figure>
        <figure class="c2">${u("club","Ambiente de discoteca con láseres","50vw")}<figcaption>Foto ilustrativa</figcaption></figure>
        <figure class="c3">${u("sarandanight2","Sarandë de noche desde la playa","55vw")}<figcaption>El paseo</figcaption></figure>
      </div>
    </div>
    <div class="nights">
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 1 · viernes 2 jul</span><div class="day">El día clave</div><p>Venimos de Ksamil. Pre-copas en el piso y pub crawl por el paseo: la mejor forma de conocer gente.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 2 · sábado 3 jul</span><div class="day">La noche fuerte</div><p>El sábado es el día con más ambiente en Sarandë. Orange, Bluz, Lost Seaside y las terrazas.</p></div>
      <div class="nightcard rv"><span class="small" style="color:#FF8FA3">Noche 3 · lunes 5 jul</span><div class="day">La despedida</div><p>Última noche en el paseo después del barco al atardecer. Sin pasarse: el ferry sale temprano.</p></div>
    </div>
    <div class="agechips" aria-label="Edad mínima">
      <span class="agechip"><b class="a18">18+</b>Todos somos mayores de edad</span>
      <span class="agechip"><b class="a18">0–10 €</b>Entrada habitual</span>
      <span class="agechip"><b class="a18">A pie</b>Todo a 5–10 min de casa</span>
    </div>
    <p style="margin-top:26px"><a class="btn" href="fiesta.html">Ver la página de fiesta ${w.right}</a></p>
  </div>
</section>

<section class="s6" id="coste" aria-label="Lo que cuesta">
  <div class="wrap">
    <p class="kicker">Lo que nos va a costar</p>
    <p class="big-price"><span data-count="${r.pp}">${r.pp}</span><small> €</small></p>
    <p class="cost-sub">Por persona y todo incluido: 4 vuelos, 5 noches en Sarandë y 2 de paso, dos ferris, buses, comida, barco, excursiones, tres noches de fiesta, seguro e imprevistos. Solo con mochila.</p>
    <div class="split">
      <div class="split-row"><header><span>Se paga antes del viaje<br><span class="small muted">vuelos + alojamientos</span></span><b>${r.before} €</b></header><div class="bar"><i style="width:${Math.round(r.before/r.pp*100)}%;background:var(--sea)"></i></div></div>
      <div class="split-row"><header><span>Lo que llevamos para gastar allí<br><span class="small muted">comida, ferry, buses, barco, fiesta</span></span><b>${r.during} €</b></header><div class="bar"><i style="width:${Math.round(r.during/r.pp*100)}%;background:var(--lagoon)"></i></div></div>
    </div>
    <div class="vs">
      <div><span>Ahorrando al máximo</span><b>≈ ${r.min} €</b></div>
      <div class="on"><span>Recomendado</span><b>≈ ${r.pp} €</b></div>
      <div><span>Más cómodo</span><b>≈ ${A(r.max)} €</b></div>
    </div>
    <p class="small muted" style="margin-top:18px">Grupo de 7: ≈ ${A(r.group)} €. Vuelos comprobados en Ryanair y alojamientos en Airbnb para nuestras fechas el 17 nov 2026; el resto son estimaciones con precios de 2025–26.</p>
    <p style="margin-top:22px"><a class="btn" href="presupuesto.html">Ver todos los números ${w.right}</a></p>
  </div>
</section>

<section class="s7" id="final" data-dark aria-label="El final">
  <div class="s7-img">${u("himarasunset","Atardecer en la Riviera albanesa","100vw")}</div>
  <div class="s7-txt">
    <p class="l">Siete amigos.</p>
    <p class="l">Un verano que no se repite.</p>
    <p class="s">29 de junio – 6 de julio de 2027. Una casa, siete amigos y el mar más azul de Europa. Los vuelos ya están a la venta: solo falta decir que sí.</p>
  </div>
</section>
<section class="go" data-dark aria-label="Explora el plan">
  <div class="wrap">
    <h2 class="h3" style="margin-bottom:18px">Todo el plan, página a página</h2>
    <div class="go-grid">${z.slice(1).map(a=>`<a href="${a.href}">${u(a.img,"","(min-width:720px) 33vw, 50vw")}<span><b>${a.title}</b><small>${a.sub}</small></span></a>`).join("")}</div>
    <div class="pendings"><b>Por decidir entre todos</b><ul>${K.map(a=>`<li>${a}</li>`).join("")}</ul></div>
  </div>
</section>`;D("inicio",V);const H=d("[data-dark]"),I=E.map(([a])=>document.getElementById(a));let j=0;function U(){j=0;const a=60,e=H.some(t=>{const l=t.getBoundingClientRect();return l.top<=a&&l.bottom>a});document.body.classList.toggle("is-night",e);let i=0;I.forEach((t,l)=>{t&&t.getBoundingClientRect().top<=innerHeight*.5&&(i=l)}),d("[data-scene]").forEach((t,l)=>t.classList.toggle("on",l===i)),c("[data-scene-name]").textContent=E[i][1],d(".scene-label i b").forEach((t,l)=>t.classList.toggle("on",l===i)),c(".scene-label").style.opacity=scrollY>innerHeight*.5?1:0}addEventListener("scroll",()=>{j||(j=requestAnimationFrame(U))},{passive:!0});U();const Y=G(c("[data-stage]"),{desktop:"video/destino.mp4",mobile:"video/destino-m.mp4",posterD:"video/destino.webp",posterM:"video/destino-m.webp"}),q=d(".route-ph"),J=d(".route-stop"),N=d(".route-line li"),W=c("[data-routebar]");let T=0;const X=a=>{a!==T&&(T=a,q.forEach((e,i)=>e.classList.toggle("on",i===a)),J.forEach((e,i)=>e.classList.toggle("on",i===a)),N.forEach((e,i)=>e.classList.toggle("on",i<=a)))};if(B)c(".s3-track").style.overflowX="auto",c(".route").classList.add("static");else{n.from(".s1-title .l1 span",{yPercent:105,duration:1.2,ease:"expo.out",stagger:.06,delay:.1}),n.from(".s1-pre, .s1-title .l2, .s1-sub",{y:30,opacity:0,duration:1,ease:"power3.out",stagger:.12,delay:.55}),n.from(".s1-media img",{scale:1.22,duration:2.6,ease:"power2.out"});const a=innerWidth<720;n.timeline({scrollTrigger:{trigger:".s1",start:"top top",end:"+=120%",scrub:.6,pin:!0}}).to(".s1-media",{clipPath:a?"inset(12% 4% 22% 4% round 26px)":"inset(10% 7% 18% 7% round 34px)",ease:"none"},0).to(".s1-media img",{scale:1.12,ease:"none"},0).to(".s1-title",{yPercent:-18,opacity:0,ease:"power1.in"},0).to(".s1-cue",{opacity:0,duration:.2},0).to(".s1-ticket",{opacity:1,y:0,ease:"power2.out",duration:.5},.45).fromTo(".s1-ticket",{y:40},{y:0,duration:.5},.45),k.create({trigger:".route",start:"top top",end:()=>"+="+innerHeight*(v.length*.75),pin:!0,scrub:!0,onUpdate:o=>{const s=o.progress;W.style.transform=`scaleY(${s})`,X(Math.min(v.length-1,Math.floor(s*v.length))),q.forEach((m,p)=>{m.style.setProperty("--z",1.14-.14*Math.min(1,Math.max(0,s*v.length-p)))})}});const e=d(".s2-cap"),i=d(".s2-rail b"),t=e.length;k.create({trigger:".s2",start:"top top",end:"+=480%",pin:!0,scrub:!0,onUpdate:o=>{const s=o.progress;Y.set(s),e.forEach((m,p)=>{const b=p/t,$=(p+1)/t,h=(s-b)/($-b),y=h<0||h>1?0:Math.min(1,h*5,(1-h)*5+(p===t-1?9:0));m.style.opacity=y,m.style.transform=`translateY(${(1-Math.min(1,h*5))*24}px)`}),i.forEach((m,p)=>{m.style.transform=`scaleX(${Math.min(1,Math.max(0,s*t-p))})`})}});const l=c(".s3-track"),f=()=>Math.max(0,l.scrollWidth-innerWidth);n.to(l,{x:()=>-f(),ease:"none",scrollTrigger:{trigger:".s3",start:"top top",end:()=>"+="+f(),pin:!0,scrub:.5,invalidateOnRefresh:!0,onUpdate:o=>{c("[data-s3bar]").style.transform=`scaleX(${o.progress})`}}}),d(".beach").forEach(o=>{n.fromTo(c("img",o),{scale:1.28},{scale:1,ease:"none",scrollTrigger:{trigger:o,start:"top bottom",end:"top top",scrub:!0}}),n.from(c(".beach-txt",o).children,{y:40,opacity:0,stagger:.08,duration:.9,ease:"power3.out",scrollTrigger:{trigger:o,start:"top 35%"}})}),[[".c1",-60],[".c2",80],[".c3",-30]].forEach(([o,s])=>n.to(o,{y:s,ease:"none",scrollTrigger:{trigger:".collage",start:"top bottom",end:"bottom top",scrub:!0}})),n.from(".s5-title",{y:60,opacity:0,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".s5",start:"top 70%"}});const S=c("[data-count]");k.create({trigger:".s6",start:"top 70%",once:!0,onEnter:()=>{const o={v:0};n.to(o,{v:r.pp,duration:1.6,ease:"power3.out",onUpdate:()=>{S.textContent=Math.round(o.v)}}),n.to(".split-row .bar i",{scaleX:1,duration:1.3,ease:"power3.out",stagger:.15,delay:.3}),n.from(".vs div",{y:30,opacity:0,duration:.8,stagger:.1,delay:.5,ease:"power3.out"})}}),n.timeline({scrollTrigger:{trigger:".s7",start:"top top",end:"+=100%",scrub:.6,pin:!0}}).fromTo(".s7-img img",{scale:1.25},{scale:1,ease:"none"},0).from(".s7-txt .l:nth-child(1)",{y:50,opacity:0,duration:.3},.05).from(".s7-txt .l:nth-child(2)",{y:50,opacity:0,duration:.3},.3).from(".s7-txt .s",{y:30,opacity:0,duration:.3},.55)}B&&(d(".split-row .bar i").forEach(a=>{a.style.transform="scaleX(1)"}),d(".s2-cap").forEach(a=>{a.style.opacity=1}),c(".s1-ticket").style.opacity=1);

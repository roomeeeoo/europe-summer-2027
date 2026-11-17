import '../styles/pages.css';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { img, status, head, maps } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { nightlife, partyCost } from '../data/trip.js';

const nights = [
  ['Noche 1', 'Viernes 2 de julio', 'Sarandë', 'El día marcado. Venimos de Ksamil y Butrint: ducha, cena en el piso, pre-copas y al paseo. Si ese día hay pub crawl, es la forma más fácil de conocer gente de toda Europa.', true],
  ['Noche 2', 'Sábado 3 de julio', 'Sarandë', 'La noche con más ambiente de la semana. Terrazas primero (Lost Seaside, rooftops) y clubs después (Orange, Bluz) hasta las 4.', true],
  ['Noche 3', 'Lunes 5 de julio', 'Sarandë', 'La despedida: barco al atardecer y última vuelta por el paseo. Volvemos a la 1–2: el ferry a Corfú sale temprano.', false],
];

const html = `
${pageHero('sarandanight', 'Página 6 · Fiesta', 'De noche', 'Tres noches en el paseo de Sarandë, a cinco minutos andando de casa. Todos somos mayores de 18.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#noches">Las 3 noches</a><a href="#sitios">Sitios</a><a href="#coste">Cuánto cuesta</a><a href="#seguridad">Volver seguros</a></div></nav>

<section class="sec" id="noches"><div class="wrap">
  ${head('Las tres noches', 'Viernes, sábado y la despedida.', 'No hay ningún festival grande esas fechas (Kala es en junio y Turtle Fest a finales de julio): son noches normales de temporada alta, que en Sarandë ya son mucho.')}
  <div class="photo-band rv">
    <figure>${img('sarandanight2', 'Sarandë de noche desde la playa', '(min-width:720px) 55vw, 58vw')}<figcaption>Sarandë de noche</figcaption></figure>
    <figure>${img('club', 'Ambiente de discoteca con láseres', '40vw')}<figcaption>Ilustrativa</figcaption></figure>
    <figure>${img('lekuresi', 'Sarandë al anochecer desde Lëkurësi', '40vw')}<figcaption>Antes de salir</figcaption></figure>
  </div>
  <div class="grid-3">${nights.map(([k, d, w, p, sure]) => `<div class="cmp ${sure ? 'on' : ''} rv"><span class="small">${k} · ${w}</span><h3 class="h3" style="margin-top:8px">${d}</h3><p class="small" style="margin:10px 0 0">${p}</p></div>`).join('')}</div>
</div></section>

<section class="sec" id="sitios"><div class="wrap">
  ${head('Los sitios', 'Música, precio y ambiente.', 'Datos de guías y reseñas de 2025–26. No encontramos ninguna noche dedicada al reguetón: la música es comercial, house, pop y éxitos albaneses, con algo de reguetón.')}
  <div class="venues">
    ${nightlife.map((v, i) => `
    <article class="venue ${i === 0 ? 'venue-top' : ''} rv">
      <div><h3 class="h3" style="font-size:1.6rem">${v.name}</h3><span class="where">${v.area}</span></div>
      <span class="age age-18" title="Edad">${v.age}</span>
      <dl>
        <div><dt>Música</dt><dd>${v.music}</dd></div>
        <div><dt>Entrada</dt><dd>${v.entry}</dd></div>
        <div><dt>Horario</dt><dd>${v.hours}</dd></div>
        <div><dt>Para nosotros</dt><dd>${v.fit}</dd></div>
      </dl>
      <p>${status('sec')}</p>
      <p><a class="link" href="${maps(v.name.split(' (')[0] + ' ' + v.area + ' Albania')}" target="_blank" rel="noopener">${icon.pin}Cómo llegar</a></p>
    </article>`).join('')}
  </div>
  <div class="note" style="margin-top:20px">${icon.id}<span>Llevar siempre el DNI original. Ningún local de Sarandë publica su política de edad. Siendo todos 18+, no debería haber problema.</span></div>
</div></section>

<section class="sec" id="coste"><div class="wrap">
  ${head('Cuánto cuesta', 'Una noche, por persona.', 'Con pre-copas del súper y volviendo andando: el paseo está a 5–10 min del piso.')}
  <div class="grid-2">
    <div><ul class="rows">${partyCost.map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('')}</ul>
      <ul class="rows"><li><span><b>Noche normal</b></span><b>15–25 €</b></li><li><span><b>Pub crawl + boat party</b></span><b>≈ 50 €</b></li><li><span><b>Barco al atardecer</b></span><b>20–30 €</b></li></ul>
      <p class="cap" style="color:#A9BFCD">${status('est')} En el presupuesto recomendado contamos 70 € para las tres noches.</p></div>
    <figure style="margin:0;border-radius:var(--r-l);overflow:hidden" class="rv">${img('lekuresi', 'Vistas de Sarandë desde el castillo de Lëkurësi', '(min-width:720px) 50vw, 100vw')}</figure>
  </div>
</div></section>

<section class="sec" id="seguridad"><div class="wrap">
  ${head('Volver seguros', 'Las reglas de la noche.', '')}
  <div class="grid-3">
    <div class="cmp rv"><h3 class="h4">Siempre en grupo</h3><p class="small">El piso está en Sarandë: se vuelve andando. Nadie se queda solo.</p></div>
    <div class="cmp rv"><h3 class="h4">Ojo con las copas</h3><p class="small">Pedir marcas conocidas: hay casos de alcohol adulterado y de copas manipuladas. No dejar la bebida.</p></div>
    <div class="cmp rv"><h3 class="h4">Efectivo y taxis</h3><p class="small">Llevar lek justos. No hay Bolt ni Uber; taxi solo con precio cerrado. No hay buses nocturnos.</p></div>
  </div>
</div></section>`;

mountPage('fiesta', html, { dark: true });
heroMotion();

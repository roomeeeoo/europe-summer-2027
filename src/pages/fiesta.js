import '../styles/pages.css';
import { mountPage, pageHero, heroMotion } from '../js/layout.js';
import { img, status, head, maps } from '../js/ui.js';
import { icon } from '../js/icons.js';
import { nightlife, partyCost } from '../data/trip.js';

const nights = [
  ['Noche 1', 'Viernes 2 de julio', 'Riccione', 'La noche grande. Cena y pre-copas en el piso y a un club de verdad: Cocoricò o Peter Pan, según quién pinche ese viernes. Bus nocturno o taxi compartido.', true],
  ['Noche 2', 'Sábado 3 de julio', 'Rimini', 'Al lado de casa: Coconuts y los bares de Marina Centro, con entrada barata o gratis y mucha gente joven.', true],
  ['Noche 3', 'Lunes 5 de julio', 'Rimini', 'La despedida: atardecer en el puerto y bares del lungomare. Volvemos a la 1–2: el tren sale por la mañana.', false],
];

const html = `
${pageHero('beachnight', 'Página 6 · Fiesta', 'De noche', 'La Riviera Romagnola es la zona de discotecas más famosa de Italia. Tres noches, todos mayores de 18.')}
<nav class="chips-nav" aria-label="Secciones"><div class="wrap"><a href="#noches">Las 3 noches</a><a href="#sitios">Sitios</a><a href="#coste">Cuánto cuesta</a><a href="#seguridad">Volver seguros</a></div></nav>

<section class="sec" id="noches"><div class="wrap">
  ${head('Las tres noches', 'Un club grande, Marina Centro y la despedida.', 'La Notte Rosa (la gran fiesta de la costa) suele ser a finales de junio, antes de que lleguemos. Aun así, a principios de julio la Riviera ya está llena: es temporada alta y fin de curso en Italia.')}
  <div class="photo-band rv">
    <figure>${img('beachnight', 'Sombrillas de Rimini de noche', '(min-width:720px) 55vw, 58vw')}<figcaption>Rimini de noche</figcaption></figure>
    <figure>${img('club', 'Ambiente de discoteca con láseres', '40vw')}<figcaption>Ilustrativa</figcaption></figure>
    <figure>${img('grandhotel', 'Grand Hotel de Rimini iluminado', '40vw')}<figcaption>Grand Hotel</figcaption></figure>
  </div>
  <div class="grid-3">${nights.map(([k, d, w, p, sure]) => `<div class="cmp ${sure ? 'on' : ''} rv"><span class="small">${k} · ${w}</span><h3 class="h3" style="margin-top:8px">${d}</h3><p class="small" style="margin:10px 0 0">${p}</p></div>`).join('')}</div>
</div></section>

<section class="sec" id="sitios"><div class="wrap">
  ${head('Los sitios', 'Música, precio y ambiente.', 'Precios orientativos de 2025–26: cada club cambia la entrada según el DJ o el evento. La programación de 2027 sale en primavera.')}
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
      <p>${status('est')}</p>
      <p><a class="link" href="${maps(v.name + ' ' + v.area.split(' (')[0] + ' Italia')}" target="_blank" rel="noopener">${icon.pin}Cómo llegar</a></p>
    </article>`).join('')}
  </div>
  <div class="note" style="margin-top:20px">${icon.id}<span>Llevar siempre el DNI original. Algunos clubs no dejan entrar en chanclas o pantalón corto de playa.</span></div>
</div></section>

<section class="sec" id="coste"><div class="wrap">
  ${head('Cuánto cuesta', 'Una noche, por persona.', 'Con pre-copas del súper en el piso: dentro, una copa cuesta 10–15 €.')}
  <div class="grid-2">
    <div><ul class="rows">${partyCost.map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('')}</ul>
      <ul class="rows"><li><span><b>Noche de club grande</b></span><b>30–45 €</b></li><li><span><b>Noche de bares / Coconuts</b></span><b>10–20 €</b></li></ul>
      <p class="cap" style="color:#A9BFCD">${status('est')} En el presupuesto recomendado contamos 60 € para las tres noches.</p></div>
    <figure style="margin:0;border-radius:var(--r-l);overflow:hidden" class="rv">${img('dusk', 'La costa de Rimini al anochecer', '(min-width:720px) 50vw, 100vw')}</figure>
  </div>
</div></section>

<section class="sec" id="seguridad"><div class="wrap">
  ${head('Volver seguros', 'Las reglas de la noche.', '')}
  <div class="grid-3">
    <div class="cmp rv"><h3 class="h4">Siempre en grupo</h3><p class="small">Ir y volver juntos. Desde Riccione, bus nocturno o taxi compartido entre 4.</p></div>
    <div class="cmp rv"><h3 class="h4">Ojo con las copas</h3><p class="small">No dejar la bebida sola. En las zonas de fiesta hay carteristas: móvil en el bolsillo delantero.</p></div>
    <div class="cmp rv"><h3 class="h4">Planear la vuelta</h3><p class="small">Mirar antes el horario del bus nocturno de 2027 y guardar el número de un taxi.</p></div>
  </div>
</div></section>`;

mountPage('fiesta', html, { dark: true });
heroMotion();

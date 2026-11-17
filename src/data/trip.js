// =========================================================
// EUROPE SUMMER 2027 · Rimini (Italia) — TODOS LOS DATOS
// Una sola base, 7 noches, máximo 650 € por persona. Precios consultados el 17 nov 2026.
// ok = comprobado · est = estimado · sec = guía/blog 2025–26
// Para cambiar un precio, una fecha o un texto, edita este archivo.
// =========================================================

export const TRIP = {
  name: 'Europe Summer 2027',
  dest: 'Rimini',
  people: 7,
  dates: '29 jun – 6 jul 2027',
  datesLong: 'Del martes 29 de junio al martes 6 de julio de 2027',
  pp: 644, group: 4508, min: 527, max: 850, cap: 650,
  before: 320, during: 324,
};

const ry = (o, d, date) => `https://www.ryanair.com/es/es/trip/flights/select?adults=7&teens=0&children=0&infants=0&dateOut=${date}&isReturn=false&originIata=${o}&destinationIata=${d}`;

// ---------------- Comparativa de destinos ----------------
// s = puntuaciones 1–5: playa/paisaje, aventura, fiesta, ambiente joven, precio total, facilidad sin coche
export const destinations = [
  { id: 'rim', rank: 1, name: 'Rimini', where: 'Riviera Romagnola · Italia', flight: '146 € (Bolonia)', ground: '≈ 475 €', total: '≈ 644 €', s: [4, 3, 5, 5, 5, 5], verdict: 'Ganador', note: 'Vuelo directo a Bolonia y 1 h hasta la playa. 15 km de arena, la mejor fiesta de Italia (Riccione, Cocoricò), San Marino y Aquafan. Cabe en 650 €.' },
  { id: 'opo', rank: 2, name: 'Oporto', where: 'Portugal', flight: '136 € directo', ground: '≈ 410–490 €', total: '≈ 545–655 €', s: [3, 3, 4, 4, 5, 5], verdict: '2ª opción', note: 'También cabe y el vuelo es el más barato, pero no es Italia, el Atlántico está a 17–19 °C y es más ciudad que playa.' },
  { id: 'jes', rank: 3, name: 'Jesolo · Lignano', where: 'Adriático · Italia', flight: '146 € (Bolonia)', ground: '≈ 490–645 €', total: '≈ 665–820 €', s: [4, 2, 5, 5, 3, 3], verdict: 'Justo', note: 'Buena fiesta y arena, pero 4–5 h de traslado y los pisos se alquilan de sábado a sábado.' },
  { id: 'gar', rank: 4, name: 'Lago de Garda', where: 'Italia', flight: '≈ 158 € (Malpensa)', ground: '≈ 650–840 €', total: '≈ 805–1.000 €', s: [4, 4, 3, 3, 2, 4], verdict: 'Se pasa', note: 'Gardaland y el lago, pero el alojamiento solo ya cuesta 250–350 € por persona.' },
  { id: 'lig', rank: 5, name: 'Liguria', where: 'Finale Ligure · Alassio', flight: '≈ 158 € (Malpensa)', ground: '≈ 690–840 €', total: '≈ 850–1.000 €', s: [5, 4, 2, 3, 1, 3], verdict: 'Se pasa', note: 'Playas preciosas, pero pisos a 300–400 € por persona y poca fiesta.' },
  { id: 'rom', rank: 6, name: 'Roma', where: 'Italia', flight: '≈ 348 €', ground: '—', total: '> 800 €', s: [1, 2, 4, 4, 1, 5], verdict: 'Vuelo caro', note: 'La vuelta del 5 de julio cuesta 260,99 € y no hay playa cerca sin coche.' },
  { id: 'mil', rank: 7, name: 'Milán', where: 'Italia', flight: '≈ 158 €', ground: '—', total: '≈ 750–850 €', s: [1, 1, 3, 3, 2, 5], verdict: 'Sin playa', note: 'En julio hace calor y la ciudad está medio vacía.' },
  { id: 'alb', rank: 8, name: 'Sarandë', where: 'Albania (plan anterior)', flight: '≈ 340 €', ground: '≈ 650 €', total: '≈ 986 €', s: [5, 5, 4, 4, 4, 4], verdict: 'Se pasa', note: 'Más exótico y barato allí, pero los vuelos con escala lo dejan muy por encima de 650 €.' },
];
export const scoreLabels = ['Playa y paisaje', 'Aventura', 'Fiesta', 'Ambiente joven', 'Precio total', 'Sin coche'];

// ---------------- Vuelos ----------------
export const flightLegs = [
  { leg: 'LPA → BLQ', code: 'FR3829', day: 'Mar 29 jun', time: '17:40 → 22:50', dur: '4 h 10', price: 79.99, url: ry('LPA', 'BLQ', '2027-06-29') },
  { leg: 'BLQ → LPA', code: 'FR3828', day: 'Mar 6 jul', time: '13:35 → 17:05', dur: '4 h 30', price: 65.69, url: ry('BLQ', 'LPA', '2027-07-06') },
];
export const flightTotal = 145.68;

export const flightOptions = [
  { id: 'B', best: true, name: 'Bolonia ida y vuelta', badge: 'Elegido', route: 'LPA ⇄ BLQ, directo', price: '145,68 €', real: '≈ 170 €', status: 'ok',
    out: 'Mar 29 jun 17:40 → 22:50', back: 'Mar 6 jul 13:35 → 17:05',
    pros: ['Directo, sin escalas', 'Rimini a 1 h en tren', 'Vuelta a media tarde: el último día no se pierde'], cons: ['Llega tarde: el primer día hace falta minibús (≈ 30 €)'] },
  { id: 'M', name: 'Milán Malpensa', badge: 'Más caro', route: 'LPA ⇄ MXP, directo', price: '158,23 €', real: '≈ 190 €', status: 'ok',
    out: 'Mar 29 jun 20:05 → 01:10', back: 'Mar 6 jul 16:05 → 19:30',
    pros: ['También directo'], cons: ['Llega a la 01:10', 'Rimini a 3–4 h en tren'] },
  { id: 'BG', name: 'Bérgamo ida, Bolonia vuelta', badge: 'Descartado', route: 'LPA → BGY · BLQ → LPA', price: '122,73 €', real: '≈ 150 €', status: 'ok',
    out: 'Mar 29 jun 19:55 → 01:05', back: 'Mar 6 jul 13:35 → 17:05',
    pros: ['23 € más barato en vuelos'], cons: ['Llega a la 01:05 y a 3 h de Rimini', 'Noche extra o taxi caro: se come el ahorro'] },
];

// ---------------- Alojamiento (precios reales, 7 adultos, 29 jun – 6 jul) ----------------
export const stays = [
  { id: 'rim', best: true, night: 'Mar 29 jun – mar 6 jul · 7 noches', place: 'Rimini', img: 'beach3', pick: 'Apartamento cerca de la playa y de las actividades de Rímini', total: 1050, pp: 150, beds: '5 camas · 2 baños', rating: '4,5 (18) · Airbnb', why: 'Toda la semana en el mismo piso, cerca de la playa y del centro. A 21,43 € por persona y noche, con cocina y cancelación gratuita.', status: 'ok', url: 'https://www.airbnb.es/rooms/13717404',
    alts: [['Cattolica, junto al mar · 3 camas · 4,86 (sin cancelación gratuita)', 830, 'https://www.airbnb.es/rooms/925855599681759291'], ['Residence Royal (Miramare) · Booking · 7,8', 1100, 'https://www.booking.com/hotel/it/residence-royal-miramare-di-rimini.es.html'], ['Riccione, a 50 m del mar · 5 camas · 4,95', 1352, 'https://www.airbnb.es/rooms/1151391084329115775'], ['Hotel Jana Marina Centro, con desayuno · 8,2', 1434, 'https://www.booking.com/hotel/it/jana.es.html']] },
];
export const staysTotal = { group: 1050, pp: 150 };

// ---------------- Itinerario ----------------
export const days = [
  { id: 'd1', n: 1, date: 'Mar 29 jun', title: 'Despegamos', where: 'Gran Canaria → Bolonia → Rimini', img: 'bologna', cost: '≈ 30 €', blocks: [
    { t: '15:30', what: 'Aeropuerto de Gran Canaria', how: 'Check-in online hecho. Solo mochila.', dur: '2 h' },
    { t: '17:40', what: 'Vuelo directo FR3829 a Bolonia', how: 'Cena antes de embarcar o bocata en el avión.', dur: '4 h 10' },
    { t: '23:15', what: 'Minibús a Rimini', how: 'A esa hora ya no hay tren útil: minibús reservado para los 7 (≈ 180–260 € en total). Llegada ≈ 00:30, check-in autónomo.', dur: '1 h 15', map: 'Rimini Marina Centro' },
  ], planB: 'Si el vuelo se retrasa mucho, el minibús espera (pactarlo al reservar).' },
  { id: 'd2', n: 2, date: 'Mié 30 jun', title: 'Primer día de playa', where: 'Rimini Marina Centro', img: 'beach', cost: '≈ 20 €', blocks: [
    { t: '10:00', what: 'Compra grande', how: 'Supermercado (Conad, Lidl, Eurospin) para toda la semana: bote común.', dur: '1 h' },
    { t: '11:30', what: 'Playa', how: 'Spiaggia libera junto al puerto o en Rivabella: gratis. Si queremos sombrilla, 18–30 € el set para todo el día.', dur: '5 h', map: 'Spiaggia libera Rimini porto' },
    { t: '19:00', what: 'Centro histórico y aperitivo', how: 'Puente de Tiberio (2.000 años, en uso), Arco de Augusto y Piazza Cavour. Aperitivo con picoteo incluido.', dur: '3 h', map: 'Ponte di Tiberio Rimini' },
  ], planB: 'Si llueve: centro histórico y Museo della Città.' },
  { id: 'd3', n: 3, date: 'Jue 1 jul', title: 'Aquafan', where: 'Riccione', img: 'aquafan', cost: '≈ 40 €', blocks: [
    { t: '10:00', what: 'Metromare a Riccione', how: 'Bus rápido por carril propio, ≈ 1,50–2 € el trayecto.', dur: '20 min', map: 'Metromare Rimini' },
    { t: '10:30', what: 'Aquafan', how: 'El parque acuático más famoso de Italia. Entrada ≈ 28–35 € (comprar online).', dur: '6 h', map: 'Aquafan Riccione' },
    { t: '19:00', what: 'Viale Ceccarini', how: 'La calle de moda de Riccione: paseo, gelato y ambiente.', dur: '2 h', map: 'Viale Ceccarini Riccione' },
  ], planB: 'Si hace mal día: Italia in Miniatura o día de playa más tranquilo.' },
  { id: 'd4', n: 4, date: 'Vie 2 jul', title: 'El día grande', where: 'Playa + club', img: 'beach2', key: true, party: true, cost: '≈ 45 €', blocks: [
    { t: '11:00', what: 'Playa y patín (pedalò) o SUP', how: 'Alquiler entre varios, ≈ 10–15 € la hora.', dur: '5 h' },
    { t: '20:00', what: 'Cena en el piso y pre-copas', how: 'Ahorro: las copas en club cuestan 10–15 €.', dur: '2 h' },
    { t: '00:00', what: 'Fiesta 1 · club de la Riviera', how: 'Cocoricò o Peter Pan en Riccione (≈ 20–40 €) o Altromondo. Bus nocturno o taxi compartido.', dur: 'hasta las 5' },
  ], planB: 'Si el club grande no tiene evento ese viernes: Coconuts en Rimini (0–10 €).' },
  { id: 'd5', n: 5, date: 'Sáb 3 jul', title: 'Playa y lungomare', where: 'Rimini', img: 'beachnight', party: true, cost: '≈ 25 €', blocks: [
    { t: '12:00', what: 'Playa sin prisa', how: 'Recuperar. Piadina a mediodía (4–7 €).', dur: '5 h' },
    { t: '23:00', what: 'Fiesta 2 · Marina Centro', how: 'Coconuts y los bares del lungomare: lo más animado de Rimini y casi sin entrada.', dur: 'hasta las 4', map: 'Coconuts Rimini' },
  ], planB: 'Si alguien quiere más: Byblos o Villa delle Rose (Misano).' },
  { id: 'd6', n: 6, date: 'Dom 4 jul', title: 'San Marino', where: 'Otro país, a 50 min', img: 'sanmarino', cost: '≈ 20 €', blocks: [
    { t: '10:00', what: 'Bus a San Marino', how: 'Desde la estación de Rimini, ≈ 5–6 € cada trayecto, unos 50 min.', dur: '50 min', map: 'Rimini railway station' },
    { t: '11:00', what: 'Torres de Guaita y miradores', how: 'Una república medieval en lo alto del monte Titano con vistas a toda la costa.', dur: '5 h', map: 'Guaita San Marino' },
    { t: '18:00', what: 'Vuelta y noche tranquila', how: 'Cena en casa.', dur: '1 h' },
  ], planB: 'Alternativa: Bolonia o Rávena en tren (1 h).' },
  { id: 'd7', n: 7, date: 'Lun 5 jul', title: 'Bicis y despedida', where: 'Lungomare · Porto', img: 'dusk', party: true, cost: '≈ 30 €', blocks: [
    { t: '10:00', what: 'Bicis por el lungomare', how: 'Alquiler ≈ 7–12 € el día. Kilómetros de paseo junto al mar.', dur: '3 h', map: 'Lungomare Rimini' },
    { t: '15:00', what: 'Última tarde de playa', how: 'Y atardecer en el muelle del puerto (la Palata).', dur: '4 h', map: 'Porto canale Rimini' },
    { t: '22:30', what: 'Fiesta 3 · despedida', how: 'Bares del lungomare. Sin pasarse: el tren sale por la mañana.', dur: 'hasta la 1–2' },
  ], planB: 'Si alguien prefiere: Mirabilandia (≈ 30–40 €).' },
  { id: 'd8', n: 8, date: 'Mar 6 jul', title: 'Vuelta a casa', where: 'Rimini → Bolonia → Gran Canaria', img: 'porto', cost: '≈ 23 €', blocks: [
    { t: '08:30', what: 'Tren a Bolonia', how: 'Regional o Frecciarossa, ≈ 10 € y 1 h. Salir entre las 08:00 y las 09:15.', dur: '1 h', map: 'Rimini railway station' },
    { t: '10:30', what: 'Marconi Express', how: 'Tren de la estación al aeropuerto: 12,80 €, 8 min.', dur: '10 min', map: 'Bologna Centrale' },
    { t: '13:35', what: 'Vuelo FR3828 a Gran Canaria', how: 'Llegada 17:05.', dur: '4 h 30' },
  ], planB: 'Con solo mochila y el tren de las 08:00 hay más de 3 h de margen.' },
];

// ---------------- Mapa ----------------
export const mapCategories = {
  stay: { label: 'Dormimos', color: '#06324F' },
  beach: { label: 'Playas', color: '#12A6B5' },
  sight: { label: 'Visitas', color: '#C98A2B' },
  party: { label: 'Fiesta', color: '#E1262D' },
  port: { label: 'Transporte', color: '#5B6B7A' },
};
export const places = [
  { name: 'Nuestro piso (zona aproximada)', cat: 'stay', ll: [44.0640, 12.5780], img: 'beach3', info: '7 noches, cerca de la playa.', price: '1.050 € (7)' },
  { name: 'Spiaggia libera del puerto', cat: 'beach', ll: [44.0760, 12.5660], img: 'beach2', info: 'Playa gratis.', price: 'Gratis' },
  { name: 'Playa de Riccione', cat: 'beach', ll: [44.0000, 12.6580], img: 'riccionebeach', info: 'Junto a Viale Ceccarini.', price: 'Gratis / sombrilla' },
  { name: 'Puente de Tiberio', cat: 'sight', ll: [44.0627, 12.5617], img: 'tiberio', info: 'Puente romano del año 21.', price: 'Gratis' },
  { name: 'Arco de Augusto', cat: 'sight', ll: [44.0565, 12.5693], img: 'arco', info: 'Puerta romana del 27 a. C.', price: 'Gratis' },
  { name: 'Aquafan', cat: 'sight', ll: [43.9840, 12.6620], img: 'aquafan', info: 'Parque acuático. Jueves 1.', price: '≈ 28–35 €' },
  { name: 'San Marino', cat: 'sight', ll: [43.9336, 12.4497], img: 'sanmarino', info: 'Domingo 4.', price: 'Bus ≈ 5–6 €' },
  { name: 'Coconuts (Marina Centro)', cat: 'party', ll: [44.0705, 12.5770], img: 'beachnight', info: 'Sábado 3.', price: '0–10 €' },
  { name: 'Clubs de Riccione (Cocoricò, Peter Pan)', cat: 'party', ll: [43.9860, 12.6560], img: 'club', info: 'Viernes 2.', price: '≈ 20–40 €' },
  { name: 'Estación de Rimini', cat: 'port', ll: [44.0628, 12.5703], img: 'porto', info: 'Trenes a Bolonia y bus a San Marino.', price: '' },
  { name: 'Puerto canal', cat: 'port', ll: [44.0710, 12.5730], img: 'dusk', info: 'Atardecer del lunes.', price: '' },
];

// ---------------- Playas y aventuras ----------------
export const spots = [
  { img: 'beach', name: 'Rimini Marina Centro', score: 5, verdict: 'Nuestra playa', why: 'Arena fina, agua tranquila y poco profunda, y todo a un paseo del piso.', how: 'A pie', price: 'Gratis / set 18–30 €', time: 'Todos los días' },
  { img: 'beach2', name: 'Spiaggia libera del puerto', score: 4, verdict: 'Gratis', why: 'Tramo de playa pública sin hamacas: toalla y listo.', how: 'A pie', price: 'Gratis', time: 'Mié 30' },
  { img: 'riccionebeach', name: 'Riccione', score: 4, verdict: 'Muy buena', why: 'La playa más "de moda" de la Riviera, junto a Viale Ceccarini.', how: 'Metromare', price: 'Gratis / sombrilla', time: 'Jue 1' },
  { img: 'beach3', name: 'Rivabella y Viserba', score: 3, verdict: 'Más tranquilas', why: 'Al norte del puerto, con más tramos libres y menos gente.', how: 'A pie o bici', price: 'Gratis', time: 'Cuando queramos' },
];

export const trips = [
  { img: 'aquafan2', name: 'Aquafan', verdict: 'Merece la pena', what: 'El parque acuático más famoso de Italia, con toboganes y fiestas en la piscina.', price: '≈ 28–35 €', time: 'Día entero', how: 'Metromare hasta Riccione + bus o 20 min a pie.', status: 'est', tip: 'Comprar online antes: suele ser más barato.' },
  { img: 'sanmarino2', name: 'San Marino', verdict: 'Merece la pena', what: 'Tercer país más pequeño de Europa, con tres torres en lo alto de un monte.', price: 'Bus ≈ 5–6 € cada trayecto', time: 'Media jornada o día', how: 'Bus desde la estación de Rimini, ≈ 50 min.', status: 'est', tip: 'Las vistas desde la Guaita son gratis.' },
  { img: 'tiberio2', name: 'Centro histórico de Rimini', verdict: 'Gratis', what: 'Puente de Tiberio, Arco de Augusto, Piazza Cavour y el barrio de San Giuliano.', price: 'Gratis', time: '2–3 h', how: 'A pie o en bici.', status: 'ok', tip: 'Al atardecer, con aperitivo en el borgo San Giuliano.' },
  { img: 'riccione', name: 'Riccione y Viale Ceccarini', verdict: 'Merece la pena', what: 'La calle de las compras y el paseo de la Riviera.', price: 'Metromare ≈ 1,50–2 €', time: 'Tarde', how: 'Metromare, 20 min.', status: 'est', tip: 'Combinar con Aquafan el mismo día.' },
];

export const extras = [
  { img: 'lungomare', name: 'Mirabilandia', price: 35, worth: 'Parque de atracciones con montañas rusas.', status: 'est' },
  { img: 'ruota', name: 'Noria del puerto', price: 8, worth: 'Vistas de toda la playa.', status: 'est' },
  { img: 'beach2', name: 'Pedalò o SUP', price: 5, worth: 'Alquiler repartido entre varios.', status: 'est' },
  { img: 'bologna', name: 'Día en Bolonia o Rávena', price: 20, worth: 'Tren 1 h. Bolonia: comida; Rávena: mosaicos.', status: 'est' },
  { img: 'club', name: 'Segundo club grande', price: 30, worth: 'Si queremos otra noche de discoteca de verdad.', status: 'est' },
];

// ---------------- Comida ----------------
export const foodPrices = [
  ['Piadina', '4–7 €'],
  ['Pizza al taglio', '2–4 € la porción'],
  ['Aperitivo con picoteo', '6–10 €'],
  ['Menú en trattoria', '12–18 €'],
  ['Gelato', '2,50–3,50 €'],
  ['Cerveza del súper', '≈ 1 €'],
];
export const foodBudget = [
  { name: 'Ahorro', week: 90, day: '≈ 11 €', how: 'Súper y cocinar en el piso casi siempre.' },
  { name: 'Recomendado', week: 100, day: '≈ 12,50 €', how: 'Súper + piadinas y pizza al taglio + un aperitivo.', rec: true },
  { name: 'Cómodo', week: 130, day: '≈ 16 €', how: 'Más comidas fuera y alguna trattoria.' },
];
export const foodTips = [
  'Compra grande el primer día: bote común de ≈ 30 € por persona.',
  'Supermercados baratos: Lidl y Eurospin. Conad para lo que falte.',
  'Piadina para comer en la playa: la comida típica de Romaña.',
  'El aperitivo (19–21 h) incluye picoteo: sirve de cena ligera.',
  'Agua del grifo potable: llevar botella rellenable.',
];
export const restaurants = [
  { img: 'piadina', name: 'Piadinerías', where: 'Por toda Rimini', what: 'Piadina rellena de jamón, squacquerone y rúcula.', price: '4–7 €', note: 'La comida de cada día.' },
  { img: 'tiberio', name: 'Aperitivo en San Giuliano', where: 'Borgo San Giuliano', what: 'Spritz con picoteo junto al Puente de Tiberio.', price: '6–10 €', note: 'El plan del primer atardecer.' },
  { img: 'bologna', name: 'Pizza al taglio', where: 'Marina Centro', what: 'Porciones para llevar a la playa o después de salir.', price: '2–4 €', note: 'Barato y rápido.' },
  { img: 'grandhotel', name: 'Trattoria', where: 'Centro', what: 'Pasta casera (strozzapreti, tagliatelle al ragù).', price: '12–18 €', note: 'Una cena especial.' },
];

// ---------------- Fiesta ----------------
export const nightlife = [
  { name: 'Cocoricò', area: 'Riccione', music: 'Electrónica y comercial; noches temáticas', entry: '≈ 20–40 € según evento', hours: '00:00–05:00', fit: 'La discoteca más famosa de Italia. Nuestra gran noche del viernes, si hay evento.', age: '18+' },
  { name: 'Peter Pan', area: 'Riccione', music: 'Comercial, house, reguetón algunas noches', entry: '≈ 15–35 €', hours: '00:00–05:00', fit: 'Alternativa al Cocoricò para el viernes.', age: '18+' },
  { name: 'Coconuts', area: 'Rimini Marina Centro', music: 'Comercial, latino', entry: '0–10 €', hours: '22:00–04:00', fit: 'El sábado, al lado de casa.', age: '18+' },
  { name: 'Altromondo Studios', area: 'Rimini (Miramare)', music: 'Comercial y DJ', entry: '≈ 15–35 €', hours: '00:00–05:00', fit: 'Otro clásico de la Riviera.', age: '18+' },
  { name: 'Bares del lungomare', area: 'Rimini', music: 'De todo', entry: '0 €', hours: 'Hasta las 2–3', fit: 'La noche de despedida del lunes.', age: '18+' },
];
export const partyCost = [
  ['Pre-copas del súper', '3–5 €'],
  ['Entrada a club grande', '20–40 €'],
  ['Entrada a Coconuts / bares', '0–10 €'],
  ['Copa en club', '10–15 €'],
  ['Bus nocturno / taxi compartido', '3–8 €'],
];

// ---------------- Presupuesto ----------------
export const scenarios = {
  cols: ['Ahorro máximo', 'Recomendado', 'Más cómodo'],
  rows: [
    ['Vuelos ida y vuelta', 160, 170, 180],
    ['Equipaje', 0, 0, 0],
    ['Alojamiento (7 noches)', 119, 150, 205],
    ['Tasa turística', 10, 14, 20],
    ['Traslados (minibús + tren)', 53, 53, 55],
    ['Transporte local', 15, 12, 20],
    ['Comida', 90, 100, 130],
    ['Playa (sombrillas)', 0, 10, 25],
    ['Actividades y excursiones', 15, 40, 70],
    ['Fiesta (3 noches)', 35, 60, 90],
    ['Seguro de viaje', 15, 15, 20],
    ['Imprevistos', 15, 20, 35],
  ],
  totals: [527, 644, 850],
};

// ---------------- Transporte ----------------
export const transport = [
  { name: 'Minibús aeropuerto de Bolonia → Rimini', price: '≈ 180–260 € (7)', what: 'Solo la noche de llegada: aterrizamos a las 22:50 y el último tren útil sale antes. Reservar con antelación.', status: 'est' },
  { name: 'Marconi Express', price: '12,80 €', what: 'Aeropuerto ↔ Bologna Centrale, 8 min, de 05:40 a 24:00.', status: 'ok' },
  { name: 'Tren Rimini ↔ Bolonia', price: '≈ 10 €', what: '≈ 1 h. Regional o Frecciarossa.', status: 'est' },
  { name: 'Metromare Rimini ↔ Riccione', price: '≈ 1,50–2 €', what: 'Bus rápido por carril propio, cada pocos minutos.', status: 'est' },
  { name: 'Bus a San Marino', price: '≈ 5–6 €', what: 'Desde la estación de Rimini, ≈ 50 min.', status: 'est' },
  { name: 'Bus nocturno / taxi', price: '≈ 3–8 €', what: 'Entre Rimini y los clubs de Riccione. Confirmar calendario 2027.', status: 'est' },
  { name: 'Bicis', price: '≈ 7–12 € / día', what: 'Lo más cómodo para moverse por el lungomare.', status: 'est' },
];

// ---------------- Info útil ----------------
export const keyFacts = [
  '<b>DNI en vigor</b> es suficiente: Italia es Schengen.',
  '<b>Tarjeta Sanitaria Europea</b> sí vale en Italia. Aun así, un seguro barato cubre retrasos y robos.',
  '<b>Roaming incluido</b>: el móvil funciona como en España.',
  '<b>Minibús de la primera noche</b> reservado antes: no hay tren a esa hora.',
  '<b>Solo mochila</b> 40×20×25 cm: gratis en los 2 vuelos.',
];
export const tips = [
  { t: 'Documentación', items: ['DNI en vigor.', 'Tarjeta de embarque descargada (check-in online).', 'Tarjeta Sanitaria Europea.'] },
  { t: 'Dinero', items: ['Euros: se paga con tarjeta casi en todas partes.', 'Llevar algo de efectivo para playa y bares.', '≈ 325 € por persona para allí.'] },
  { t: 'Seguridad', items: ['Rimini es tranquila, pero hay carteristas en zonas de fiesta.', 'Vigilar las copas.', 'Volver siempre en grupo.'] },
  { t: 'Alojamiento', items: ['Algunos pisos y hoteles no aceptan grupos de jóvenes o piden fianza: confirmarlo por escrito.', 'Pactar el check-in de medianoche.', 'Confirmar las camas para 7.'] },
  { t: 'Equipaje', items: ['Mochila de 40×20×25 cm gratis.', 'Toalla de playa y chanclas.', 'Ropa para salir (algunos clubs no dejan entrar en chanclas).'] },
  { t: 'Ahorro', items: ['Comprar los vuelos ya: el plan cabe en 650 € por solo 6 €.', 'Súper y piadinas.', 'Playa libre en vez de sombrilla.'] },
];
export const timeline = [
  { when: 'Noviembre–diciembre 2026', what: 'Decidir entre los 7 y comprar los 2 vuelos de Ryanair (Bolonia).' },
  { when: 'Diciembre 2026', what: 'Reservar el piso de Rimini (cancelación gratuita) y pactar llegada a medianoche.' },
  { when: 'Marzo–abril 2027', what: 'Reservar el minibús desde el aeropuerto de Bolonia.' },
  { when: 'Mayo–junio 2027', what: 'Mirar eventos de los clubs (Cocoricò, Peter Pan) para el viernes 2 y comprar Aquafan online.' },
  { when: 'Junio 2027', what: 'Seguro de viaje, check-in online y lista de la compra.' },
];
export const links = [
  ['Ryanair (vuelos)', 'https://www.ryanair.com/es/es'],
  ['Google Flights', 'https://www.google.com/travel/flights'],
  ['Trenitalia (trenes)', 'https://www.trenitalia.com/'],
  ['Marconi Express', 'https://www.marconiexpress.it/'],
  ['Turismo de Rimini', 'https://www.riminiturismo.it/'],
  ['Aquafan', 'https://www.aquafan.it/'],
  ['Mirabilandia', 'https://www.mirabilandia.it/'],
  ['Airbnb Rimini (29 jun – 6 jul, 7 adultos)', 'https://www.airbnb.es/s/Rimini--Italia/homes?checkin=2027-06-29&checkout=2027-07-06&adults=7'],
  ['Booking Rimini (mismas fechas)', 'https://www.booking.com/searchresults.es.html?ss=Rimini&checkin=2027-06-29&checkout=2027-07-06&group_adults=7&no_rooms=3'],
];
export const pending = [
  'Que todos podemos el 29 jun – 6 jul',
  'Piso de Rimini (1.050 €) o Cattolica (830 €, más barato)',
  'Qué club el viernes 2 (según eventos)',
  'Aquafan o Mirabilandia',
];

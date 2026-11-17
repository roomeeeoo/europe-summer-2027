// =========================================================
// EUROPE SUMMER 2027 · Riviera albanesa — TODOS LOS DATOS
// Precios consultados el 17 nov 2026. ok = comprobado · est = estimado · sec = guía/blog 2025–26
// Para cambiar un precio, una fecha o un texto, edita este archivo.
// =========================================================

export const TRIP = {
  name: 'Europe Summer 2027',
  dest: 'Riviera albanesa',
  people: 7,
  dates: '29 jun – 6 jul 2027',
  datesLong: 'Del martes 29 de junio al martes 6 de julio de 2027',
  route: 'LPA → BGY → CFU ⛴ SAR → HIM → TIA → BLQ → LPA',
  pp: 870, group: 6090, min: 663, max: 1385,
  before: 419, during: 451,
};

const ry = (o, d, date) => `https://www.ryanair.com/es/es/trip/flights/select?adults=7&teens=0&children=0&infants=0&dateOut=${date}&isReturn=false&originIata=${o}&destinationIata=${d}`;

// ---------------- Comparativa de destinos ----------------
// s = puntuaciones 1–5: playa/paisaje, aventura, fiesta, ambiente joven, precio en destino, facilidad sin coche
export const destinations = [
  { id: 'alb', rank: 1, name: 'Riviera albanesa', where: 'Sarandë · Ksamil · Himarë', flight: '190–240 €', ground: '≈ 630 €', total: '≈ 870 €', s: [5, 5, 3, 4, 5, 4], verdict: 'Ganador', note: 'Agua turquesa de Caribe, Ojo Azul, Butrint, calas a las que solo se llega en barco y precios de hace 15 años. Entramos por Corfú en ferry: tres países en un viaje.' },
  { id: 'alg', rank: 2, name: 'Algarve', where: 'Albufeira · Lagos · Portugal', flight: '150–240 €', ground: '500–750 €', total: '≈ 850–950 €', s: [4, 4, 4, 4, 2, 5], verdict: '2ª opción', note: 'Lo más fácil: Madrid con descuento de residente + Faro. Más ambiente español y reguetón. Pero alojamiento caro y a Benagil solo se entra con tour oficial.' },
  { id: 'cfu', rank: 3, name: 'Corfú', where: 'Kavos · Corfu Town · Grecia', flight: '215–270 €', ground: '450–650 €', total: '≈ 800–950 €', s: [4, 3, 5, 4, 3, 3], verdict: '3ª opción', note: 'Está en nuestra misma ruta de vuelos. Kavos es fiesta pura (público muy británico). Alojamiento más caro que en Albania.' },
  { id: 'bul', rank: 4, name: 'Sunny Beach', where: 'Costa del mar Negro · Bulgaria', flight: '220–280 €', ground: '300–450 €', total: '≈ 700–800 €', s: [3, 2, 5, 5, 5, 2], verdict: 'Solo fiesta', note: 'El más barato en destino y la fiesta más masiva, pero son ~7 h de bus desde Sofía en cada sentido y el paisaje no está al nivel.' },
  { id: 'mne', rank: 5, name: 'Montenegro', where: 'Budva · Kotor', flight: '300–400 €', ground: '460–720 €', total: '≈ 850–1.100 €', s: [4, 4, 4, 4, 3, 4], verdict: 'Buena, más cara', note: 'Bahía de Kotor espectacular y Top Hill en Budva (15–30 €). Vuelos sin comprobar vía Barcelona.' },
  { id: 'zrc', rank: 6, name: 'Zrće · Novalja', where: 'Isla de Pag · Croacia', flight: '200–260 €', ground: '625–1.035 €', total: '≈ 1.000–1.400 €', s: [3, 2, 5, 5, 2, 3], verdict: 'Festival', note: 'Hideout Festival suele caer justo sobre el 2 de julio (2026: 30 jun–3 jul). Fiesta brutal, pero entrada aparte y Croacia ya es cara.' },
  { id: 'spu', rank: 7, name: 'Split · Makarska', where: 'Dalmacia · Croacia', flight: '250–350 €', ground: '580–915 €', total: '≈ 950–1.250 €', s: [5, 4, 4, 4, 1, 4], verdict: 'Precioso y caro', note: 'Hvar, Makarska y la discoteca en una cueva (Deep). Precios casi como en España.' },
  { id: 'bud', rank: 8, name: 'Budapest + Balaton', where: 'Hungría', flight: '≈ 360–450 €', ground: '400–550 €', total: '≈ 850–1.000 €', s: [2, 2, 5, 5, 3, 5], verdict: 'Sin mar', note: 'Único directo desde LPA (362 € i/v). Gran fiesta, baños termales y lago, pero no hay playa de verdad.' },
  { id: 'ohr', rank: 9, name: 'Lago Ohrid', where: 'Macedonia del Norte', flight: '250–400 €', ground: '250–380 €', total: '≈ 600–750 €', s: [4, 3, 1, 2, 5, 3], verdict: 'Tranquilo', note: 'Precioso y baratísimo, pero casi sin vida nocturna y difícil de conectar.' },
  { id: 'zth', rank: 10, name: 'Zante (Laganas)', where: 'Grecia', flight: '≈ 415 €', ground: '450–650 €', total: '≈ 1.000–1.150 €', s: [5, 4, 5, 4, 3, 3], verdict: 'Vuelo caro', note: 'Navagio y la calle de Laganas, pero los vuelos desde Bérgamo obligan a dos noches más.' },
  { id: 'gal', rank: 11, name: 'Gallipoli (Salento)', where: 'Puglia · Italia', flight: '≈ 230–290 €', ground: '650–950 €', total: '≈ 950–1.250 €', s: [4, 2, 4, 4, 1, 3], verdict: 'Caro', note: 'Discotecas con entrada de 20–40 € y hamacas a 35–50 €. Público casi solo italiano.' },
  { id: 'ayn', rank: 12, name: 'Ayia Napa', where: 'Chipre', flight: '≈ 300 €', ground: '500–750 €', total: '≈ 850–1.100 €', s: [4, 3, 5, 5, 2, 3], verdict: 'Lejos', note: 'La mayor concentración de discotecas, pero vuelos largos y alojamiento caro en julio.' },
];
export const scoreLabels = ['Playas y paisaje', 'Aventura', 'Fiesta', 'Ambiente joven', 'Precio allí', 'Sin coche'];

// ---------------- Vuelos ----------------
export const flightLegs = [
  { leg: 'LPA → BGY', code: 'FR6090', day: 'Mar 29 jun', time: '19:55 → 01:05 (+1)', dur: '4 h 10', price: 57.04, url: ry('LPA', 'BGY', '2027-06-29') },
  { leg: 'BGY → CFU', code: 'FR4196', day: 'Mié 30 jun', time: '20:50 → 23:45', dur: '1 h 55', price: 35.99, url: ry('BGY', 'CFU', '2027-06-30') },
  { leg: 'TIA → BLQ', code: 'FR8410', day: 'Mar 6 jul', time: '08:30 → 10:10', dur: '1 h 40', price: 30.99, url: ry('TIA', 'BLQ', '2027-07-06') },
  { leg: 'BLQ → LPA', code: 'FR3828', day: 'Mar 6 jul', time: '13:35 → 17:05', dur: '4 h 30', price: 65.69, url: ry('BLQ', 'LPA', '2027-07-06') },
];
export const flightTotal = 189.71;

export const flightOptions = [
  { id: 'D', best: true, name: 'Entrar por Corfú, salir por Tirana', badge: 'Plan D', route: 'LPA–BGY–CFU ⛴ Sarandë … Tirana–BLQ–LPA', price: '189,71 €', real: '≈ 240 €', status: 'ok',
    out: 'Mar 29 jun 19:55 · noche en Bérgamo · mié 30 jun 20:50 a Corfú', back: 'Mar 6 jul 08:30 Tirana → Bolonia → 17:05 Gran Canaria',
    pros: ['La más barata comprobada', 'Sin el bus de 6–8 h Tirana–Sarandë a la ida', 'Corfú y Bérgamo de regalo'], cons: ['Ferry Corfú–Sarandë aparte (≈ 25–30 €)', 'Billetes separados: 3 h 25 de margen en Bolonia'] },
  { id: 'A1', name: 'Tirana ida y vuelta', badge: 'Plan A1', route: 'LPA–BGY–TIA · TIA–BLQ–LPA', price: '198,71 €', real: '≈ 250 €', status: 'ok',
    out: 'Mar 29 jun · noche en Bérgamo · mié 30 jun 16:20 a Tirana', back: 'Igual que el plan D',
    pros: ['Sin ferry', 'Noche extra en Tirana'], cons: ['Bus de 6,5–8 h hasta Sarandë (≈ 21 €)', 'Se pierde Corfú'] },
  { id: 'A2', name: 'Bolonia ida y vuelta', badge: 'Plan A2', route: 'LPA–BLQ–TIA · TIA–BLQ–LPA', price: '217,66 €', real: '≈ 270 €', status: 'ok',
    out: 'Mar 29 jun 17:40 a Bolonia · mié 30 jun 06:00 a Tirana (llega 07:30)', back: 'Igual que el plan D',
    pros: ['El más sencillo: un solo aeropuerto en Italia', 'Llegamos a Sarandë el mismo miércoles'], cons: ['Noche corta en Bolonia (vuelo a las 06:00)', '+28 € por persona'] },
  { id: 'B', name: 'Corfú ida y vuelta', badge: 'Plan B', route: 'LPA–BGY–CFU · CFU–BLQ–LPA', price: '213,71 €', real: '≈ 265 €', status: 'ok',
    out: 'Igual que el plan D', back: 'Lun 5 jul 12:40 Corfú → Bolonia · noche · mar 6 jul a Gran Canaria',
    pros: ['Dos ferris, sin bus a Tirana', 'Opción de una noche en Kavos'], cons: ['Un día menos en Albania', 'Noche en Bolonia a la vuelta'] },
  { id: 'C', name: 'Por Madrid (residente)', badge: 'Plan C', route: 'LPA–MAD–TIA · TIA–MAD–LPA', price: '≈ 215–240 €', real: 'residentes', status: 'est',
    out: 'Mié 30 jun MAD 07:50 → TIA (MAD–TIA solo mié, vie y dom)', back: 'Mié 7 jul TIA 11:20 → MAD · el MAD–LPA de Ryanair sale a las 06:20',
    pros: ['Descuento del 75 % en los tramos nacionales'], cons: ['Los tramos internacionales ya cuestan 172,98 €', 'No residentes: ≈ 324 €', 'Obliga a otra noche en Madrid'] },
];

// ---------------- Alojamiento (precios Airbnb, 7 adultos, fechas exactas) ----------------
const ab = id => `https://www.airbnb.es/rooms/${id}`;
export const stays = [
  { id: 'bgy', night: 'Mar 29 jun · 1 noche', place: 'Bérgamo (Orio al Serio)', img: 'bergamo', pick: 'Orio easy relax 24h Aeropuerto 3', total: 217, pp: 31, beds: '5 camas', rating: '4,78 (82)', why: 'Pegado al aeropuerto y con llegada 24 h: aterrizamos a la 01:05.', status: 'ok', url: ab('1005090086878253187'),
    alts: [['Residencia Il Carducci · 7 camas · 4,89', 257, ab('1362438723508102547')], ['AK Homes, casa entera · 7 camas · 4,94', 381, ab('1088426818323600096')]] },
  { id: 'cfu', night: 'Mié 30 jun · 1 noche', place: 'Corfu Town', img: 'corfu', pick: 'Hotel o hostal barato junto al puerto nuevo', total: 266, pp: 38, beds: '2–3 habitaciones', rating: '—', why: 'Llegamos a las 23:45 y el ferry sale por la mañana. En Airbnb no hay nada barato para 7: mejor 2–3 habitaciones de hotel sencillo.', status: 'est', url: 'https://www.booking.com/searchresults.es.html?ss=Corfu+Town&checkin=2027-06-30&checkout=2027-07-01&group_adults=7&no_rooms=3',
    alts: [] },
  { id: 'sar', best: true, night: 'Jue 1 – dom 4 jul · 3 noches', place: 'Sarandë', img: 'saranda', pick: 'Sol Levante House', total: 480, pp: 68.6, beds: '3 dormitorios · 6 camas · 2 baños', rating: '4,85 (68) · Superanfitrión', why: 'La base perfecta: Sarandë es el centro de buses, del ferry y de la fiesta. Ksamil está a 25 min en bus.', status: 'ok', url: ab('821027935673155424'),
    alts: [['JB, 3 dormitorios con vistas al mar · 4,92', 548, ab('49522589')], ['Ático Juliano · 6 camas, 1 baño · 4,72', 605, ab('20319796')], ['Apartamento de lujo 3 dormitorios · 4,88', 720, ab('912826204055551899')], ['Villa Sunrise Panorama · 4,96', 873, ab('19468963')]] },
  { id: 'him', night: 'Dom 4 jul · 1 noche', place: 'Himarë', img: 'himara', pick: 'Hostel On The Hill (playa de Filikuri)', total: 147, pp: 21, beds: 'Habitación para 7 · 7 camas', rating: '4,75 (24)', why: 'Una habitación entera para nosotros, al lado de la playa.', status: 'ok', url: ab('1688295039563188118'),
    alts: [['Casa en Himarë · 5 camas · 4,79', 160, ab('1706718935088444477')], ['Apartamento a pie de playa · 8 camas · 5,0', 424, ab('618795970806278048')]] },
  { id: 'tia', night: 'Lun 5 jul · 1 noche', place: 'Tirana', img: 'tirana', pick: 'Nuestro apartamento', total: 131, pp: 18.7, beds: '6 camas', rating: '4,96 (53)', why: 'Céntrico, para salir por Blloku y coger el bus del aeropuerto a primera hora.', status: 'ok', url: ab('1575583025367367361'),
    alts: [['Emma Central, 2 dorm. y 2 baños · 6 camas', 70, ab('1520307898123593450')], ['oliva_vieja · 5 camas · 4,99 (196)', 122, ab('991304995958949238')]] },
];
export const staysTotal = { group: 1241, pp: 177 };

// ---------------- Itinerario ----------------
export const days = [
  { id: 'd1', n: 1, date: 'Mar 29 jun', title: 'Despegamos', where: 'Gran Canaria → Bérgamo', img: 'bergamo2', cost: '≈ 10 €', blocks: [
    { t: '17:30', what: 'Aeropuerto de Gran Canaria', how: 'Check-in online hecho. Solo mochila: directos al control.', dur: '2 h' },
    { t: '19:55', what: 'Vuelo FR6090 a Bérgamo', how: 'Cena del súper o bocata en el avión.', dur: '4 h 10' },
    { t: '01:05', what: 'Llegada a Orio al Serio', how: 'Al alojamiento junto al aeropuerto: andando o taxi corto (el bus ya no circula).', dur: '15 min', map: 'Orio al Serio' },
  ], planB: 'Si el vuelo se retrasa, el alojamiento tiene llegada 24 h.' },
  { id: 'd2', n: 2, date: 'Mié 30 jun', title: 'Bérgamo, gratis', where: 'Città Alta → Corfú', img: 'bergamo', cost: '≈ 20 €', blocks: [
    { t: '10:00', what: 'Città Alta', how: 'Bus al centro (≈ 2,60 €) y funicular a la ciudad alta. Piazza Vecchia, murallas venecianas (UNESCO) y vistas gratis.', dur: '4 h', map: 'Piazza Vecchia Bergamo' },
    { t: '14:00', what: 'Pizza al taglio y gelato', how: 'Comida barata antes de volver al aeropuerto.', dur: '1 h' },
    { t: '20:50', what: 'Vuelo FR4196 a Corfú', how: 'Llegada 23:45. Bus 15 o taxi al hotel junto al puerto nuevo (4 km).', dur: '1 h 55' },
  ], planB: 'Si llueve: Accademia Carrara o paseo por la ciudad baja con las tiendas.' },
  { id: 'd3', n: 3, date: 'Jue 1 jul', title: 'Grecia → Albania en barco', where: 'Corfú ⛴ Sarandë', img: 'corfu', cost: '≈ 45 €', blocks: [
    { t: '09:00', what: 'Corfu Town', how: 'Café y paseo por la ciudad vieja veneciana y la Fortaleza Vieja.', dur: '2 h 30', map: 'Old Fortress Corfu' },
    { t: '12:00', what: 'Ferry a Sarandë', how: 'Ionian Seaways o Finikas desde el puerto nuevo. 30–70 min. Llevar DNI o pasaporte.', dur: '1 h', map: 'New Port Corfu' },
    { t: '15:00', what: 'Check-in en Sarandë y primer baño', how: 'Compra grande en el Conad. Playa del paseo marítimo.', dur: '3 h', map: 'Sarandë promenade' },
    { t: '19:30', what: 'Atardecer en el castillo de Lëkurësi', how: 'Taxi o subida a pie (40 min). Las mejores vistas de Sarandë y Corfú.', dur: '2 h', map: 'Lëkurësi Castle' },
  ], planB: 'Si el ferry de mediodía va lleno, hay salidas cada 1–2 h hasta la tarde.' },
  { id: 'd4', n: 4, date: 'Vie 2 jul', title: 'El día: Ksamil', where: 'Ksamil · Butrint', img: 'ksamil3', key: true, party: true, cost: '≈ 55 €', blocks: [
    { t: '08:30', what: 'Bus a Ksamil', how: 'Bus urbano desde el paseo, 200 lek (≈ 2 €), cada hora. 25 min.', dur: '25 min', map: 'Ksamil' },
    { t: '09:00', what: 'Las islas de Ksamil', how: 'Pronto, antes de la gente. Se llega nadando (~100 m) o en kayak/barca. Tramos de playa pública gratis; hamacas 15–25 € el set.', dur: '4 h', map: 'Ksamil Islands' },
    { t: '15:30', what: 'Butrint', how: 'El mismo bus sigue hasta el parque (250 lek). Ciudad griega y romana en un bosque junto al lago. Entrada 1.000 lek (≈ 10 €).', dur: '2 h 30', map: 'Butrint National Park' },
    { t: '23:00', what: 'Fiesta 1 · viernes en el paseo', how: 'Pre-copas en el piso y pub crawl o bares-club del paseo marítimo hasta las 3–4.', dur: 'toda la noche' },
  ], planB: 'Si hace viento en Ksamil: Butrint por la mañana y playa de Mirror Beach por la tarde.' },
  { id: 'd5', n: 5, date: 'Sáb 3 jul', title: 'Barco privado', where: 'Calas escondidas', img: 'kakome', party: true, cost: '≈ 85 €', blocks: [
    { t: '10:30', what: 'Barco para los 7', how: 'Media jornada desde el puerto de Sarandë a Kakome y Krorëz, con snorkel. 240–350 € el barco (34–50 € cada uno).', dur: '4–5 h', map: 'Kakome Beach' },
    { t: '16:00', what: 'Siesta obligatoria', how: 'Hoy es la noche grande.', dur: '3 h' },
    { t: '23:30', what: 'Fiesta 2 · la noche fuerte', how: 'Sábado en el paseo: Orange Club, Bluz, Lost Seaside y las terrazas. Casi todo sin entrada.', dur: 'hasta las 4' },
  ], planB: 'Con mar movido, barco compartido más corto (18–40 €) o tarde en Ksamil.' },
  { id: 'd6', n: 6, date: 'Dom 4 jul', title: 'El Ojo Azul y rumbo norte', where: 'Syri i Kaltër → Himarë', img: 'blueeye', cost: '≈ 40 €', blocks: [
    { t: '09:00', what: 'Ojo Azul (Syri i Kaltër)', how: 'Bus hacia Gjirokastër (bajar en el desvío y 2 km a pie) o 2 taxis. Manantial azul imposible. Entrada 50 lek.', dur: '3 h', map: 'Blue Eye Albania' },
    { t: '14:00', what: 'Bus Sarandë → Himarë', how: 'Por la costa, ≈ 10 €, 1 h 30–2 h. Ojo: el último sale hacia las 18:00. Desde la nueva terminal de Qafë Gjashtë.', dur: '2 h' },
    { t: '20:00', what: 'Noche en Himarë', how: 'Cena de pescado y copas en los bares de la playa (Thea abre hasta las 3).', dur: 'tranquila' },
  ], planB: 'Si vamos justos: Ojo Azul en taxi compartido (≈ 30–40 € el coche, ida y vuelta).' },
  { id: 'd7', n: 7, date: 'Lun 5 jul', title: 'Gjipe y Tirana', where: 'Himarë → Tirana', img: 'gjipe', party: 'opt', cost: '≈ 50 €', blocks: [
    { t: '08:30', what: 'Gjipe', how: 'Taxi-barco desde Himarë (15–20 €): playa en la boca de un cañón, sin carretera. Alternativa: Porto Palermo.', dur: '4 h', map: 'Gjipe Beach' },
    { t: '13:30', what: 'Bus a Tirana', how: 'Por Vlorë. ≈ 5 h, ≈ 15 € (estimado: confirmar horario en verano 2027).', dur: '5 h' },
    { t: '22:00', what: 'Fiesta 3 · Blloku (opcional)', how: 'El barrio de moda de Tirana. Ropa de calle, nada de playa. Volver pronto: el vuelo es a las 08:30.', dur: 'hasta la 1' },
  ], planB: 'Plan más seguro: vuelo TIA→BLQ el lunes 16:45 (40,99 €) y noche en Bolonia.' },
  { id: 'd8', n: 8, date: 'Mar 6 jul', title: 'Vuelta a casa', where: 'Tirana → Bolonia → Gran Canaria', img: 'aerial', cost: '≈ 5 €', blocks: [
    { t: '06:00', what: 'Bus al aeropuerto', how: 'Rinas Express, 400 lek (≈ 4 €).', dur: '30 min', map: 'Tirana International Airport' },
    { t: '08:30', what: 'Vuelo FR8410 a Bolonia', how: 'Llegada 10:10. 3 h 25 de margen.', dur: '1 h 40' },
    { t: '13:35', what: 'Vuelo FR3828 a Gran Canaria', how: 'Aterrizamos a las 17:05.', dur: '4 h 30' },
  ], planB: 'Si TIA→BLQ se cancela, el siguiente BLQ→LPA es el sábado: por eso conviene un seguro con cobertura de conexiones.' },
];

// ---------------- Mapa ----------------
export const mapCategories = {
  stay: { label: 'Dormimos', color: '#0B3954' },
  beach: { label: 'Playas', color: '#12A6B5' },
  sight: { label: 'Visitas', color: '#C98A2B' },
  party: { label: 'Fiesta', color: '#E1262D' },
  port: { label: 'Aeropuertos y puertos', color: '#5B6B7A' },
};
export const places = [
  { name: 'Sarandë · Sol Levante House', cat: 'stay', ll: [39.8747, 20.0068], img: 'saranda', info: '3 noches. Centro de buses, ferry y fiesta.', price: '480 € las 3 noches (7)' },
  { name: 'Himarë · Hostel On The Hill', cat: 'stay', ll: [40.1035, 19.7380], img: 'himara', info: '1 noche junto a la playa de Filikuri.', price: '147 € (7)' },
  { name: 'Tirana', cat: 'stay', ll: [41.3275, 19.8187], img: 'tirana', info: '1 noche antes del vuelo.', price: '131 € (7)' },
  { name: 'Corfu Town', cat: 'stay', ll: [39.6243, 19.9217], img: 'corfu', info: '1 noche y paseo por la ciudad vieja.', price: '≈ 38 € pp (estimado)' },
  { name: 'Islas de Ksamil', cat: 'beach', ll: [39.7660, 19.9980], img: 'ksamil1', info: 'Se llega nadando o en kayak. El 2 de julio.', price: 'Gratis · hamacas 15–25 €' },
  { name: 'Kakome', cat: 'beach', ll: [39.8270, 20.0380], img: 'kakome', info: 'Cala solo accesible en barco.', price: 'Barco 34–50 € pp' },
  { name: 'Gjipe', cat: 'beach', ll: [40.1290, 19.6750], img: 'gjipe', info: 'Playa en la boca de un cañón.', price: 'Taxi-barco 15–20 €' },
  { name: 'Porto Palermo', cat: 'beach', ll: [40.0620, 19.7930], img: 'palermo', info: 'Castillo de Alí Pachá sobre una bahía.', price: 'Gratis' },
  { name: 'Ojo Azul (Syri i Kaltër)', cat: 'sight', ll: [39.9238, 20.1927], img: 'blueeye', info: 'Manantial de 50 m de profundidad.', price: '50 lek' },
  { name: 'Butrint', cat: 'sight', ll: [39.7456, 20.0206], img: 'butrint', info: 'Ciudad antigua, Patrimonio de la Humanidad.', price: '1.000 lek (≈ 10 €)' },
  { name: 'Castillo de Lëkurësi', cat: 'sight', ll: [39.8634, 20.0150], img: 'lekuresi', info: 'Atardecer sobre Sarandë y Corfú.', price: 'Gratis' },
  { name: 'Paseo marítimo de Sarandë', cat: 'party', ll: [39.8735, 20.0055], img: 'sarandanight', info: 'Bares-club hasta las 3–4. Viernes y sábado.', price: 'Entrada 0–10 €' },
  { name: 'Blloku, Tirana', cat: 'party', ll: [41.3200, 19.8150], img: 'tirana', info: 'El barrio de noche de Tirana.', price: '0–20 €' },
  { name: 'Puerto de Sarandë', cat: 'port', ll: [39.8736, 20.0080], img: 'ksamilboat', info: 'Llega el ferry de Corfú y salen los barcos.', price: 'Ferry ≈ 25–30 €' },
  { name: 'Aeropuerto de Corfú', cat: 'port', ll: [39.6019, 19.9117], img: 'corfu', info: 'Llegada mié 30 jun 23:45.', price: '' },
  { name: 'Aeropuerto de Tirana', cat: 'port', ll: [41.4147, 19.7206], img: 'tirana', info: 'Salida mar 6 jul 08:30.', price: '' },
];

// ---------------- Playas y aventuras ----------------
export const spots = [
  { img: 'ksamil3', name: 'Ksamil', score: 5, verdict: 'Imprescindible', why: 'El agua más turquesa de la costa y cuatro islotes a los que se llega nadando.', how: 'Bus 200 lek', price: 'Gratis / hamaca 15–25 €', time: 'Vie 2' },
  { img: 'gjipe', name: 'Gjipe', score: 5, verdict: 'Imprescindible', why: 'Una playa al final de un cañón, sin carretera. Solo a pie o en barco.', how: 'Taxi-barco desde Himarë', price: '15–20 €', time: 'Lun 5' },
  { img: 'kakome', name: 'Kakome y Krorëz', score: 5, verdict: 'Lo mejor del barco', why: 'Calas de piedra blanca y agua cristalina para hacer snorkel.', how: 'Barco privado', price: '34–50 € pp', time: 'Sáb 3' },
  { img: 'grama', name: 'Bahía de Grama', score: 4, verdict: 'Si hay dinero', why: 'Cala salvaje con inscripciones de marineros de hace 2.000 años.', how: 'Tour desde Himarë', price: '≈ 60 €', time: 'Opcional' },
  { img: 'palermo', name: 'Porto Palermo', score: 4, verdict: 'Plan B', why: 'Castillo de Alí Pachá y una base de submarinos de la Guerra Fría.', how: 'Taxi desde Himarë', price: 'Gratis', time: 'Lun 5' },
  { img: 'potam', name: 'Potam y Livadh', score: 3, verdict: 'Al llegar a Himarë', why: 'Las playas del pueblo: arena, bares y atardecer.', how: 'A pie', price: 'Gratis', time: 'Dom 4' },
];

export const trips = [
  { img: 'blueeye2', name: 'Ojo Azul (Syri i Kaltër)', verdict: 'Merece la pena', what: 'Un manantial de agua azul eléctrica que brota de 50 m de profundidad en mitad del bosque.', price: '50 lek + bus ≈ 4 €', time: 'Media mañana', how: 'Bus Sarandë–Gjirokastër (pedir parada en el desvío) + 2 km a pie, o taxi.', status: 'sec', tip: 'Bañarse en el ojo está prohibido; abajo, en el río, se puede meter los pies.' },
  { img: 'butrint2', name: 'Butrint', verdict: 'Merece la pena', what: 'Ciudad griega, romana y veneciana en una península entre lago y mar. Patrimonio de la Humanidad.', price: '1.000 lek (≈ 10 €)', time: '2–3 h', how: 'El mismo bus de Ksamil, 250 lek.', status: 'ok', tip: 'Ir a última hora de la tarde: menos calor y luz dorada.' },
  { img: 'kakome', name: 'Barco privado por la costa', verdict: 'El mejor plan del viaje', what: 'Un barco solo para nosotros: calas sin carretera, snorkel y saltos desde la barca.', price: '240–350 € el barco (34–50 € pp)', time: '4–5 h', how: 'Puerto de Sarandë. Reservar el día antes y regatear.', status: 'sec', tip: 'Pedir que incluya gafas de snorkel y nevera. Llevar efectivo.' },
  { img: 'gjirokaster', name: 'Gjirokastër', verdict: 'Si sobra un día', what: 'La "ciudad de piedra", Patrimonio de la Humanidad, con un castillo gigante.', price: 'Bus ≈ 4–6 € + castillo 400 lek', time: 'Día entero', how: 'Bus desde Sarandë, 1 h 20. Se puede combinar con el Ojo Azul.', status: 'sec', tip: 'Alternativa al día de Himarë si queremos ir más tranquilos.' },
  { img: 'llogara', name: 'Parapente en Llogara', verdict: 'Capricho', what: 'Volar sobre la Riviera desde un puerto de montaña a 1.000 m.', price: '≈ 50–145 €', time: '2–3 h', how: 'Solo con tour que recoja en Himarë o Dhërmi.', status: 'sec', tip: 'Solo si alguien quiere darse el capricho: no está en el presupuesto.' },
  { img: 'corfu', name: 'Corfu Town', verdict: 'Incluida', what: 'Ciudad vieja veneciana con dos fortalezas, en el camino.', price: 'Gratis', time: 'Mañana del jue 1', how: 'A pie desde el hotel junto al puerto.', status: 'ok', tip: 'Desayuno griego: bougatsa y freddo espresso.' },
];

export const extras = [
  { img: 'ksamil5', name: 'Kayak o barca a pedales en Ksamil', price: 10, worth: 'Para llegar a las islas sin nadar.', status: 'est' },
  { img: 'grama2', name: 'Tour a la bahía de Grama', price: 60, worth: 'La cala más salvaje de la costa.', status: 'sec' },
  { img: 'spile', name: 'Cueva del Pirata (Himarë)', price: 30, worth: 'Barco corto con cueva marina.', status: 'sec' },
  { img: 'llogara2', name: 'Parapente en Llogara', price: 100, worth: 'Vistas de toda la Riviera.', status: 'sec' },
  { img: 'riviera', name: 'Rafting en Përmet (tour desde Sarandë)', price: 87, worth: 'Día entero, 8,5 h. Aventura de verdad.', status: 'sec' },
  { img: 'drymades', name: 'Beach club en Drymades/Dhërmi', price: 30, worth: 'Hamaca con consumición mínima y DJ.', status: 'sec' },
];

// ---------------- Comida ----------------
export const foodPrices = [
  ['Byrek (empanada de hojaldre)', '50–200 lek · 0,50–2 €'],
  ['Gyros / souvlaki', '250–400 lek · 2,50–4 €'],
  ['Menú en restaurante local', '700–1.200 lek · 7–12 €'],
  ['Cena de pescado', '1.500–2.500 lek · 15–25 €'],
  ['Cerveza en bar (0,5 l)', '≈ 2,40 €'],
  ['Cerveza del súper (0,5 l)', '≈ 1,40 €'],
];
export const foodBudget = [
  { name: 'Ahorro', week: 100, day: '≈ 14 €', how: 'Desayuno y cena en el piso, byrek y gyros a mediodía.' },
  { name: 'Recomendado', week: 126, day: '≈ 18 €', how: 'Súper + street food + dos cenas buenas de pescado.', rec: true },
  { name: 'Cómodo', week: 225, day: '≈ 32 €', how: 'Comer y cenar fuera casi todos los días.' },
];
export const foodTips = [
  'Compra grande el jueves en el Conad de Sarandë: bote común de ≈ 25 € por persona.',
  'El agua del grifo no es potable: garrafas de 5 l del súper.',
  'Byrek recién hecho para desayunar: menos de 1 €.',
  'En Italia y Corfú, comer de pie: pizza al taglio y gyros pita.',
  'Pagar en lek, no en euros: el cambio "a ojo" sale más caro.',
];
export const restaurants = [
  { img: 'byrek', name: 'Panaderías de byrek', where: 'Cualquier esquina de Sarandë', what: 'Byrek de queso, espinacas o carne, recién hecho.', price: '0,50–2 €', note: 'El desayuno de todos los días.' },
  { img: 'sarandabeach', name: 'Gyros del paseo', where: 'Sarandë', what: 'Pita con carne, patatas y tzatziki.', price: '2,50–4 €', note: 'Lo más barato para después de la playa.' },
  { img: 'himarasunset', name: 'Pescado en Himarë', where: 'Paseo de Himarë', what: 'Pescado del día a la brasa con ensalada.', price: '15–25 €', note: 'La cena especial del domingo.' },
  { img: 'gjirokaster', name: 'Tavernas tradicionales', where: 'Sarandë y Tirana', what: 'Tavë kosi, qofte, ensalada griega, vino de la casa.', price: '7–12 €', note: 'Menú local completo.' },
];

// ---------------- Fiesta ----------------
export const nightlife = [
  { name: 'Paseo marítimo de Sarandë', area: 'Sarandë', music: 'Comercial, house, pop, éxitos albaneses y algo de reguetón', entry: 'Gratis casi siempre · 5–10 € con copa en noches de evento', hours: '23:00–04:00', fit: 'Nuestras noches 1 y 2. Más de 20 bares-club seguidos.', age: '18+' },
  { name: 'Orange Club · Bluz Club', area: 'Sarandë', music: 'Comercial y DJ', entry: 'Incluidos en el pub crawl', hours: 'Hasta las 4', fit: 'Los dos clubs del pub crawl.', age: '18+' },
  { name: 'Lost Seaside · Jungle · JULIA rooftop', area: 'Sarandë', music: 'House y comercial, terrazas', entry: '0 €', hours: 'Hasta las 3', fit: 'Para empezar la noche con vistas.', age: '18+' },
  { name: 'Pub crawl + boat party', area: 'Sarandë', music: 'De todo', entry: '≈ 50 € (6 chupitos, 1 copa, barco y entradas)', hours: 'Días por confirmar', fit: 'La mejor forma de conocer gente de otros países.', age: '18+' },
  { name: 'Bares de Himarë (Thea, Locca, Mojo)', area: 'Himarë', music: 'Chill, comercial', entry: '0 €', hours: 'Hasta las 3', fit: 'Noche tranquila del domingo.', age: '18+' },
  { name: 'Blloku', area: 'Tirana', music: 'Comercial, house; Folie Terrace con DJ', entry: '0–5 € · Folie 10–20 € en eventos', hours: 'Hasta las 3–4', fit: 'Noche 3 opcional. Dress code: nada de ropa de playa.', age: '18+ (alguno pide 20+)' },
];
export const partyCost = [
  ['Pre-copas del súper', '3–5 €'],
  ['Entrada', '0–10 €'],
  ['Cerveza en bar', '2–4 €'],
  ['Cóctel', '6–12 €'],
  ['Taxi de vuelta (repartido)', '0–3 €'],
];

// ---------------- Presupuesto ----------------
export const scenarios = {
  cols: ['Ahorro máximo', 'Recomendado', 'Más cómodo'],
  rows: [
    ['Vuelos ida y vuelta', 205, 240, 265],
    ['Equipaje', 0, 0, 80],
    ['Alojamiento (7 noches)', 138, 179, 250],
    ['Traslados, ferry y buses largos', 70, 75, 90],
    ['Transporte local', 15, 25, 40],
    ['Comida', 100, 126, 225],
    ['Actividades y excursiones', 40, 80, 170],
    ['Fiesta (3 noches)', 35, 70, 130],
    ['Extras (eSIM, seguro, tasas)', 30, 35, 55],
    ['Imprevistos', 30, 40, 80],
  ],
  totals: [663, 870, 1385],
};

// ---------------- Transporte ----------------
export const transport = [
  { name: 'Ferry Corfú → Sarandë', price: '≈ 25–30 €', what: '30–70 min. Ionian Seaways o Finikas. 6–10 salidas al día en verano.', status: 'sec' },
  { name: 'Bus Sarandë ↔ Ksamil ↔ Butrint', price: '200–250 lek', what: 'Cada hora de 06:30 a 18:30. En efectivo.', status: 'ok' },
  { name: 'Bus Sarandë → Himarë', price: '≈ 10 €', what: '1 h 30–2 h por la costa. Último hacia las 18:00. Terminal de Qafë Gjashtë.', status: 'sec' },
  { name: 'Bus Himarë → Tirana', price: '≈ 15 €', what: '≈ 5 h vía Vlorë. Confirmar horario 2027.', status: 'est' },
  { name: 'Bus aeropuerto de Tirana', price: '400 lek', what: 'Rinas Express, 30 min.', status: 'ok' },
  { name: 'Bus 15 aeropuerto de Corfú', price: '1,10–1,70 €', what: '20 min al puerto nuevo. Taxi ≈ 15 € el coche.', status: 'sec' },
  { name: 'Taxis en Albania', price: '20–30 € a Ksamil', what: 'No hay Bolt ni Uber. Apps locales: Speed Taxi. Precio cerrado antes de subir. 7 personas = 2 coches.', status: 'sec' },
];

// ---------------- Info útil ----------------
export const keyFacts = [
  '<b>DNI o pasaporte en vigor</b> (más de 3 meses). Albania acepta el DNI, pero recomiendan llevar también pasaporte. Un DNI denunciado como perdido no vale aunque aparezca.',
  '<b>Seguro de viaje obligatorio de facto:</b> la tarjeta sanitaria europea NO sirve en Albania.',
  '<b>El roaming de la UE no cubre Albania:</b> eSIM o SIM local (≈ 26–33 € por 40 GB–ilimitado).',
  '<b>Efectivo en lek.</b> Muchos sitios no aceptan tarjeta y los cajeros de Ksamil se vacían.',
  '<b>Solo mochila</b> 40×20×25 cm: es gratis en los 4 vuelos.',
];
export const tips = [
  { t: 'Documentación', items: ['DNI o pasaporte con 3+ meses de validez.', 'Tarjeta de embarque de los 4 vuelos descargada (check-in online).', 'Copia del seguro en el móvil.'] },
  { t: 'Dinero', items: ['Cambiar euros en casas de cambio, no en el aeropuerto.', '1 € ≈ 100 lek (comprobar antes).', 'Llevar ≈ 450 € por persona en efectivo + tarjeta sin comisiones.'] },
  { t: 'Seguridad', items: ['Sarandë es tranquila y está vigilada de noche.', 'Ojo con las copas: pedir marcas conocidas (hay casos de alcohol adulterado).', 'Taxi solo con precio cerrado.', 'Ir y volver siempre en grupo.'] },
  { t: 'Salud', items: ['Agua del grifo no potable.', 'Julio: 30–35 °C. Crema solar, gorra y agua.', 'En verano hay incendios forestales cerca de Sarandë.'] },
  { t: 'Equipaje', items: ['Mochila de 40×20×25 cm gratis.', 'Escarpines (playas de piedra).', 'Gafas de snorkel (≈ 15 €).', 'Ropa "de salir" para Blloku.'] },
  { t: 'Ahorro', items: ['Comprar los vuelos ya: Ryanair vende julio 2027.', 'Reservar con cancelación gratuita.', 'Compra común en el súper.', 'Barco privado entre 7: más barato que tours.'] },
];
export const timeline = [
  { when: 'Noviembre–diciembre 2026', what: 'Decidir entre los 7 y comprar los 4 vuelos de Ryanair en grupos de 2–4.' },
  { when: 'Diciembre 2026', what: 'Reservar los pisos de Bérgamo, Sarandë, Himarë y Tirana (cancelación gratuita).' },
  { when: 'Enero–marzo 2027', what: 'Hotel en Corfú. Comprobar DNI/pasaportes de todos.' },
  { when: 'Abril–mayo 2027', what: 'Seguro de viaje. Mirar horarios del ferry Corfú–Sarandë 2027.' },
  { when: 'Junio 2027', what: 'eSIM, cambiar euros a lek, check-in online, reservar el barco privado.' },
];
export const links = [
  ['Ryanair (vuelos)', 'https://www.ryanair.com/es/es'],
  ['Google Flights', 'https://www.google.com/travel/flights'],
  ['Skyscanner', 'https://www.skyscanner.es'],
  ['Ionian Seaways (ferry Corfú–Sarandë)', 'https://www.ionianseaways.com/'],
  ['Finikas Lines (ferry)', 'https://www.finikas-lines.com/'],
  ['Butrint National Park', 'https://butrint.al/'],
  ['Turismo de Albania', 'https://albania.al/'],
  ['Recomendaciones de viaje: Albania (Exteriores)', 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Detalle-recomendaciones-de-viaje.aspx?trc=Albania'],
  ['Airbnb Sarandë (1–4 jul, 7 adultos)', 'https://www.airbnb.es/s/Sarand%C3%AB--Albania/homes?checkin=2027-07-01&checkout=2027-07-04&adults=7&min_bedrooms=3'],
  ['Hostelworld Sarandë', 'https://www.hostelworld.com/st/hostels/europe/albania/saranda/'],
];
export const pending = [
  'Que todos podemos el 29 jun – 6 jul',
  'Plan D (Corfú) o A2 (Bolonia, sin ferry)',
  'Vuelta el martes a las 08:30 o lunes con noche en Bolonia',
  'Hamaca o toalla en Ksamil',
];

// =========================================================
// EUROPE SUMMER 2027 · Sarandë (Riviera albanesa) — TODOS LOS DATOS
// Una sola base: Sarandë, 5 noches. Precios consultados el 17 nov 2026.
// ok = comprobado · est = estimado · sec = guía/blog 2025–26
// Para cambiar un precio, una fecha o un texto, edita este archivo.
// =========================================================

export const TRIP = {
  name: 'Europe Summer 2027',
  dest: 'Sarandë',
  people: 7,
  dates: '29 jun – 6 jul 2027',
  datesLong: 'Del martes 29 de junio al martes 6 de julio de 2027',
  pp: 986, group: 6902, min: 748, max: 1523,
  before: 523, during: 463,
};

const ry = (o, d, date) => `https://www.ryanair.com/es/es/trip/flights/select?adults=7&teens=0&children=0&infants=0&dateOut=${date}&isReturn=false&originIata=${o}&destinationIata=${d}`;

// ---------------- Comparativa de destinos ----------------
// s = puntuaciones 1–5: playa/paisaje, aventura, fiesta, ambiente joven, precio en destino, facilidad sin coche
export const destinations = [
  { id: 'alb', rank: 1, name: 'Sarandë', where: 'Riviera albanesa · base única', flight: '280–340 €', ground: '≈ 650 €', total: '≈ 990 €', s: [5, 5, 4, 4, 5, 5], verdict: 'Ganador', note: 'Un solo piso para toda la semana. Ksamil a 25 min en bus, Butrint, el Ojo Azul y calas en barco. Fiesta en el paseo, todo andando. Lo más barato de toda la costa mediterránea.' },
  { id: 'alg', rank: 2, name: 'Algarve', where: 'Albufeira · Portugal', flight: '150–240 €', ground: '700–900 €', total: '≈ 950–1.100 €', s: [4, 4, 4, 4, 2, 5], verdict: '2ª opción', note: 'Lo más fácil: Madrid con descuento de residente + Faro. Más ambiente español y reguetón. Pero dormir allí en julio cuesta el doble.' },
  { id: 'cfu', rank: 3, name: 'Corfú', where: 'Kavos · Grecia', flight: '215–270 €', ground: '650–850 €', total: '≈ 950–1.100 €', s: [4, 3, 5, 4, 3, 3], verdict: '3ª opción', note: 'Está en nuestra misma ruta de vuelos. Kavos es fiesta pura (público muy británico). Alojamiento bastante más caro que en Albania.' },
  { id: 'bul', rank: 4, name: 'Sunny Beach', where: 'Costa del mar Negro · Bulgaria', flight: '220–280 €', ground: '300–450 €', total: '≈ 700–800 €', s: [3, 2, 5, 5, 5, 2], verdict: 'Solo fiesta', note: 'El más barato en destino y la fiesta más masiva, pero son ~7 h de bus desde Sofía en cada sentido y el paisaje no está al nivel.' },
  { id: 'mne', rank: 5, name: 'Budva', where: 'Montenegro', flight: '300–400 €', ground: '460–720 €', total: '≈ 850–1.100 €', s: [4, 4, 4, 4, 3, 4], verdict: 'Buena, más cara', note: 'Bahía de Kotor espectacular y Top Hill (15–30 €). Vuelos sin comprobar vía Barcelona.' },
  { id: 'zrc', rank: 6, name: 'Zrće · Novalja', where: 'Isla de Pag · Croacia', flight: '200–260 €', ground: '625–1.035 €', total: '≈ 1.000–1.400 €', s: [3, 2, 5, 5, 2, 3], verdict: 'Festival', note: 'Hideout Festival suele caer sobre el 2 de julio. Fiesta brutal, pero entrada aparte y Croacia ya es cara.' },
  { id: 'spu', rank: 7, name: 'Split · Makarska', where: 'Dalmacia · Croacia', flight: '250–350 €', ground: '580–915 €', total: '≈ 950–1.250 €', s: [5, 4, 4, 4, 1, 4], verdict: 'Precioso y caro', note: 'Hvar, Makarska y la discoteca en una cueva. Precios casi como en España.' },
  { id: 'bud', rank: 8, name: 'Budapest + Balaton', where: 'Hungría', flight: '≈ 360–450 €', ground: '400–550 €', total: '≈ 850–1.000 €', s: [2, 2, 5, 5, 3, 5], verdict: 'Sin mar', note: 'Único directo desde LPA (362 € i/v). Gran fiesta y baños termales, pero no hay playa de verdad.' },
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
  { leg: 'CFU → BGY', code: 'FR4209', day: 'Mar 6 jul', time: '13:10 → 14:05', dur: '1 h 55', price: 49.99, url: ry('CFU', 'BGY', '2027-07-06') },
  { leg: 'BGY → LPA', code: 'FR6091', day: 'Mar 6 jul', time: '15:55 → 19:20', dur: '4 h 25', price: 134.99, url: ry('BGY', 'LPA', '2027-07-06') },
];
export const flightTotal = 278.01;

export const flightOptions = [
  { id: 'U', best: true, name: 'Base única: Corfú ida y vuelta', badge: 'Recomendado', route: 'LPA–BGY–CFU ⛴ Sarandë ⛴ CFU–BGY–LPA', price: '278,01 €', real: '≈ 340 €', status: 'ok',
    out: 'Mar 29 jun 19:55 · noche en Bérgamo · mié 30 jun 20:50 a Corfú', back: 'Mar 6 jul: ferry temprano, Corfú 13:10 → Bérgamo 14:05 → 15:55 → Gran Canaria 19:20',
    pros: ['5 noches seguidas en Sarandë', 'Vuelta en el mismo día y por el mismo aeropuerto', 'Sin buses largos'], cons: ['El Bérgamo–Gran Canaria del martes es caro (134,99 €)', 'Billetes separados: 1 h 50 de margen en Bérgamo'] },
  { id: 'U2', name: 'Vuelta por Bolonia', badge: 'Más barato', route: 'LPA–BGY–CFU · CFU–BLQ–LPA', price: '213,71 €', real: '≈ 265 €', status: 'ok',
    out: 'Igual que el recomendado', back: 'Lun 5 jul Corfú 12:40 → Bolonia · noche · mar 6 jul 13:35 → Gran Canaria 17:05',
    pros: ['≈ 55 € menos por persona en total', 'Margen amplio: noche en Bolonia'], cons: ['Solo 4 noches en Sarandë', 'Un día menos de playa'] },
  { id: 'D', name: 'Ruta con varias paradas', badge: 'Descartado', route: 'LPA–BGY–CFU ⛴ … Tirana–BLQ–LPA', price: '189,71 €', real: '≈ 240 €', status: 'ok',
    out: 'Igual que el recomendado', back: 'Mar 6 jul Tirana 08:30 → Bolonia → Gran Canaria 17:05',
    pros: ['Vuelos ≈ 90 € más baratos'], cons: ['Obliga a cambiar de sitio: Himarë y Tirana', 'Buses de 5–6 h', 'Lo descartamos: queremos un solo sitio'] },
];

// ---------------- Alojamiento (precios Airbnb, 7 adultos, fechas exactas) ----------------
const ab = id => `https://www.airbnb.es/rooms/${id}`;
export const stays = [
  { id: 'sar', best: true, night: 'Jue 1 – mar 6 jul · 5 noches', place: 'Sarandë', img: 'saranda', pick: 'Sol Levante House', total: 800, pp: 114.29, beds: '3 dormitorios · 6 camas · 2 baños', rating: '4,85 (68) · Superanfitrión', why: 'Nuestra casa toda la semana. Sarandë es el centro de buses, del ferry y de la fiesta; Ksamil está a 25 min en bus. A 22,86 € por persona y noche.', status: 'ok', url: ab('821027935673155424'),
    alts: [['Villa Luiza · 5 camas · 4,32', 540, ab('34242283')], ['Ksamil: casa familiar, 7 camas, vistas a la playa · 4,95', 850, ab('33223732')], ['JB, 3 dormitorios con vistas al mar · 4,92', 908, ab('49522589')], ['Ático Juliano · 6 camas, 1 baño · 4,72', 985, ab('20319796')], ['Villa Sunrise Panorama · 4,96', 1441, ab('19468963')]] },
  { id: 'bgy', transit: true, night: 'Mar 29 jun · solo dormir', place: 'Bérgamo (junto al aeropuerto)', img: 'bergamo', pick: 'Orio easy relax 24h Aeropuerto 3', total: 217, pp: 31, beds: '5 camas', rating: '4,78 (82)', why: 'Aterrizamos a la 01:05: dormimos al lado del aeropuerto, con llegada 24 h.', status: 'ok', url: ab('1005090086878253187'),
    alts: [['Residencia Il Carducci · 7 camas · 4,89', 257, ab('1362438723508102547')]] },
  { id: 'cfu', transit: true, night: 'Mié 30 jun · solo dormir', place: 'Corfu Town', img: 'corfu', pick: 'Hotel sencillo junto al puerto nuevo', total: 266, pp: 38, beds: '2–3 habitaciones', rating: '—', why: 'Llegamos a las 23:45 y el ferry a Sarandë sale por la mañana.', status: 'est', url: 'https://www.booking.com/searchresults.es.html?ss=Corfu+Town&checkin=2027-06-30&checkout=2027-07-01&group_adults=7&no_rooms=3',
    alts: [] },
];
export const staysTotal = { group: 1283, pp: 183 };

// ---------------- Itinerario ----------------
export const days = [
  { id: 'd1', n: 1, date: 'Mar 29 jun', title: 'Despegamos', where: 'Gran Canaria → Bérgamo', img: 'bergamo2', cost: '≈ 10 €', blocks: [
    { t: '17:30', what: 'Aeropuerto de Gran Canaria', how: 'Check-in online hecho. Solo mochila: directos al control.', dur: '2 h' },
    { t: '19:55', what: 'Vuelo FR6090 a Bérgamo', how: 'Cena del súper o bocata antes de embarcar.', dur: '4 h 10' },
    { t: '01:05', what: 'A dormir junto al aeropuerto', how: 'Orio al Serio, a pie o taxi corto (el bus ya no circula).', dur: '15 min', map: 'Orio al Serio' },
  ], planB: 'Si el vuelo se retrasa, el alojamiento tiene llegada 24 h.' },
  { id: 'd2', n: 2, date: 'Mié 30 jun', title: 'De camino', where: 'Bérgamo → Corfú', img: 'bergamo', cost: '≈ 20 €', blocks: [
    { t: '10:00', what: 'Città Alta (gratis)', how: 'Ya que tenemos el día: bus al centro (≈ 2,60 €) y funicular. Piazza Vecchia y murallas venecianas.', dur: '4 h', map: 'Piazza Vecchia Bergamo' },
    { t: '20:50', what: 'Vuelo FR4196 a Corfú', how: 'Llegada 23:45. Bus 15 o taxi al hotel junto al puerto nuevo.', dur: '1 h 55' },
  ], planB: 'Si preferís descansar, mañana tranquila en el alojamiento y directos al aeropuerto.' },
  { id: 'd3', n: 3, date: 'Jue 1 jul', title: 'Llegamos a casa', where: 'Corfú ⛴ Sarandë', img: 'ksamilboat', cost: '≈ 45 €', blocks: [
    { t: '09:00', what: 'Ferry a Sarandë', how: 'Ionian Seaways o Finikas desde el puerto nuevo de Corfú. 30–70 min. Albania va una hora por detrás de Grecia.', dur: '1 h', map: 'New Port Corfu' },
    { t: '11:00', what: 'Check-in y compra grande', how: 'Dejamos las mochilas en Sol Levante House y compra para la semana en el Conad.', dur: '2 h', map: 'Sarandë' },
    { t: '14:00', what: 'Primer baño', how: 'Playas del paseo marítimo, a unos minutos andando.', dur: '4 h', map: 'Sarandë promenade beach' },
    { t: '19:30', what: 'Atardecer en el castillo de Lëkurësi', how: 'Taxi o subida a pie (40 min). Vistas de Sarandë y Corfú.', dur: '2 h', map: 'Lëkurësi Castle' },
  ], planB: 'Si el ferry de la mañana va lleno, hay salidas cada 1–2 h.' },
  { id: 'd4', n: 4, date: 'Vie 2 jul', title: 'El día: Ksamil', where: 'Ksamil · Butrint', img: 'ksamil3', key: true, party: true, cost: '≈ 55 €', blocks: [
    { t: '08:30', what: 'Bus a Ksamil', how: 'Bus urbano desde el paseo, 200 lek (≈ 2 €), cada hora. 25 min.', dur: '25 min', map: 'Ksamil' },
    { t: '09:00', what: 'Las islas de Ksamil', how: 'Pronto, antes de la gente. Se llega nadando (~100 m) o en kayak. Tramos de playa pública gratis; hamacas 15–25 € el set.', dur: '4 h', map: 'Ksamil Islands' },
    { t: '15:30', what: 'Butrint', how: 'El mismo bus sigue hasta el parque (250 lek). Ciudad griega y romana junto al lago. Entrada 1.000 lek (≈ 10 €).', dur: '2 h 30', map: 'Butrint National Park' },
    { t: '23:00', what: 'Fiesta 1 · viernes en el paseo', how: 'Pre-copas en el piso y pub crawl o bares-club del paseo hasta las 3–4.', dur: 'toda la noche' },
  ], planB: 'Si hace viento en Ksamil: Butrint por la mañana y Mirror Beach por la tarde.' },
  { id: 'd5', n: 5, date: 'Sáb 3 jul', title: 'Barco privado', where: 'Calas escondidas', img: 'kakome', party: true, cost: '≈ 85 €', blocks: [
    { t: '10:30', what: 'Barco para los 7', how: 'Media jornada desde el puerto de Sarandë a Kakome y Krorëz, con snorkel. 240–350 € el barco (34–50 € cada uno).', dur: '4–5 h', map: 'Kakome Beach' },
    { t: '16:00', what: 'Siesta obligatoria', how: 'Hoy es la noche grande.', dur: '3 h' },
    { t: '23:30', what: 'Fiesta 2 · la noche fuerte', how: 'Sábado en el paseo: Orange Club, Bluz, Lost Seaside y las terrazas. Casi todo sin entrada.', dur: 'hasta las 4' },
  ], planB: 'Con mar movido, barco compartido más corto (18–40 €) o tarde en Ksamil.' },
  { id: 'd6', n: 6, date: 'Dom 4 jul', title: 'Ojo Azul y Gjirokastër', where: 'Excursión de un día', img: 'blueeye', cost: '≈ 30 €', blocks: [
    { t: '08:30', what: 'Ojo Azul (Syri i Kaltër)', how: 'Bus hacia Gjirokastër (bajar en el desvío y 2 km a pie) o 2 taxis. Manantial azul imposible. Entrada 50 lek.', dur: '2 h 30', map: 'Blue Eye Albania' },
    { t: '12:00', what: 'Gjirokastër', how: 'Siguiente bus a la "ciudad de piedra" (Patrimonio de la Humanidad). Castillo 400 lek. Comida típica barata.', dur: '4 h', map: 'Gjirokastër Castle' },
    { t: '18:00', what: 'Vuelta a Sarandë', how: 'Bus 1 h 20 (≈ 4–6 €). Noche tranquila.', dur: '1 h 20' },
  ], planB: 'Si apetece playa: solo el Ojo Azul por la mañana y tarde en Pulëbardha o en el paseo.' },
  { id: 'd7', n: 7, date: 'Lun 5 jul', title: 'Último día de playa', where: 'Mirror Beach · Ksamil', img: 'ksamil5', party: true, cost: '≈ 50 €', blocks: [
    { t: '10:00', what: 'Mirror Beach (Pasqyra) o Ksamil otra vez', how: 'Cala de piedra blanca junto a Ksamil. Kayak o barca a pedales (≈ 10 €).', dur: '5 h', map: 'Mirror Beach Ksamil' },
    { t: '19:00', what: 'Paseo en barco al atardecer', how: 'Barcos compartidos desde el puerto (20–30 €).', dur: '2 h', map: 'Port of Sarandë' },
    { t: '23:00', what: 'Fiesta 3 · la despedida', how: 'Última noche en el paseo. Sin pasarse: el ferry sale temprano.', dur: 'hasta la 1–2' },
  ], planB: 'Si alguien quiere aventura: rafting en Përmet con tour desde Sarandë (≈ 87 €, día entero).' },
  { id: 'd8', n: 8, date: 'Mar 6 jul', title: 'Vuelta a casa', where: 'Sarandë ⛴ Corfú → Bérgamo → Gran Canaria', img: 'aerial', cost: '≈ 35 €', blocks: [
    { t: '07:30', what: 'Ferry a Corfú', how: 'El primero o el segundo de la mañana (con 2026 salían desde las 06:00). Llegada ≈ 09:30 hora griega.', dur: '1 h', map: 'Port of Sarandë' },
    { t: '10:00', what: 'Bus 15 al aeropuerto', how: '1,10–1,70 €, 20 min.', dur: '20 min', map: 'Corfu International Airport' },
    { t: '13:10', what: 'Corfú → Bérgamo → Gran Canaria', how: 'FR4209 llega a las 14:05 y el FR6091 sale a las 15:55 del mismo aeropuerto. En casa a las 19:20.', dur: '6 h 10' },
  ], planB: 'Con billetes separados, un retraso puede hacernos perder el segundo vuelo: seguro con cobertura de conexiones.' },
];

// ---------------- Mapa ----------------
export const mapCategories = {
  stay: { label: 'Dormimos', color: '#06324F' },
  beach: { label: 'Playas', color: '#12A6B5' },
  sight: { label: 'Visitas', color: '#C98A2B' },
  party: { label: 'Fiesta', color: '#E1262D' },
  port: { label: 'Puertos y aeropuerto', color: '#5B6B7A' },
};
export const places = [
  { name: 'Sol Levante House (nuestra casa)', cat: 'stay', ll: [39.8747, 20.0068], img: 'saranda', info: '5 noches. Todo lo demás está a un paseo o a un bus.', price: '800 € las 5 noches (7)' },
  { name: 'Islas de Ksamil', cat: 'beach', ll: [39.7660, 19.9980], img: 'ksamil1', info: 'Se llega nadando o en kayak. El 2 de julio.', price: 'Gratis · hamacas 15–25 €' },
  { name: 'Mirror Beach (Pasqyra)', cat: 'beach', ll: [39.7950, 20.0010], img: 'ksamil5', info: 'Cala de piedra blanca. Lunes 5.', price: 'Gratis' },
  { name: 'Kakome', cat: 'beach', ll: [39.8270, 20.0380], img: 'kakome', info: 'Cala solo accesible en barco. Sábado 3.', price: 'Barco 34–50 € pp' },
  { name: 'Ojo Azul (Syri i Kaltër)', cat: 'sight', ll: [39.9238, 20.1927], img: 'blueeye', info: 'Manantial de 50 m de profundidad. Domingo 4.', price: '50 lek' },
  { name: 'Gjirokastër', cat: 'sight', ll: [40.0758, 20.1389], img: 'gjirokaster', info: 'La "ciudad de piedra". Domingo 4.', price: 'Castillo 400 lek' },
  { name: 'Butrint', cat: 'sight', ll: [39.7456, 20.0206], img: 'butrint', info: 'Ciudad antigua, Patrimonio de la Humanidad.', price: '1.000 lek (≈ 10 €)' },
  { name: 'Castillo de Lëkurësi', cat: 'sight', ll: [39.8634, 20.0150], img: 'lekuresi', info: 'Atardecer sobre Sarandë y Corfú.', price: 'Gratis' },
  { name: 'Paseo marítimo de Sarandë', cat: 'party', ll: [39.8735, 20.0055], img: 'sarandanight', info: 'Bares-club hasta las 3–4. Viernes, sábado y lunes.', price: 'Entrada 0–10 €' },
  { name: 'Puerto de Sarandë', cat: 'port', ll: [39.8736, 20.0080], img: 'ksamilboat', info: 'Ferry a Corfú y barcos a las calas.', price: 'Ferry ≈ 25–30 €' },
  { name: 'Corfu Town y puerto nuevo', cat: 'port', ll: [39.6243, 19.9217], img: 'corfu', info: 'Noche del 30 de junio y ferry.', price: '' },
  { name: 'Aeropuerto de Corfú', cat: 'port', ll: [39.6019, 19.9117], img: 'corfu', info: 'Llegada mié 30 jun 23:45 · salida mar 6 jul 13:10.', price: '' },
];

// ---------------- Playas y aventuras ----------------
export const spots = [
  { img: 'ksamil3', name: 'Ksamil', score: 5, verdict: 'Imprescindible', why: 'El agua más turquesa de la costa y cuatro islotes a los que se llega nadando.', how: 'Bus 200 lek', price: 'Gratis / hamaca 15–25 €', time: 'Vie 2' },
  { img: 'kakome', name: 'Kakome y Krorëz', score: 5, verdict: 'Lo mejor del barco', why: 'Calas de piedra blanca sin carretera y agua cristalina para hacer snorkel.', how: 'Barco privado', price: '34–50 € pp', time: 'Sáb 3' },
  { img: 'ksamil5', name: 'Mirror Beach', score: 4, verdict: 'Muy buena', why: 'Una cala de piedra blanca junto a Ksamil, con menos gente.', how: 'Bus + 10 min a pie', price: 'Gratis', time: 'Lun 5' },
  { img: 'ksamil2', name: 'Playas de Ksamil', score: 4, verdict: 'Con hamaca', why: 'Beach bars con buganvillas, música y agua cristalina.', how: 'Bus 200 lek', price: 'Hamaca 15–25 €', time: 'Vie 2 · Lun 5' },
  { img: 'sarandabeach', name: 'Playas de Sarandë', score: 3, verdict: 'Al lado de casa', why: 'Para el primer baño y las tardes sin plan.', how: 'A pie', price: 'Gratis', time: 'Jue 1' },
  { img: 'lekuresi', name: 'Castillo de Lëkurësi', score: 4, verdict: 'Atardecer', why: 'El mejor mirador de Sarandë, con Corfú enfrente.', how: 'Taxi o 40 min a pie', price: 'Gratis', time: 'Jue 1' },
];

export const trips = [
  { img: 'blueeye2', name: 'Ojo Azul (Syri i Kaltër)', verdict: 'Merece la pena', what: 'Un manantial de agua azul eléctrica que brota de 50 m de profundidad en mitad del bosque.', price: '50 lek + bus ≈ 4 €', time: 'Mañana del domingo', how: 'Bus Sarandë–Gjirokastër (pedir parada en el desvío) + 2 km a pie, o taxi.', status: 'sec', tip: 'Bañarse en el ojo está prohibido; abajo, en el río, se puede meter los pies.' },
  { img: 'gjirokaster', name: 'Gjirokastër', verdict: 'Merece la pena', what: 'La "ciudad de piedra", Patrimonio de la Humanidad, con un castillo gigante.', price: 'Bus ≈ 4–6 € + castillo 400 lek', time: 'Tarde del domingo', how: 'Mismo bus que el Ojo Azul, 1 h 20 desde Sarandë.', status: 'sec', tip: 'Comer tavë kosi o qifqi en el bazar: menú por menos de 10 €.' },
  { img: 'butrint2', name: 'Butrint', verdict: 'Merece la pena', what: 'Ciudad griega, romana y veneciana en una península entre lago y mar.', price: '1.000 lek (≈ 10 €)', time: '2–3 h', how: 'El mismo bus de Ksamil, 250 lek.', status: 'ok', tip: 'A última hora de la tarde: menos calor y luz dorada.' },
  { img: 'kakome', name: 'Barco privado por la costa', verdict: 'El mejor plan del viaje', what: 'Un barco solo para nosotros: calas sin carretera, snorkel y saltos desde la barca.', price: '240–350 € el barco (34–50 € pp)', time: '4–5 h', how: 'Puerto de Sarandë. Reservar el día antes y regatear.', status: 'sec', tip: 'Pedir que incluya gafas de snorkel y nevera. Llevar efectivo.' },
];

export const extras = [
  { img: 'ksamil4', name: 'Kayak o barca a pedales en Ksamil', price: 10, worth: 'Para llegar a las islas sin nadar.', status: 'est' },
  { img: 'himarasunset', name: 'Paseo en barco al atardecer', price: 25, worth: 'Barco compartido desde el puerto de Sarandë.', status: 'sec' },
  { img: 'riviera', name: 'Rafting en Përmet (tour desde Sarandë)', price: 87, worth: 'Día entero, 8,5 h. Aventura de verdad.', status: 'sec' },
  { img: 'corfu', name: 'Día en Corfú (ferry ida y vuelta)', price: 55, worth: 'Si alguien quiere otra isla griega.', status: 'est' },
  { img: 'gjipe', name: 'Gjipe (fuera de la base)', price: 60, worth: 'Playa en un cañón a 2 h: solo con tour que recoja en Sarandë.', status: 'est' },
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
  { name: 'Ahorro', week: 100, day: '≈ 13 €', how: 'Desayuno y cena en el piso, byrek y gyros a mediodía.' },
  { name: 'Recomendado', week: 126, day: '≈ 16 €', how: 'Súper + street food + dos cenas buenas de pescado.', rec: true },
  { name: 'Cómodo', week: 225, day: '≈ 28 €', how: 'Comer y cenar fuera casi todos los días.' },
];
export const foodTips = [
  'Compra grande el jueves en el Conad de Sarandë: bote común de ≈ 25 € por persona.',
  'El agua del grifo no es potable: garrafas de 5 l del súper.',
  'Byrek recién hecho para desayunar: menos de 1 €.',
  'En Bérgamo y Corfú, comer de pie: pizza al taglio y gyros pita.',
  'Pagar en lek, no en euros: el cambio "a ojo" sale más caro.',
];
export const restaurants = [
  { img: 'byrek', name: 'Panaderías de byrek', where: 'Cualquier esquina de Sarandë', what: 'Byrek de queso, espinacas o carne, recién hecho.', price: '0,50–2 €', note: 'El desayuno de todos los días.' },
  { img: 'sarandabeach', name: 'Gyros del paseo', where: 'Sarandë', what: 'Pita con carne, patatas y tzatziki.', price: '2,50–4 €', note: 'Lo más barato para después de la playa.' },
  { img: 'sarandanight2', name: 'Pescado en el paseo', where: 'Sarandë', what: 'Pescado del día a la brasa con ensalada.', price: '15–25 €', note: 'Una o dos cenas especiales.' },
  { img: 'gjirokaster', name: 'Tavernas tradicionales', where: 'Sarandë y Gjirokastër', what: 'Tavë kosi, qofte, ensalada, vino de la casa.', price: '7–12 €', note: 'Menú local completo.' },
];

// ---------------- Fiesta ----------------
export const nightlife = [
  { name: 'Paseo marítimo de Sarandë', area: 'Sarandë', music: 'Comercial, house, pop, éxitos albaneses y algo de reguetón', entry: 'Gratis casi siempre · 5–10 € con copa en noches de evento', hours: '23:00–04:00', fit: 'Nuestras tres noches. Más de 20 bares-club seguidos, a pie desde casa.', age: '18+' },
  { name: 'Orange Club · Bluz Club', area: 'Sarandë', music: 'Comercial y DJ', entry: 'Incluidos en el pub crawl', hours: 'Hasta las 4', fit: 'Los dos clubs del pub crawl.', age: '18+' },
  { name: 'Lost Seaside · Jungle · JULIA rooftop', area: 'Sarandë', music: 'House y comercial, terrazas', entry: '0 €', hours: 'Hasta las 3', fit: 'Para empezar la noche con vistas.', age: '18+' },
  { name: 'Pub crawl + boat party', area: 'Sarandë', music: 'De todo', entry: '≈ 50 € (6 chupitos, 1 copa, barco y entradas)', hours: 'Días por confirmar', fit: 'La mejor forma de conocer gente de otros países.', age: '18+' },
];
export const partyCost = [
  ['Pre-copas del súper', '3–5 €'],
  ['Entrada', '0–10 €'],
  ['Cerveza en bar', '2–4 €'],
  ['Cóctel', '6–12 €'],
  ['Vuelta a casa', 'Andando'],
];

// ---------------- Presupuesto ----------------
export const scenarios = {
  cols: ['Ahorro máximo', 'Recomendado', 'Más cómodo'],
  rows: [
    ['Vuelos ida y vuelta', 290, 340, 360],
    ['Equipaje', 0, 0, 80],
    ['Alojamiento (7 noches)', 138, 183, 293],
    ['Traslados y 2 ferris', 65, 72, 85],
    ['Transporte local', 20, 30, 45],
    ['Comida', 100, 126, 225],
    ['Actividades y excursiones', 40, 90, 170],
    ['Fiesta (3 noches)', 35, 70, 130],
    ['Extras (eSIM, seguro, tasas)', 30, 35, 55],
    ['Imprevistos', 30, 40, 80],
  ],
  totals: [748, 986, 1523],
};

// ---------------- Transporte ----------------
export const transport = [
  { name: 'Ferry Corfú ⇄ Sarandë', price: '≈ 25–30 € cada trayecto', what: '30–70 min. Ionian Seaways o Finikas. 6–10 salidas al día en verano.', status: 'sec' },
  { name: 'Bus Sarandë ↔ Ksamil ↔ Butrint', price: '200–250 lek', what: 'Cada hora de 06:30 a 18:30. En efectivo.', status: 'ok' },
  { name: 'Bus Sarandë → Gjirokastër (Ojo Azul)', price: '≈ 4–6 €', what: '1 h 20. Pedir parada en el desvío del Ojo Azul.', status: 'sec' },
  { name: 'Bus 15 aeropuerto de Corfú', price: '1,10–1,70 €', what: '20 min al puerto nuevo. Taxi ≈ 15 € el coche.', status: 'sec' },
  { name: 'Bérgamo: aeropuerto ↔ centro', price: '≈ 2,60 €', what: 'Bus ATB. De noche, taxi corto al alojamiento.', status: 'sec' },
  { name: 'Taxis en Albania', price: '20–30 € a Ksamil', what: 'No hay Bolt ni Uber. Precio cerrado antes de subir. 7 personas = 2 coches.', status: 'sec' },
];

// ---------------- Info útil ----------------
export const keyFacts = [
  '<b>DNI o pasaporte en vigor</b> (más de 3 meses). Albania acepta el DNI, pero recomiendan llevar también pasaporte. Un DNI denunciado como perdido no vale aunque aparezca.',
  '<b>Seguro de viaje:</b> la tarjeta sanitaria europea NO sirve en Albania. Mejor con cobertura de conexiones perdidas.',
  '<b>El roaming de la UE no cubre Albania:</b> eSIM o SIM local (≈ 26–33 € por 40 GB–ilimitado).',
  '<b>Efectivo en lek.</b> Muchos sitios no aceptan tarjeta y los cajeros de Ksamil se vacían.',
  '<b>Solo mochila</b> 40×20×25 cm: es gratis en los 4 vuelos.',
];
export const tips = [
  { t: 'Documentación', items: ['DNI o pasaporte con 3+ meses de validez.', 'Tarjeta de embarque de los 4 vuelos descargada (check-in online).', 'Copia del seguro en el móvil.'] },
  { t: 'Dinero', items: ['Cambiar euros en casas de cambio, no en el aeropuerto.', '1 € ≈ 100 lek (comprobar antes).', 'Llevar ≈ 460 € por persona en efectivo + tarjeta sin comisiones.'] },
  { t: 'Seguridad', items: ['Sarandë es tranquila y está vigilada de noche.', 'Ojo con las copas: pedir marcas conocidas (hay casos de alcohol adulterado).', 'Taxi solo con precio cerrado.', 'Ir y volver siempre en grupo.'] },
  { t: 'Salud', items: ['Agua del grifo no potable.', 'Julio: 30–35 °C. Crema solar, gorra y agua.', 'En verano hay incendios forestales cerca de Sarandë.'] },
  { t: 'Equipaje', items: ['Mochila de 40×20×25 cm gratis.', 'Escarpines (playas de piedra).', 'Gafas de snorkel (≈ 15 €).'] },
  { t: 'Ahorro', items: ['Comprar los vuelos ya: Ryanair vende julio 2027.', 'Reservar con cancelación gratuita.', 'Compra común en el súper.', 'Barco privado entre 7: más barato que tours.'] },
];
export const timeline = [
  { when: 'Noviembre–diciembre 2026', what: 'Decidir entre los 7 y comprar los 4 vuelos de Ryanair en grupos de 2–3.' },
  { when: 'Diciembre 2026', what: 'Reservar Sol Levante House en Sarandë y el alojamiento de Bérgamo (cancelación gratuita).' },
  { when: 'Enero–marzo 2027', what: 'Hotel en Corfú. Comprobar DNI/pasaportes de todos.' },
  { when: 'Abril–mayo 2027', what: 'Seguro de viaje. Horarios del ferry Corfú–Sarandë 2027.' },
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
  ['Airbnb Sarandë (1–6 jul, 7 adultos)', 'https://www.airbnb.es/s/Sarand%C3%AB--Albania/homes?checkin=2027-07-01&checkout=2027-07-06&adults=7&min_bedrooms=3'],
  ['Hostelworld Sarandë', 'https://www.hostelworld.com/st/hostels/europe/albania/saranda/'],
];
export const pending = [
  'Que todos podemos el 29 jun – 6 jul',
  'Vuelta el martes directa o el lunes por Bolonia (−55 €)',
  'Sol Levante House o la casa de Ksamil',
  'Rafting o día extra de playa el lunes',
];

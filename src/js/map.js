import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { places, mapCategories } from '../data/trip.js';
import { icon } from './icons.js';
import { img } from './ui.js';

const catIcon = { stay: icon.bed, beach: icon.waves, sight: icon.castle, party: icon.music, food: icon.food, port: icon.boat };

export function initMap(el, filtersEl) {
  const map = L.map(el, { scrollWheelZoom: false, tap: true, zoomControl: true, attributionControl: true })
    .setView([40.3, 19.9], 8);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const layers = {};
  for (const [cat, meta] of Object.entries(mapCategories)) layers[cat] = L.layerGroup().addTo(map);

  for (const p of places) {
    const meta = mapCategories[p.cat];
    const marker = L.marker(p.ll, {
      icon: L.divIcon({ className: '', html: `<div class="pin" style="background:${meta.color}">${catIcon[p.cat]}</div>`, iconSize: [30, 30], iconAnchor: [4, 30], popupAnchor: [11, -28] }),
      title: p.name, alt: p.name, keyboard: true,
    });
    const gmaps = `https://www.google.com/maps/search/?api=1&query=${p.ll[0]},${p.ll[1]}`;
    marker.bindPopup(`<div class="pop">${img(p.img, p.name, '240px', true)}<div><h4>${p.name}</h4><p>${p.info}</p><p class="price">${p.price}</p><a href="${gmaps}" target="_blank" rel="noopener">Abrir en Google Maps</a></div></div>`, { maxWidth: 260, autoPanPadding: [20, 80] });
    marker.addTo(layers[p.cat]);
  }

  filtersEl.innerHTML = Object.entries(mapCategories).map(([cat, m]) =>
    `<button class="mf" type="button" data-cat="${cat}" aria-pressed="true"><i style="background:${m.color}"></i>${m.label}</button>`).join('');
  filtersEl.addEventListener('click', e => {
    const b = e.target.closest('.mf'); if (!b) return;
    const on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', on);
    on ? layers[b.dataset.cat].addTo(map) : map.removeLayer(layers[b.dataset.cat]);
  });

  // Encajar Corfú, Sarandë y las excursiones
  map.fitBounds(L.latLngBounds(places.map(p => p.ll)).pad(0.08));
  setTimeout(() => map.invalidateSize(), 300);
  return map;
}

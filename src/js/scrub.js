// Motor de "scroll-scrub" (la técnica de scroll-world y de las páginas de Apple):
// el scroll controla el tiempo de un vídeo pregrabado.
// - Carga el vídeo como Blob: siempre se puede saltar a cualquier fotograma, sirva el host rangos o no.
// - Agrupa los saltos (no encola un currentTime mientras el decodificador aún busca): evita bloqueos en móvil.
// - Mantiene la foto fija como póster hasta que el vídeo pinta su primer fotograma (iOS).
// - En móvil usa la versión vertical nativa 9:16.
export function createScrub(stage, { desktop, mobile, posterD, posterM }) {
  const isMobile = matchMedia('(max-width: 860px), (pointer: coarse)').matches && innerHeight >= innerWidth * 0.9;
  const src = isMobile ? mobile : desktop;
  const poster = isMobile ? posterM : posterD;
  stage.insertAdjacentHTML('afterbegin', `
    <img class="scrub-poster" src="${poster}" alt="" aria-hidden="true">
    <video class="scrub-video" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video>`);
  const video = stage.querySelector('video');
  const posterEl = stage.querySelector('.scrub-poster');
  let target = 0, pending = false, ready = false, painted = false;

  const apply = () => {
    if (!ready || !video.duration) return;
    if (video.seeking) { pending = true; return; }
    const t = Math.min(video.duration - 0.04, Math.max(0, target * video.duration));
    if (Math.abs(video.currentTime - t) > 0.008) video.currentTime = t;
  };
  video.addEventListener('seeked', () => {
    if (!painted) { painted = true; posterEl.classList.add('gone'); }
    if (pending) { pending = false; apply(); }
  });

  const load = async () => {
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      video.src = URL.createObjectURL(blob);
      await new Promise(r => video.addEventListener('loadedmetadata', r, { once: true }));
      ready = true; apply();
    } catch (e) { /* si falla, se queda la foto fija: la escena sigue funcionando */ }
  };
  // Cargar cuando la escena está cerca
  const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); load(); } }, { rootMargin: '150% 0px' });
  io.observe(stage);
  // iOS: un vídeo silenciado que nunca se reprodujo no pinta fotogramas buscados → "cebar" al primer toque
  const prime = () => { video.play().then(() => { video.pause(); apply(); }).catch(() => {}); removeEventListener('touchstart', prime); };
  addEventListener('touchstart', prime, { passive: true });

  return { set(p) { target = p; apply(); } };
}

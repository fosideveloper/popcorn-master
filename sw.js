/* Popcorn Master - Service Worker
   Amaç: PWA/TWA için kurulabilirlik + offline kabuk.
   Strateji: HTML için network-first (güncellemeler hemen gelsin),
   statik dosyalar için stale-while-revalidate. Firebase/gstatic'e dokunulmaz. */
const CACHE = 'popcorn-v1';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Sadece kendi sitemiz; Firebase/gstatic/Firestore doğrudan ağa gitsin
  if (url.origin !== location.origin) return;

  // HTML gezinmesi: önce ağ, olmazsa cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); return r; })
        .catch(() => caches.match(req).then((m) => m || caches.match('./index.html')))
    );
    return;
  }

  // Statik dosyalar: cache'ten ver, arkada güncelle
  e.respondWith(
    caches.match(req).then((cached) => {
      const net = fetch(req)
        .then((r) => { if (r && r.status === 200) { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); } return r; })
        .catch(() => cached);
      return cached || net;
    })
  );
});

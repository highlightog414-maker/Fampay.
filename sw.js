
const CACHE = 'famapp-pay-v1';
const ASSETS = [
  '/index.html',
  '/app.js',
  '/styles.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', evt => { evt.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(res => res || fetch(evt.request)));
});

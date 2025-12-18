const CACHE_NAME = 'trim-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/trim-tracker.html',
  '/help.html',
  '/manifest.json',
  '/norcal_icon.png'
];

// Install SW and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

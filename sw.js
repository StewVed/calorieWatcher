var zAppVersion = 'cw2019-08-31';

self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(zAppVersion).then(function(cache) {
    return cache.addAll([
        './'
      , './appmanifest'
      , './events.js'
      , './fileList.js'
      , './foodList.js'
      , './styles.css'
      , './main.js'
      , './texts.js'
      , './favicon.png'
      , './favicon256.png'
      , './favicon.svg'
    /*
      Do not include:
      index.html
      any favicons
      Service Worker file (sw.js)
    */
    ])
  }))
  console.log('calorieWatcher files cached.');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cacheResponse) {
      return cacheResponse || fetch(event.request).then(function(netResponse) {
        return caches.open(zAppVersion).then(function(cache) {
          cache.put(event.request, netResponse.clone());
          console.log(event.request.url + ' added to calorieWatcher cache.');
          return netResponse;
        });
      });
    })
  );
});
self.addEventListener('activate', function(event) {
  clients.claim();
  var zAppPrefix = zAppVersion.slice(0, 2);
  event.waitUntil(caches.keys().then(function(cacheNames) {
    return Promise.all(cacheNames.map(function(cacheName) {
      if (cacheName.slice(0, 2) === zAppPrefix) {
        if (cacheName !== zAppVersion) {
          return caches.delete(cacheName);
        }
      }
    }))
  }));
});

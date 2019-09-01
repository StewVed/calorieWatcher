var zAppVersion = 'cw2019-09-01';

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
    ])
  }))
  console.log('calorieWatcher files cached.');
  // if this is an update, just update without user having to close/open.
  self.skipWaiting();
  // if a lot has changed, consider reloading the page:
  // reloadDrFreeman() in the app.
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
  //let the new serviceworker take over now:
  event.waitUntil(clients.claim());
  //delete any old file caches for this app:
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

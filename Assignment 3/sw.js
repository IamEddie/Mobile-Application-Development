//self.importScripts(main.js)
//files to cache
var cacheName = 'Catch-File';
var filesToCache = [
    '/Mobile-Application-Development/Assignment 3/',
    '/Mobile-Application-Development/Assignment 3/index.html',
    '/Mobile-Application-Development/Assignment 3/bulma.min.css',
    '/Mobile-Application-Development/Assignment 3/icon/train-2.jpeg',
    '/Mobile-Application-Development/Assignment 3/icon/train-3.png',
    '/Mobile-Application-Development/Assignment 3/icon/train-4.png',
    '/Mobile-Application-Development/Assignment 3/icon/train-5.jpeg',
    '/Mobile-Application-Development/Assignment 3/icon/train-6.png',
    '/Mobile-Application-Development/Assignment 3/icon/train.png',
    '/Mobile-Application-Development/Assignment 3/cache.js',
    '/Mobile-Application-Development/Assignment 3/guess.webmanifest',
]; 
//Installing Service Worker
self.addEventListener('install', function(e){
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(contentToCache);
        })
    );
});

//Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(r){
          console.log('[Service Worker] Fetching resource: '+e.request.url);
          return r || fetch(e.request).then(function(response){
              return caches.open(cacheName).then(function(cache){
                  console.log('[Service Worker] Caching new resource: '+e.request.url);
                  cache.put(e.request, response.clone());
                  return response;
              });
          });  
        })
    )
});
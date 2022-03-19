const cache_name = 'v1';
const assets = [
  'index.html',
 'index.js',
 'editLink.html',
 'links.html',
 'stylesheetPretty.css',
 'file.png',
 'file02.png',
 'file2.png',
 'file3.png',
 'file4.png',
 'file5.png',
 'file6.png',
  'purplePaper.png'
];


self.addEventListener('install', (e) => {
console.log('Service Worker: installed');

e.waitUntil(
caches
.open(cache_name)
.then(cache => {
  console.log('service work: caching files');
cache.addAll(assets);//sending cached files in assets
})
.then(() => self.skipWaiting())
);
});//call installation 


self.addEventListener('activate', (e) => {
  console.log('Service Worker: activated');
  });//call activation
  

  
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: fetched');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  )
  });//call activation
  


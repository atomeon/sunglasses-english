
const cacheName = "v1";

const cacheAssets = [
	'index.html',
	'assets/css/app.css',
	'assets/js/app.js'
];
//call install event
self.addEventListener('install', (e) => {
	console.log('SW INSTALLED');
	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('Servicce Woker: Caching files');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
	);
});

//call activate event
self.addEventListener('activate', (e) => {
	console.log('SW ACTIVATED');
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache != cacheName) {
						console.log('SW: Clearing old cache');
						return caches.delete(cache);
					}
				})
			)
		})
	)
});

// call fetch event 
self.addEventListener('fetch', e => {
	console.log('SW: Fetching');
	e.respondWith(
		fetch(e.request).catch(() => caches.match(e.request))
	)
})
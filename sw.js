let cacheName = `restaurant-v1`;
let filesToCache = [
    // "/",
    "/index.html",
    "/restaurant.html",
    "/css/styles.css",
    "/data/restaurants.json",
    "/js/dbhelper.js",
    "/js/main.js",
    "/js/restaurant_info.js",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
    "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png",
    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png",
    "https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png"
];



self.addEventListener("install", (event) => {
    console.log("[Service Worker] installing ");

    event.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            console.log("[Service Worker] caching all files");
            cache.addAll(filesToCache);
        })
        // .then(() => self.skipWaiting())
        .catch((err) => { console.log("error occured in caching files ==> ") })
    );
});
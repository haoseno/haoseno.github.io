'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2856af811b4c2a24c782636651e39e9d",
"index.html": "1faecbabc0502aabdccc30a0332bbdc4",
"/": "1faecbabc0502aabdccc30a0332bbdc4",
"main.dart.js": "46bf31a632847a7a16696762c98cb9bf",
"favicon.png": "2c51a5834b6c1e1a38b4efc4764e15bf",
"icons/Icon-192.png": "e3186cbd14961b7ac9d1667ea89289fa",
"icons/Icon-maskable-192.png": "e3186cbd14961b7ac9d1667ea89289fa",
"icons/Icon-maskable-512.png": "eafeec9e80abd6befbca2cd2259cbd6a",
"icons/Icon-512.png": "eafeec9e80abd6befbca2cd2259cbd6a",
"manifest.json": "07e7fc8862c17ff0dcf5d47bb2743b23",
"assets/AssetManifest.json": "98fb2a92516ce5cf17a64c53d9c98a6b",
"assets/NOTICES": "415db7880fa8597550ce9c614de45f12",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/graphics/images/button_surrounding.png": "98f5cc62a46f5bc5a4aa91cc00b3ab68",
"assets/graphics/images/button_poster.png": "e84c6d901b303c423f90ed39e6d66d2e",
"assets/graphics/images/button_system.png": "e0d6d7a802134ca904c0224d119126cf",
"assets/graphics/images/button_opening.png": "f6360e758d87a1c11a21be1f6fcb315f",
"assets/graphics/images/button_project.png": "46f75275644c39561710513d75025d40",
"assets/graphics/images/button_stage_construction.png": "f5ada1e9f0ba6ab6012d47220bfb4e93",
"assets/graphics/images/button_spring_wine.png": "347fb5f36cb307c1a2479821a2643bb9",
"assets/graphics/images/button_programming.png": "885172b661e986cce47c24b941ca6cb0",
"assets/graphics/images/button_mobile_application.png": "5dc3740d268b8eebbb0b93e6f90930ff",
"assets/graphics/images/button_audio_rental.png": "04bbacb3fac8e70d68b0a73e0fefe515",
"assets/graphics/images/button_business_card.png": "6373e5a549011c9e65e2a880ecc054a5",
"assets/graphics/images/button_technical_consulting.png": "e45a65f948f9974947ad1b5c779be4b2",
"assets/graphics/images/button_web.png": "32481f665b7d528446e58cd3e426928f",
"assets/graphics/images/button_marketing.png": "259ca7da4b73f91d1c5a6945a66df356",
"assets/graphics/images/button_visual.png": "c1ea9b17f7e308fd6cfafedb52789b36",
"assets/graphics/images/button_party_planning.png": "49b49c0f107bf280d8549152001c4d1a",
"assets/graphics/images/button_magazine_production.png": "1827b9853f7c15cf839b74566980a6e7",
"assets/graphics/images/button_photography.png": "6be8fe4641d01139999fd59de81c0a0f",
"assets/graphics/logo/logo-min.png": "69a14489c971cf43360920861dcf4e0a",
"assets/graphics/logo/logo.png": "7c0053276a6ef1b84148c7bd2e3ae0ee",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2856af811b4c2a24c782636651e39e9d",
"index.html": "c7ee1eb46ec64bd16509f0a9cb971244",
"/": "c7ee1eb46ec64bd16509f0a9cb971244",
"main.dart.js": "3fa35b3a27547449b68bcbd09eaaa8c3",
"favicon.png": "2c51a5834b6c1e1a38b4efc4764e15bf",
"icons/Icon-192.png": "062feb5e61f62d823be7b3dd961d9805",
"icons/Icon-maskable-192.png": "062feb5e61f62d823be7b3dd961d9805",
"icons/Icon-maskable-512.png": "b25bab42b5f6be8f11c97ffbc8aeb192",
"icons/Icon-512.png": "b25bab42b5f6be8f11c97ffbc8aeb192",
"manifest.json": "07e7fc8862c17ff0dcf5d47bb2743b23",
"assets/AssetManifest.json": "f906c0196d98767fe92d8aebd22c2382",
"assets/NOTICES": "ff7fed475825a250245933e9fb11e381",
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
"assets/graphics/activity/2022/idyllicfeast/000001.jpeg": "fb3217943e3e134da8cce7478bdd2510",
"assets/graphics/activity/2022/idyllicfeast/000002.jpeg": "1e93355107d8110103bfe531117b9d2a",
"assets/graphics/activity/2022/idyllicfeast/000003.jpeg": "e293a94c097af991d7de0eb74c82766e",
"assets/graphics/activity/2022/dryingbooks/000001.jpeg": "909e0d78992210f5b637c69deb72e33b",
"assets/graphics/activity/2022/dryingbooks/000002.jpeg": "adddef97bca996587f886e33039694e6",
"assets/graphics/activity/2022/drekay/000006.jpeg": "cc986c109ed442340fc42839cc1dbc75",
"assets/graphics/activity/2022/drekay/000010.jpeg": "22a01169371fa7af31060a8f0ba82425",
"assets/graphics/activity/2022/drekay/000011.jpeg": "66eb93b445be0ec60246bc70975c24b0",
"assets/graphics/activity/2022/drekay/000007.jpeg": "b021c7d6f0baf9c9de7d2e67aefdb798",
"assets/graphics/activity/2022/drekay/000001.jpeg": "b0538aba5d04b27efc72e0f768a05c4f",
"assets/graphics/activity/2022/drekay/000014.jpeg": "5cd074738d6c75fa2954a62ee70d1836",
"assets/graphics/activity/2022/drekay/000002.jpeg": "de1365b9a1f28c145cd7e2eb17692513",
"assets/graphics/activity/2022/drekay/000003.jpeg": "978877461af4bf3f5362d717efbce3f0",
"assets/graphics/activity/2022/drekay/000015.jpeg": "1a43a42795c5ccafb2baa0fa57efb6b9",
"assets/graphics/activity/2022/drekay/000008.jpeg": "5a721e0f9e7978cf50ea0f5d5afacf16",
"assets/graphics/activity/2022/drekay/000012.jpeg": "304c1ca0a436a0fc63fbbbfc0f554bfe",
"assets/graphics/activity/2022/drekay/000004.jpeg": "39ea420f5def921f9b89e356bf406fa0",
"assets/graphics/activity/2022/drekay/000005.jpeg": "cda3c36df1674274d023c1c755adceaa",
"assets/graphics/activity/2022/drekay/000013.jpeg": "128f2c03fa0c42d37a7e27520d09bb26",
"assets/graphics/activity/2022/drekay/000009.jpeg": "d00b0abb7def6be0808ad1bfaeae7c93",
"assets/graphics/activity/2021/wutai/000006.jpeg": "f84ab49ffb897ce1d48b32ef092a9af2",
"assets/graphics/activity/2021/wutai/000001.jpeg": "9071333ec0a4f51ed09793cb551895e0",
"assets/graphics/activity/2021/wutai/000002.jpeg": "7b94909cc777067d318321737a4a04f8",
"assets/graphics/activity/2021/wutai/000003.jpeg": "18a27779c6b0e999b08580c60423fbbe",
"assets/graphics/activity/2021/wutai/000004.jpeg": "55df480fa7e33d03bc1319dc241f0634",
"assets/graphics/activity/2021/wutai/000005.jpeg": "3facdf04be58dcaf388e44017b198a85",
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

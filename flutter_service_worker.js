'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0799b35791cac9f50982ce84fa52ef18",
".git/config": "98f7b44dfdf3f582fab333b60fc39e0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "49f0f35ac81d320f8ce7153cfc1c47b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/14/0186c9a5d444cbe4834a76f5b8e113aa3f9dfc": "8f04d82e6a62f130d0928622119009e1",
".git/objects/17/1e6c05a4ae25e2b3e66173baaff52da63b3bcd": "ad7291e70b67f312ca3b2da226bf911e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/b1fabea79fc491b2eb70becfebaaa5371a504b": "b4e88df7abdcbc52b4c8c8a480386e3b",
".git/objects/26/784f2fc9386de19a29a8232d55cf98b2e29555": "ce2f2816f940416994ece4ad68bb08d7",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/ea4d979fc8d4cb5897bc51a1d0d001e6da8712": "f7b7cae3d77db6648a2f821258ee1469",
".git/objects/5b/fb99796f4e9d20b080361474952b5f93408257": "d49f5bd92bebb1cd9033113e3fc10976",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/e3fec896aa2cf9638b595f61c84e6d5bc8ba6d": "66f2c00a53e69ec99713a62d2602b9af",
".git/objects/a1/e360bb5c83e291739f920bb753cfdc17df3881": "3a030b875d73b3ef9aa23f531a74e860",
".git/objects/a5/478fa9e0d3f9c156ce6b2a1760170db1479a46": "e08f533e13201bf2d68a5837771f5393",
".git/objects/b3/e265ccd01365326121be5593bf7896b285971c": "cc03c2f04cd080c8953b670607634e0b",
".git/objects/b7/951ef3d2941ec6098fa023199fe49a5f89e259": "c5d120b79745002c3b9425e771a5a095",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/2897b7a09c9b3205b4dbc69807edb130a6508c": "a5bd2f0ae254244f3fcf399ab1de7060",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/63ea72238e1f7c67a22ca19b80a0b6d8a3b8e5": "4d5b2c8834e321712cb2bc8b74640b81",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/f1/886bc464a6558f3219f987e22c602923e26387": "e7b85b15c2a9bc3a2d56a9966f7f5b3a",
".git/objects/f6/d899cd76df2c77e890743e5e3b1bd0da563386": "82e0203867776018251a6ebab3a9ae60",
"assets/AssetManifest.bin": "5ce4f3b2300b11993ee8b5af6eb2ade5",
"assets/AssetManifest.bin.json": "5ef7aefb502da4d526788fbbdd827f59",
"assets/AssetManifest.json": "0254d1efd77971f637ab1aa1e7b49863",
"assets/assets/document/color.json": "240d141fb637c0875ffcdd9daf7dded9",
"assets/assets/document/language/en.json": "bc35dac1b2a04b9ea43c67de1b5b1a13",
"assets/assets/document/language/zh.json": "a7990672701d89abb3ff87225f770c95",
"assets/assets/document/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/document/register.json": "2af317849b75cc266bf9d6d5c26af6fa",
"assets/assets/document/tutorial/en.json": "13746e692f59d3aa9d2dd908c90558f3",
"assets/assets/document/tutorial/tutorial.json": "91f64881e7785b93e968f0c3d0c1fd36",
"assets/assets/document/tutorial/zh.json": "13746e692f59d3aa9d2dd908c90558f3",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/FontManifest.json": "de07fb01839b41ff6549bbd58fb43bce",
"assets/fonts/MaterialIcons-Regular.otf": "2b6acff8f85a2ba48f9c51dffabb25a7",
"assets/NOTICES": "db5812744a2dac1d0cf15ab8efdd3f4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "4d99696dd537ff0d253f9a73edf59ee5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a42a3087d257ca8b86209d5923723def",
"icons/Icon-192.png": "21b21525e4b6fb6bdc8360b3ba43bd11",
"icons/Icon-512.png": "c9bc03122edb372879bb0cad5b1fd9b6",
"icons/Icon-maskable-192.png": "21b21525e4b6fb6bdc8360b3ba43bd11",
"icons/Icon-maskable-512.png": "c9bc03122edb372879bb0cad5b1fd9b6",
"icons/icon.png": "e7777c6ccd43cc4d62c708873970f675",
"index.html": "c60dd69fc925950a4a58d353a6350a3f",
"/": "c60dd69fc925950a4a58d353a6350a3f",
"main.dart.js": "b9ad0d1b014b3d2d81addbb79327e646",
"manifest.json": "9928747fff7c38bcbd28acab2f04011a",
"splash/img/dark-1x.png": "2a6b8e6f612c14b5a20a86399ff3c282",
"splash/img/dark-2x.png": "e283a65be18140a84a7a85ebc42396cc",
"splash/img/dark-3x.png": "eee55a2a083b33d6134fa678d9864ac0",
"splash/img/dark-4x.png": "bcf409229047ee126d797fd892602273",
"splash/img/light-1x.png": "2a6b8e6f612c14b5a20a86399ff3c282",
"splash/img/light-2x.png": "e283a65be18140a84a7a85ebc42396cc",
"splash/img/light-3x.png": "eee55a2a083b33d6134fa678d9864ac0",
"splash/img/light-4x.png": "bcf409229047ee126d797fd892602273",
"version.json": "a107e9f1b75c1db948f6f2a5c119acbd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

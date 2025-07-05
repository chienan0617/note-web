'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "28e37961956280735db41c10332a2b28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "99d73f9a3a2da8e4bcc9d0e0090bd338",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "08a140a1df725e1e33a7bf3b199d470e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "802986f75b0ae8d4796ae1c56e0c9fdf",
".git/logs/refs/heads/main": "09fc60368805f5e47a1fdc4f335cf337",
".git/logs/refs/remotes/origin/main": "3af000e7bc315130c4eb2d15c4f8ff98",
".git/objects/03/b6b7ea775b82d55008c72dc96383657512ca4e": "262c26043f1c55a1968daae83760be85",
".git/objects/04/a710a05ade628b7f663659872d2609fa7d6533": "380ebedc908bc379a621fd1fd8038bd0",
".git/objects/09/bd367e495f4a23c1df5d083bb7bbf083f74ed4": "a24108d810e9211f07228f2a351275ee",
".git/objects/0c/5120454ee1ad6b976bd0b21ae4d582babea58e": "e69946c1ae3e185263b98851d14ac4b8",
".git/objects/0e/d08b29ccbd58f802202f99c56bd4937fbda8c9": "1347ac220b39bff027c0eab996a31137",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/14/0186c9a5d444cbe4834a76f5b8e113aa3f9dfc": "8f04d82e6a62f130d0928622119009e1",
".git/objects/16/21c20ef609c4caa5aafde3e4197676a96b3d94": "b130236d8a9b3ea8fff0b428a819d0c5",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/19/9a23e68f3ea467a5becb924387253cd9ac9a23": "3a3231219a7ca7c1f812899ff90a75d5",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/2e079787dd82153ebe752fe68937e0f9dea0ea": "04eaa27f5b4ef455abe0e7cf41ec44e6",
".git/objects/28/64572b0101f67ec84742be9705a472c7da5bf3": "c5b7e64c081d4423c8c26fabc52bc905",
".git/objects/29/9c826b151f6fb5bb5c9a7b59d0df6043677fa3": "f1d4bdef0bde5ec87e756e8cfd49a0e9",
".git/objects/2b/869c5c71470164f9a78dd1d5af455a09b8f106": "42da3e9e28fe2d5722a66e08e5dd3c9b",
".git/objects/30/95ffbaaf01f4399d974c25f90674513d723618": "934e2611cabe75e6c9c7492c328ef0b5",
".git/objects/31/968fb668132fd189d85293862f07368fd69e0d": "e3108503c7d5ededd58730b64d2600eb",
".git/objects/34/c5a50a2124744519f8483ddb79b714e2ed9a8b": "3ca9e988a21472c21ead935392a3ad7f",
".git/objects/35/b404e972702f0bda4f43ef6eb0cdd6bafa0b71": "23c9103cad5ff1d5f4999ce8ef1f0ff2",
".git/objects/36/b7bbfe72c64feac92b5431d99d9b5954ad25ea": "370516b9111efdcdb3a2b47373ffc016",
".git/objects/37/2c3fa507fb66885d5911284589f0ad0c5624d1": "55ebd9a5f8228c4d2df9abbedeb8091e",
".git/objects/3e/bb400071070e71959748cc48a42cbc1566e0bb": "8bbe83870efdc3e3b7de01b39bea87f3",
".git/objects/3f/49922e6bc00593a39151ac017c5d89eb35622b": "f49a14b8b8f5c0ad6cd8b7b0e3029361",
".git/objects/40/e79a0e67b04f9c60d1ebffcf2762a7b496f61d": "e74fffb1586d6fcf61f2b5eacfd65b6e",
".git/objects/41/cc35b64ee42a648e4389a2166f0c4c436bdbec": "de9c6e3d39f258868c44cffbd6948222",
".git/objects/43/2fc3508eb5d2744ff4bb6e4ed2de906c78753e": "71f775440609409a5a0744b1396a1f88",
".git/objects/49/edfd85adb12e5fb9408e83e772d8985403d4e3": "56c3f2d5b2a4bb7d6ad8b07b114b2d83",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/517639b8005b8fb1ea5d7fdde27d02694ec070": "60bb0f161d3c2798a610e57525431e59",
".git/objects/51/a2e6f935da2fd198c42e951da65425c3aa5a1a": "be77b268cb4a05b75f33e9d8c53b7333",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/ad15ed8c5273ab385e39e5618e38c65ae186e9": "bb8045ac14f5ed0e6512a8661f5f9e66",
".git/objects/53/e25249f7e9e550abef5647dd1430943f3e5207": "f754e8ef26715f8abb1a704064fe4f57",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/1f284c38b6f1b0d305803daf6d1ed3d3e1a220": "bc1108bf01e34036cf515443e482bd63",
".git/objects/6e/ad2cbd3a4a6e959525444f6ef3f294a2fc8fa7": "193207cc14c2ca3ac21f003625191184",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/870cd4df4fab6832d9111a26c44f582aa94b29": "ebe4d0b822c15f86bc089699750670e0",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/9ba8b753e322ff8e3f429051bf74aff0ad8d54": "4b5cebf2c8567319a3b21356fcee6a69",
".git/objects/78/ebd34f6df798b312c765e03e11d2bb356e5887": "b9150b01f5d4558b160e7ed8b2e0b643",
".git/objects/7c/fbc359dc97712e2953d900c8c099b972277e2c": "f82ce6830ab02d4fd976754dc4e77081",
".git/objects/7e/417d302b15fc81e8d50e43332c5d185c643759": "3cb4beda82557a0170e4d90d01bd5f46",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/88/9409c1bd9391d7398711780572bac73e982b9e": "59fb2d1ad5b746247477db619153ab13",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c20b057492ad523405ffa5c936cd4938ef6e6": "87eae545ad24e3561f3263fed21e17ec",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/23b2fbf6b23f16656ba968ece295b0f96b7f7d": "afd5f60d1e52e803e1c5894a180a14b1",
".git/objects/99/23be1390a70066fb907f684b252094eda5dd21": "9bf37d15d1e33b77ce2b587ab01d818d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/794fa93f6e26224416f4696aafdb8e07258557": "954a4fcb3d03f3786116973af5af7cc6",
".git/objects/9f/498b7a4e22657ecbb9c1d28ca4a83c97c21146": "55ee64b9aac707c9a3a54a116b51ff4e",
".git/objects/b0/2655b470db30d6cfb052d28a32bfe98a965f17": "dd04d47d7c523526269c6359bced2d85",
".git/objects/b1/c5ce1bafe3e441bb953764e848950957a89d77": "cf384cd6f3be92bc44ad3f2722c974e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/59021af1f52dd8d5c0f9ae202d90cc645a6f14": "56f7f89c98b725bf126ed651a0f4b8a5",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/524488ae2831b8a909865d8fc1a7102ef28acc": "5e45bca2afc2085de834d7bc9a1a8b0e",
".git/objects/e4/6d03fb17baa04d7c36160d6544b997e79109d6": "029b38a88ba12d4f39ef8233b571fc9a",
".git/objects/e4/81592de27060384b7bc10c272528a39e1c4aa7": "1135219a0a5707dac285d551ad0ade25",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e9/3b76fc8936a93d8e1caf4467ea2cf5f31a7742": "5bab3e05d80d90306832a2ba35b5f320",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/5003c9f6d4ad4f61fc1f5a347b9061c03cbbde": "ddd37cb1c624d02d118a89d46fd5642f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/49a2bff342942aa8dfc06f74e602cef8608921": "486c2560efce063628a00145a57714d5",
".git/objects/ed/ab1b4b52007e12d99a0b71084379f133d460dc": "2a67bfb8390b3d20effcc28f78c79578",
".git/objects/ee/71786864c23947082863702ee5b3fdc8f9fdc8": "0ec791a2f1bb16b207845330cef9f2a2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/8ad53b62e3501741a13035355f1725400937e3": "d6044ad64f94d932c2d5f77156f53c55",
".git/refs/heads/main": "791cff290ebacbd9dc7a9beaa6a53821",
".git/refs/remotes/origin/main": "791cff290ebacbd9dc7a9beaa6a53821",
"assets/AssetManifest.bin": "7f21fb6a584d053b9acfed0184592e8d",
"assets/AssetManifest.bin.json": "a4f4c8f36d81fca99b61ff1da21d29b6",
"assets/AssetManifest.json": "70d2034eca378661d48850c9d514b9db",
"assets/assets/document/language.json": "723b80f9c1d8ca3060978bc9fa0dd199",
"assets/assets/document/register.json": "4055606ce759f68956e5df02ab3680e5",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/FontManifest.json": "de07fb01839b41ff6549bbd58fb43bce",
"assets/fonts/MaterialIcons-Regular.otf": "1aa69b25a548310eb6922c2be2b38ef6",
"assets/NOTICES": "db847c851d975fc899caeb7788d48cac",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "f0023e5300f60136ef0c75eb5f93d0c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2860d86b7f45c4e93039d0ff14075fd6",
"/": "2860d86b7f45c4e93039d0ff14075fd6",
"main.dart.js": "ef455dc39c9295cd44ced000bc8cca7d",
"manifest.json": "478e3786ab3c6fc900a593cc5ebdc1ec",
"README.md": "138f35ec4dd5eecea9a14a967556f739",
"version.json": "3ead39f53f03ed4f22b36df63c369295"};
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0d332c5ca24036f6d759ab0bf9ff4974",
".git/config": "edb71af217fd2a4255acaf55eebe9eb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ee89a1f4fccf35b7f3e099bd8951284c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "ce89943d45b2ce81903509052a5e0df0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ee79744b4c56a1251d931ca98602b90",
".git/logs/refs/heads/main": "0ee79744b4c56a1251d931ca98602b90",
".git/logs/refs/remotes/origin/HEAD": "4712e2d88bfe0c28d6040ea922622fa4",
".git/logs/refs/remotes/origin/main": "40014996e543284e61686d6b300b00b0",
".git/objects/03/2404c1f49b93191636830c978b2ded778def5e": "1ae911c2204057b3cd18fe3005bd1c45",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/b86c21956f2723ae1b24d4888cc1e5a9b269e3": "5a16821737b18b7b256c633325bd1621",
".git/objects/1d/f29cc18ae758669030a2b78b2f101c95dcf7e7": "ad7afec7f35fb2619494b8fcc031afbf",
".git/objects/1e/c843a8018aede0928712f9ac2c888d68068822": "842682cb1a539c6d67bc6ae24f864cde",
".git/objects/1f/c9a32dee108d60249739370563aec4d5ef709c": "47e8c9d76b0ea7e01e01116593df63b8",
".git/objects/23/4f258ab1748842b3adc5e7ec3d4299b9cca103": "d55a2b1a99535aa1fc33ae9afcdc5fa0",
".git/objects/2f/0b2dd87992699e636286416f7bb2f23a42efcb": "a1a3d3f07130834992aa2d587427167e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/43/c9dcef893cf90fa01a4f683ba1f983aa759876": "707d2006f6cf9e4010c0beb23fe8f139",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/482db7755a760f2be2ff1581e86ad969a258dc": "f29b3acc1c412f24d79a3b0ee5c8125b",
".git/objects/4d/731859f753d05434a6562572c6df266ddab530": "f95f755d89db57f9194df4145679f5a8",
".git/objects/4e/392346b75a2cb3a4a1542758c77d0ed1fe7061": "7c55bb060112d394daffae3958a97a2c",
".git/objects/4f/a4876190fa9baf5fb0453b2d0c82eb8bb76009": "1589fdf1630a2fd15d611c8cb7d7e6ae",
".git/objects/5c/cc96a58c9d7b90285a0fe8ac1a9a118c275f59": "9fec336f84c71a90eeff0ebcd4a9d2d4",
".git/objects/64/2cc51d04693dd63510d41ac257d61d06c39bf6": "5db92dc8ba5bed40773c941531ccc570",
".git/objects/66/0ae96be50cb5d1f26ae2fa251bf90978a8c7c1": "83d910d69516fc4b62204b9f1aff01eb",
".git/objects/66/e2482d2cbe1fe15a682b0d0e6f2118c3c6dacd": "6ca4aef127c8f400a5c584b5eb33b10b",
".git/objects/6b/2991ab8bacb2fc09e973ea380ae68816f3e760": "86a43665df321f135b2e45f883f5d26d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/37815f712cb791fd73b072bcf5d57697397dd0": "e754dfe84363ade26257f0caecccf1fb",
".git/objects/7d/61d5849942acfa9c84b65bf4fca16159106e88": "2d858a6d8a6ca394298a317f9677b13a",
".git/objects/80/fe57f7f4ac4f43730fa1c171d6414033394489": "84e600ca29c47ade33a2e9bec957da63",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/16f800baa1897792c5d99cc27d583eaf352f39": "fb57895a424933d496f9d6c97bfc9eea",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/96/3e6524826eebe9e123bbb1d977619c36616d26": "e62eb8577edcf0d535684301b09f6bcb",
".git/objects/99/fb3b55bf0645fd4a856cadec0ba5f330521b7f": "f3fe7c0159daefe84f02603ca984548c",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4fbc5387f15b459debb29c05f863ea530ed99c": "cf30ee08a70df432e94db897362e4d45",
".git/objects/a8/88ca48c95537358b80d6626f30a3d30ae51869": "acc5ef522dfe9085ed8b26bf7940ed26",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/b54007056ceb7502c47e63032e1ddab4c92ff2": "ec073b378698a91be7a707ea2270ec16",
".git/objects/b1/0ab47a2f634dc3787bd6bdcabea74417503757": "8cb1991ff99c4b3451821da897953c47",
".git/objects/b2/04095a4ce4ff26d8c3b4bb37e86ccd740940c1": "fe7eea3d03a76ea2a699cb26048f4fbe",
".git/objects/b7/317cfe37c1707a8397ecf6db182d3119d22a70": "792638fa89e4e2d197b0c3933a08a1e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/f3c6aa82caef132ac0e7278092eec62f44eadb": "e9ab35c2353a5db96cfb23a0517d2e3f",
".git/objects/bd/dbb65b32015ebd013c654b2cf28c9b1ccf6f09": "22c0aa9eaae301b9598c86fd2cc52250",
".git/objects/bf/d8cee2d13d0e931ffee64c248b57e459a7f0dc": "fe958ee559dccb80c220ac375f16b47b",
".git/objects/cc/4cc2381f23da4e6092836d30368f89c8b50e22": "a53e122fc8588268686bef6367e0c4b6",
".git/objects/ce/41e4d69868b2c2c78c37c94c775c6aaa036492": "10ed94b4ff5805088bae4b95aa90686e",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d8/ec80453890232dc817eabda43e96b2a2a27422": "affaef125f97885286b8f4e523f8e8a0",
".git/objects/dd/0cd8e74c72ce5bd78e671eebc6066f6b6a9466": "2e05270519a4ec2ad4c774608c63c374",
".git/objects/dd/2718a78c01aede2f23db2aa7718a0eef3b2b71": "94da5de1c0da7d3e29a7d7c81e7a6848",
".git/objects/dd/6602c7b24a064da381487649e5a144b177da09": "3c882d6e2f928b0363f300457b100449",
".git/objects/e0/143dd55688b868f78b218182c5e4d8655d9cef": "6cea816008a4618cbb6acafbc507c93b",
".git/objects/e0/4bbbcce28dc5ac34892611ceb0f81d1dd97440": "f94f9ddbff7cd579bfe281e24a8ff5c0",
".git/objects/e3/8a70a34b01bde6d76dd6f388e0c4ac2ac4f861": "9c680052ef458813eea6326179d8c42c",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/678c2cb128a599eca04ed70cdf6474dc162e41": "a1837718604035c4de205dfc201213ca",
".git/objects/f1/d1da4c675581c9a2246ba15930a4c7adf84500": "aa2021d42192928e4acfbf04c545dfa9",
".git/objects/fb/607eb7b033148ef19de805414ef01fa265a669": "cbca04f4e1e452b775881b57f12866e8",
".git/ORIG_HEAD": "6c25a9e635c90f0712efbfb45a4f9cc9",
".git/packed-refs": "0be796067a9b04bd8afa98f92d993688",
".git/refs/heads/main": "1cc6c90d2470dd93a8b0856a1b95ec98",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "1cc6c90d2470dd93a8b0856a1b95ec98",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a896c6b106187889ac9979d9afeb4178",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "93f6af1a234e946944becad54b723816",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "daba794ffef91b893dab6698e838cdb0",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6d53b3e2dfd11aca98289679be6e35b",
"/": "d6d53b3e2dfd11aca98289679be6e35b",
"main.dart.js": "00d5de0f8ac2c13e6061dd16d35cd313",
"manifest.json": "ee4950785200c3d149d71854ed91a7f6",
"README.md": "3e5ed46b5da7bf0343d56e1b9d2998cf",
"version.json": "d2c52617fb49949f742adf5b0a0b86da"
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

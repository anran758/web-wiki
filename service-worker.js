/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0e171ab95843f1731209e31517d85563"
  },
  {
    "url": "assets/css/0.styles.1c7d6a0d.css",
    "revision": "671c46e2a46786e8efe853a3a91f3ffb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.536c68cb.js",
    "revision": "8233d39cd0dbae1885a3182035524e37"
  },
  {
    "url": "assets/js/3.1d368d81.js",
    "revision": "308003ece96b1b233f4275861ac249db"
  },
  {
    "url": "assets/js/4.a140afe0.js",
    "revision": "94c430e5a7282bf0294da52cec0c793e"
  },
  {
    "url": "assets/js/5.720300fa.js",
    "revision": "b4643e53f2317399bd77a77fe8a0f0ce"
  },
  {
    "url": "assets/js/6.188a8300.js",
    "revision": "c0ae232b0a31a14598712774e46311ee"
  },
  {
    "url": "assets/js/7.7582badf.js",
    "revision": "b506c0992c4c889359f23a2188f84267"
  },
  {
    "url": "assets/js/8.7f69a59c.js",
    "revision": "9b80daf718ab7bcdf4d773a355decc9d"
  },
  {
    "url": "assets/js/9.bafcc47e.js",
    "revision": "f475b377c8013f2fe9a60f671f321098"
  },
  {
    "url": "assets/js/app.79d87e51.js",
    "revision": "b20b4749a223b775b9de4e1bf8149807"
  },
  {
    "url": "develop/front-end/index.html",
    "revision": "81b6d0e14021cc0a7a70ea0c3c02731d"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7ef51ee6cb1f1f975436ce5ba8ece655"
  },
  {
    "url": "product/index.html",
    "revision": "d3f21225def18ced0405d5ee0957a9ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

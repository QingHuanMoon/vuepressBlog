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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b938e0641cbd6f1d79778f64f84c370"
  },
  {
    "url": "assets/css/0.styles.c2ad0591.css",
    "revision": "0b9dcdbfeffa7704db00294aaf6741a6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f6dc19f.js",
    "revision": "55902d34f99812d1330c2472b6bb286f"
  },
  {
    "url": "assets/js/11.3d0d28b1.js",
    "revision": "b9249d658d7dfafdab4eea259bbb2838"
  },
  {
    "url": "assets/js/12.5bae081e.js",
    "revision": "10477851609af85907c71287ccacdf91"
  },
  {
    "url": "assets/js/13.61c8ec49.js",
    "revision": "b1c26803f13760a9a50d00f53da55da2"
  },
  {
    "url": "assets/js/14.f040d6ec.js",
    "revision": "25a43f3a2f05fb3121d918ddc9bc23f4"
  },
  {
    "url": "assets/js/15.0ba6e6b1.js",
    "revision": "84755c9d2f88b571a190c58ac8be8acb"
  },
  {
    "url": "assets/js/16.b8f20b8b.js",
    "revision": "7b54e0597f49cb689b48a6f060833092"
  },
  {
    "url": "assets/js/17.25ddd54c.js",
    "revision": "b72f2f174e763566dc9cc94beb07ad80"
  },
  {
    "url": "assets/js/18.86d89fa2.js",
    "revision": "14287dfdd08ee7e9c81081b5783ec389"
  },
  {
    "url": "assets/js/19.38c17a26.js",
    "revision": "3a02856454d061791fd49b95ec8d3333"
  },
  {
    "url": "assets/js/2.7254cf69.js",
    "revision": "e4393e311403dd88a76be158d3cacd3e"
  },
  {
    "url": "assets/js/20.e1e71b3a.js",
    "revision": "2ac8948a70e8ec84f8c885f4e5611545"
  },
  {
    "url": "assets/js/21.92e6607e.js",
    "revision": "f6234797f5dc8bc14a711d01979e14c1"
  },
  {
    "url": "assets/js/22.2caf226e.js",
    "revision": "7bb4bfaf1431a8ea3c8cd31bd716a3b6"
  },
  {
    "url": "assets/js/23.a0636e4d.js",
    "revision": "1e43c45763f07ca2f0d63d3c224a2c90"
  },
  {
    "url": "assets/js/24.4ad3fd76.js",
    "revision": "81bc99338005917974d898cdff6a030d"
  },
  {
    "url": "assets/js/25.b43636ca.js",
    "revision": "157028bafc19ffe3dc264704c06dad65"
  },
  {
    "url": "assets/js/26.05b8b9ae.js",
    "revision": "7164ed3c03dbcda7095d5ca2aafbc5cc"
  },
  {
    "url": "assets/js/27.c293569d.js",
    "revision": "19078087986ad3bebd12be5c39b4c3c5"
  },
  {
    "url": "assets/js/28.cfbfbddc.js",
    "revision": "54e6fea116d45f0bb35b0549fda5d927"
  },
  {
    "url": "assets/js/29.e5ecd5c8.js",
    "revision": "9c9d4b0dd86e53a852d51b5dd2843e8c"
  },
  {
    "url": "assets/js/3.36db7fa2.js",
    "revision": "a9a49302132131440304d84427c178f6"
  },
  {
    "url": "assets/js/30.4e2d4f7d.js",
    "revision": "0ae0da40d0ab925d553311dcef52eb6d"
  },
  {
    "url": "assets/js/31.d1d06704.js",
    "revision": "9051a52fe2e5bbf52bcd6cc17e283f1b"
  },
  {
    "url": "assets/js/32.2ba60eda.js",
    "revision": "1afe84402548f2c29a7573c201fdc3cf"
  },
  {
    "url": "assets/js/4.232124f2.js",
    "revision": "28b951669855755cdd42a1bfda5a5169"
  },
  {
    "url": "assets/js/5.460b8f54.js",
    "revision": "6f184669ab36abd51b0e7a3ab624fa9c"
  },
  {
    "url": "assets/js/6.159a62b5.js",
    "revision": "34488ff5d892bb47ddb0d1ee1394fc7d"
  },
  {
    "url": "assets/js/7.e1557824.js",
    "revision": "951bed301acc0c1850e30166d85f95da"
  },
  {
    "url": "assets/js/8.ada6233f.js",
    "revision": "5645e597fa7bb43c57dd094140340bfd"
  },
  {
    "url": "assets/js/9.b3930003.js",
    "revision": "0bdc8ae76d43b72c1aff7456fda6ea74"
  },
  {
    "url": "assets/js/app.bc443744.js",
    "revision": "8edf2a565add6ff9a6f1e6ad3d2e4349"
  },
  {
    "url": "config/index.html",
    "revision": "c597e87a227f10534b7cf3ae9b02666e"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "f7d7deb0474eeb7f6e6abf4ded2c62c4"
  },
  {
    "url": "guide/assets.html",
    "revision": "a6be91267d464cbfc90741eca4e3f3b5"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "db7f59c360f6b873a00cd845a66adafe"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "fd824f4e962cefb3ebb3546e76596dc8"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d5f842e4b72ac11353249628cb6c3c05"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "85c42f4d89065bc12534e7839bb28b79"
  },
  {
    "url": "guide/i18n.html",
    "revision": "20113a7619af703442fb3ecb627ff7f8"
  },
  {
    "url": "guide/index.html",
    "revision": "0d7a44866c9c62feea9d4254699c19f6"
  },
  {
    "url": "guide/markdown.html",
    "revision": "3bf84b73e38aa4b9cd641f92c90c9126"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "4af7cbc3eb6cc449e96b37ea93e36987"
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
    "revision": "28d1b7a444b7fcd89ce5b11eb71675f1"
  },
  {
    "url": "js/help.js",
    "revision": "ebb8bc172845e376a2b19e75ca68f9cb"
  },
  {
    "url": "js/index.html",
    "revision": "31fa4bf8127c3fc4ff0412cda61bec5b"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "94a4160f3ff8f435b359731de0262797"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "0eea5200e230c7103e63ed6f4ec03d18"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "d45af1159181cb3cccfda2b1d6ad5dc2"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "8df80b19f50854be32b038b4d63eb0a3"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "a9266ef9a1280e13c7ce07f5539bb635"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "e91f32b03eae9863461405002d0f3b0f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "6624e6eac4ef9bf2017f5dc328ad0699"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "d95300e49acad8bc77b7781411e3b9d0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "372a724ec24f064d2ce922e0dc006837"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "aee6ef7f83b9cc6aecc2fbf22e3b6367"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "59a6ac706dc14c86bf1294d077d3c1a4"
  },
  {
    "url": "zh/index.html",
    "revision": "37fe75dc4ba64916739cb1ffa503248e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

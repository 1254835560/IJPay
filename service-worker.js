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
    "revision": "14dbf94bd83fb68a3ec765da3078983f"
  },
  {
    "url": "assets/css/0.styles.a7c1ccb7.css",
    "revision": "02a0cdff8c18b7d0120be8aee6fcf10b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.96706ba7.js",
    "revision": "5b222a8e29d31b45be2ff3efcbbf73b7"
  },
  {
    "url": "assets/js/11.9c479e9b.js",
    "revision": "f8ccd09385d021bdda99a552e7e58f6f"
  },
  {
    "url": "assets/js/12.d28ad060.js",
    "revision": "106640f050c5cb4eef5f149f3bf952b5"
  },
  {
    "url": "assets/js/13.2c1f6e09.js",
    "revision": "5f4b0b2ec7edfa02be386b266e9a0d22"
  },
  {
    "url": "assets/js/14.bb3f807c.js",
    "revision": "276dd32730c0ded58e0d2cd5966c18e3"
  },
  {
    "url": "assets/js/15.b540cbe4.js",
    "revision": "fc287f8857b810ab145f0e2455e87933"
  },
  {
    "url": "assets/js/16.af5ef275.js",
    "revision": "85977b66fd9302291127a5e2a3a1079a"
  },
  {
    "url": "assets/js/17.3e204498.js",
    "revision": "15a628356e595eb5047ebb47839697ea"
  },
  {
    "url": "assets/js/18.7ff753ec.js",
    "revision": "5cc97f481a79f5f17deb6544c2c2c3ad"
  },
  {
    "url": "assets/js/19.1249ccc0.js",
    "revision": "939400963454b1f5099d08a3b8197e60"
  },
  {
    "url": "assets/js/20.14c40bca.js",
    "revision": "f62c3ed623f3a27b310ddfa1b8ec823f"
  },
  {
    "url": "assets/js/21.3b5902d2.js",
    "revision": "abe4dfcd894b8fc355b93728918c2d18"
  },
  {
    "url": "assets/js/22.3d6376ac.js",
    "revision": "082220658906adf5f3f1bb601fc279e4"
  },
  {
    "url": "assets/js/23.c4945c77.js",
    "revision": "0201f55f6b4068e55d05c41e3ab30095"
  },
  {
    "url": "assets/js/24.46947aec.js",
    "revision": "6f49ab1c34230da03eb4770b6e3d6d53"
  },
  {
    "url": "assets/js/25.d327b83a.js",
    "revision": "c0ad3f5f807f231e7464fcbe4899db32"
  },
  {
    "url": "assets/js/26.f76ef7f5.js",
    "revision": "dae9ae72ea8e3b496782129f536b80c1"
  },
  {
    "url": "assets/js/27.535e594f.js",
    "revision": "23277b71a38eb2f31410d4bfc6a7eff8"
  },
  {
    "url": "assets/js/28.262bcb59.js",
    "revision": "56b17b13b49735780fbf1fbcf8cb041d"
  },
  {
    "url": "assets/js/29.7bff6d79.js",
    "revision": "271a4351e5a828a1844f946855d77f45"
  },
  {
    "url": "assets/js/3.8eed32b7.js",
    "revision": "ff78f5ac518e1ea924b339393b89e18b"
  },
  {
    "url": "assets/js/30.3a16227c.js",
    "revision": "148ba067c274873352fc048d27c36bc1"
  },
  {
    "url": "assets/js/4.a0e75a3d.js",
    "revision": "b1930a3b89ce0a7f3b4734465641522d"
  },
  {
    "url": "assets/js/5.c4a8ee42.js",
    "revision": "ec850af706321bd26fc85ad096194a1f"
  },
  {
    "url": "assets/js/6.efbc9fd3.js",
    "revision": "c0488d6d506b37e2e1f468750604e8ea"
  },
  {
    "url": "assets/js/7.a091a6f6.js",
    "revision": "f3e1fb0250fc4d47681d1e3150493e8c"
  },
  {
    "url": "assets/js/8.c02ae17c.js",
    "revision": "62a0779f54a0476ee82b3074b73385da"
  },
  {
    "url": "assets/js/9.def887fc.js",
    "revision": "d40042a4baeecc60a3203010c1aba695"
  },
  {
    "url": "assets/js/app.57abc401.js",
    "revision": "aaa1512ecfd99129570bbed557f5811f"
  },
  {
    "url": "assets/js/vendors~notification.241402c3.js",
    "revision": "805674791258660334e65e8dacf35a0f"
  },
  {
    "url": "guide/alipay/extension.html",
    "revision": "754bd9c13a9d6f482125987d228c1a28"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "3d9f2c142b529b50fea9495f6ee22451"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "4d4e58e8ef475f234b367fbadc924a4c"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "ad8bcc35e5f899b45ce6fcb0dbbc32d4"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "eb01426728ea1dbb8db118e0fb2b454e"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "ee7c5842db8ca95394f235027d3d47d9"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "ace7c91892d10a6b949a98412c8fabbe"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "fbbfd9ad0d3f2c1b534c322179b7e2f8"
  },
  {
    "url": "guide/http.html",
    "revision": "7e9b1b368f08a49766a4000482eb8222"
  },
  {
    "url": "guide/index.html",
    "revision": "b0b5d5b28f65598cdf6774b018e865e9"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "add7ea98b93e62f453f358d08aedfd55"
  },
  {
    "url": "guide/maven.html",
    "revision": "1d7d783f4aabc5651024c42f0ed00671"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "a3c034cd0c75fe0944ef563e4620d6d3"
  },
  {
    "url": "guide/resource.html",
    "revision": "244bdf5ed9b8b025e775e2025927dded"
  },
  {
    "url": "guide/tools/frp/index.html",
    "revision": "4c5aea3cb645f35e877917380a340aea"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "e31fe4cb1b647705ecd08b1c41c8824f"
  },
  {
    "url": "guide/weixin/tnwx.html",
    "revision": "38eb05d92dab2e52497b510bf90db2fa"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "5582a0663621e602d49d4bab3b33004b"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "6f39a9d3f2b06f7577d584939830932e"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "19c8757e8000f59b05773ada09755849"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "4d29170ed6e9f44e1390cff5e3878090"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "8110db98baf8b558d34f8fc1fd7a8d8b"
  },
  {
    "url": "index.html",
    "revision": "d58c962dfff4e17cbee78a6b3e835795"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "311a9f9b98f805954aeb9711c2b7959f"
  },
  {
    "url": "wxpay.png",
    "revision": "f8f237b08107f485bcb03b3937ec6a08"
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

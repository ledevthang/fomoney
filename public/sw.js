if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const r=e=>a(e,t),d={module:{uri:t},exports:c,require:r};i[t]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f52fd911"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7b93eb46ba1c51876dcb170fce87c0e8"},{url:"/_next/static/HG5l0guUabyGz3wmfe7BF/_buildManifest.js",revision:"19fa89dc7c03e5e9389e954d609a2975"},{url:"/_next/static/HG5l0guUabyGz3wmfe7BF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/114-7a696dbc810680c5.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/267-2eb6ecc7d74f1b83.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/2f0b94e8-168769016144180f.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/3a91511d-6194c4084f2dedc8.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/415-ece4975c363a9b18.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/4bd1b696-05e9802fd2b95bae.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/517-c31466ab33de9402.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/565-d0e091456c6d164e.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/59650de3-6dcc58903fd387c4.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/662-4d473299c2aa7cf4.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/712-05b7852bf5a898f4.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/733-da5427e473ff2d86.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/779-b5d0da088168cbf5.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/88-3e159b987618daee.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/97b52221-e8c96245735cde96.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/_not-found/page-3f4be2cfdf62342f.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/api/auth/route-0be5663337634c67.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/api/create-season/route-fbc1c919623ad109.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/api/deposit-history/route-96d7bc79a545ed10.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/api/ranking/route-d8999460974d8c64.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/api/update-point/route-7311f524c04081ef.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/game/dapp/layout-41fbeceff4173c45.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/game/dapp/page-2b9cca64171b0e92.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/game/page-0944eb312921bbe9.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/game/playchain/page-77a8bf9bf4faad77.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/game/playmeme/page-85fdb7368efc06b8.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/layout-59ec643ab9b1b4e7.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/page-2ff254b73801fce0.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/app/staking/page-98d2968e702b5950.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/framework-58f97e80b1d6e3ea.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/main-app-8ee19780f1b8ba66.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/main-daed5d90c0f6470a.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-535d58a2b72f8c22.js",revision:"HG5l0guUabyGz3wmfe7BF"},{url:"/_next/static/css/0af1ca96dcae7344.css",revision:"0af1ca96dcae7344"},{url:"/_next/static/css/bdf68d429d8c5eab.css",revision:"bdf68d429d8c5eab"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/_next/static/media/Digital7.369fa954.ttf",revision:"369fa954"},{url:"/_next/static/media/Futura Bold font.987bbf79.ttf",revision:"987bbf79"},{url:"/_next/static/media/banner-agent-legend.8fb78d2f.png",revision:"80d592d7a8c5cb081f1b4a4eac4beac2"},{url:"/_next/static/media/banner-game.dc0c3cab.jpg",revision:"8ee17610f5eda35aabd8d3b30d62b682"},{url:"/_next/static/media/chn1024.03016a1f.png",revision:"03016a1f"},{url:"/_next/static/media/chn128.1b13d49f.png",revision:"1b13d49f"},{url:"/_next/static/media/chn16.cabbb30f.png",revision:"cabbb30f"},{url:"/_next/static/media/chn2.09544a4c.png",revision:"09544a4c"},{url:"/_next/static/media/chn2048.f0b56653.png",revision:"f0b56653"},{url:"/_next/static/media/chn256.dd3d912b.png",revision:"dd3d912b"},{url:"/_next/static/media/chn32.a4c30e5a.png",revision:"a4c30e5a"},{url:"/_next/static/media/chn4.ac8e1187.png",revision:"ac8e1187"},{url:"/_next/static/media/chn512.63efbe7b.png",revision:"63efbe7b"},{url:"/_next/static/media/chn64.0e4049b4.png",revision:"0e4049b4"},{url:"/_next/static/media/chn8.178c0b61.png",revision:"178c0b61"},{url:"/_next/static/media/futur.cda3c2fc.ttf",revision:"cda3c2fc"},{url:"/_next/static/media/lcd.1859dc19.ttf",revision:"1859dc19"},{url:"/_next/static/media/logo.fdb05220.png",revision:"dc624d95be23df222879c581568bd55d"},{url:"/_next/static/media/me1024.c8b8d3c2.png",revision:"c8b8d3c2"},{url:"/_next/static/media/me128.a3235eb8.png",revision:"a3235eb8"},{url:"/_next/static/media/me16.d74453a8.png",revision:"d74453a8"},{url:"/_next/static/media/me2.f9c4416b.png",revision:"f9c4416b"},{url:"/_next/static/media/me2048.f0b56653.png",revision:"f0b56653"},{url:"/_next/static/media/me256.7db4e4ca.png",revision:"7db4e4ca"},{url:"/_next/static/media/me32.9148b8f3.png",revision:"9148b8f3"},{url:"/_next/static/media/me4.156fd098.png",revision:"156fd098"},{url:"/_next/static/media/me512.81686c7e.png",revision:"81686c7e"},{url:"/_next/static/media/me64.9eb9cb2b.png",revision:"9eb9cb2b"},{url:"/_next/static/media/me8.076d8fb0.png",revision:"076d8fb0"},{url:"/_next/static/media/pillblue.2546d431.png",revision:"04d7ddaba10d068ff2c741464b5bfba1"},{url:"/_next/static/media/pillred.3f5866f3.png",revision:"41519015e24e0bbb85543dcb264f642a"},{url:"/_next/static/media/ring.67ebff20.png",revision:"992ccf585ac607eb3629d2f0e8715b24"},{url:"/_next/static/media/sonic-logo.7ba4146c.png",revision:"437e8ddf0bdd5f4194af640f31ff55c6"},{url:"/_next/static/media/sonicx.7ba4146c.png",revision:"437e8ddf0bdd5f4194af640f31ff55c6"},{url:"/images/banner-agent-legend.png",revision:"80d592d7a8c5cb081f1b4a4eac4beac2"},{url:"/images/banner-game.jpg",revision:"8ee17610f5eda35aabd8d3b30d62b682"},{url:"/images/bg.png",revision:"a64da2770757ccb770eb8276dee9c0b5"},{url:"/images/discord.png",revision:"7d8ae489c6cd52fe5d47942e0e515703"},{url:"/images/favicon.ico",revision:"c9b1a000b7ad7689afc11a30e469bf60"},{url:"/images/gitbook.png",revision:"8b1496537912eb7ec4b0a4ed761f6e44"},{url:"/images/logo-agent-legend.jpg",revision:"5c4755ea0dff3e5966090d28a7f83624"},{url:"/images/logo-fomoney2048.jpg",revision:"908d205a374a51aff9ded1184b929cfd"},{url:"/images/logo.png",revision:"dc624d95be23df222879c581568bd55d"},{url:"/images/medium.png",revision:"b819647e981dea44c61d662b0bc62643"},{url:"/images/ring.png",revision:"992ccf585ac607eb3629d2f0e8715b24"},{url:"/images/sonicx.png",revision:"437e8ddf0bdd5f4194af640f31ff55c6"},{url:"/images/telegram.png",revision:"1d43daba84fd5080dd3872cf7b08210d"},{url:"/images/x.png",revision:"26d153b060ac39056e61691e00df7a70"},{url:"/manifest.json",revision:"212ad6705aa80ebfa230d672540f51c9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(gstatic|googleapis)\.com/,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET")}));

if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const u=e=>i(e,t),r={module:{uri:t},exports:c,require:u};s[t]=Promise.all(a.map((e=>r[e]||u(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f52fd911"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2143e5a246326e9cee45aded51aba59d"},{url:"/_next/static/BxLYO2uTfTlk5AReWuVQ_/_buildManifest.js",revision:"42d816eae9f45cb2b7dfff12061113e8"},{url:"/_next/static/BxLYO2uTfTlk5AReWuVQ_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/147-020cead488c0e84a.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/155-3e9ed44759c7d946.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/157-a0a49cde49820ff6.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/191-90fcab8318bb23b5.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/2f0b94e8-3b678c28eddaea5d.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/336-e91adc27ede701da.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/3a91511d-dbcaf95c540db52a.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/451-63e2d9583a390742.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/473-e4dc89ad95ab9862.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/491-df7c99f3de164c3c.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/4bd1b696-e5735988525087a5.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/517-eaf3faacbea6ee92.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/59650de3-e4f648ceeac60f95.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/97b52221-62b0135e0b1abd41.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/985-7d3a4ce6657b8a68.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/_not-found/page-f9f71e9f0c5e78a3.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/api/auth/route-2611c9427a5e82ec.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/api/ranking/route-65d0e9356a5b5a48.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/game/page-f4926a838ce88942.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/game/play/page-453c2bb435e68985.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/layout-ba3d238573671d9e.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/page-5aad0d88fc352dc1.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/app/staking/page-c6f57d26f554a0ca.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/framework-d29117d969504448.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/main-599c2368bf513d42.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/main-app-2eeb068a91595176.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4e9d7b5e16a3549c.js",revision:"BxLYO2uTfTlk5AReWuVQ_"},{url:"/_next/static/css/c8a7e7ece45c1f29.css",revision:"c8a7e7ece45c1f29"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/_next/static/media/Digital7.369fa954.ttf",revision:"369fa954"},{url:"/_next/static/media/banner-game.19c47fd8.webp",revision:"dcd9bb91e30ddd6aeba9adbe4ef41d02"},{url:"/_next/static/media/logo.fdb05220.png",revision:"dc624d95be23df222879c581568bd55d"},{url:"/_next/static/media/sonicx.7ba4146c.png",revision:"437e8ddf0bdd5f4194af640f31ff55c6"},{url:"/images/banner-game.png",revision:"3f6dd9593b5793576a5f3756908f1e18"},{url:"/images/banner-game.webp",revision:"dcd9bb91e30ddd6aeba9adbe4ef41d02"},{url:"/images/bg.png",revision:"a64da2770757ccb770eb8276dee9c0b5"},{url:"/images/discord.png",revision:"7d8ae489c6cd52fe5d47942e0e515703"},{url:"/images/favicon.ico",revision:"c9b1a000b7ad7689afc11a30e469bf60"},{url:"/images/gitbook.png",revision:"8b1496537912eb7ec4b0a4ed761f6e44"},{url:"/images/logo.png",revision:"dc624d95be23df222879c581568bd55d"},{url:"/images/medium.png",revision:"b819647e981dea44c61d662b0bc62643"},{url:"/images/sonicx.png",revision:"437e8ddf0bdd5f4194af640f31ff55c6"},{url:"/images/telegram.png",revision:"1d43daba84fd5080dd3872cf7b08210d"},{url:"/images/x.png",revision:"26d153b060ac39056e61691e00df7a70"},{url:"/manifest.json",revision:"212ad6705aa80ebfa230d672540f51c9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(gstatic|googleapis)\.com/,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET")}));

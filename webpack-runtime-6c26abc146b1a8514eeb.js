!function(){"use strict";var e,t,n,r,o,a={},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,c),n.loaded=!0,n.exports}c.m=a,e=[],c.O=function(t,n,r,o){if(!n){var a=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(c.O).every((function(e){return c.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<a&&(a=o));i&&(e.splice(f--,1),t=r())}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return{112:"a9a7754c",248:"e5dcc9c9143906e2531dbc0531a8faaf2d98f66f",351:"commons",523:"cb1608f2",532:"styles",678:"component---src-pages-index-js",690:"component---src-pages-shop-js",698:"4a3ea9cd",844:"component---src-pages-covid-js"}[e]+"-"+{112:"77a0c2883064337f8416",248:"8c8b4bae4edec8ccb9dd",351:"a7008cb1a4241533876b",523:"7990aa6fa293329612fb",532:"b0fdec28c7f3d462a9cd",678:"f8439e1608a654bd7101",690:"658242d3b995249bc57f",698:"f22dcdd46b69d516251b",844:"9698419f963dda313a55"}[e]+".js"},c.miniCssF=function(e){return"styles.b805be0c58f8d6e8bd78.css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="gatsby-starter-hello-world:",c.l=function(e,r,o,a){if(t[e])t[e].push(r);else{var i,u;if(void 0!==o)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var s=function(n,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},c.p="/my-portfolio/",r=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),o=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},c.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],u=n[2],f=0;for(r in i)c.o(i,r)&&(c.m[r]=i[r]);for(u&&u(c),t&&t(n);f<a.length;f++)o=a[f],c.o(e,o)&&e[o]&&e[o][0](),e[a[f]]=0;c.O()},n=self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),c.O()}();
//# sourceMappingURL=webpack-runtime-6c26abc146b1a8514eeb.js.map
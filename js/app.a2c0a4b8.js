(function(e){function t(t){for(var n,o,u=t[0],i=t[1],c=t[2],s=0,p=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},l=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3abe9182"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"92e65e06"}[e]+".css",a=i.p+n,l=document.getElementsByTagName("link"),u=0;u<l.length;u++){var c=l[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],s=c.getAttribute("data-href");if(s===n||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete o[e],f.parentNode.removeChild(f),r(l)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=l);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var p=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/teguhvue-ttt/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=s;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],l=r("2877"),u={},i=Object(l["a"])(u,o,a,!1,null,null,null),c=i.exports,s=r("9483");Object(s["a"])("".concat("/teguhvue-ttt/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inilobby"},[r("form",{staticClass:"lobby",on:{submit:function(t){return t.preventDefault(),e.start(t)}}},[r("div",[r("label",[e._v("Player 1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.player1,expression:"player1"}],attrs:{type:"text",placeholder:"Name for player 1"},domProps:{value:e.player1},on:{input:function(t){t.target.composing||(e.player1=t.target.value)}}})]),r("div",[r("label",[e._v("Player 2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.player2,expression:"player2"}],attrs:{type:"text",placeholder:"Name for player 2"},domProps:{value:e.player2},on:{input:function(t){t.target.composing||(e.player2=t.target.value)}}})]),r("div",{staticClass:"lobby__action"},[r("button",{attrs:{type:"submit",disabled:!e.player1||!e.player2}},[e._v("Start the game")])])])])},d=[],m={data:function(){return{player1:null,player2:null}},methods:{start:function(){this.$store.commit("player1Name",this.player1),this.$store.commit("player2Name",this.player2),this.$router.push({path:"/game"})}},beforeRouteEnter:function(e,t,r){r((function(e){e.player1=null,e.player2=null}))}},v=m,y=(r("a9b7"),Object(l["a"])(v,f,d,!1,null,null,null)),h=y.exports;n["a"].use(p["a"]);var b=[{path:"/",name:"Lobby",component:h},{path:"/game",name:"Game",component:function(){return r.e("about").then(r.bind(null,"7d36"))}}],g=new p["a"]({mode:"history",base:"/teguhvue-ttt/",routes:b}),w=g,N=r("2f62");n["a"].use(N["a"]);var _=new N["a"].Store({state:{player1Name:null,player2Name:null},mutations:{clear:function(e){e.player1Name=null,e.player2Name=null},player1Name:function(e,t){e.player1Name=t},player2Name:function(e,t){e.player2Name=t}}});r("73ec");n["a"].config.productionTip=!1,new n["a"]({router:w,store:_,render:function(e){return e(c)}}).$mount("#app")},"73ec":function(e,t,r){},a9b7:function(e,t,r){"use strict";var n=r("d182"),o=r.n(n);o.a},d182:function(e,t,r){}});
//# sourceMappingURL=app.a2c0a4b8.js.map
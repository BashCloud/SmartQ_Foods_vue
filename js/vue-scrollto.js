/**
 * Minified by jsDelivr using UglifyJS v3.3.22.
 * Original file: /npm/vue-scrollto@2.11.0/vue-scrollto.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n["vue-scrollto"]=e()}(this,function(){"use strict";var c=4,l=.001,s=1e-7,d=10,v=11,y=1/(v-1),r="function"==typeof Float32Array;function t(n,e){return 1-3*e+3*n}function i(n,e){return 3*e-6*n}function u(n){return 3*n}function p(n,e,o){return((t(e,o)*n+i(e,o))*n+u(e))*n}function m(n,e,o){return 3*t(e,o)*n*n+2*i(e,o)*n+u(e)}var F=function(u,e,f,o){if(!(0<=u&&u<=1&&0<=f&&f<=1))throw new Error("bezier x values must be in [0, 1] range");var a=r?new Float32Array(v):new Array(v);if(u!==e||f!==o)for(var n=0;n<v;++n)a[n]=p(n*y,u,f);function t(n){for(var e=0,o=1,t=v-1;o!==t&&a[o]<=n;++o)e+=y;var r=e+(n-a[--o])/(a[o+1]-a[o])*y,i=m(r,u,f);return l<=i?function(n,e,o,t){for(var r=0;r<c;++r){var i=m(e,o,t);if(0===i)return e;e-=(p(e,o,t)-n)/i}return e}(n,r,u,f):0===i?r:function(n,e,o,t,r){for(var i,u,f=0;0<(i=p(u=e+(o-e)/2,t,r)-n)?o=u:e=u,Math.abs(i)>s&&++f<d;);return u}(n,e,e+y,u,f)}return function(n){return u===e&&f===o?n:0===n?0:1===n?1:p(t(n),e,o)}},M={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},f=!1;try{var n=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,n)}catch(n){}var P={$:function(n){return"string"!=typeof n?n:document.querySelector(n)},on:function(n,e,o){var t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)n.addEventListener(e[r],o,!!f&&t)},off:function(n,e,o){e instanceof Array||(e=[e]);for(var t=0;t<e.length;t++)n.removeEventListener(e[t],o)},cumulativeOffset:function(n){for(var e=0,o=0;e+=n.offsetTop||0,o+=n.offsetLeft||0,n=n.offsetParent;);return{top:e,left:o}}},V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},$=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],k={container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function o(n){k=e({},k,n)}var a=function(){var c=void 0,l=void 0,s=void 0,d=void 0,v=void 0,y=void 0,p=void 0,m=void 0,b=void 0,w=void 0,g=void 0,h=void 0,S=void 0,L=void 0,T=void 0,O=void 0,E=void 0,x=void 0,A=void 0,C=function(n){y&&(A=n,x=!0)},D=void 0,e=void 0,o=void 0,t=void 0;function j(n){if(x)return r();e||(e=n),o=n-e,t=Math.min(o/s,1),t=D(t),i(l,L+E*t,h+O*t),o<s?window.requestAnimationFrame(j):r()}function r(){x||i(l,T,S),e=!1,P.off(l,$,C),x&&b&&b(A,c),!x&&m&&m(c)}function i(n,e,o){g&&(n.scrollTop=e),w&&(n.scrollLeft=o),"body"===n.tagName.toLowerCase()&&(g&&(document.documentElement.scrollTop=e),w&&(document.documentElement.scrollLeft=o))}return function(n,e){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if("object"===(void 0===e?"undefined":V(e))?o=e:"number"==typeof e&&(o.duration=e),!(c=P.$(n)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+n);l=P.$(o.container||k.container),s=o.duration||k.duration,d=o.easing||k.easing,v=o.offset||k.offset,y=o.hasOwnProperty("cancelable")?!1!==o.cancelable:k.cancelable,p=o.onStart||k.onStart,m=o.onDone||k.onDone,b=o.onCancel||k.onCancel,w=void 0===o.x?k.x:o.x,g=void 0===o.y?k.y:o.y;var t,r,i,u,f=P.cumulativeOffset(l),a=P.cumulativeOffset(c);return"function"==typeof v&&(v=v()),r=(t=l).scrollTop,"body"===t.tagName.toLowerCase()&&(r=r||document.documentElement.scrollTop),L=r,T=a.top-f.top+v,u=(i=l).scrollLeft,"body"===i.tagName.toLowerCase()&&(u=u||document.documentElement.scrollLeft),h=u,S=a.left-f.left+v,x=!1,E=T-L,O=S-h,"string"==typeof d&&(d=M[d]||M.ease),D=F.apply(F,d),E||O?(p&&p(c),P.on(l,$,C,{passive:!0}),window.requestAnimationFrame(j),function(){x=!(A=null)}):void 0}}(),b=[];function w(n){var e=function(n){for(var e=0;e<b.length;++e)if(b[e].el===n)return b[e]}(n);return e||(b.push(e={el:n,binding:{}}),e)}function g(n){n.preventDefault();var e=w(this).binding;if("string"==typeof e.value)return a(e.value);a(e.value.el||e.value.element,e.value)}var h={bind:function(n,e){w(n).binding=e,P.on(n,"click",g)},unbind:function(n){!function(n){for(var e=0;e<b.length;++e)if(b[e].el===n)return b.splice(e,1)}(n),P.off(n,"click",g)},update:function(n,e){w(n).binding=e},scrollTo:a,bindings:b},S=function(n,e){e&&o(e),n.directive("scroll-to",h),n.prototype.$scrollTo=h.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=h,window.VueScrollTo.setDefaults=o,Vue.use(S)),h.install=S,h});
//# sourceMappingURL=/sm/705a8d07029242191d72d2459b817758efb2ddd8f6d1ce435eaaba5fd10e044f.map
/*! For license information please see UDABackground.js.LICENSE.txt */
var UdanLibrary;!function(){var t={3631:function(t,e,n){"use strict";n.r(e),n.d(e,{BotInfo:function(){return c},BrowserInfo:function(){return i},NodeInfo:function(){return a},ReactNativeInfo:function(){return s},SearchBotDeviceInfo:function(){return u},browserName:function(){return y},detect:function(){return d},detectOS:function(){return m},getNodeVersion:function(){return b},parseUserAgent:function(){return w}});var r=n(4155),o=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},i=function(t,e,n){this.name=t,this.version=e,this.os=n,this.type="browser"},a=function(t){this.version=t,this.type="node",this.name="node",this.os=r.platform},u=function(t,e,n,r){this.name=t,this.version=e,this.os=n,this.bot=r,this.type="bot-device"},c=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},s=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},f=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,l=3,h=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],p=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function d(t){return t?w(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new s:"undefined"!=typeof navigator?w(navigator.userAgent):b()}function v(t){return""!==t&&h.reduce((function(e,n){var r=n[0],o=n[1];if(e)return e;var i=o.exec(t);return!!i&&[r,i]}),!1)}function y(t){var e=v(t);return e?e[0]:null}function w(t){var e=v(t);if(!e)return null;var n=e[0],r=e[1];if("searchbot"===n)return new c;var a=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);a?a.length<l&&(a=o(o([],a,!0),function(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}(l-a.length),!0)):a=[];var s=a.join("."),h=m(t),p=f.exec(t);return p&&p[1]?new u(n,s,h,p[1]):new i(n,s,h)}function m(t){for(var e=0,n=p.length;e<n;e++){var r=p[e],o=r[0];if(r[1].exec(t))return o}return null}function b(){return void 0!==r&&r.version?new a(r.version.slice(1)):null}},4155:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var u,c=[],s=!1,f=-1;function l(){s&&u&&(s=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!s){var t=a(l);s=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||s||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r);var t=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))};const e=(e,n)=>t(void 0,void 0,void 0,(function*(){const t=(new TextEncoder).encode(e),r=yield crypto.subtle.digest(n,t);return Array.from(new Uint8Array(r)).map((t=>t.toString(16).padStart(2,"0"))).join("")}));var o=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))};const i=(t,e,n,r=!0)=>o(void 0,void 0,void 0,(function*(){try{const o={method:e,headers:{"Content-Type":"application/json",charset:"UTF-8"}};n&&(o.body=JSON.stringify(n));const i="https://udan.nistapp.ai/api";let a="https://udan.nistapp.ai/api";-1===t.indexOf("http")&&("TEST"===UDAGlobalConfig.environment&&(a=i),t=a+t);let u=yield fetch(t,o);return!!u.ok&&(r?u.json():u.text())}catch(t){return!1}}));function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),u=new L(o||[]);return r(a,"_invoke",{value:S(t,n,u)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function d(){}function v(){}function y(){}var w={};f(w,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(W([])));b&&b!==e&&n.call(b,i)&&(w=b);var g=y.prototype=d.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function o(r,i,a,c){var s=h(t[r],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==u(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function W(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=y,r(g,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(k.prototype),f(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),f(g,s,"Generator"),f(g,i,(function(){return this})),f(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=W,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:W(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))}}var f,l=(0,n(3631).detect)();switch(l&&l.name){case"edge-chromium":case"edge":case"edge-ios":case"chrome":!0,f=chrome;break;default:f=l}var h,p="https://udan.nistapp.ai/api",d="uda-sessiondata",v="uda-csp-storage",y={sessionkey:"",authenticated:!1,authenticationsource:"",authdata:{},csp:{cspenabled:!1,udanallowed:!0,domain:""}};function w(){return m.apply(this,arguments)}function m(){return m=s(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y.authenticationsource="google",f.identity.getProfileUserInfo({accountStatus:"ANY"},function(){var t=s(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===n.id||""===n.email){t.next=6;break}y.authenticated=!0,y.authdata=n,e(y.authdata.id,"SHA-512").then(function(){var t=s(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y.authdata.id=n,e(y.authdata.email,"SHA-512").then(function(){var t=s(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y.authdata.email=e,t.next=3,L();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=8;break;case 6:return t.next=8,b("UDAAlertMessageData","login");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function b(){return g.apply(this,arguments)}function g(){return g=s(a().mark((function t(){var e,n,r,o,i,u,c,s,l,h,p=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:"UDAUserSessionData",n=p.length>1&&void 0!==p[1]?p[1]:"",t.next=4,x();case 4:if(r=t.sent,"UDAAlertMessageData"!==e){t.next=11;break}return t.next=8,f.tabs.sendMessage(r.id,{action:e,data:n});case 8:return t.abrupt("return",!0);case 11:if(o=new URL(r.url),i=o.protocol+"//"+o.hostname,u={cspenabled:!1,udanallowed:!0,domain:""},c=N(v),s=!1,!c){t.next=29;break}if(!((l=c).length>0)){t.next=29;break}h=0;case 20:if(!(h<l.length)){t.next=28;break}if(l[h].domain!==i){t.next=25;break}return s=!0,u=l[h],t.abrupt("break",28);case 25:h++,t.next=20;break;case 28:s&&(y.csp=u);case 29:return y.csp=u,t.next=33,f.tabs.sendMessage(r.id,{action:e,data:JSON.stringify(y)});case 33:return t.abrupt("return",!0);case 34:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function x(){return k.apply(this,arguments)}function k(){return(k=s(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={active:!0,currentWindow:!0},t.next=3,f.tabs.query(e);case 3:if(!(n=t.sent[0])){t.next=8;break}return t.abrupt("return",n);case 8:return t.next=10,f.tabs.get(h);case 10:if(!(n=t.sent)){t.next=15;break}return t.abrupt("return",n);case 15:case 16:return t.abrupt("return",n);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return O.apply(this,arguments)}function O(){return(O=s(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e={})[d]=y,t.next=4,f.storage.local.set(e);case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return T.apply(this,arguments)}function T(){return T=s(a().mark((function t(){var e,n,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,i(p+"/user/getsessionkey","GET",null,!1);case 3:if(n=t.sent){t.next=7;break}return t.abrupt("return",n);case 7:return y.sessionkey=n,t.next=10,S();case 10:if(!e){t.next=13;break}return t.next=13,b();case 13:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}function L(){return W.apply(this,arguments)}function W(){return(W=s(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={authid:y.authdata.id,emailid:y.authdata.email?y.authdata.email:"",authsource:y.authenticationsource},t.next=3,i(p+"/user/checkauthid","POST",e);case 3:if(!(n=t.sent)){t.next=10;break}return t.next=7,A(n);case 7:return t.abrupt("return",!0);case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return P.apply(this,arguments)}function P(){return(P=s(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={userauthid:e.id,usersessionid:y.sessionkey},t.next=3,i(p+"/user/checkusersession","POST",n);case 3:return t.sent,t.next=6,S();case 6:return t.next=8,b("UDAAuthenticatedUserSessionData");case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){try{var e=localStorage.getItem(t);return JSON.parse(e)}catch(t){return!1}}f.tabs.onActivated.addListener((function(t){h=t.tabId})),f.runtime.onMessage.addListener(function(){var t=s(a().mark((function t(e,n,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("getusersessiondata"!==e.action){t.next=5;break}f.storage.local.get([d],function(){var t=s(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f.runtime.lastError){t.next=4;break}t.next=30;break;case 4:if(!e.hasOwnProperty("sessionkey")||!e.sessionKey||"object"==u(e.sessionKey)){t.next=15;break}if(y=e,!e.hasOwnProperty("authenticated")||!e.authenticated){t.next=11;break}return t.next=9,b();case 9:t.next=13;break;case 11:return t.next=13,w();case 13:case 24:t.next=30;break;case 15:if(!(e.hasOwnProperty(d)&&e[d].hasOwnProperty("sessionkey")&&e[d].sessionKey&&"object"!=u(e[d].sessionKey))){t.next=26;break}if(y=e[d],!e.hasOwnProperty("authenticated")||!e.authenticated){t.next=22;break}return t.next=20,b();case 20:t.next=24;break;case 22:return t.next=24,w();case 26:return t.next=28,E(!1);case 28:return t.next=30,w();case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=17;break;case 5:if("authtenicate"!==e.action){t.next=10;break}return t.next=8,w();case 8:t.next=17;break;case 10:if("Debugvalueset"!==e.action){t.next=14;break}e.data,t.next=17;break;case 14:if("createSession"!==e.action){t.next=17;break}return t.next=17,_(e.data);case 17:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}());function _(t){return M.apply(this,arguments)}function M(){return(M=s(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y.authenticationsource="keycloak",y.authenticated=!0,y.authdata=e,t.next=6,E(!1);case 6:return t.next=8,L();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}(),UdanLibrary=r}();
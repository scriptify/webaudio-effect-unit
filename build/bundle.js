!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EffectUnit=e():t.EffectUnit=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=i(r),u=function(){var t=new(window.AudioContext||window.webkitAudioContext),e=new o["default"]({gain:t.createGain()},{mute:function(t){t.gain.gain.value=0},unmute:function(t){t.gain.gain.value=1}},t),n=new o["default"]({highpass:function(){var e=t.createBiquadFilter();return e.type="highpass",e.frequency.value=1e3,e}},{more:function(t){t.highpass.frequency.value+=100},less:function(t){t.highpass.frequency.value-=100}},t),i=t.createOscillator();i.type="square",i.frequency.value=50,i.connect(e.input),e.connect(n),n.connect(t.destination);var r=!0,u=0;window.setInterval(function(){r?(u++,n.methods.more()):(u--,n.methods.less()),u<=0&&(r=!0),u>50&&(r=!1)},100)};u(),e["default"]=o["default"]},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=i(r),u=n(3),c=i(u),f=n(22),a=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=arguments[2];if((0,o["default"])(this,t),!i)throw new Error("The AudioContext specified (3° parameter) is not defined!");this.audioCtx=i,this.effectChain=(0,f.functionsToValues)(e),this.methods=(0,f.bindMethods)(n,this.effectChain),this.isEffectUnit=!0,this.setupEffectChain()}return(0,c["default"])(t,[{key:"enable",value:function(){this.effectGain.gain.value=1,this.directGain.gain.value=0}},{key:"disable",value:function(){this.effectGain.gain.value=0,this.directGain.gain.value=1}},{key:"connect",value:function(t){t.isEffectUnit?this.output.connect(t.input):this.output.connect(t)}},{key:"setupEffectChain",value:function(){this.effectGain=this.audioCtx.createGain(),this.directGain=this.audioCtx.createGain(),this.output=this.audioCtx.createGain(),this.input=this.audioCtx.createGain(),this.input.connect(this.effectGain),this.input.connect(this.directGain),this.directGain.connect(this.output),this.enable();var t=(0,f.objToArray)(this.effectChain);if(t.length>=1){this.effectGain.connect(t[0]);for(var e=0;e<t.length-1;e++)t[e].connect(t[e+1]);t[t.length-1].connect(this.output)}}}]),t}();e["default"]=a},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(4),o=i(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={"default":n(5),__esModule:!0}},function(t,e,n){n(6);var i=n(9).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(7);i(i.S+i.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var i=n(8),r=n(9),o=n(10),u=n(12),c="prototype",f=function(t,e,n){var a,s,l,p=t&f.F,d=t&f.G,h=t&f.S,v=t&f.P,y=t&f.B,b=t&f.W,w=d?r:r[e]||(r[e]={}),x=w[c],g=d?i:h?i[e]:(i[e]||{})[c];d&&(n=e);for(a in n)s=!p&&g&&void 0!==g[a],s&&a in w||(l=s?g[a]:n[a],w[a]=d&&"function"!=typeof g[a]?n[a]:y&&s?o(l,i):b&&g[a]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((w.virtual||(w.virtual={}))[a]=l,t&f.R&&x&&!x[a]&&u(x,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(11);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(13),r=n(21);t.exports=n(17)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(14),r=n(16),o=n(20),u=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(15);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var i=n(15),r=n(8).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(15);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.bindMethods=function(t,e){var n={};for(var i in t){var r=t[i];if("function"!=typeof r)throw new Error("One of the object members wasn't a method.");n[i]=r.bind(void 0,e)}return n},e.functionsToValues=function(t){var e=Object.assign({},t);for(var n in e)"function"==typeof e[n]&&(e[n]=e[n]());return e},e.objToArray=function(t){var e=[];for(var n in t)e.push(t[n]);return e}}])});
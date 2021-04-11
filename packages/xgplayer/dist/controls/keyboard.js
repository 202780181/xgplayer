!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.keyboard=t():(e.xgplayer=e.xgplayer||{},e.xgplayer.PlayerControls=e.xgplayer.PlayerControls||{},e.xgplayer.PlayerControls.keyboard=t())}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default={name:"keyboard",method:function(){r.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.state={playbackRate:0,isRepeat:!1,keyCode:0,repeat:0,isBody:!1},this.timer=null,this.initEvents()}return r(e,[{key:"initEvents",value:function(){var e=this,t=this.player,n=t.root,r=t.config;if(this.player.onBodyKeydown=this.onBodyKeydown.bind(this),this.player.onKeydown=this.onKeydown.bind(this),this.player.onKeyup=this.onKeyup.bind(this),!r.keyShortcut||"on"===r.keyShortcut){document.addEventListener("keydown",this.player.onBodyKeydown),n.addEventListener("keydown",this.player.onKeydown);(0,o.on)(this.player,"destroy",function(){document.removeEventListener("keydown",e.player.onBodyKeydown),n.removeEventListener("keydown",e.player.onKeydown),clearTimeout(e.timer),e.timer=null})}}},{key:"checkTarget",value:function(e){var t=this.player;return e.target===t.root||e.target===t.video||e.target===t.controls}},{key:"onBodyKeydown",value:function(e){var t=e||window.event,n=t.keyCode;if(t.target===document.body&&(37===n||39===n||32===n))return t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,t.repeat||document.addEventListener("keyup",this.player.onKeyup),this.handler(t),!1}},{key:"onKeydown",value:function(e){var t=e||window.event,n=t.keyCode;if(this.checkTarget(t)&&(37===n||38===n||39===n||40===n||32===n||27===n))return t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,this.player.emit("focus"),t.repeat||this.player.root.addEventListener("keyup",this.player.onKeyup),this.handler(t),!1}},{key:"onKeyup",value:function(){var e=this.state,t=this.player;document.removeEventListener("keyup",this.player.onKeyup),t.root.removeEventListener("keyup",this.player.onKeyup),e.keyCode&&(0!==e.playbackRate&&(t.playbackRate=e.playbackRate),e.isRepeat||this.handlerKeyCode(e.keyCode,!1),e.playbackRate=0,e.isRepeat=!1,e.keyCode=0,e.repeat=0,this.changeVolumeSlide())}},{key:"handler",value:function(e){var t=this.state,n=this.player;t.keyCode=e.keyCode,t.isRepeat=e.repeat,e.repeat&&(n.config.disableLongPress?this.handlerKeyCode(t.keyCode,!1):t.repeat%2==0&&this.handlerKeyCode(t.keyCode,!0),t.repeat++)}},{key:"handlerKeyCode",value:function(e,t){var n=this.player,r=this.state;switch(e){case 39:t?0===r.repeat&&this.changeRate():this.seek(!1,t);break;case 37:this.seek(!0,t);break;case 38:this.changeVolume(!0);break;case 40:this.changeVolume(!1);break;case 32:t||(n.paused?n.play():n.pause());break;case 27:(0,o.hasClass)(n.root,"xgplayer-is-cssfullscreen")&&n.exitCssFullscreen()}}},{key:"seek",value:function(e,t){var n=this.player,r=(n.config.keyShortcutStep||{}).currentTime||10;n.isLoading||n.isSeeking||t&&this.state.repeat%8>0||(e?n.currentTime-r>=0?n.currentTime-=r:n.currentTime=0:n.maxPlayedTime&&n.config.allowSeekPlayed&&n.currentTime+r>n.maxPlayedTime?n.currentTime=n.maxPlayedTime:n.currentTime+r<=n.duration?n.currentTime+=r:n.currentTime=n.duration-1)}},{key:"changeRate",value:function(){this.state.playbackRate=this.player.playbackRate,this.player.playbackRate=this.player.config.keyboardRate||5}},{key:"changeVolumeSlide",value:function(e){var t=this.player;t.controls&&(e?(t.emit("focus"),(0,o.hasClass)(t.root,"xgplayer-volume-active")||(0,o.addClass)(t.root,"xgplayer-volume-active")):(clearTimeout(this.timer),this.timer=setTimeout(function(){(0,o.removeClass)(t.root,"xgplayer-volume-active")},1e3)))}},{key:"changeVolume",value:function(e){var t=this.player,n=(t.config.keyShortcutStep||{}).volume||.1;this.changeVolumeSlide(!0);var r=t.volume;e&&r+n<=1?t.volume=r+n:!e&&r-n>=0&&(t.volume=r-n)}}]),e}();t.default={name:"keyboard",method:function(){this.keyboard=new a(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=o,t.hasClass=a,t.addClass=i,t.removeClass=u,t.toggleClass=s,t.findDom=l,t.padStart=c,t.format=f,t.event=d,t.typeOf=y,t.deepCopy=p,t.getBgImage=h,t.copyDom=v,t._setInterval=g,t._clearInterval=m,t.createImgBtn=b,t.isWeiXin=k,t.isUc=w,t.computeWatchDur=x,t.offInDestroy=C,t.on=O,t.once=T,t.getBuffered2=L;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach(function(t){var r=t,a=n[t];"video"===e||"audio"===e?a&&o.setAttribute(r,a):o.setAttribute(r,a)}),o}function a(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,function(e){return e===t}):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function i(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach(function(t){t&&e.classList.add(t)}):a(e,t)||(e.className+=" "+t))}function u(e,t){e&&(e.classList?t.split(/\s+/g).forEach(function(t){e.classList.remove(t)}):a(e,t)&&t.split(/\s+/g).forEach(function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}))}function s(e,t){e&&t.split(/\s+/g).forEach(function(t){a(e,t)?u(e,t):i(e,t)})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function c(e,t,n){for(var r=String(n),o=t>>0,a=Math.ceil(o/r.length),i=[],u=String(e);a--;)i.push(r);return i.join("").substring(0,o-u.length)+u}function f(e){if(window.isNaN(e))return"";var t=c(Math.floor(e/3600),2,0),n=c(Math.floor((e-3600*t)/60),2,0),r=c(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function d(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function y(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function p(e,t){if("Object"===y(t)&&"Object"===y(e))return Object.keys(t).forEach(function(n){"Object"!==y(t[n])||t[n]instanceof Node?"Array"===y(t[n])?e[n]="Array"===y(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?p(e[n],t[n]):e[n]=t[n]}),e}function h(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function v(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,function(e){t.setAttribute(e.name,e.value)}),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function g(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function m(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function b(e,t,n,r){var a=o("xg-"+e,"",{},"xgplayer-"+e+"-img");if(a.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,u=void 0,s=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every(function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),u=Number(r.slice(0,r.indexOf(e)).trim()),s=e,!1)}),a.style.width=""+i+s,a.style.height=""+u+s,a.style.backgroundSize=""+i+s+" "+u+s,a.style.margin="start"===e?"-"+u/2+s+" auto auto -"+i/2+s:"auto 5px auto 5px"}return a}function k(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function w(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function x(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,a=e[n].end;if(a<t[r].begin){t.splice(r,0,{begin:o,end:a});break}if(!(o>t[r].end)){var i=t[r].begin,u=t[r].end;t[r].begin=Math.min(o,i),t[r].end=Math.max(a,u);break}if(r>t.length-2){t.push({begin:o,end:a});break}}for(var s=0,l=0;l<t.length;l++)s+=t[l].end-t[l].begin;return s}function C(e,t,n,r){e.once(r,function o(){e.off(t,n),e.off(r,o)})}function O(e,t,n,r){if(r)e.on(t,n),C(e,t,n,r);else{e.on(t,function r(o){n(o),e.off(t,r)})}}function T(e,t,n,r){if(r)e.once(t,n),C(e,t,n,r);else{e.once(t,function r(o){n(o),e.off(t,r)})}}function L(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],o=0;o<e.length;o++)n.push({start:e.start(o)<.5?0:e.start(o),end:e.end(o)});n.sort(function(e,t){var n=e.start-t.start;return n||t.end-e.end});var a=[];if(t)for(var i=0;i<n.length;i++){var u=a.length;if(u){var s=a[u-1].end;n[i].start-s<t?n[i].end>s&&(a[u-1].end=n[i].end):a.push(n[i])}else a.push(n[i])}else a=n;return new r.default(a)}t.util={createDom:o,hasClass:a,addClass:i,removeClass:u,toggleClass:s,findDom:l,padStart:c,format:f,event:d,typeOf:y,deepCopy:p,getBgImage:h,copyDom:v,_setInterval:g,_clearInterval:m,createImgBtn:b,isWeiXin:k,isUc:w,computeWatchDur:x,offInDestroy:C,on:O,once:T,getBuffered2:L}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default}])});
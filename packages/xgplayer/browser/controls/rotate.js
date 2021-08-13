window.PlayerControls=window.PlayerControls||{},window.PlayerControls.rotate=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"rotate",method:function(){r.default.method.call(this),o.default.method.call(this)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"rotate",method:function(){var e=this,t=e.config.rotate;function n(){e.rotate(t.clockwise,t.innerRotate)}t&&(e.on("rotateBtnClick",n),e.once("destroy",(function t(){e.off("rotateBtnClick",n),e.off("destroy",t)})),e.updateRotateDeg=function(){this.rotateDeg||(this.rotateDeg=0);var e=this.root.offsetWidth,t=this.root.offsetHeight,n=this.video.videoWidth,r=this.video.videoHeight;!this.config.rotate.innerRotate&&this.config.rotate.controlsFix&&(this.root.style.width=t+"px",this.root.style.height=e+"px");var o=void 0;if(.25===this.rotateDeg||.75===this.rotateDeg){if(this.config.rotate.innerRotate)if(n/r>t/e){o=t/(r/n>t/e?t*n/r:e)}else{o=e/(r/n>t/e?t:e*r/n)}else o=e>=t?e/t:t/e;o=Number(o.toFixed(5))}else o=1;this.config.rotate.innerRotate||this.config.rotate.controlsFix?(this.video.style.transformOrigin="center center",this.video.style.transform="rotate("+this.rotateDeg+"turn) scale("+o+")",this.video.style.webKitTransform="rotate("+this.rotateDeg+"turn) scale("+o+")"):(this.root.style.transformOrigin="center center",this.root.style.transform="rotate("+this.rotateDeg+"turn) scale(1)",this.root.style.webKitTransform="rotate("+this.rotateDeg+"turn) scale(1)")},e.rotate=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=this;n.rotateDeg||(n.rotateDeg=0);var r=e?1:-1;n.rotateDeg=(n.rotateDeg+1+.25*r*t)%1,this.updateRotateDeg(),n.emit("rotate",360*n.rotateDeg)})}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(3),i=n(5),a=(r=i)&&r.__esModule?r:{default:r};n(6);t.default={name:"s_rotate",method:function(){var e=this;if(e.config.rotate){var t=(0,o.createDom)("xg-rotate",'<xg-icon class="xgplayer-icon">'+a.default+"</xg-icon>",{},"xgplayer-rotate"),n=e.lang.ROTATE_TIPS,r=(0,o.createDom)("xg-tips",'<span class="xgplayer-tip-rotate">'+n+"</span>",{},"xgplayer-tips");t.appendChild(r),e.once("ready",(function(){e.controls.appendChild(t)})),["click","touchend"].forEach((function(n){t.addEventListener(n,(function(t){t.preventDefault(),t.stopPropagation(),e.userGestureTrigEvent("rotateBtnClick")}))}))}}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util=void 0,t.createDom=a,t.hasClass=s,t.addClass=l,t.removeClass=c,t.toggleClass=f,t.findDom=u,t.padStart=d,t.format=p,t.event=g,t.typeOf=h,t.deepCopy=v,t.getBgImage=y,t.copyDom=m,t._setInterval=b,t._clearInterval=x,t.createImgBtn=w,t.isWeiXin=C,t.isUc=O,t.computeWatchDur=L,t.offInDestroy=j,t.on=k,t.once=M,t.getBuffered2=D,t.checkIsBrowser=E,t.setStyle=_;var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return o.className=r,o.innerHTML=t,Object.keys(n).forEach((function(t){var r=t,i=n[t];"video"===e||"audio"===e?i&&o.setAttribute(r,i):o.setAttribute(r,i)})),o}function s(e,t){return!!e&&(e.classList?Array.prototype.some.call(e.classList,(function(e){return e===t})):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")))}function l(e,t){e&&(e.classList?t.replace(/(^\s+|\s+$)/g,"").split(/\s+/g).forEach((function(t){t&&e.classList.add(t)})):s(e,t)||(e.className+=" "+t))}function c(e,t){e&&(e.classList?t.split(/\s+/g).forEach((function(t){e.classList.remove(t)})):s(e,t)&&t.split(/\s+/g).forEach((function(t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")})))}function f(e,t){e&&t.split(/\s+/g).forEach((function(t){s(e,t)?c(e,t):l(e,t)}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments[1],n=void 0;try{n=e.querySelector(t)}catch(r){0===t.indexOf("#")&&(n=e.getElementById(t.slice(1)))}return n}function d(e,t,n){for(var r=String(n),o=t>>0,i=Math.ceil(o/r.length),a=[],s=String(e);i--;)a.push(r);return a.join("").substring(0,o-s.length)+s}function p(e){if(window.isNaN(e))return"";var t=d(Math.floor(e/3600),2,0),n=d(Math.floor((e-3600*t)/60),2,0),r=d(Math.floor(e-3600*t-60*n),2,0);return("00"===t?[n,r]:[t,n,r]).join(":")}function g(e){if(e.touches){var t=e.touches[0]||e.changedTouches[0];e.clientX=t.clientX||0,e.clientY=t.clientY||0,e.offsetX=t.pageX-t.target.offsetLeft,e.offsetY=t.pageY-t.target.offsetTop}e._target=e.target||e.srcElement}function h(e){return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]}function v(e,t){if("Object"===h(t)&&"Object"===h(e))return Object.keys(t).forEach((function(n){"Object"!==h(t[n])||t[n]instanceof Node?"Array"===h(t[n])?e[n]="Array"===h(e[n])?e[n].concat(t[n]):t[n]:e[n]=t[n]:e[n]?v(e[n],t[n]):e[n]=t[n]})),e}function y(e){var t=(e.currentStyle||window.getComputedStyle(e,null)).backgroundImage;if(!t||"none"===t)return"";var n=document.createElement("a");return n.href=t.replace(/url\("|"\)/g,""),n.href}function m(e){if(e&&1===e.nodeType){var t=document.createElement(e.tagName);return Array.prototype.forEach.call(e.attributes,(function(e){t.setAttribute(e.name,e.value)})),e.innerHTML&&(t.innerHTML=e.innerHTML),t}return""}function b(e,t,n,r){e._interval[t]||(e._interval[t]=setInterval(n.bind(e),r))}function x(e,t){clearInterval(e._interval[t]),e._interval[t]=null}function w(e,t,n,r){var o=a("xg-"+e,"",{},"xgplayer-"+e+"-img");if(o.style.backgroundImage='url("'+t+'")',n&&r){var i=void 0,s=void 0,l=void 0;["px","rem","em","pt","dp","vw","vh","vm","%"].every((function(e){return!(n.indexOf(e)>-1&&r.indexOf(e)>-1)||(i=Number(n.slice(0,n.indexOf(e)).trim()),s=Number(r.slice(0,r.indexOf(e)).trim()),l=e,!1)})),o.style.width=""+i+l,o.style.height=""+s+l,o.style.backgroundSize=""+i+l+" "+s+l,o.style.margin="start"===e?"-"+s/2+l+" auto auto -"+i/2+l:"auto 5px auto 5px"}return o}function C(){return window.navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1}function O(){return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser")>-1}function L(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=0;n<e.length;n++)if(!(!e[n].end||e[n].begin<0||e[n].end<0||e[n].end<e[n].begin))if(t.length<1)t.push({begin:e[n].begin,end:e[n].end});else for(var r=0;r<t.length;r++){var o=e[n].begin,i=e[n].end;if(i<t[r].begin){t.splice(r,0,{begin:o,end:i});break}if(!(o>t[r].end)){var a=t[r].begin,s=t[r].end;t[r].begin=Math.min(o,a),t[r].end=Math.max(i,s);break}if(r>t.length-2){t.push({begin:o,end:i});break}}for(var l=0,c=0;c<t.length;c++)l+=t[c].end-t[c].begin;return l}function j(e,t,n,r){e.once(r,(function o(){e.off(t,n),e.off(r,o)}))}function k(e,t,n,r){if(r)e.on(t,n),j(e,t,n,r);else{e.on(t,(function r(o){n(o),e.off(t,r)}))}}function M(e,t,n,r){if(r)e.once(t,n),j(e,t,n,r);else{e.once(t,(function r(o){n(o),e.off(t,r)}))}}function D(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=[],r=0;r<e.length;r++)n.push({start:e.start(r)<.5?0:e.start(r),end:e.end(r)});n.sort((function(e,t){var n=e.start-t.start;return n||t.end-e.end}));var o=[];if(t)for(var a=0;a<n.length;a++){var s=o.length;if(s){var l=o[s-1].end;n[a].start-l<t?n[a].end>l&&(o[s-1].end=n[a].end):o.push(n[a])}else o.push(n[a])}else o=n;return new i.default(o)}function E(){return!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)}function _(e,t,n){var r=e.style;try{r[t]=n}catch(e){r.setProperty(t,n)}}t.util={createDom:a,hasClass:s,addClass:l,removeClass:c,toggleClass:f,findDom:u,padStart:d,format:p,event:g,typeOf:h,deepCopy:v,getBgImage:y,copyDom:m,setInterval:b,clearInterval:x,createImgBtn:w,isWeiXin:C,isUc:O,computeWatchDur:L,offInDestroy:j,on:k,once:M,getBuffered2:D,checkIsBrowser:E,setStyle:_}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bufferedList=t}return r(e,[{key:"start",value:function(e){return this.bufferedList[e].start}},{key:"end",value:function(e){return this.bufferedList[e].end}},{key:"length",get:function(){return this.bufferedList.length}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";n.r(t),t.default='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">\n  <g clip-path="url(#clip0)">\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath id="clip0">\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n'},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".xgplayer-skin-default .xgplayer-rotate{position:relative;-webkit-order:10;-moz-box-ordinal-group:11;order:10;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips .xgplayer-tip-rotate{display:block}.xgplayer-skin-default .xgplayer-rotate:hover{opacity:.85}.xgplayer-skin-default .xgplayer-rotate:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-rotate .xgplayer-tips{margin-left:-26px}.xgplayer-lang-is-jp .xgplayer-rotate .xgplayer-tips{margin-left:-38px}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},l=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,f=0,u=[],d=n(10);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function g(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function y(e){var t=document.createElement("style");return e.attrs.type="text/css",m(t,e.attrs),h(e,t),t}function m(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=f++;n=c||(c=y(t)),r=C.bind(null,n,a,!1),o=C.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",m(t,e.attrs),h(e,t),t}(t),r=L.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=O.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=g(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(g(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,w=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function C(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function O(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function L(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);
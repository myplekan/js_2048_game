parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n=document.querySelectorAll(".field-cell"),o=document.querySelectorAll(".field-row"),a=document.querySelector(".start"),i=document.querySelector(".message-container"),l=document.querySelector(".game-score"),s=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function c(t){return Math.floor(Math.random()*t)}function f(){var t=c(10),e=c(4),r=c(4);0!==s[e][r]?f():s[e][r]=t<9?2:4}function u(){for(var t=0,e=0;e<s.length;e++)for(var r=0;r<s.length;r++)o[e].cells[r].textContent=s[e][r],t+=s[e][r],"0"===o[e].cells[r].textContent&&(o[e].cells[r].textContent="");l.textContent=t,d()}function d(){for(var e=0,r=0;r<s.length;r++){for(var o=0;o<s.length-1;o++)0===s[r][o]&&e++,s[r][o]===s[r][o+1]&&s[r][o]>0&&e++;for(var a=[s[0][r],s[1][r],s[2][r],s[3][r]],i=0;i<a.length;i++)0===a[i]&&e++,a[i]===a[i+1]&&e++}0===e&&m("lose");var l,c=t(n);try{for(c.s();!(l=c.n()).done;){var f=l.value,u=f.classList.item(1);u&&f.classList.toggle(u),f.classList.add("field-cell--".concat(f.textContent)),f.classList.contains("field-cell--2048")&&m("win")}}catch(d){c.e(d)}finally{c.f()}}function h(t){for(var e=0;e<s.length;e++){var r=v(s[e].filter(function(t){return 0!==t}),t);if(r.length>=1){if("ArrowLeft"===t)for(;r.length<4;)r.push(0);if("ArrowRight"===t)for(;r.length<4;)r.unshift(0);for(var n=0;n<s.length;n++)s[e][n]=r[n]}}f(),u()}function g(t){for(var e=0;e<s.length;e++){var r=v([s[0][e],s[1][e],s[2][e],s[3][e]].filter(function(t){return 0!==t}),t);if("ArrowUp"===t)for(;r.length<4;)r.push(0);if("ArrowDown"===t)for(;r.length<4;)r.unshift(0);s[0][e]=r[0],s[1][e]=r[1],s[2][e]=r[2],s[3][e]=r[3]}f(),u()}function v(t,e){if("ArrowDown"===e||"ArrowRight"===e)for(var r=t.length;r>=0;r--)t[r]===t[r-1]&&(t[r]+=t[r-1],t[r-1]=0);if("ArrowUp"===e||"ArrowLeft"===e)for(var n=0;n<t.length;n++)t[n]===t[n+1]&&(t[n]+=t[n+1],t[n+1]=0);return t.filter(function(t){return t>0})}function y(){for(var t=0;t<s.length;t++)for(var e=0;e<s.length;e++)s[t][e]=0}function m(e){var r,n=t(i.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.contains("message-".concat(e))?o.classList.remove("hidden"):o.classList.add("hidden")}}catch(a){n.e(a)}finally{n.f()}}document.addEventListener("keydown",function(t){if(!a.classList.contains("start"))switch(t.key){case"ArrowUp":case"ArrowDown":g(t.key);break;case"ArrowRight":case"ArrowLeft":h(t.key)}}),i.insertAdjacentHTML("beforeend",'\n  <p class="message message-restart hidden">\n    Press "Restart" to begin new game.\n  </p>\n'),a.addEventListener("click",function(t){a.classList.contains("start")&&(a.classList.remove("start"),a.classList.add("restart"),a.textContent="restart"),m("restart"),y(),f(),f(),u()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8394ca9e.js.map
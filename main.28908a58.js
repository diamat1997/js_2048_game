parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,t,r=document.querySelector("tbody"),n=document.querySelector(".button"),o=document.querySelector(".message-start"),s=document.querySelector(".message-lose"),a=document.querySelector(".message-win"),c=document.querySelector(".game-score"),i=4,d=4;function l(){for(var t=0;t<i;t++)for(var r=0;r<d;r++)if(2048===e[t][r])return!0;return!1}function u(e){return JSON.parse(JSON.stringify(e))}function f(t){for(var r=0;r<i;r++)for(var n=0;n<d;n++)if(t[r][n]!==e[r][n])return!0;return!1}function h(e,t){for(var r=u(e),n=0;n<i;n++){var o=void 0;"up"===t||"down"===t?o=[r[0][n],r[1][n],r[2][n],r[3][n]]:"left"!==t&&"right"!==t||(o=r[n]),"up"===t||"left"===t?o=v(o.reverse()).reverse():"down"!==t&&"right"!==t||(o=v(o));for(var s=0;s<o.length;s++)"up"===t||"down"===t?r[s][n]=o[s]:"left"!==t&&"right"!==t||(r[n][s]=o[s])}return r}function v(e){for(var r=m(e),n=r.length;n>0;n--)r[n]===r[n-1]&&(r[n]+=r[n],t+=r[n],r[n-1]=0);return m(r)}function m(e){for(var t=e.filter(function(e){return 0!==e}),r=t.length;r<e.length;r++)t.unshift(0);return t}function w(){for(;;){var t=Math.floor(Math.random()*i),r=Math.floor(Math.random()*d);if(0===e[t][r]){e[t][r]=Math.random()>=.9?4:2;break}}g()}function g(){for(var t=0;t<i;t++)for(var n=0;n<d;n++)r.rows[t].cells[n].className="",r.rows[t].cells[n].classList.add("field-cell"),r.rows[t].cells[n].classList.add("field-cell--".concat(e[t][n])),r.rows[t].cells[n].textContent=e[t][n]||""}n.addEventListener("click",function(){n.classList.contains("start")?(n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart",o.classList.add("hidden")):(s.classList.add("hidden"),a.classList.add("hidden")),e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],t=0,c.textContent=t,w(),w()}),document.addEventListener("keydown",function(r){var n=u(e);if(!(f(h(n,"up"))||f(h(n,"down"))||f(h(n,"right"))||f(h(n,"left"))))return s.classList.remove("hidden"),!1;switch(r.key){case"ArrowUp":e=u(h(e,"up"));break;case"ArrowDown":e=u(h(e,"down"));break;case"ArrowRight":e=u(h(e,"right"));break;case"ArrowLeft":e=u(h(e,"left"))}f(n)&&(w(),c.textContent="".concat(t)),l()&&a.classList.remove("hidden")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.28908a58.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LQOA":[function(require,module,exports) {
"use strict";var e=2500,t=[{text:["filer text","filled"]},{text:["lorem ipsum","dolor sic"]},{text:["ipswich","england"]},{text:["port aransas","texas"]},{text:["apps","schmapps"]},{text:["vanilla","extract"]}],a=function(e){var t={text:[""]};if("SPAN"===e.tagName)t.text=[e.textContent];else{if("DIV"!==e.tagName)throw new Error("Only DIVs and SPANs can be converted to storage.");var a=e.getElementsByClassName("normal-text")[0].textContent,n=e.getElementsByClassName("quip")[0].textContent;t.text=[a,n]}return e.classList.contains("emphasized")&&(t.emphasized=!0),t},n=function(e){return Math.floor(Math.random()*e.length)};setInterval(function(){var e,s,l=document.getElementsByClassName("tag"),r=n(l),d=n(t),o=l[r],c=a(o),m=t.splice(d,1,c)[0];if(1===m.text.length){var i=m.text[0];s=document.createElement("span");var p=document.createTextNode(i);s.appendChild(p),s.className="tag"}else{var x=m.text,u=(i=x[0],x[1]);s=document.createElement("div");var h=document.createElement("span"),N=document.createTextNode(i);h.appendChild(N),h.className="normal-text",s.appendChild(h);var v=document.createElement("span"),g=document.createTextNode(u);v.appendChild(g),v.className="quip",s.appendChild(v),s.className="tag",console.log(s.innerHTML)}m.emphasized&&s.classList.add("emphasized"),null===(e=o.parentNode)||void 0===e||e.replaceChild(s,o)},e);
},{}]},{},["LQOA"], null)
//# sourceMappingURL=/ts.c80891d5.js.map
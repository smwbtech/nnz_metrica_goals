!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([,function(e,r,n){"use strict";n.r(r);function t(e){e.preventDefault();try{var r,n=function(e){var r=e.querySelector("#orderForm > input[type=hidden]:nth-child(3)");if(r){var n=r.value;if(n){var t=parseFloat(n);return!isNaN(t)&&t}return!1}return!1}(e.currentTarget),t=function(e){var r,n,t,o,u,i,l={name:"",inn:"",kpp:""};return l.name=null!==(r=null===(n=e.querySelector("#orderForm > div:nth-child(11) > div.input.obl > input"))||void 0===n?void 0:n.value)&&void 0!==r?r:"Компания не установлена",l.inn=null!==(t=null===(o=e.querySelector("#orderForm > div:nth-child(12) > div.input.obl > input"))||void 0===o?void 0:o.value)&&void 0!==t?t:"ИНН не установлен",l.kpp=null!==(u=null===(i=e.querySelector("#orderForm > div:nth-child(13) > div.input.obl > input"))||void 0===i?void 0:i.value)&&void 0!==u?u:"КПП не установлен",l}(e.currentTarget),o=null!==(r=window.ym)&&void 0!==r?r:null;if(o&&"function"==typeof o&&n&&t){var u={order_price:n,currency:"USD"},i={UserID:"".concat(t.inn,"-").concat(t.kpp),company_info:t};return u.UserID="".concat(t.inn,"-").concat(t.kpp),o(48468320,"reachGoal","purchaseConfirmed_unauthorized",u),o(48468320,"userParams",i),!0}}catch(e){console.error(e)}finally{e.currentTarget.submit()}}function o(){var e=document.querySelector("#orderForm");e&&e.addEventListener("submit",t,{once:!0})}"complete"!==document.readyState?window.addEventListener("load",o):o()}]);
!function(e){var t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(r,l,function(t){return e[t]}.bind(null,l));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.querySelectorAll(".catalog__button a");document.querySelectorAll(".catalog__wrapper");e.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=document.querySelector(e.getAttribute("href"));document.querySelector("#tabNav .catalog__active").classList.remove("catalog__active"),document.querySelector("#tabsWrap .catalog__wrapper_active").classList.remove("catalog__wrapper_active"),e.classList.add("catalog__active"),o.classList.add("catalog__wrapper_active")})})};var l=()=>{const e=document.querySelectorAll(".catalog__btn"),t=document.querySelector(".catalog__close"),o=document.querySelector(".catalog__modal");e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),o.style.display="flex"}),t.addEventListener("click",()=>{o.style.display="none"})})};(()=>{$(".slider__box").slick({dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:1e3,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})})(),r(),l()}]);
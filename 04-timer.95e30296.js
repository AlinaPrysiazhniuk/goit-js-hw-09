function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("fbklV"),d=o("7Y9D8");const l=document.querySelector("button[data-start]"),i=document.querySelector("#datetime-picker"),u=document.querySelector("[data-days]"),s=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");let m=null;l.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date)l.disabled=!0,e(d).Notify.failure("Please choose a date in the future");else{function n(e){return String(e).padStart(2,"0")}l.disabled=!1,l.addEventListener("click",(function(){m=setInterval((()=>{l.disabled=!0;const e=new Date(i.value.replace(/-/g,"/")).getTime()-(new Date).getTime(),{days:t,hours:r,minutes:o,seconds:a}=function(e){const t=1e3,n=60*t,r=60*n,o=24*r,a=Math.floor(e/o),d=Math.floor(e%o/r),l=Math.floor(e%o%r/n),i=Math.floor(e%o%r%n/t);return{days:a,hours:d,minutes:l,seconds:i}}(e);u.innerHTML=t<10?n(t):t,s.innerHTML=r<10?n(r):r,c.innerHTML=o<10?n(o):o,f.innerHTML=a<10?n(a):a,e<1e3&&(clearInterval(m),l.disabled=!1)}),1e3)}))}}};(0,a.default)(i,p);
//# sourceMappingURL=04-timer.95e30296.js.map
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var r=a("fbklV"),d=a("7Y9D8");const s={input:document.querySelector("#datetime-picker"),buttonStart:document.querySelector("[data-start]"),dataDays:document.querySelector("[data-days]"),dataHours:document.querySelector("[data-hours]"),dataMinutes:document.querySelector("[data-minutes]"),dataSeconds:document.querySelector("[data-seconds]")};s.buttonStart.disabled=!0;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?e(d).Notify.failure("Please choose a date in the future"):(s.buttonStart.disabled=!1,s.buttonStart.addEventListener("click",(()=>{setInterval((()=>{const e=t[0]-new Date,{days:n,hours:o,minutes:a,seconds:r}=function(e){const t=1e3,n=60*t,o=60*n,a=24*o,r=Math.floor(e/a),d=Math.floor(e%a/o),s=Math.floor(e%a%o/n),u=Math.floor(e%a%o%n/t);return{days:r,hours:d,minutes:s,seconds:u}}(e);!function({days:e,hours:t,minutes:n,seconds:o}){s.dataDays.textContent=`${e}`,s.dataHours.textContent=`${t}`,s.dataMinutes.textContent=`${n}`,s.dataSeconds.textContent=`${o}`}({days:n,hours:o,minutes:a,seconds:r})}),1e3)})))}};(0,r.default)("#datetime-picker",u);
//# sourceMappingURL=02-timer.36d9adfe.js.map
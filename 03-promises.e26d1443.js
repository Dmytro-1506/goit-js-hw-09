function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var u=o("eWCmQ");const i=document.querySelector(".prom-delay"),l=document.querySelector(".prom-step"),d=document.querySelector(".prom-amount"),s=document.querySelector(".form");let a=1,c=0,f=0;i.addEventListener("input",(()=>{f=Number(i.value)}));let m=0;l.addEventListener("input",(()=>{m=Number(l.value)}));let p=0;function v(t,n){if(n>=1)return function(t,n){const r=Math.random()>.5;new Promise(((o,i)=>{setTimeout((()=>{r?o(e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)):i(e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))}),m)})).then((()=>{p>=1&&v(m,p)})).catch((()=>{p>=1&&v(m,p)}))}(a,c),c+=t,p-=1,void(a+=1)}d.addEventListener("input",(()=>{p=Number(d.value)})),s.addEventListener("submit",(e=>{e.preventDefault(),setTimeout((()=>{v(m,p)}),f)}));
//# sourceMappingURL=03-promises.e26d1443.js.map

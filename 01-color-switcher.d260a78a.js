!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled","disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.d260a78a.js.map
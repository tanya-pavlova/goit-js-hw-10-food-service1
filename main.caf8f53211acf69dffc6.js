(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO");var l=n("xLVt"),c=(n.n(l)()({title:"Eat it createElement, templates rule!",items:["id","name","description","image","price"]}),{bodyRef:document.querySelector("body"),themeSwitchRef:document.querySelector("#theme-switch-toggle")}),o="light-theme",s="dark-theme";localStorage.getItem("current-theme")===s&&(c.themeSwitchRef.checked=!0,c.bodyRef.classList.add(s),c.bodyRef.classList.remove(o)),c.themeSwitchRef.addEventListener("change",(function(){c.themeSwitchRef.checked?(c.bodyRef.classList.add(s),c.bodyRef.classList.remove(o),localStorage.setItem("current-theme",s)):(c.bodyRef.classList.add(o),c.bodyRef.classList.remove(s),localStorage.setItem("current-theme",o))})),console.log("jshvcflsvl")},xLVt:function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({1:function(e,t,n,l,c){return'    <li class="menu-item">'+e.escapeExpression(e.lambda(t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,c){var o,s,a=null!=t?t:e.nullContext||{},i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="menu">\r\n  <h3 class="menu-title">'+e.escapeExpression("function"==typeof(s=null!=(s=i(n,"title")||(null!=t?i(t,"title"):t))?s:e.hooks.helperMissing)?s.call(a,{name:"title",hash:{},data:c,loc:{start:{line:2,column:25},end:{line:2,column:34}}}):s)+'</h3>\r\n  <ul class="menu-list">\r\n'+(null!=(o=i(n,"each").call(a,null!=t?i(t,"items"):t,{name:"each",hash:{},fn:e.program(1,c,0),inverse:e.noop,data:c,loc:{start:{line:4,column:4},end:{line:6,column:13}}}))?o:"")+"  </ul>\r\n</div>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.caf8f53211acf69dffc6.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{280:function(t,n,e){},303:function(t,n,e){"use strict";e(280)},337:function(t,n,e){"use strict";e.r(n);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),n=t.querySelectorAll(".sub-menu"),e=t.querySelectorAll("a"),i=0;i<n.length;i++)n[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),c=l.length,r=0;r<c;r++)l[r].addEventListener("click",(function(t){v(t)}));for(var o=0;o<e.length;o++)e[o].addEventListener("click",(function(){m()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},c=(e(303),e(21)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/leistungen"}},[t._v("Leistungen")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/galerie"}},[t._v("Galerie")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/about"}},[t._v("Über Uns")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/kontakt"}},[t._v("Kontakt")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/datenschutz"}},[t._v("Datenschutz")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/impressum"}},[t._v("Impressum")])],1)])])])}),[],!1,null,null,null);n.default=component.exports}}]);
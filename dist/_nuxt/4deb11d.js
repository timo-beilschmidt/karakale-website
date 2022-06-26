(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{266:function(e,t,n){},286:function(e,t,n){"use strict";(function(e){var o=n(304);var c=function(template,style,script,e,t,n,o,c,r,l){"boolean"!=typeof o&&(r=c,c=o,o=!1);var d,_="function"==typeof script?script.options:script;if(template&&template.render&&(_.render=template.render,_.staticRenderFns=template.staticRenderFns,_._compiled=!0,t&&(_.functional=!0)),e&&(_._scopeId=e),n?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),style&&style.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},_._ssrRegister=d):style&&(d=o?function(){style.call(this,l(this.$root.$options.shadowRoot))}:function(e){style.call(this,c(e))}),d)if(_.functional){var h=_.render;_.render=function(e,t){return d.call(t),h(e,t)}}else{var f=_.beforeCreate;_.beforeCreate=f?[].concat(f,d):[d]}return script},r={name:"vue-cookie-accept-decline",props:{elementId:{type:String,required:!0},debug:{type:Boolean,default:!1},disableDecline:{type:Boolean,default:!1},position:{type:String,default:"bottom-left"},type:{type:String,default:"floating"},transitionName:{type:String,default:"slideFromBottom"},showPostponeButton:{type:Boolean,default:!1},forceCookies:{type:Boolean,default:!1}},data:function(){return{status:null,supportsLocalStorage:!0,isOpen:!1}},computed:{containerPosition:function(){return"cookie--"+this.position},containerType:function(){return"cookie--"+this.type}},mounted:function(){this.checkLocalStorageFunctionality(),this.init()},methods:{init:function(){var e=this.getCookieStatus();!e||"accept"!==e&&"decline"!==e&&"postpone"!==e||(this.isOpen=!1),e||(this.isOpen=!0),this.status=e,this.$emit("status",e)},checkLocalStorageFunctionality:function(){if(this.forceCookies)this.supportsLocalStorage=!1;else try{var e="__vue-cookie-accept-decline-check-localStorage";window.localStorage.setItem(e,e),window.localStorage.removeItem(e)}catch(e){console.error("Local storage is not supported, falling back to cookie use"),this.supportsLocalStorage=!1}},setCookieStatus:function(e){this.supportsLocalStorage?("accept"===e&&localStorage.setItem("vue-cookie-accept-decline-"+this.elementId,"accept"),"decline"===e&&localStorage.setItem("vue-cookie-accept-decline-"+this.elementId,"decline"),"postpone"===e&&localStorage.setItem("vue-cookie-accept-decline-"+this.elementId,"postpone")):("accept"===e&&Object(o.b)("vue-cookie-accept-decline-"+this.elementId,"accept"),"decline"===e&&Object(o.b)("vue-cookie-accept-decline-"+this.elementId,"decline"),"postpone"===e&&Object(o.b)("vue-cookie-accept-decline-"+this.elementId,"postpone"))},getCookieStatus:function(){return this.supportsLocalStorage?localStorage.getItem("vue-cookie-accept-decline-"+this.elementId):Object(o.a)("vue-cookie-accept-decline-"+this.elementId)},accept:function(){this.debug||this.setCookieStatus("accept"),this.status="accept",this.isOpen=!1,this.$emit("clicked-accept")},decline:function(){this.debug||this.setCookieStatus("decline"),this.status="decline",this.isOpen=!1,this.$emit("clicked-decline")},postpone:function(){this.debug||this.setCookieStatus("postpone"),this.status="postpone",this.isOpen=!1,this.$emit("clicked-postpone")},removeCookie:function(){localStorage.removeItem("vue-cookie-accept-decline-"+this.elementId),this.status=null,this.$emit("removed-cookie")}}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{appear:"",name:e.transitionName}},[e.isOpen?n("div",{staticClass:"cookie",class:["cookie__"+e.type,"cookie__"+e.type+"--"+e.position],attrs:{id:e.elementId}},[n("div",{class:"cookie__"+e.type+"__wrap"},[!0===e.showPostponeButton?n("div",{class:"cookie__"+e.type+"__postpone-button",attrs:{title:"Close"},on:{click:e.postpone}},[e._t("postponeContent",[e._v("\n                    ×\n                ")])],2):e._e(),e._v(" "),n("div",{class:"cookie__"+e.type+"__content"},[e._t("message",[e._v("\n                    We use cookies to ensure you get the best experience on our website. "),n("a",{attrs:{href:"https://cookiesandyou.com/",target:"_blank"}},[e._v("Learn More...")])])],2),e._v(" "),n("div",{class:"cookie__"+e.type+"__buttons"},[!1===e.disableDecline?n("button",{class:["cookie__"+e.type+"__buttons__button","cookie__"+e.type+"__buttons__button--decline"],on:{click:e.decline}},[e._t("declineContent",[e._v("\n                        Opt Out\n                    ")])],2):e._e(),e._v(" "),n("button",{class:["cookie__"+e.type+"__buttons__button","cookie__"+e.type+"__buttons__button--accept"],on:{click:e.accept}},[e._t("acceptContent",[e._v("\n                        Got It!\n                    ")])],2)])])]):e._e()])};l._withStripped=!0;var component=c({render:l,staticRenderFns:[]},undefined,r,undefined,!1,undefined,void 0,void 0);var d={install:function e(t){e.installed||(e.installed=!0,t.component("VueCookieAcceptDecline",component))}},_=null;"undefined"!=typeof window?_=window.Vue:void 0!==e&&(_=e.Vue),_&&_.use(d),t.a=component}).call(this,n(50))},287:function(e,t,n){"use strict";n(266)},304:function(e,t,n){"use strict";function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e){var t=e.charAt(e.length-1),n=parseInt(e,10),o=new Date;switch(t){case"Y":o.setFullYear(o.getFullYear()+n);break;case"M":o.setMonth(o.getMonth()+n);break;case"D":o.setDate(o.getDate()+n);break;case"h":o.setHours(o.getHours()+n);break;case"m":o.setMinutes(o.getMinutes()+n);break;case"s":o.setSeconds(o.getSeconds()+n);break;default:o=new Date(e)}return o}function r(e,t){if(void 0===t&&(t=decodeURIComponent),"string"!=typeof e||!e)return null;var n=new RegExp("(?:^|; )"+(e.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&")+"(?:=([^;]*))?(?:;|$)")).exec(document.cookie);return null===n?null:"function"==typeof t?t(n[1]):n[1]}function l(e,t,n,r){void 0===n&&(n=encodeURIComponent),"object"==typeof n&&null!==n&&(r=n,n=encodeURIComponent);var l=function(e){var t="";for(var n in e)if(o(e,n))if(/^expires$/i.test(n)){var r=e[n];"object"!=typeof r&&(r=c(r+="number"==typeof r?"D":"")),t+=";"+n+"="+r.toUTCString()}else/^secure$/.test(n)?e[n]&&(t+=";"+n):t+=";"+n+"="+e[n];return o(e,"path")||(t+=";path=/"),t}(r||{}),d=e+"="+("function"==typeof n?n(t):t)+l;document.cookie=d}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l}))},323:function(e,t,n){"use strict";n.r(t);var o={components:{VueCookieAcceptDecline:n(286).a},data:function(){return{status:null,showMore:!1}},methods:{cookieStatus:function(e){this.status=e},cookieClickedAccept:function(){this.status="accept"},cookieClickedDecline:function(){this.status="decline"},cookieClickedPostpone:function(){this.status="postpone"},cookieRemovedCookie:function(){this.status=null,this.$refs.myCookiePanel.init()},removeCookie:function(){this.$refs.myCookiePanel.removeCookie()},toggleShowMore:function(){this.showMore=!this.showMore}}},c=(n(287),n(21)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"},[n("div",{staticClass:"bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 col-xl-7 col-sm-6"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo-white.svg",alt:"Logo von Kfz Gutachten Karakale in weiß"}})])],1)])]),e._v(" "),n("div",{staticClass:"col-lg-3 col-xl-2 col-sm-6 mt_mobile--40"},[n("div",{staticClass:"footer-widget menu--about"},[n("h2",{staticClass:"widgettitle"},[e._v("Über Uns")]),e._v(" "),n("div",{staticClass:"footer-menu"},[n("ul",{staticClass:"ft-menu-list bk-hover"},[n("li",[n("n-link",{attrs:{to:"/about"}},[e._v("Über Uns")])],1),e._v(" "),n("li",[n("n-link",{attrs:{to:"/leistungen"}},[e._v("Leistungen")])],1),e._v(" "),n("li",[n("n-link",{attrs:{to:"/kontakt"}},[e._v("Kontakt")])],1)])])])]),e._v(" "),n("div",{staticClass:"col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40"},[n("div",{staticClass:"footer-widget menu--contact"},[n("h2",{staticClass:"widgettitle"},[e._v("Kontakt")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"social-share social--transparent text-white"},[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("ShareNetwork",{attrs:{network:"WhatsApp",url:"https://news.vuejs.org/issues/180",title:"Say hi to Vite! A brand new, extremely fast development setup for Vue.",description:"This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."}},[n("i",{staticClass:"fa fa-share-alt"})])],1),e._v(" "),n("br"),e._v(" "),n("h2",{staticClass:"widgettitle hidden"},[e._v("Wenn es mal kracht oder die Plakette fehlt...")])])])])]),e._v(" "),n("div",{staticClass:"copyright ptb--50"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"copyright-left text-left"},[n("ul",{staticClass:"bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover"},[n("li",[n("n-link",{attrs:{to:"/galerie"}},[e._v("Galerie")])],1),e._v(" "),n("li",[n("n-link",{attrs:{to:"/kontakt"}},[e._v("Kontakt")])],1)])])]),e._v(" "),e._m(4)])]),e._v(" "),n("VueCookieAcceptDecline",{ref:"myCookiePanel",attrs:{debug:!1,disableDecline:!1,showPostponeButton:!1,elementId:"myCookiePanel",position:"bottom-left",transitionName:"slideFromBottom",type:"floating"},on:{"clicked-accept":e.cookieClickedAccept,"clicked-decline":e.cookieClickedDecline,"clicked-postpone":e.cookieClickedPostpone,"removed-cookie":e.cookieRemovedCookie,status:e.cookieStatus},scopedSlots:e._u([{key:"postponeContent",fn:function(){return[e._v("×")]},proxy:!0},{key:"message",fn:function(){return[n("b-card-header",{attrs:{"header-tag":"header"}},[e._v("Cookies!")]),e._v(" "),n("b-card-body",[n("span",[e._v("\n                    Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir\n                ")]),e._v(" "),e.showMore?n("span",[e._v("\n                     (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen. Die Datenverarbeitung kann mit deiner Einwilligung oder auf Basis eines berechtigten Interesses erfolgen, dem du in den Privatsphäre-Einstellungen widersprechen kannst. Du hast das Recht, nicht einzuwilligen und deine Einwilligung zu einem späteren Zeitpunkt zu ändern oder zu widerrufen. Weitere Informationen zur Verwendung deiner Daten findest du in unserer "),n("b-link",{attrs:{href:"https://devowl.io/de/datenschutzerklaerung/",target:"_blank"}},[e._v("Datenschutzerklärung")]),e._v(".\n                ")],1):e._e(),e._v(" "),e.showMore?e._e():n("span",[e._v("\n                    ...\n                ")]),e._v(" "),n("br"),e._v(" "),e.showMore?e._e():n("p",{staticClass:"show-more-btn align-end",on:{click:e.toggleShowMore}},[e._v("\n                    Mehr anzeigen\n                ")]),e._v(" "),e.showMore?n("p",{staticClass:"show-more-btn",on:{click:e.toggleShowMore}},[e._v("\n                    Weniger anzeigen\n                ")]):e._e()])]},proxy:!0},{key:"declineContent",fn:function(){return[n("b-button",{staticClass:"btn-pimary"},[e._v("Ablehnen")])]},proxy:!0},{key:"acceptContent",fn:function(){return[n("b-button",[e._v("Verstanden!")])]},proxy:!0}])})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-address bk-hover mb--20"},[n("p",[e._v("Siemensstr. 1, 53121 Bonn")]),e._v(" "),n("p",[n("a",{attrs:{href:"mailto:info@ing-karakale.de"}},[e._v("info@ing-karakale.de")])]),e._v(" "),n("p",[n("a",{attrs:{href:"tel::022896699180"}},[e._v("Telefon: 0228-96699180")])]),e._v(" "),n("p",[n("a",{attrs:{href:"tel::015737154376"}},[e._v("Mobil: 01573-7154376")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://www.facebook.com/CarKarakale/",target:"_blank"}},[t("i",{staticClass:"fab fa-facebook"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://www.instagram.com/gutachten.karakale/",target:"_blank"}},[t("i",{staticClass:"fab fa-instagram"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://wa.me/4915737154376",target:"_blank"}},[t("i",{staticClass:"fab fa-whatsapp"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"copyright-right text-center text-md-right"},[n("p",[e._v("© 2022 "),n("b",[e._v("Kfz Gutachten Karakale")])])])])}],!1,null,"15a47f7f",null);t.default=component.exports}}]);
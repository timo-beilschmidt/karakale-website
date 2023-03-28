exports.ids = [18];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceOne.vue?vue&type=template&id=3ddffa29&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-service-area section-ptb-xl bg_image--2 test-bg"},[_vm._ssrNode("<div class=\"container\" data-v-3ddffa29>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3ddffa29><div class=\"col-lg-12\" data-v-3ddffa29><div class=\"section-title text-center wow move-up\" data-v-3ddffa29><h3 data-v-3ddffa29>Wenn es mal kracht oder die Plakette fehlt...</h3> <h2 data-v-3ddffa29>Zu unseren Leistungen gehören Gutachten sowie die Hauptuntersuchung.</h2><br data-v-3ddffa29> <h2 data-v-3ddffa29>Rufen sie uns einfach an oder schreiben sie uns.</h2><br data-v-3ddffa29> <h2 data-v-3ddffa29>Wir freuen uns auf Sie!</h2></div></div></div> "),_vm._ssrNode("<div class=\"row mt--70 mt_sm--20 mt_md--30\" data-v-3ddffa29>","</div>",[_vm._l((_vm.data.services.slice(0, 6)),function(service){return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 wow move-up\" data-v-3ddffa29>","</div>",[_c('ServiceItemOne',{attrs:{"service":service}})],1)}),_vm._ssrNode(" "),_vm._l((_vm.data.services.slice(6, 9)),function(service){return _vm._ssrNode("<div id=\"extension\" class=\"col-lg-4 col-md-6 wow move-up\" data-v-3ddffa29>","</div>",[_c('ServiceItemOne',{attrs:{"service":service}})],1)})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/ServiceOne.vue?vue&type=template&id=3ddffa29&scoped=true&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemOne.vue?vue&type=template&id=95bcbe94&
var ServiceItemOnevue_type_template_id_95bcbe94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"service service--1 text-center mt--30"},[_vm._ssrNode("<div class=\"icons\">"+((_vm.service.icon)?("<i"+(_vm._ssrClass(null,_vm.service.icon))+"></i>"):("<img width=\"70\" height=\"90\""+(_vm._ssrAttr("src",'/img/icons/' + _vm.service.img))+(_vm._ssrAttr("alt",_vm.service.alt))+">"))+"</div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h4>"+_vm._ssrEscape(_vm._s(_vm.service.heading))+"</h4> <p>"+(_vm._s(_vm.service.desc))+"</p> "),_c('n-link',{staticClass:"service-btn",attrs:{"to":_vm.getLink(_vm.service)}},[_c('span',[_vm._v("Weitere Details")]),_vm._v(" "),_c('i',{staticClass:"fa fa-arrow-right"})])],2)],2)}
var ServiceItemOnevue_type_template_id_95bcbe94_staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceItemOne.vue?vue&type=template&id=95bcbe94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ServiceItemOnevue_type_script_lang_js_ = ({
  props: ['service'],
  methods: {
    getLink(service) {
      return service.link || "/leistungen";
    }

  }
});
// CONCATENATED MODULE: ./components/ServiceItemOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemOnevue_type_script_lang_js_ = (ServiceItemOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItemOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemOnevue_type_script_lang_js_,
  ServiceItemOnevue_type_template_id_95bcbe94_render,
  ServiceItemOnevue_type_template_id_95bcbe94_staticRenderFns,
  false,
  null,
  null,
  "ba124024"
  
)

/* harmony default export */ var ServiceItemOne = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ServiceOnevue_type_script_lang_js_ = ({
  components: {
    ServiceItemOne: ServiceItemOne
  },

  data() {
    return {
      data: service
    };
  }

});
// CONCATENATED MODULE: ./components/sections/ServiceOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_ServiceOnevue_type_script_lang_js_ = (ServiceOnevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/sections/ServiceOne.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ServiceOne_component = Object(componentNormalizer["a" /* default */])(
  sections_ServiceOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3ddffa29",
  "a5bcef5c"
  
)

/* harmony default export */ var ServiceOne = __webpack_exports__["default"] = (ServiceOne_component.exports);

/***/ }),

/***/ 64:
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[{\"id\":1,\"icon\":\"ion-ios-search\",\"heading\":\"Unfall-Gutachten\",\"desc\":\"Wir begutachten für Sie sämtliche Fahrzeugklassen. Sowohl PKW, LKW, Motorrad als auch Wohnmobile sind Bestandteile unserer Expertise.\"},{\"id\":2,\"icon\":\"ion-ios-information-outline\",\"heading\":\"Oldtimer-Gutachten\",\"desc\":\"Sie wollen ein H-Kennzeichen oder sind am Kauf oder Verkauf klassischer Fahrzeuge interessiert? Dann ist ein Oldtimer-Gutachten das Richtige für Sie!\"},{\"id\":3,\"img\":\"icon-hauptuntersuchung-orange.svg\",\"alt\":\"Hauptuntersuchung Plakette Icon\",\"heading\":\"Hauptuntersuchung\",\"desc\":\"Als Partner einer amtlich anerkannten Prüforganisation bieten wir Hauptuntersuchungen an.\"},{\"id\":4,\"icon\":\"ion-ios-bolt-outline\",\"heading\":\"e-Auto Gutachten\",\"desc\":\"Vor Veränderungen schrecken wir nicht zurück. Elektromobilität ist für uns Herzenssache und Bestandteil unserer Expertise.\"},{\"id\":5,\"icon\":\"ion-ios-pricetags-outline\",\"heading\":\"Wertgutachten\",\"desc\":\"Sie haben einen Fahrzeug dessen Wert sie nicht kennen?!? Mit einem Wertgutachten können wir den richtigen Preis für Ihr Fahrzeug ermitteln.\"},{\"id\":6,\"icon\":\"ion-ios-compose-outline\",\"heading\":\"Eintragungen\",\"desc\":\"Bestimmte technische Änderungen müssen in die Fahrzeugpapiere eigetragen werden.<br>Egal, ob es sich dabei um leichte §19(3) oder umfangreiche §19(2) Änderungen handelt, wir beraten Sie gerne.\"},{\"id\":7,\"icon\":\"ion-ios-flame-outline\",\"heading\":\"Gasanlagenprüfung\",\"desc\":\"Fahrzeuge mit einer Gasanlage brauchen eine separate Untersuchung.<br>Auch hier sind wir Ihr Ansprechpartner.<br> Weiterhin bieten wir Gasanlagenprüfungen für Wohnmobile-G607- sowie Boote -G608 an.\"},{\"id\":8,\"icon\":\"ion-ios-speedometer-outline\",\"heading\":\"Vollabnahme\",\"desc\":\"Importfahrzeuge oder Fahrzeuge, die länger als 7 Jahre außer Betrieb waren, brauchen eine neue Betriebserlaubnis. Dafür (sind eine gute Recherchearbeit und) ist technisches Fachwissen gefragt.<br>Bei uns sind Sie deshalb in guten Händen.\"},{\"id\":9,\"icon\":\"ion-ios-people-outline\",\"heading\":\"Unternehmensberatung - Kfz\",\"desc\":\"Angefangen mit einer Kfz-Werkstatt haben wir uns zu einem (etablierten) erfolgreichen/aufstrebenden Ingenieurbüro entwickelt.<br>Unsere jahrelangen Erfahrungen möchten wir nun weiter vermitteln. Umstrukturierung, Firmenerweiterung, neue Innovationen und vieles mehr sind unsere Themenbereiche.\"},{\"id\":10,\"icon\":\"ion-ios-telephone-outline\",\"heading\":\"Kontaktperson\",\"desc\":\"Als Gutachter sind wir seit 20 Jahren nun an Ihrer Seite. Egal ob Sachschaden, Mietwagen oder Wertminderung, wir berücksichtigen sämtliche Ansprüche.\",\"link\":\"/kontakt\"},{\"id\":11,\"icon\":\"ion-ios-cart-outline\",\"heading\":\"Kostenlos\",\"desc\":\"Bei einem unverschuldeten Unfall ist das Gutachten für sie komplett kostenfrei.\"},{\"id\":12,\"icon\":\"ion-ios-location-outline\",\"heading\":\"Vorort\",\"desc\":\"<strong>NRW & Rhld-Pfalz</strong> - <br> Egal wo sie sich befinden, innerhalb unseres Service-Bereichs kommen wir zu Ihnen\",\"link\":\"/kontakt\"},{\"id\":13,\"icon\":\"ion-ios-pulse\",\"heading\":\"Reparaturen\",\"desc\":\"Egal ob es sich um Motor- oder Maderschäden handelt, wir helfen Ihnen gerne. Schauen Sie doch in unserer Galerie vorbei und machen Sie sich ein eigenes Bild.\",\"link\":\"/portfolio-grid-boxed\"}],\"serviceList\":[{\"image\":\"/img/service/modern/service-list-1.jpg\",\"alt\":\"service image\",\"title\":\"Creative services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-2.jpg\",\"alt\":\"service image\",\"title\":\"Agency services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"},{\"image\":\"/img/service/modern/service-list-3.jpg\",\"alt\":\"service image\",\"title\":\"Digital services\",\"desc\":\"Creative services are a sub sector of the creative industries, a part of the economy that creates wealth by offering creativity for hire to other businesses. Creative Services also means a department within a company that does creative work such as writing, designing, and production. It is often a sub-department of the marketing organization.\"}]}");

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceOne_vue_vue_type_style_index_0_id_3ddffa29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceOne_vue_vue_type_style_index_0_id_3ddffa29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceOne_vue_vue_type_style_index_0_id_3ddffa29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceOne_vue_vue_type_style_index_0_id_3ddffa29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceOne_vue_vue_type_style_index_0_id_3ddffa29_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=18.js.map
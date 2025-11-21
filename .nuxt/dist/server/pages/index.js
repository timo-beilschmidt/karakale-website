exports.ids = [12];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=9dc5a634&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('HeaderBlack',{on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen},"toggleSearch":function($event){_vm.searchOpen = !_vm.searchOpen}}}),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen}}}),_vm._ssrNode(" "),_c('HeroAgency'),_vm._ssrNode(" "),_c('ServiceOne',{attrs:{"id":"service"}}),_vm._ssrNode(" "),_c('PortfolioOne'),_vm._ssrNode(" "),_c('CounterUpTwo'),_vm._ssrNode(" "),_c('CurveShape',{scopedSlots:_vm._u([{key:"bgcolor",fn:function(){return [_c('path',{staticStyle:{"fill":"#f5f5f5","stroke-miterlimit":"10"},attrs:{"d":"M3360.5,97.739c-242,0-480-48.375-480-48.375\n                    S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5\n                    S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"}})]},proxy:true}])}),_vm._ssrNode(" "),_c('TestimonialOne'),_vm._ssrNode(" "),_c('BrandLogoStyleOne'),_vm._ssrNode(" "),_c('ContactUsOne'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=9dc5a634&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 124)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 116)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 117)),
    HeroAgency: () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 130)),
    ServiceOne: () => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, 105)),
    PortfolioOne: () => __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, 131)),
    CounterUpOne: () => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 132)),
    CounterUpTwo: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, 133)),
    TeamOne: () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, 106)),
    TestimonialOne: () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, 134)),
    BrandLogoStyleOne: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 122)),
    BlogOne: () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, 107)),
    CurveShape: () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, 135)),
    ContactUsOne: () => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, 136)),
    Footer: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 123))
  },

  data() {
    return {
      navOpen: false,
      searchOpen: false
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-2');
  },

  head() {
    const baseUrl = 'https://kfzgutachten-karakale.de';
    const pageUrl = baseUrl + this.$route.path;
    return {
      title: 'Hauptuntersuchung (TÜV, HU) - Kfz Gutachten Karakale',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Hauptuntersuchung (TÜV/HU) beim Kfz Prüfbüro Karakale in Bonn. Professionelle TÜV-Prüfungen und Gutachten für Ihr Fahrzeug. Schnelle Termine, kompetente Beratung. Partner der TÜV NORD.'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'TÜV Hauptuntersuchung, HU Prüfung, Kfz Gutachten Bonn, TÜV Prüfung Bonn, Hauptuntersuchung Termin, TÜV Nord Partner'
      }, // Open Graph
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Hauptuntersuchung (TÜV, HU) - Kfz Gutachten Karakale Bonn'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Hauptuntersuchung (TÜV/HU) beim Kfz Prüfbüro Karakale in Bonn. Professionelle TÜV-Prüfungen und Gutachten. Partner der TÜV NORD.'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: baseUrl + '/favicon_logo.png'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: pageUrl
      }, // Twitter Card
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Hauptuntersuchung (TÜV, HU) - Kfz Gutachten Karakale'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Hauptuntersuchung (TÜV/HU) beim Kfz Prüfbüro Karakale in Bonn. Professionelle TÜV-Prüfungen und Gutachten.'
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: baseUrl + '/favicon_logo.png'
      }],
      link: [{
        rel: 'canonical',
        href: pageUrl
      }],
      __dangerouslyDisableSanitizers: ['script'],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Kfz Gutachten und Prüfbüro Karakale",
          "description": "Kfz Gutachten und Prüfbüro für Hauptuntersuchungen (TÜV) und Gutachten jeder Art in Bonn",
          "url": baseUrl,
          "telephone": "+49-228-96699180",
          "email": "info@ing-karakale.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Siemensstr. 1",
            "addressLocality": "Bonn",
            "postalCode": "53121",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.7374",
            "longitude": "7.0982"
          },
          "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
          "priceRange": "$$",
          "image": baseUrl + "/favicon_logo.png",
          "areaServed": {
            "@type": "City",
            "name": "Bonn"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Kfz Dienstleistungen",
            "itemListElement": [{
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hauptuntersuchung (TÜV/HU)"
              }
            }, {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Oldtimer Gutachten"
              }
            }, {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Unfallgutachten"
              }
            }, {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "e-Auto Gutachten"
              }
            }, {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wertgutachten"
              }
            }]
          }
        })
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "573de51e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
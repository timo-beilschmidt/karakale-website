exports.ids = [10];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/galerie.vue?vue&type=template&id=4138b522&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('HeaderBlack',{on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen},"toggleSearch":function($event){_vm.searchOpen = !_vm.searchOpen}}}),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu' : _vm.navOpen},on:{"togglenav":function($event){_vm.navOpen = !_vm.navOpen}}}),_vm._ssrNode(" <div class=\"breadcaump-area pt--130 pb--50 bg_color--1 breadcaump-title-bar\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"breadcaump-inner text-center\"><h1 class=\"heading heading-h1\">Galerie</h1></div></div></div></div></div> "),_vm._ssrNode("<div class=\"brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60 bg_color--1\">","</div>",[_vm._ssrNode("<div class=\"container-fluid plr--30\">","</div>",[_vm._ssrNode("<div class=\"row mtn--30\">","</div>",_vm._l((_vm.data.portfolioItems),function(portfolio){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 move-up wow mt--30\">","</div>",[_c('PortfolioItemCenterCaption',{attrs:{"portfolio":portfolio}})],1)}),0)])]),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/galerie.vue?vue&type=template&id=4138b522&

// EXTERNAL MODULE: ./data/portfolio.json
var portfolio = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/galerie.vue?vue&type=script&lang=js&
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

/* harmony default export */ var galerievue_type_script_lang_js_ = ({
  components: {
    HeaderBlack: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 124)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 116)),
    SearchPopup: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 117)),
    PortfolioItemCenterCaption: () => __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, 125)),
    Footer: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 123))
  },

  data() {
    return {
      data: portfolio,
      navOpen: false,
      searchOpen: false
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },

  head() {
    return {
      title: 'Galerie'
    };
  }

});
// CONCATENATED MODULE: ./pages/galerie.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_galerievue_type_script_lang_js_ = (galerievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/galerie.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_galerievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "939d29b2"
  
)

/* harmony default export */ var galerie = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module) {

module.exports = JSON.parse("{\"portfolios\":[{\"heading\":\"header 01\",\"image\":\"/img/portfolio/portfolio-1/portfolio-1.jpg\"}],\"portfolioFeaturd\":[{\"id\":1,\"image\":\"/img/portfolio/portfolio-2/portfolio-01.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"},{\"id\":2,\"image\":\"/img/portfolio/portfolio-2/portfolio-02.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Photography\"},{\"id\":3,\"image\":\"/img/portfolio/portfolio-2/portfolio-03.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Design\"},{\"id\":4,\"image\":\"/img/portfolio/portfolio-2/portfolio-04.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Marketing\"},{\"id\":5,\"image\":\"/img/portfolio/portfolio-2/portfolio-05.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"SEO\"},{\"id\":6,\"image\":\"/img/portfolio/portfolio-2/portfolio-06.jpg\",\"alt\":\"Portfolio Image\",\"title\":\"Digital Marketing Basics\",\"category\":\"Digital\"}],\"portfolioItems\":[{\"id\":1,\"image\":\"/img/gallery/images/image-01.jpeg\",\"heading\":\"Kratzer an einem Van (Hinten-Links)\",\"slug\":\"the-language-of-designs-1\",\"category\":\"Design\",\"filterClass\":\"creative digital\"},{\"id\":2,\"image\":\"/img/other/DSC08203.webp\",\"heading\":\"Werkstatt mit Oldtimer\",\"slug\":\"b-sharp-high-end-audio-2\",\"category\":\"Marketing\",\"filterClass\":\"photography design\"},{\"id\":3,\"image\":\"/img/gallery/images/image-03.JPG\",\"heading\":\"VW I302 LS\",\"slug\":\"smart-sound-system-3\",\"category\":\"Photography\",\"filterClass\":\"photography creative\"},{\"id\":4,\"image\":\"/img/gallery/images/image-04.PNG\",\"heading\":\"Smart mit seitlichem Schaden (rechts).\",\"slug\":\"awe-inspiring-projects-4\",\"category\":\"Life Style\",\"filterClass\":\"design\"},{\"id\":5,\"image\":\"/img/gallery/images/image-05.jpeg\",\"heading\":\"Firmenwagen Zoe\",\"slug\":\"gifts-for-photography-5\",\"category\":\"Design\",\"filterClass\":\"creative\"},{\"id\":6,\"image\":\"/img/other/Bild SL.webp\",\"heading\":\"Mercedes SL Oldtimer\",\"slug\":\"enchanting-portrait-hacks-6\",\"category\":\"Photography\",\"filterClass\":\"digital\"},{\"id\":7,\"image\":\"/img/gallery/images/image-07.JPG\",\"heading\":\"BMW Totalschaden Front\",\"slug\":\"digital-marketing-basics-7\",\"category\":\"Design\"},{\"id\":8,\"image\":\"/img/gallery/images/image-08.JPG\",\"heading\":\"Peugeot mit Schaden an der Seite (Links).\",\"slug\":\"measure-digital-progress-8\",\"filterClass\":\"digital design\"},{\"id\":9,\"image\":\"/img/gallery/images/image-09.JPG\",\"heading\":\"Mercedes Stern\",\"slug\":\"b-sharp-high-end-audio-9\",\"category\":\"Design\",\"filterClass\":\"digital\"},{\"id\":10,\"image\":\"/img/gallery/images/image-10.JPG\",\"heading\":\"Opel ohne Front\",\"slug\":\"b-sharp-high-end-audio-10\",\"category\":\"Design\",\"filterClass\":\"digital\"},{\"id\":11,\"image\":\"/img/gallery/images/image-11.JPG\",\"heading\":\"Weißes Auto mit Schrammen (Hinten-Rechts)\",\"slug\":\"b-sharp-high-end-audio-11\",\"category\":\"Design\",\"filterClass\":\"digital\"},{\"id\":12,\"image\":\"/img/other/IMG_9415.webp\",\"heading\":\"Mercedes mit gebrochener Achse\",\"slug\":\"b-sharp-high-end-audio-12\",\"category\":\"Design\",\"filterClass\":\"digital\"}]}");

/***/ })

};;
//# sourceMappingURL=galerie.js.map
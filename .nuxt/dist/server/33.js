exports.ids = [33];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TestimonialOne.vue?vue&type=template&id=9ea048ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-testimonial-area section-ptb-xl pt-0 bg_color--5 poss_relative pt_sm--0"},[_vm._ssrNode("<div class=\"container section-pt-xl\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"section-title text-center wow move-up\"><h3 class=\"theme-color\">"+_vm._ssrEscape(_vm._s(_vm.data.sectionSubTitle))+"</h3> <h2>"+_vm._ssrEscape(_vm._s(_vm.data.sectionTitle))+"</h2></div></div></div></div> "),_vm._ssrNode("<div class=\"testimonial-wrapper testimonial--horizontal testimonial--horizontal--active pagination-style-01 mt--80 wow move-up\">","</div>",[_vm._ssrNode("<div class=\"testimonial-container\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOption}},_vm._l((_vm.data.testimonials),function(testimonial){return _c('div',{key:testimonial.id,staticClass:"swiper-slide"},[_c('TestimonialItem',{attrs:{"testimonial":testimonial}})],1)}),0),_vm._ssrNode(" <div class=\"swiper-pagination swiper-pagination-custom\"></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/TestimonialOne.vue?vue&type=template&id=9ea048ae&

// EXTERNAL MODULE: ./data/testimonial.json
var testimonial = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TestimonialOne.vue?vue&type=script&lang=js&
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

/* harmony default export */ var TestimonialOnevue_type_script_lang_js_ = ({
  components: {
    TestimonialItem: () => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, 138))
  },

  data() {
    return {
      data: testimonial,
      swiperOption: {
        spaceBetween: 20,
        autoplay: false,
        loop: true,
        loopedSlides: 9,
        autoplayDisableOnInteraction: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (e, t, i) {
            var a = 100 / i * t;
            return a = a.toFixed(6), '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + '"></div></div>';
          }
        },
        breakpoints: {
          1499: {
            slidesPerView: 5
          },
          992: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 2
          },
          300: {
            slidesPerView: 1
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/sections/TestimonialOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TestimonialOnevue_type_script_lang_js_ = (TestimonialOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/TestimonialOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_TestimonialOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7cc77c68"
  
)

/* harmony default export */ var TestimonialOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"Über die Jahre haben wir bei Kfz-Gutachten Karakale für viele zufriedene Kunden gesorgt. Gerne können Sie sich die Meinung unserer Kunden durchlesen und von den Erfahrungen profitieren.\",\"sectionSubTitle\":\"Erfahrungsberichte\",\"desc\":\"Über die Jahre haben wir bei Kfz-Gutachten Karakale für viele zufriedene Kunden gesorgt. Gerne können Sie sich die Meinung unserer Kunden durchlesen und von den Erfahrungen profitieren.\",\"testimonials\":[{\"id\":1,\"name\":\"Cengiz Kilinc\",\"position\":\"Local Guide\",\"thumb\":\"https://lh3.googleusercontent.com/a/AATXAJx-xoIKACCElMJIlsL5MWBqBejI-ef5gIO4fXJ6=w60-h60-p-rp-mo-ba4-br100\",\"alt\":\"Kunde Bild Cengiz Kilinc\",\"text\":\"Mein Auto kommt seit Jahren nur noch zu Herrn Karakale. Ich bin zufrieden mit ihm. Weil ich ein Stammkunde bin möchte ich auch nicht zuuu viele lobende Worte verlieren. Nur eins ist sicher. Ein sehr vertrauenswürdiger Mann\"},{\"id\":2,\"name\":\"Muhammed Enes Altinata\",\"position\":\"\",\"thumb\":\"https://lh3.googleusercontent.com/a-/AOh14GiWrWGbSO4oWzOWitpO2Ciq1xDH2R_PgZ3lPPM6r94=w60-h60-p-rp-mo-br100\",\"alt\":\"Kunde Bild Muhammed Enes Altinata\",\"text\":\"Dienste: Vergaserreinigung, Auspuff, Karosserie und Leisten, Bremsen, Ölwechsel, Klimaanlage, Austausch von Luft- und Innenraumfiltern, Malerarbeiten, Akku, Reparatur von Lenkungs- und Fahrwerksteilen, Automotordiagnose, Elektrizität, Reifen, Getriebe, Schweißarbeiten<br><br>Positiv: Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität\"},{\"id\":3,\"name\":\"Nur Can\",\"position\":\"\",\"thumb\":\"https://lh3.googleusercontent.com/a-/AOh14Gi9ebyhhfy78zIabA3mV4LmG9GIUnI9kf1vqcSL=w60-h60-p-rp-mo-br100\",\"alt\":\"Kunde Bild Nur Can\",\"text\":\"Positiv: Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität<br><br>Super Service! Hat auf jeden Fall 5 Sterne verdient! Selten so eine Komponente und schnelle Bedienung erlebt! Immer wieder gerne 😊 Kann ich mit ruhigem Gewissen weiterempfehlen! Hier ist der Kunde gut aufgehoben ✅\"},{\"id\":4,\"name\":\"Ela Bal\",\"position\":\"\",\"thumb\":\"https://lh3.googleusercontent.com/a-/AOh14GgGCEwsz-hasDPtV-dEkX-L87QeIDuHklINAPV_=w60-h60-p-rp-mo-br100\",\"alt\":\"Kunde Bild Ela Bal\",\"text\":\"Toller Service und gutes Preis-Leistungsverhältnis. Auch ohne Termine und Anmeldung freundliche Hilfestellung, absolut empfehlenswert! Herr Karakale, der Chef, hat sich persönlich um mein Anliegen gekümmert, viel Zeit genommen und mein Auto repariert. Man hat sich als Kunde wohl und gut aufgehoben gefühlt. Ich bin sehr zufrieden und kann die Werkstatt mit gutem Gewissen weiterempfehlen 👍🏻\"},{\"id\":5,\"name\":\"Klaus Schwegmann\",\"position\":\"Local Guide\",\"thumb\":\"https://lh3.googleusercontent.com/a/AATXAJxSthJ5R1Mmeu4ZtC5U_55eycE8KuTxNWSMRbIC=w60-h60-p-rp-mo-ba3-br100\",\"alt\":\"Kunde Bild Klaus Schwegmann\",\"text\":\"Guter Service immer wieder gern\"},{\"id\":6,\"name\":\"Rosa Elßner\",\"position\":\"\",\"thumb\":\"https://lh3.googleusercontent.com/a/AATXAJzzNf2Vx9H6EVV_S1yo6aduaFrcgcLwPomQRIkl=w60-h60-p-rp-mo-br100\",\"alt\":\"Kunde Bild Klaus Schwegmann\",\"text\":\"Dienste: Karosserie und Leisten, Malerarbeiten, Elektrizität<br>Positiv: Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit, Qualität\"},{\"id\":7,\"name\":\"Domenico Bordino\",\"position\":\"\",\"thumb\":\"https://lh3.googleusercontent.com/a-/AOh14GiKwPxyLkFTWLCTTmGYOiZjYfoC-Li00zVkP4pk=w60-h60-p-rp-mo-br100\",\"alt\":\"Kunde Bild Klaus Schwegmann\",\"text\":\"Sehr nett und zuvorkommend. Fachlich kompetent und gut, faire Preise.Herr Karakale, steht auch immer mit Rat und Tat zur stelle, auch wenn er mal keine Zeit hat.\"}]}");

/***/ })

};;
//# sourceMappingURL=33.js.map
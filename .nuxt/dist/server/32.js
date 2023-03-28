exports.ids = [32];
exports.modules = {

/***/ 100:
/***/ (function(module) {

module.exports = JSON.parse("{\"teamMembers\":[{\"id\":1,\"image\":\"/img/team/team-1/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":2,\"image\":\"/img/team/team-1/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":3,\"image\":\"/img/team/team-1/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"},{\"id\":4,\"image\":\"/img/team/team-1/team-4.jpg\",\"name\":\"Peter Parker\",\"position\":\"Marketing\"},{\"id\":5,\"image\":\"/img/team/team-3/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":6,\"image\":\"/img/team/team-3/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":7,\"image\":\"/img/team/team-3/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"},{\"id\":8,\"image\":\"/img/team/team-2/team-1.jpg\",\"name\":\"Caroline Roses\",\"position\":\"Designer\"},{\"id\":9,\"image\":\"/img/team/team-2/team-2.jpg\",\"name\":\"Blake Hamilton\",\"position\":\"Engineer\"},{\"id\":10,\"image\":\"/img/team/team-2/team-3.jpg\",\"name\":\"Kashara May\",\"position\":\"Founder\"}]}");

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TeamOne.vue?vue&type=template&id=34c59e46&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bk-team-area ptb--60 pb_sm--5 bg_color--1"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"team-heading d-flex justify-content-between wow move-up\">","</div>",[_vm._ssrNode("<div class=\"heading-left\"><h3 class=\"theme-color\">Our creative crew.</h3></div> "),_vm._ssrNode("<div class=\"heading-right\">","</div>",[_c('n-link',{attrs:{"to":"/team-grid"}},[_vm._v("\n                            View all members \n                            "),_c('i',{staticClass:"fa fa-arrow-right"})])],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",_vm._l((_vm.data.teamMembers.slice(0, 4)),function(teamMember){return _vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-sm-6 col-12 wow move-up\">","</div>",[_c('TeamMemberOne',{attrs:{"teamMember":teamMember}})],1)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/TeamOne.vue?vue&type=template&id=34c59e46&

// EXTERNAL MODULE: ./data/team.json
var team = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMemberOne.vue?vue&type=template&id=19916aa2&
var TeamMemberOnevue_type_template_id_19916aa2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team team_style--1"},[_vm._ssrNode("<div class=\"image-wrap\"><div class=\"thumb\"><img"+(_vm._ssrAttr("src",_vm.teamMember.image))+" alt=\"Team images\"> <div class=\"overlay\"></div> <div class=\"shape\"><img src=\"/img/team/shape/team-shape-1.png\" alt=\"shape image\" class=\"shape-01\"> <img src=\"/img/team/shape/team-shape-2.png\" alt=\"shape image\" class=\"shape-02\"> <img src=\"/img/team/shape/team-shape-3.png\" alt=\"shape image\" class=\"shape-03\"></div></div> <div class=\"social-networks\"><div class=\"inner\"><a href=\"https://www.facebook.com/\" aria-label=\"Facebook\" target=\"_blank\" class=\"hint--bounce hint--top hint--primary\"><i class=\"fab fa-facebook\"></i></a> <a href=\"https://twitter.com/\" aria-label=\"Twitter\" target=\"_blank\" class=\"hint--bounce hint--top hint--primary\"><i class=\"fab fa-twitter\"></i></a> <a href=\"https://www.instagram.com/\" aria-label=\"Instagram\" target=\"_blank\" class=\"hint--bounce hint--top hint--primary\"><i class=\"fab fa-instagram\"></i></a></div></div></div> <div class=\"info\"><h6 class=\"name\">"+_vm._ssrEscape(_vm._s(_vm.teamMember.name))+"</h6> <span class=\"position\">"+_vm._ssrEscape(_vm._s(_vm.teamMember.position))+"</span></div>")])}
var TeamMemberOnevue_type_template_id_19916aa2_staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamMemberOne.vue?vue&type=template&id=19916aa2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMemberOne.vue?vue&type=script&lang=js&
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
/* harmony default export */ var TeamMemberOnevue_type_script_lang_js_ = ({
  props: ['teamMember']
});
// CONCATENATED MODULE: ./components/TeamMemberOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMemberOnevue_type_script_lang_js_ = (TeamMemberOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMemberOne.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMemberOnevue_type_script_lang_js_,
  TeamMemberOnevue_type_template_id_19916aa2_render,
  TeamMemberOnevue_type_template_id_19916aa2_staticRenderFns,
  false,
  injectStyles,
  null,
  "387075a2"
  
)

/* harmony default export */ var TeamMemberOne = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TeamOne.vue?vue&type=script&lang=js&
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


/* harmony default export */ var TeamOnevue_type_script_lang_js_ = ({
  components: {
    TeamMemberOne: TeamMemberOne
  },

  data() {
    return {
      data: team
    };
  }

});
// CONCATENATED MODULE: ./components/sections/TeamOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TeamOnevue_type_script_lang_js_ = (TeamOnevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/sections/TeamOne.vue





/* normalize component */

var TeamOne_component = Object(componentNormalizer["a" /* default */])(
  sections_TeamOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "249cbeb8"
  
)

/* harmony default export */ var TeamOne = __webpack_exports__["default"] = (TeamOne_component.exports);

/***/ })

};;
//# sourceMappingURL=32.js.map
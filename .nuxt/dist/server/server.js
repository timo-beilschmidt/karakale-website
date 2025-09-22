module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"8":"pages/about","9":"pages/datenschutz","10":"pages/galerie","11":"pages/impressum","12":"pages/index","13":"pages/kontakt","14":"pages/leistungen"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var mappedProps = options.mappedProps,
      name = options.name,
      ctr = options.ctr,
      ctrArgs = options.ctrArgs,
      events = options.events,
      beforeCreate = options.beforeCreate,
      afterCreate = options.afterCreate,
      props = options.props,
      rest = _objectWithoutProperties(options, ['mappedProps', 'name', 'ctr', 'ctrArgs', 'events', 'beforeCreate', 'afterCreate', 'props']);

  var promiseName = '$' + name + 'Promise';
  var instanceName = '$' + name + 'Object';

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array');

  return _extends({}, typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}, {
    mixins: [_mapElementMixin2.default],
    props: _extends({}, props, mappedPropsToVueProps(mappedProps)),
    render: function render() {
      return '';
    },
    provide: function provide() {
      var _this = this;

      var promise = this.$mapPromise.then(function (map) {
        // Infowindow needs this to be immediately available
        _this.$map = map;

        // Initialize the maps with the given options
        var options = _extends({}, _this.options, {
          map: map
        }, (0, _bindProps.getPropsValues)(_this, mappedProps));
        delete options.options; // delete the extra options

        if (beforeCreate) {
          var result = beforeCreate.bind(_this)(options);

          if (result instanceof Promise) {
            return result.then(function () {
              return { options: options };
            });
          }
        }
        return { options: options };
      }).then(function (_ref) {
        var _Function$prototype$b;

        var options = _ref.options;

        var ConstructorObject = ctr();
        // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, (0, _bindProps.getPropsValues)(_this, props || {}))))))() : new ConstructorObject(options);

        (0, _bindProps.bindProps)(_this, _this[instanceName], mappedProps);
        (0, _bindEvents2.default)(_this, _this[instanceName], events);

        if (afterCreate) {
          afterCreate.bind(_this)(_this[instanceName]);
        }
        return _this[instanceName];
      });
      this[promiseName] = promise;
      return _defineProperty({}, promiseName, promise);
    },
    destroyed: function destroyed() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    }
  }, rest);
};

exports.mappedPropsToVueProps = mappedPropsToVueProps;

var _bindEvents = __webpack_require__(8);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(4);

var _mapElementMixin = __webpack_require__(17);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */


function assert(v, message) {
  if (!v) throw new Error(message);
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        prop = _ref4[1];

    var value = {};

    if ('type' in prop) value.type = prop.type;
    if ('default' in prop) value.default = prop.default;
    if ('required' in prop) value.required = prop.required;

    return [key, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    acc[key] = val;
    return acc;
  }, {});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropsValues = getPropsValues;
exports.bindProps = bindProps;

var _WatchPrimitiveProperties = __webpack_require__(9);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce(function (acc, prop) {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}

/**
  * Binds the properties defined in props to the google maps instance.
  * If the prop is an Object type, and we wish to track the properties
  * of the object (e.g. the lat and lng of a LatLng), then we do a deep
  * watch. For deep watch, we also prevent the _changed event from being
  * emitted if the data source was external.
  */
function bindProps(vueInst, googleMapsInst, props) {
  var _loop = function (attribute) {
    var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;


    if (noBind) return 'continue';

    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
    var eventName = attribute.toLowerCase() + '_changed';
    var initialValue = vueInst[attribute];

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(setMethodName + ' is not a method of (the Maps object corresponding to) ' + vueInst.$options._componentTag);
    }

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute, function () {
        var attributeValue = vueInst[attribute];

        googleMapsInst[setMethodName](attributeValue);
      }, {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      });
    } else {
      (0, _WatchPrimitiveProperties2.default)(vueInst, trackProperties.map(function (prop) {
        return attribute + '.' + prop;
      }), function () {
        googleMapsInst[setMethodName](vueInst[attribute]);
      }, vueInst[attribute] !== undefined);
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName])) {
      googleMapsInst.addListener(eventName, function () {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  };

  for (var attribute in props) {
    var _ret = _loop(attribute);

    if (_ret === 'continue') continue;
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindProps = __webpack_require__(4);

var _simulateArrowDown = __webpack_require__(21);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var props = {
  bounds: {
    type: Object
  },
  defaultPlace: {
    type: String,
    default: ''
  },
  componentRestrictions: {
    type: Object,
    default: null
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  placeholder: {
    required: false,
    type: String
  },
  className: {
    required: false,
    type: String
  },
  label: {
    required: false,
    type: String,
    default: null
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    // Allow default place to be set
    input.value = this.defaultPlace;
    this.$watch('defaultPlace', function () {
      input.value = _this.defaultPlace;
    });

    this.$gmapApiPromiseLazy().then(function () {
      var options = (0, _bindProps.getPropsValues)(_this, props);
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);

      var placeholder = props.placeholder,
          place = props.place,
          defaultPlace = props.defaultPlace,
          className = props.className,
          label = props.label,
          selectFirstOnEnter = props.selectFirstOnEnter,
          rest = _objectWithoutProperties(props, ['placeholder', 'place', 'defaultPlace', 'className', 'label', 'selectFirstOnEnter']); // eslint-disable-line


      (0, _bindProps.bindProps)(_this, _this.autoCompleter, rest);

      _this.autoCompleter.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.autoCompleter.getPlace());
      });
    });
  },
  created: function created() {
    console.warn('The PlaceInput class is deprecated! Please consider using the Autocomplete input instead'); // eslint-disable-line no-console
  },

  props: props
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vueInst, googleMapsInst, events) {
  var _loop = function (eventName) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, function (ev) {
        vueInst.$emit(eventName, ev);
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WatchPrimitiveProperties;
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
  var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var isHandled = false;

  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(function () {
        isHandled = false;
        handler();
      });
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propertiesToTrack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      vueInst.$watch(prop, requestHandle, { immediate: immediate });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

exports.default = {
  props: ['resizeBus'],

  data: function data() {
    return {
      _actualResizeBus: null
    };
  },
  created: function created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },


  methods: {
    _resizeCallback: function _resizeCallback() {
      this.resize();
    },
    _delayedResizeCallback: function _delayedResizeCallback() {
      var _this = this;

      this.$nextTick(function () {
        return _this._resizeCallback();
      });
    }
  },

  watch: {
    resizeBus: function resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal;
    },
    '$data._actualResizeBus': function $data_actualResizeBus(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback);
      }
      if (newVal) {
        newVal.$on('resize', this._delayedResizeCallback);
      }
    }
  },

  destroyed: function destroyed() {
    if (this.$data._actualResizeBus) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.label))+"</span> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrClass(null,_vm.className))+">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee&


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
exports.default = {
  inject: {
    '$mapPromise': { default: 'abcdef' }
  },

  provide: function provide() {
    var _this = this;

    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then(function (map) {
      _this.$map = map;
    });

    return {};
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TwoWayBindingWrapper;
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  var counter = 0;

  fn(function () {
    counter += 1;
  }, function () {
    counter = Math.max(0, counter - 1);
  }, function () {
    return counter === 0;
  });
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
exports.default = function (input) {
  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      var origListener = listener;
      listener = function (event) {
        var suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0;
        if (event.which === 13 && !suggestionSelected) {
          var simulatedEvent = document.createEvent('Event');
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }

  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-social-sharing");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper/dist/vue-awesome-swiper");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreetViewPanorama = exports.MountableMixin = exports.Autocomplete = exports.MapElementFactory = exports.MapElementMixin = exports.PlaceInput = exports.Map = exports.InfoWindow = exports.Rectangle = exports.Cluster = exports.Circle = exports.Polygon = exports.Polyline = exports.Marker = exports.loadGmapApi = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Vue component imports


exports.install = install;
exports.gmapApi = gmapApi;

var _lazyValue = __webpack_require__(39);

var _lazyValue2 = _interopRequireDefault(_lazyValue);

var _manager = __webpack_require__(40);

var _marker = __webpack_require__(41);

var _marker2 = _interopRequireDefault(_marker);

var _polyline = __webpack_require__(42);

var _polyline2 = _interopRequireDefault(_polyline);

var _polygon = __webpack_require__(43);

var _polygon2 = _interopRequireDefault(_polygon);

var _circle = __webpack_require__(44);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = __webpack_require__(45);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _infoWindow = __webpack_require__(54);

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = __webpack_require__(55);

var _map2 = _interopRequireDefault(_map);

var _streetViewPanorama = __webpack_require__(56);

var _streetViewPanorama2 = _interopRequireDefault(_streetViewPanorama);

var _placeInput = __webpack_require__(51);

var _placeInput2 = _interopRequireDefault(_placeInput);

var _autocomplete = __webpack_require__(57);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = __webpack_require__(17);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

var _mountableMixin = __webpack_require__(10);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Cluster should be loaded conditionally
// However in the web version, it's not possible to write
// `import 'vue2-google-maps/src/components/cluster'`, so we need to
// import it anyway (but we don't have to register it)
// Therefore we use babel-plugin-transform-inline-environment-variables to
// set BUILD_DEV to truthy / falsy
var Cluster = undefined;

var GmapApi = null;

// export everything
exports.loadGmapApi = _manager.loadGmapApi;
exports.Marker = _marker2.default;
exports.Polyline = _polyline2.default;
exports.Polygon = _polygon2.default;
exports.Circle = _circle2.default;
exports.Cluster = Cluster;
exports.Rectangle = _rectangle2.default;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.PlaceInput = _placeInput2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.MapElementFactory = _mapElementFactory2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.StreetViewPanorama = _streetViewPanorama2.default;
function install(Vue, options) {
  // Set defaults
  options = _extends({
    installComponents: true,
    autobindAllEvents: false
  }, options);

  // Update the global `GmapApi`. This will allow
  // components to use the `google` global reactively
  // via:
  //   import {gmapApi} from 'vue2-google-maps'
  //   export default {  computed: { google: gmapApi }  }
  GmapApi = new Vue({ data: { gmapApi: null } });

  var defaultResizeBus = new Vue();

  // Use a lazy to only load the API when
  // a VGM component is loaded
  var gmapApiPromiseLazy = makeGmapApiPromiseLazy(options);

  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapMarker', _marker2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapPolyline', _polyline2.default);
    Vue.component('GmapPolygon', _polygon2.default);
    Vue.component('GmapCircle', _circle2.default);
    Vue.component('GmapRectangle', _rectangle2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
    Vue.component('GmapPlaceInput', _placeInput2.default);
    Vue.component('GmapStreetViewPanorama', _streetViewPanorama2.default);
  }
}

function makeGmapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GmapApi.gmapApi = {};
    return window.google;
  }

  if (options.load) {
    // If library should load the API
    return (0, _lazyValue2.default)(function () {
      // Load the
      // This will only be evaluated once
      if (typeof window === 'undefined') {
        // server side -- never resolve this promise
        return new Promise(function () {}).then(onApiLoaded);
      } else {
        return new Promise(function (resolve, reject) {
          try {
            window['vueGoogleMapsInit'] = resolve;
            (0, _manager.loadGmapApi)(options.load, options.loadCn);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    var promise = new Promise(function (resolve) {
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return;
      }
      window['vueGoogleMapsInit'] = resolve;
    }).then(onApiLoaded);

    return (0, _lazyValue2.default)(function () {
      return promise;
    });
  }
}

function gmapApi() {
  return GmapApi.gmapApi && window.google;
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-masonry-css");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-silentbox");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_3a4e1217_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_3a4e1217_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_3a4e1217_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_3a4e1217_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_3a4e1217_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by sindresorhus and can be seen here
// https://github.com/sindresorhus/lazy-value/blob/master/index.js

exports.default = function (fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isApiSetUp = false;

/**
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the libraries and/or version (as `v`) parameter into
 *                  this parameter and skip the next two parameters
 * @param version   Google Maps version
 * @param libraries Libraries to load (@see
 *                  https://developers.google.com/maps/documentation/javascript/libraries)
 * @param loadCn    Boolean. If set to true, the map will be loaded from google maps China
 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
 *
 * Example:
 * ```
 *      import {load} from 'vue-google-maps'
 *
 *      load(<YOUR-API-KEY>)
 *
 *      load({
 *              key: <YOUR-API-KEY>,
 *      })
 *
 *      load({
 *              client: <YOUR-CLIENT-ID>,
 *              channel: <YOUR CHANNEL>
 *      })
 * ```
 */
var loadGmapApi = exports.loadGmapApi = function (options, loadCn) {
  if (typeof document === 'undefined') {
    // Do nothing if run from server-side
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;

    var googleMapScript = document.createElement('SCRIPT');

    // Allow options to be an object.
    // This is to support more esoteric means of loading Google Maps,
    // such as Google for business
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('options should  be an object');
    }

    // libraries
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }
    options['callback'] = 'vueGoogleMapsInit';

    var baseUrl = 'https://maps.googleapis.com/';

    if (typeof loadCn === 'boolean' && loadCn === true) {
      baseUrl = 'https://maps.google.cn/';
    }

    var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    }).join('&');

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error('You already started the loading of google maps');
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};

var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/**
 * @class Marker
 *
 * Marker class with extra support for
 *
 * - Embedded info windows
 * - Clustered markers
 *
 * Support for clustered markers is for backward-compatability
 * reasons. Otherwise we should use a cluster-marker mixin or
 * subclass.
 */
exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'marker',
  ctr: function ctr() {
    return google.maps.Marker;
  },

  inject: {
    '$clusterPromise': {
      default: null
    }
  },

  render: function render(h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return '';
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0];
    } else {
      return h('div', this.$slots.default);
    }
  },
  destroyed: function destroyed() {
    if (!this.$markerObject) {
      return;
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate: function beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }

    return this.$clusterPromise;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    if (this.$clusterPromise) {
      this.$clusterPromise.then(function (co) {
        co.addMarker(inst);
        _this.$clusterObject = co;
      });
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,

  name: 'polyline',
  ctr: function ctr() {
    return google.maps.Polyline;
  },

  afterCreate: function afterCreate() {
    var _this = this;

    var clearEvents = function () {};

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        _this.$polylineObject.setPath(path);

        var mvcPath = _this.$polylineObject.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', _this.$polylineObject.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,
  mappedProps: props,
  name: 'polygon',
  ctr: function ctr() {
    return google.maps.Polygon;
  },

  beforeCreate: function beforeCreate(options) {
    if (!options.path) delete options.path;
    if (!options.paths) delete options.paths;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    var clearEvents = function () {};

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch('paths', function (paths) {
      if (paths) {
        clearEvents();

        inst.setPaths(paths);

        var updatePaths = function () {
          _this.$emit('paths_changed', inst.getPaths());
        };
        var eventListeners = [];

        var mvcArray = inst.getPaths();
        for (var i = 0; i < mvcArray.getLength(); i++) {
          var mvcPath = mvcArray.getAt(i);
          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
        }
        eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        inst.setPaths(path);

        var mvcPath = inst.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', inst.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                obj = _ref4[0],
                listenerHandle = _ref4[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'circle',
  ctr: function ctr() {
    return google.maps.Circle;
  },
  events: events
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'rectangle',
  ctr: function ctr() {
    return google.maps.Rectangle;
  },
  events: events
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(3);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: {
    type: Object,
    required: false,
    default: function _default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};

var events = ['domready', 'closeclick', 'content_changed'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'infoWindow',
  ctr: function ctr() {
    return google.maps.InfoWindow;
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },

  inject: {
    '$markerPromise': {
      default: null
    }
  },

  mounted: function mounted() {
    var el = this.$refs.flyaway;
    el.parentNode.removeChild(el);
  },
  beforeCreate: function beforeCreate(options) {
    var _this = this;

    options.content = this.$refs.flyaway;

    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then(function (mo) {
        _this.$markerObject = mo;
        return mo;
      });
    }
  },


  methods: {
    _openInfoWindow: function _openInfoWindow() {
      if (this.opened) {
        if (this.$markerObject !== null) {
          this.$infoWindowObject.open(this.$map, this.$markerObject);
        } else {
          this.$infoWindowObject.open(this.$map);
        }
      } else {
        this.$infoWindowObject.close();
      }
    }
  },

  afterCreate: function afterCreate() {
    var _this2 = this;

    this._openInfoWindow();
    this.$watch('opened', function () {
      _this2._openInfoWindow();
    });
  }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(8);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(4);

var _mountableMixin = __webpack_require__(10);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(18);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(9);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['bounds_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

// Plain Google Maps methods exposed here for convenience
var linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce(function (all, methodName) {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});

// Other convenience methods exposed by Vue Google Maps
var customMethods = {
  resize: function resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter: function resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }

    var oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  },


  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback: function _resizeCallback() {
    this.resizePreserveCenter();
  }
};

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),

  provide: function provide() {
    var _this = this;

    this.$mapPromise = new Promise(function (resolve, reject) {
      _this.$mapPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$mapPromise': this.$mapPromise
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.center && typeof this.center.lat === 'function' ? this.center.lat() : this.center.lat;
    },
    finalLng: function finalLng() {
      return this.center && typeof this.center.lng === 'function' ? this.center.lng() : this.center.lng;
    },
    finalLatLng: function finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-map'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;
      _this2.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$mapObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$mapObject, events);

      // manually trigger center and zoom
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        _this2.$mapObject.addListener('center_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('center_changed', _this2.$mapObject.getCenter());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$mapObject.setCenter(_this2.finalLatLng);
        });
      });
      _this2.$mapObject.addListener('zoom_changed', function () {
        _this2.$emit('zoom_changed', _this2.$mapObject.getZoom());
      });
      _this2.$mapObject.addListener('bounds_changed', function () {
        _this2.$emit('bounds_changed', _this2.$mapObject.getBounds());
      });

      _this2.$mapPromiseDeferred.resolve(_this2.$mapObject);

      return _this2.$mapObject;
    }).catch(function (error) {
      throw error;
    });
  },

  methods: _extends({}, customMethods, linkedMethods)
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(8);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(4);

var _mountableMixin = __webpack_require__(10);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(18);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(9);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
    noBind: true
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true
  },
  options: {
    twoWay: false,
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['closeclick', 'status_changed'];

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),
  replace: false, // necessary for css styles
  methods: {
    resize: function resize() {
      if (this.$panoObject) {
        google.maps.event.trigger(this.$panoObject, 'resize');
      }
    }
  },

  provide: function provide() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this.$panoPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$panoPromise': promise,
      '$mapPromise': promise // so that we can use it with markers
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.position && typeof this.position.lat === 'function' ? this.position.lat() : this.position.lat;
    },
    finalLng: function finalLng() {
      return this.position && typeof this.position.lng === 'function' ? this.position.lng() : this.position.lng;
    },
    finalLatLng: function finalLatLng() {
      return {
        lat: this.finalLat,
        lng: this.finalLng
      };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-street-view-pano'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;

      _this2.$panoObject = new google.maps.StreetViewPanorama(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$panoObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$panoObject, events);

      // manually trigger position
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        // Panos take a while to load
        increment();

        _this2.$panoObject.addListener('position_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('position_changed', _this2.$panoObject.getPosition());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$panoObject.setPosition(_this2.finalLatLng);
        });
      });

      _this2.$panoPromiseDeferred.resolve(_this2.$panoObject);

      return _this2.$panoPromise;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "760dbc4c"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindProps = __webpack_require__(4);

var _simulateArrowDown = __webpack_require__(21);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

var _mapElementFactory = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$gmapApiPromiseLazy().then(function () {
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      /* eslint-disable no-unused-vars */
      var finalOptions = _extends({}, (0, _bindProps.getPropsValues)(_this, mappedProps), _this.options);

      _this.$autocomplete = new google.maps.places.Autocomplete(_this.$refs.input, finalOptions);
      (0, _bindProps.bindProps)(_this, _this.$autocomplete, mappedProps);

      _this.$watch('componentRestrictions', function (v) {
        if (v !== undefined) {
          _this.$autocomplete.setComponentRestrictions(v);
        }
      });

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      _this.$autocomplete.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.$autocomplete.getPlace());
      });
    });
  },

  props: _extends({}, (0, _mapElementFactory.mappedPropsToVueProps)(mappedProps), props)
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(23);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(24);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _7e895238 = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 8).then(__webpack_require__.bind(null, 108)));

const _e74cdae4 = () => interopDefault(__webpack_require__.e(/* import() | pages/datenschutz */ 9).then(__webpack_require__.bind(null, 109)));

const _49823746 = () => interopDefault(__webpack_require__.e(/* import() | pages/galerie */ 10).then(__webpack_require__.bind(null, 110)));

const _6a290ebc = () => interopDefault(__webpack_require__.e(/* import() | pages/impressum */ 11).then(__webpack_require__.bind(null, 111)));

const _8e7258ea = () => interopDefault(__webpack_require__.e(/* import() | pages/kontakt */ 13).then(__webpack_require__.bind(null, 112)));

const _b4b48daa = () => interopDefault(__webpack_require__.e(/* import() | pages/leistungen */ 14).then(__webpack_require__.bind(null, 113)));

const _c37da606 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 12).then(__webpack_require__.bind(null, 114)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _7e895238,
    name: "about"
  }, {
    path: "/datenschutz",
    component: _e74cdae4,
    name: "datenschutz"
  }, {
    path: "/galerie",
    component: _49823746,
    name: "galerie"
  }, {
    path: "/impressum",
    component: _6a290ebc,
    name: "impressum"
  }, {
    path: "/kontakt",
    component: _8e7258ea,
    name: "kontakt"
  }, {
    path: "/leistungen",
    component: _b4b48daa,
    name: "leistungen"
  }, {
    path: "/",
    component: _c37da606,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=3a4e1217&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"error404 bg-cover",style:({ backgroundImage: "url('/img/bg/bg-image-124.jpg')" })},[_vm._ssrNode("<div class=\"container\" data-v-3a4e1217><div class=\"row\" data-v-3a4e1217><div class=\"col-md-12 text-center\" data-v-3a4e1217><div class=\"error-image\" data-v-3a4e1217><img src=\"/img/others/page-404-image.png\" alt=\"Not Found Image\" class=\"img-fluid\" data-v-3a4e1217></div> "+((_vm.error.statusCode === 404)?("<h1 class=\"error-404-title font-weight--light text-white\" data-v-3a4e1217>Oops! Page not found!</h1>"):("<h1 class=\"error-404-title font-weight--light text-white\" data-v-3a4e1217>An error occurred</h1>"))+" <div class=\"error-buttons section-space--mt_30\" data-v-3a4e1217><button class=\"bk-btn theme-btn\" data-v-3a4e1217><span class=\"button-text\" data-v-3a4e1217>Go Back</span></button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=3a4e1217&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ['error']
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a4e1217",
  "0f6db819"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "c3852ef8"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(35);

// EXTERNAL MODULE: ./assets/scss/style.scss
var style = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=9695aed0&
var defaultvue_type_template_id_9695aed0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<noscript>"+(_vm._s(_vm.iFrameCode))+"</noscript> "),_c('nuxt')],2)}
var defaultvue_type_template_id_9695aed0_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=9695aed0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {
      iFrameCode: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB4L3K8" height="0" width="0" style="display: none; visibility: hidden" />'
    };
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_9695aed0_render,
  defaultvue_type_template_id_9695aed0_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "54fdfd92"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(25);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: external "vue-social-sharing"
var external_vue_social_sharing_ = __webpack_require__(26);
var external_vue_social_sharing_default = /*#__PURE__*/__webpack_require__.n(external_vue_social_sharing_);

// CONCATENATED MODULE: ./.nuxt/vue-social-sharing-plugin.js

 // Initialize VueSocialSharing and set custom sharing networks if specified

external_vue_default.a.use(external_vue_social_sharing_default.a, [{}][0]);
// EXTERNAL MODULE: external "vue-awesome-swiper/dist/vue-awesome-swiper"
var vue_awesome_swiper_ = __webpack_require__(27);
var vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(37);

// CONCATENATED MODULE: ./plugins/vue-awesome-swiper.js



external_vue_default.a.use(vue_awesome_swiper_default.a);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=template&id=c86c3bb4&scoped=true&
var Paginatevue_type_template_id_c86c3bb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.noLiSurround)?_c('ul',{class:_vm.containerClass},[_vm._ssrNode(((_vm.firstLastButton)?("<li"+(_vm._ssrClass(null,[_vm.pageClass, _vm.firstPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4><a"+(_vm._ssrAttr("tabindex",_vm.firstPageSelected() ? -1 : 0))+(_vm._ssrClass(null,_vm.pageLinkClass))+" data-v-c86c3bb4>"+(_vm._s(_vm.firstButtonText))+"</a></li>"):"<!---->")+" "+((!(_vm.firstPageSelected() && _vm.hidePrevNext))?("<li"+(_vm._ssrClass(null,[_vm.prevClass, _vm.firstPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4><a"+(_vm._ssrAttr("tabindex",_vm.firstPageSelected() ? -1 : 0))+(_vm._ssrClass(null,_vm.prevLinkClass))+" data-v-c86c3bb4>"+(_vm._s(_vm.prevText))+"</a></li>"):"<!---->")+" "),_vm._l((_vm.pages),function(page){return _vm._ssrNode("<li"+(_vm._ssrClass(null,[_vm.pageClass, page.selected ? _vm.activeClass : '', page.disabled ? _vm.disabledClass : '', page.breakView ? _vm.breakViewClass: '']))+" data-v-c86c3bb4>","</li>",[(page.breakView)?_vm._ssrNode("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.pageLinkClass, _vm.breakViewLinkClass]))+" data-v-c86c3bb4>","</a>",[_vm._t("breakViewContent",function(){return [_vm._v(_vm._s(_vm.breakViewText))]})],2):(page.disabled)?_vm._ssrNode(("<a tabindex=\"0\""+(_vm._ssrClass(null,_vm.pageLinkClass))+" data-v-c86c3bb4>"+_vm._ssrEscape(_vm._s(page.content))+"</a>")):_vm._ssrNode(("<a tabindex=\"0\""+(_vm._ssrClass(null,_vm.pageLinkClass))+" data-v-c86c3bb4>"+_vm._ssrEscape(_vm._s(page.content))+"</a>"))])}),_vm._ssrNode(" "+((!(_vm.lastPageSelected() && _vm.hidePrevNext))?("<li"+(_vm._ssrClass(null,[_vm.nextClass, _vm.lastPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4><a"+(_vm._ssrAttr("tabindex",_vm.lastPageSelected() ? -1 : 0))+(_vm._ssrClass(null,_vm.nextLinkClass))+" data-v-c86c3bb4>"+(_vm._s(_vm.nextText))+"</a></li>"):"<!---->")+" "+((_vm.firstLastButton)?("<li"+(_vm._ssrClass(null,[_vm.pageClass, _vm.lastPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4><a"+(_vm._ssrAttr("tabindex",_vm.lastPageSelected() ? -1 : 0))+(_vm._ssrClass(null,_vm.pageLinkClass))+" data-v-c86c3bb4>"+(_vm._s(_vm.lastButtonText))+"</a></li>"):"<!---->"))],2):_c('div',{class:_vm.containerClass},[_vm._ssrNode(((_vm.firstLastButton)?("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.pageLinkClass, _vm.firstPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4>"+(_vm._s(_vm.firstButtonText))+"</a>"):"<!---->")+" "+((!(_vm.firstPageSelected() && _vm.hidePrevNext))?("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.prevLinkClass, _vm.firstPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4>"+(_vm._s(_vm.prevText))+"</a>"):"<!---->")+" "),_vm._l((_vm.pages),function(page){return [(page.breakView)?_vm._ssrNode("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.pageLinkClass, _vm.breakViewLinkClass, page.disabled ? _vm.disabledClass : '']))+" data-v-c86c3bb4>","</a>",[_vm._t("breakViewContent",function(){return [_vm._v(_vm._s(_vm.breakViewText))]})],2):(page.disabled)?_vm._ssrNode(("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.pageLinkClass, page.selected ? _vm.activeClass : '', _vm.disabledClass]))+" data-v-c86c3bb4>"+_vm._ssrEscape(_vm._s(page.content))+"</a>")):_vm._ssrNode(("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.pageLinkClass, page.selected ? _vm.activeClass : '']))+" data-v-c86c3bb4>"+_vm._ssrEscape(_vm._s(page.content))+"</a>"))]}),_vm._ssrNode(" "+((!(_vm.lastPageSelected() && _vm.hidePrevNext))?("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.nextLinkClass, _vm.lastPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4>"+(_vm._s(_vm.nextText))+"</a>"):"<!---->")+" "+((_vm.firstLastButton)?("<a tabindex=\"0\""+(_vm._ssrClass(null,[_vm.pageLinkClass, _vm.lastPageSelected() ? _vm.disabledClass : '']))+" data-v-c86c3bb4>"+(_vm._s(_vm.lastButtonText))+"</a>"):"<!---->"))],2)}
var Paginatevue_type_template_id_c86c3bb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=template&id=c86c3bb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Paginatevue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Number
    },
    pageCount: {
      type: Number,
      required: true
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => {}
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    breakViewText: {
      type: String,
      default: '…'
    },
    containerClass: {
      type: String
    },
    pageClass: {
      type: String
    },
    pageLinkClass: {
      type: String
    },
    prevClass: {
      type: String
    },
    prevLinkClass: {
      type: String
    },
    nextClass: {
      type: String
    },
    nextLinkClass: {
      type: String
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    disabledClass: {
      type: String,
      default: 'disabled'
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: false
    },
    firstButtonText: {
      type: String,
      default: 'First'
    },
    lastButtonText: {
      type: String,
      default: 'Last'
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },

  beforeUpdate() {
    if (this.forcePage === undefined) return;

    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage;
    }
  },

  computed: {
    selected: {
      get: function () {
        return this.value || this.innerValue;
      },
      set: function (newValue) {
        this.innerValue = newValue;
      }
    },
    pages: function () {
      let items = {};

      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2);

        let setPageItem = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        };

        let setBreakView = index => {
          let breakView = {
            disabled: true,
            breakView: true
          };
          items[index] = breakView;
        }; // 1st - loop thru low end of margin pages


        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i);
        } // 2nd - loop thru selected range


        let selectedRangeLow = 0;

        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange;
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;

        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i);
        } // Check if there is breakView in the left of selected range


        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1);
        } // Check if there is breakView in the right of selected range


        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        } // 3rd - loop thru high end of margin pages


        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i);
        }
      }

      return items;
    }
  },

  data() {
    return {
      innerValue: 1
    };
  },

  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return;
      this.innerValue = selected;
      this.$emit('input', selected);
      this.clickHandler(selected);
    },

    prevPage() {
      if (this.selected <= 1) return;
      this.handlePageSelected(this.selected - 1);
    },

    nextPage() {
      if (this.selected >= this.pageCount) return;
      this.handlePageSelected(this.selected + 1);
    },

    firstPageSelected() {
      return this.selected === 1;
    },

    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0;
    },

    selectFirstPage() {
      if (this.selected <= 1) return;
      this.handlePageSelected(1);
    },

    selectLastPage() {
      if (this.selected >= this.pageCount) return;
      this.handlePageSelected(this.pageCount);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginatevue_type_script_lang_js_ = (Paginatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vuejs-paginate/src/components/Paginate.vue



function Paginate_injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Paginate_component = Object(componentNormalizer["a" /* default */])(
  components_Paginatevue_type_script_lang_js_,
  Paginatevue_type_template_id_c86c3bb4_scoped_true_render,
  Paginatevue_type_template_id_c86c3bb4_scoped_true_staticRenderFns,
  false,
  Paginate_injectStyles,
  "c86c3bb4",
  "71877c27"
  
)

/* harmony default export */ var Paginate = (Paginate_component.exports);
// CONCATENATED MODULE: ./plugins/vuejs-paginate.js


external_vue_default.a.component('paginate', Paginate);
// EXTERNAL MODULE: ./node_modules/vue2-google-maps/dist/main.js
var main = __webpack_require__(28);

// CONCATENATED MODULE: ./plugins/vue2-google-maps.js


external_vue_default.a.use(main, {
  load: {
    key: 'AIzaSyCGM-62ap9R-huo50hJDn05j3x-mU9151Y'
  }
});
// EXTERNAL MODULE: external "vue-masonry-css"
var external_vue_masonry_css_ = __webpack_require__(29);
var external_vue_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_vue_masonry_css_);

// CONCATENATED MODULE: ./plugins/vue-masonry-css.js


external_vue_default.a.use(external_vue_masonry_css_default.a);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(22);

// EXTERNAL MODULE: external "vue-silentbox"
var external_vue_silentbox_ = __webpack_require__(30);
var external_vue_silentbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_silentbox_);

// CONCATENATED MODULE: ./plugins/silentbox.js


external_vue_default.a.use(external_vue_silentbox_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./bootstrap-vue.js (mode: 'all')

 // Source: ./vue-social-sharing-plugin.js (mode: 'all')

 // Source: ../plugins/vue-awesome-swiper.js (mode: 'all')

 // Source: ../plugins/vuejs-paginate.js (mode: 'all')

 // Source: ../plugins/vue2-google-maps.js (mode: 'all')

 // Source: ../plugins/vue-masonry-css.js (mode: 'all')

 // Source: ../plugins/Mixitup.client.js (mode: 'client')

 // Source: ../plugins/silentbox.js (mode: 'all')

 // Source: ../plugins/vue-masonry (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "htmlAttrs": {
        "lang": "de"
      },
      "title": "Kfz Gutachten und Prüfbüro Karakale",
      "titleTemplate": "Kfz Gutachten Karakale || %s",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Kfz Gutachten und Prüfbüro Karakale bietet Hauptuntersuchungen (TÜV) und Gutachten jeder Art an. (z.B. Oldtimer-, Unfall-, e-Auto Gutachten)"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon_logo.png"
      }, {
        "rel": "apple-touch-icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon_logo.png"
      }],
      "script": [{
        "src": "\u002Fjs\u002Fconsent.js",
        "data-cookieconsent": "ignore"
      }, {
        "src": "https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=GTM-WB4L3K8",
        "async": true
      }, {
        "src": "\u002Fjs\u002Fanalytics.js"
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/vue-social-sharing-plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/vue-social-sharing-plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuejs-paginate.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuejs-paginate.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-masonry-css.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-masonry-css.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/silentbox.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/silentbox.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&
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
/* harmony default export */ var infoWindowvue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(46)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_infoWindowvue_type_script_lang_js_ = (infoWindowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_infoWindowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "224003f2"
  
)

/* harmony default export */ var infoWindow = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-map-container"},[_vm._ssrNode("<div class=\"vue-map\"></div> "),_vm._ssrNode("<div class=\"vue-map-hidden\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("visible")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&
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
/* harmony default export */ var mapvue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(47)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mapvue_type_script_lang_js_ = (mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30b2f23a"
  
)

/* harmony default export */ var map = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-street-view-pano-container"},[_vm._ssrNode("<div class=\"vue-street-view-pano\"></div> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var streetViewPanoramavue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(49)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_streetViewPanoramavue_type_script_lang_js_ = (streetViewPanoramavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_streetViewPanoramavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "277129b4"
  
)

/* harmony default export */ var streetViewPanorama = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',_vm._g(_vm._b({ref:"input"},'input',_vm.$attrs,false),_vm.$listeners),[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var autocompletevue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(52)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_autocompletevue_type_script_lang_js_ = (autocompletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_autocompletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ed3631e"
  
)

/* harmony default export */ var autocomplete = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("vue-fixed-header");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("vue-cookie-accept-decline");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map
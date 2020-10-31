(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ref": () => /* binding */ ref,
/* harmony export */   "refs": () => /* binding */ refs
/* harmony export */ });
/* harmony import */ var _Ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * @param target {Object}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */

var ref = function ref(target, vars, mapping) {
  return new _Ref__WEBPACK_IMPORTED_MODULE_0__.default().bind(target, mapping).vars(vars).proxy;
};
/**
 * @param targets {Array<Object>}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */

var refs = function refs() {
  var targets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var vars = arguments.length > 1 ? arguments[1] : undefined;
  var mapping = arguments.length > 2 ? arguments[2] : undefined;
  var ref = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default();
  ref.vars(vars);

  _toConsumableArray(targets).forEach(function (t) {
    ref.bind(t, mapping);
  });

  return ref.proxy;
};

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Ref
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Ref = /*#__PURE__*/function () {
  function Ref() {
    var _this = this;

    var vars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var targetMappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Ref);

    this._vars = vars;
    this._targetMappings = targetMappings;
    this._originTarget = {};
    this.proxy = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getProxyChain(this._originTarget, function (_ref) {
      var _ref$origin = _slicedToArray(_ref.origin, 3),
          name = _ref$origin[1],
          value = _ref$origin[2],
          parentNames = _ref.info.parentNames;

      var propertyChain = parentNames.concat(name);
      var originValue = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getProperty(_this._originTarget, propertyChain);
      _utils__WEBPACK_IMPORTED_MODULE_0__.default.setProperty(_this._originTarget, propertyChain, value);

      if (_this._vars.includes(propertyChain[0]) && originValue !== value) {
        // call related methods
        _this._targetMappings.forEach(function (mapping) {
          mapping.doing.call(mapping.target, _this._originTarget, mapping.target);
        });
      }
    });
  }

  _createClass(Ref, [{
    key: "vars",
    value: function vars(_vars) {
      var _this2 = this;

      var keys;

      if (_vars instanceof Array) {
        keys = _vars;
      } else if (_typeof(_vars) === 'object') {
        keys = Object.keys(_vars);
        keys.forEach(function (key) {
          if (_this2._originTarget[key] === undefined) {
            _this2._originTarget[key] = _vars[key];
          }
        });
      }

      if (!this._vars || this._vars.length === 0) {
        this._vars = keys;
      } else if (this._vars.length > 0) {
        keys.forEach(function (key) {
          if (!_this2._vars.includes(key)) {
            _this2._vars.push(key);
          }
        });
      }

      return this;
    }
  }, {
    key: "bind",
    value: function bind(target, doing) {
      if (typeof doing === 'function') {
        this._targetMappings.push({
          target: target,
          doing: doing
        });
      }

      return this;
    }
  }]);

  return Ref;
}();



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Utils
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "parseKeyChain",

    /**
     * Parse the property name to name array.
     *  eg:
     *      'a.b.c.d.e.t' => [a,b,c,d,e,t]
     * @param keyChain
     * @returns {*}
     */
    value: function parseKeyChain(keyChain) {
      if (typeof keyChain === 'string') {
        keyChain = keyChain.split('.');
      }

      return keyChain.filter(function (k) {
        return typeof k === 'string';
      }).map(function (k) {
        return k.replace(/ /g, '');
      });
    }
    /**
     * Get the object property, it's support to using link property name like: a.b.c.d.e.f
     * @param _self
     * @param propertyName
     * @returns {*}
     */

  }, {
    key: "getProperty",
    value: function getProperty(_self, propertyName) {
      if (_self == null) {
        return undefined;
      }

      propertyName = this.parseKeyChain(propertyName);

      if (propertyName.length === 1) {
        return _self[propertyName[0]];
      } else if (propertyName.length > 1) {
        return this.getProperty(_self[propertyName[0]], propertyName.splice(1));
      }

      return undefined;
    }
    /**
     * Create the proxy object for target object
     * The proxy object will return the proxy for its children using the same set method.
     * @param target
     * @param set {function} - the method to hook all set method for the proxy.
     * @param keepNull {boolean=} - if false, proxy object will just return the empty object instance
     * @param parentNames {Array=} - using to know the parent name for its children.
     * @returns {*}
     */

  }, {
    key: "getProxyChain",
    value: function getProxyChain(target, _set) {
      var _this = this;

      var keepNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var parentNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      if (target == null && !keepNull) {
        target = {};
      }

      if (this.isBasicDataType(target)) {
        return target;
      }

      return new Proxy(target, {
        get: function get(t, name) {
          if (typeof name === 'string' && name.startsWith('$')) {
            return target[name.replace('$', '')];
          }

          return _this.getProxyChain(t[name], _set, keepNull, [].concat(_toConsumableArray(parentNames), [name]));
        },
        set: function set(t, name, value, receiver) {
          _set && _set instanceof Function && _set.call(t, {
            origin: [t, name, value, receiver],
            info: {
              parentNames: parentNames
            }
          });
          return true;
        }
      });
    }
  }, {
    key: "isBasicDataType",
    value: function isBasicDataType(obj) {
      return ['string', 'number', 'boolean', 'function'].includes(_typeof(obj)) || obj instanceof Date || obj == null;
    }
    /**
     * Set the object property, it's support to using link property name like: a.b.c.d.e.f
     * @param _self
     * @param propertyName {string|Array}
     * @param value
     * @returns {*}
     */

  }, {
    key: "setProperty",
    value: function setProperty(_self, propertyName, value) {
      propertyName = this.parseKeyChain(propertyName);

      if (propertyName.length === 0) {
        return true;
      }

      if (_self == null) {
        return false;
      }

      if (propertyName.length === 1) {
        _self[propertyName[0]] = value;
        return true;
      } else if (propertyName.length > 1) {
        var thisKey = propertyName.splice(0, 1);
        var canSet = this.setProperty(_self[thisKey[0]], propertyName, value);

        if (!canSet) {
          _self[thisKey[0]] = {};
          return this.setProperty(_self[thisKey[0]], propertyName, value);
        }
      }

      return true;
    }
  }, {
    key: "test",
    value: function test(describe, cb) {
      try {
        cb({
          assert: function assert(condition) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (!condition) {
              for (var _len = arguments.length, data = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                data[_key - 2] = arguments[_key];
              }

              if (data.length > 0) {
                console.log('Assertion data:', data);
              }

              throw new Error("Assertion failed: ".concat(message));
            }
          },
          equals: function equals(except, actual) {
            var condition = except === actual;

            if (!condition) {
              for (var _len2 = arguments.length, data = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                data[_key2 - 2] = arguments[_key2];
              }

              if (data.length > 0) {
                console.log('Assertion data:', data);
              }

              throw new Error("Assertion failed - except: ".concat(except, ", actually: ").concat(actual));
            }
          }
        });
        console.log("Testing: ".concat(describe, " passed!"));
      } catch (e) {
        console.error(e.message);
        console.error("Testing: ".concat(describe, " failed..."));
      }
    }
  }]);

  return Utils;
}();



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
;
});
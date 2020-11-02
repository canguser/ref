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
/* harmony export */   "refs": () => /* binding */ refs,
/* harmony export */   "initial": () => /* binding */ initial,
/* harmony export */   "createRef": () => /* binding */ createRef,
/* harmony export */   "link": () => /* binding */ link,
/* harmony export */   "Ref": () => /* reexport safe */ _Ref__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Link": () => /* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "InitialValue": () => /* reexport safe */ _InitialValue__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _Ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _InitialValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * @param target {Object}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */

var ref = function ref(target, vars, mapping) {
  var varsList = _utils__WEBPACK_IMPORTED_MODULE_2__.default.getKeysOfConfiguration(vars);
  var r = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default(vars);
  var proxy = r.proxy;

  var _iterator = _createForOfIteratorHelper(varsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var variable = _step.value;
      proxy[variable] = link(function (params) {
        mapping(params, target);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return proxy;
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
  var varsList = _utils__WEBPACK_IMPORTED_MODULE_2__.default.getKeysOfConfiguration(vars);
  var r = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default(vars);
  var proxy = r.proxy;

  var _iterator2 = _createForOfIteratorHelper(varsList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var variable = _step2.value;
      proxy[variable] = link(function (params) {
        targets.forEach(function (target) {
          mapping(params, target);
        });
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return proxy;
};
var initial = function initial(value) {
  return new _InitialValue__WEBPACK_IMPORTED_MODULE_3__.default(value);
};
var createRef = function createRef() {
  var initialVars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var linkRef = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default(initialVars);
  return linkRef.proxy;
};
var link = function link() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(_Link__WEBPACK_IMPORTED_MODULE_1__.default, args);
};


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Ref
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
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

    var initialVars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Ref);

    if (!_utils__WEBPACK_IMPORTED_MODULE_0__.default.isConfigurableObject(initialVars)) {
      initialVars = {};
    }

    this.vars = initialVars || {};
    this.varsMapping = {};
    this.proxy = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getProxyChain(this.vars, function (_ref) {
      var _ref$origin = _slicedToArray(_ref.origin, 3),
          name = _ref$origin[1],
          value = _ref$origin[2],
          parentNames = _ref.info.parentNames;

      var propertyChain = parentNames.concat(name);
      var propertyName = propertyChain[0];
      var originValue = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getProperty(_this.vars, propertyChain);

      if (value instanceof _Link__WEBPACK_IMPORTED_MODULE_1__.default) {
        value.applyVar(propertyName);

        _this._addMappedLink(propertyName, value); // apply related vars


        if (value.vars && value.vars.length > 0) {
          value.vars.forEach(function (variable) {
            _this._addMappedLink(variable, value);
          });
        } // console.log(value.initialValue, originValue)


        if (value.initialValue !== undefined && originValue === undefined) {
          // console.log(propertyChain, value.initialValue);
          _utils__WEBPACK_IMPORTED_MODULE_0__.default.setProperty(_this.vars, propertyChain, value.initialValue);
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_0__.default.setProperty(_this.vars, propertyChain, value); // console.log('propertyChain', propertyChain);

        var links = _this._getMappedLinks(propertyName); // console.log(propertyName);


        if (links.length > 0) {
          links.forEach(function (link) {
            if (typeof link.action === 'function') {
              link.action(_this.proxy);
            }
          });
        }
      }
    });
  }

  _createClass(Ref, [{
    key: "infectAll",
    value: function infectAll(callback) {
      this.infect(Object.keys(this.vars), callback);
    }
  }, {
    key: "infect",
    value: function infect(vars, callback) {
      var _this2 = this;

      vars.forEach(function (variable) {
        _this2._addMappedLink(variable, new _Link__WEBPACK_IMPORTED_MODULE_1__.default(callback));
      });
    }
  }, {
    key: "_getMappedLinks",
    value: function _getMappedLinks(varName) {
      return this.varsMapping[varName] || [];
    }
  }, {
    key: "_addMappedLink",
    value: function _addMappedLink(varName, link) {
      var links = this._getMappedLinks(varName);

      if (!links.includes(link)) {
        links.push(link);
        this.varsMapping[varName] = links;

        if (!(varName in this.vars)) {
          this.vars[varName] = undefined;
        }
      }
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
    key: "isConfigurableObject",
    value: function isConfigurableObject(obj) {
      return _typeof(obj) === 'object' && !(obj instanceof Array) && !(obj instanceof Date) && Object.prototype.toString.call(obj) === '[object Object]';
    }
  }, {
    key: "getKeysOfConfiguration",
    value: function getKeysOfConfiguration(config) {
      if (this.isConfigurableObject(config)) {
        return Object.keys(config);
      } else if (config instanceof Array) {
        return config;
      }

      return [];
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



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Link
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Link = /*#__PURE__*/function () {
  function Link() {
    _classCallCheck(this, Link);

    this.extraVars = [];

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (_typeof(args[0]) === 'object') {
      var vars = args[0],
          action = args[1],
          initialValue = args[2];

      if (vars instanceof Array) {
        this.setVars(vars);
        this.setAction(action);
        this.setInitialValue(initialValue);
      }
    } else if (typeof args[0] === 'function') {
      var _action = args[0],
          _initialValue = args[1];
      this.setAction(_action);
      this.setInitialValue(_initialValue);
    }
  }

  _createClass(Link, [{
    key: "setInitialValue",
    value: function setInitialValue(value) {
      // console.log('initial',value);
      if (this.initialValue === undefined) {
        this.initialValue = value;
      }
    }
  }, {
    key: "setAction",
    value: function setAction() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return undefined;
      };

      if (!this.action && typeof action === 'function') {
        this.action = action;
      }
    }
  }, {
    key: "applyVar",
    value: function applyVar(variable) {
      this.mainlyVar = variable;
    }
  }, {
    key: "setVars",
    value: function setVars() {
      var vars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.extraVars = vars;
    }
  }, {
    key: "vars",
    get: function get() {
      return [this.mainlyVar].concat(_toConsumableArray(this.extraVars));
    }
  }]);

  return Link;
}();



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InitialValue
/* harmony export */ });
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var InitialValue = /*#__PURE__*/function (_Link) {
  _inherits(InitialValue, _Link);

  var _super = _createSuper(InitialValue);

  function InitialValue(value) {
    var _this;

    _classCallCheck(this, InitialValue);

    _this = _super.call(this);
    _this.initialValue = value;
    return _this;
  }

  return InitialValue;
}(_Link__WEBPACK_IMPORTED_MODULE_0__.default);



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
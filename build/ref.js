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





/**
 * @param target {Object}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */
const ref = function (target, vars, mapping) {
    let varsList = _utils__WEBPACK_IMPORTED_MODULE_2__.default.getKeysOfConfiguration(vars);
    const r = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default(vars);
    const {proxy} = r;
    for (const variable of varsList) {
        proxy[variable] = link(params => {
            mapping(params, target);
        });
    }
    return proxy;
};

/**
 * @param targets {Array<Object>}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */
const refs = function (targets = [], vars, mapping) {
    let varsList = _utils__WEBPACK_IMPORTED_MODULE_2__.default.getKeysOfConfiguration(vars);
    const r = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default(vars);
    const {proxy} = r;
    for (const variable of varsList) {
        proxy[variable] = link(params => {
            targets.forEach(target => {
                mapping(params, target);
            });
        });
    }
    return proxy;
};

const initial = function (value) {
    return new _InitialValue__WEBPACK_IMPORTED_MODULE_3__.default(value);
};

const createRef = function (initialVars = {}, options) {
    const linkRef = new _Ref__WEBPACK_IMPORTED_MODULE_0__.default(initialVars, options);
    return linkRef.proxy;
};

const link = function (...args) {
    return new _Link__WEBPACK_IMPORTED_MODULE_1__.default(...args);
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



const defaultOptions = {
    isAsync: true
};

class Ref {

    constructor(initialVars = {}, options) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__.default.isConfigurableObject(initialVars)) {
            initialVars = {};
        }
        this.vars = initialVars || {};
        this.varsMapping = {};
        this.options = {...defaultOptions, ...options};

        this.proxy = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getProxyChain(this.vars, (
            {
                origin: [, name, value],
                info: {parentNames}
            }
        ) => {
            const propertyChain = parentNames.concat(name);
            const propertyName = propertyChain[0];
            const originValue = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getProperty(this.vars, propertyChain);
            if (value instanceof _Link__WEBPACK_IMPORTED_MODULE_1__.default) {
                value.applyVar(propertyName);
                this._addMappedLink(propertyName, value);
                // apply related vars
                if (value.vars && value.vars.length > 0) {
                    value.vars.forEach(
                        variable => {
                            this._addMappedLink(variable, value);
                        }
                    )
                }
                // console.log(value.initialValue, originValue)
                if (value.initialValue !== undefined && originValue === undefined) {
                    // console.log(propertyChain, value.initialValue);
                    _utils__WEBPACK_IMPORTED_MODULE_0__.default.setProperty(this.vars, propertyChain, value.initialValue);
                }
            } else {
                _utils__WEBPACK_IMPORTED_MODULE_0__.default.setProperty(this.vars, propertyChain, value);
                // console.log('propertyChain', propertyChain);
                const links = this._getMappedLinks(propertyName);
                // console.log(propertyName);
                const actions = () => {
                    if (links.length > 0) {
                        links.forEach(link => {
                            if (typeof link.action === 'function') {
                                link.action(this.proxy);
                            }
                        })
                    }
                };
                if (this.isAsync) {
                    _utils__WEBPACK_IMPORTED_MODULE_0__.default.delay(this, 'waitAssign', 0).then(() => actions());
                } else {
                    actions();
                }
            }
        });
    }

    get isAsync() {
        return !!this.options.isAsync;
    }

    infectAll(callback) {
        this.infect(Object.keys(this.vars), callback);
    }

    infect(vars, callback) {
        vars.forEach(
            variable => {
                this._addMappedLink(variable, new _Link__WEBPACK_IMPORTED_MODULE_1__.default(
                    callback
                ))
            }
        )
    }

    _getMappedLinks(varName) {
        return this.varsMapping[varName] || [];
    }

    _addMappedLink(varName, link) {
        const links = this._getMappedLinks(varName);
        if (!links.includes(link)) {
            links.push(link);
            this.varsMapping[varName] = links;
            if (!(varName in this.vars)) {
                this.vars[varName] = undefined;
            }
        }
    }

    static setDefaultOption(options) {
        Object.assign(defaultOptions, options);
    }

}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Utils
/* harmony export */ });
class Utils {
    /**
     * Parse the property name to name array.
     *  eg:
     *      'a.b.c.d.e.t' => [a,b,c,d,e,t]
     * @param keyChain
     * @returns {*}
     */
    static parseKeyChain(keyChain) {
        if (typeof keyChain === 'string') {
            keyChain = keyChain.split('.');
        }
        return keyChain.filter(k => typeof k === 'string').map(k => k.replace(/ /g, ''));
    }

    /**
     * Get the object property, it's support to using link property name like: a.b.c.d.e.f
     * @param _self
     * @param propertyName
     * @returns {*}
     */
    static getProperty(_self, propertyName) {
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
    static getProxyChain(target, set, keepNull = true, parentNames = []) {
        if (target == null && !keepNull) {
            target = {};
        }
        if (this.isBasicDataType(target)) {
            return target;
        }
        return new Proxy(target, {
            get: (t, name) => {
                if (typeof name === 'string' && name.startsWith('$')) {
                    return target[name.replace('$', '')];
                }
                return this.getProxyChain(t[name], set, keepNull, [...parentNames, name]);
            },
            set: (t, name, value, receiver) => {
                set && (set instanceof Function) && set.call(t, {
                    origin: [t, name, value, receiver],
                    info: {parentNames}
                });
                return true;
            }
        });
    }

    static isBasicDataType(obj) {
        return ['string', 'number', 'boolean', 'function'].includes(typeof obj) || obj instanceof Date || obj == null;
    }

    /**
     * Set the object property, it's support to using link property name like: a.b.c.d.e.f
     * @param _self
     * @param propertyName {string|Array}
     * @param value
     * @returns {*}
     */
    static setProperty(_self, propertyName, value) {
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
            let thisKey = propertyName.splice(0, 1);
            let canSet = this.setProperty(_self[thisKey[0]], propertyName, value);
            if (!canSet) {
                _self[thisKey[0]] = {};
                return this.setProperty(_self[thisKey[0]], propertyName, value);
            }
        }
        return true;
    }

    static isConfigurableObject(obj) {
        return typeof obj === 'object' && !(obj instanceof Array) && !(obj instanceof Date) && Object.prototype.toString.call(obj) === '[object Object]'
    }

    static getKeysOfConfiguration(config) {
        if (this.isConfigurableObject(config)){
            return Object.keys(config);
        }else if (config instanceof Array){
            return config;
        }
        return [];
    }

    static test(describe, cb) {
        try {
            cb({
                assert(condition, message = '', ...data) {
                    if (!condition) {
                        if (data.length > 0) {
                            console.log('Assertion data:', data);
                        }
                        throw new Error(`Assertion failed: ${message}`)
                    }
                },
                equals(except, actual, ...data) {
                    const condition = except === actual;
                    if (!condition) {
                        if (data.length > 0) {
                            console.log('Assertion data:', data);
                        }
                        throw new Error(`Assertion failed - except: ${except}, actually: ${actual}`)
                    }
                }
            });
            console.log(`Testing: ${describe} passed!`);
        } catch (e) {
            console.error(e.message);
            console.error(`Testing: ${describe} failed...`)
        }
    }

    static waitTodo(ms, params) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(params);
            }, ms);
        });
    }

    static delay(context, apiName, ms) {
        const eqName = `_delay_${apiName}`;
        clearTimeout(context[eqName]);
        return new Promise(resolve => {
            context[eqName] = setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Link
/* harmony export */ });
class Link {

    constructor(...args) {
        this.extraVars = [];
        if (typeof args[0] === 'object') {
            const [vars, action, initialValue] = args;
            if (vars instanceof Array) {
                this.setVars(vars);
                this.setAction(action);
                this.setInitialValue(initialValue);
            }
        } else if (typeof args[0] === 'function') {
            const [action, initialValue] = args;
            this.setAction(action);
            this.setInitialValue(initialValue);
        }
    }

    setInitialValue(value) {
        // console.log('initial',value);
        if (this.initialValue === undefined) {
            this.initialValue = value;
        }
    }

    get vars() {
        return [this.mainlyVar, ...this.extraVars];
    }

    setAction(action = () => undefined) {
        if (!this.action && typeof action === 'function') {
            this.action = action;
        }
    }

    applyVar(variable) {
        this.mainlyVar = variable;
    }

    setVars(vars = []) {
        this.extraVars = vars;
    }
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InitialValue
/* harmony export */ });
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class InitialValue extends _Link__WEBPACK_IMPORTED_MODULE_0__.default {

    constructor(value) {
        super();
        this.initialValue = value;
    }

}

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
//# sourceMappingURL=ref.js.map
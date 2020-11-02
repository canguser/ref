export default class Utils {
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
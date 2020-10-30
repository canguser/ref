export default class Ref {

    constructor(vars = [], targetMappings = []) {
        this._vars = vars;
        this._targetMappings = targetMappings;
        this.proxy = new Proxy({}, {
            set: (target, p, value, receiver) => {
                const originValue = target[p];
                const result = Reflect.set(target, p, value, receiver);
                if (this._vars.includes(p) && originValue !== value) {
                    // call related methods
                    this._targetMappings.forEach(
                        mapping => {
                            mapping.doing.call(mapping.target, target, mapping.target);
                        }
                    );
                }
                return result;
            }
        })
    }

    vars(vars = []) {
        if (!this._vars || this._vars.length === 0) {
            this._vars = vars;
        }
        return this;
    }

    bind(target, doing) {
        if (typeof doing === 'function') {
            this._targetMappings.push({
                target, doing
            })
        }
        return this;
    }

}
import Utils from "../../utils";

export default class Ref {

    constructor(vars = [], targetMappings = []) {
        this._vars = vars;
        this._targetMappings = targetMappings;
        this._originTarget = {};
        this.proxy = Utils.getProxyChain(this._originTarget, (
            {
                origin: [, name, value],
                info: {parentNames}
            }
        ) => {
            const propertyChain = parentNames.concat(name);
            const originValue = Utils.getProperty(this._originTarget, propertyChain);
            Utils.setProperty(this._originTarget, propertyChain, value);
            if (this._vars.includes(propertyChain[0]) && originValue !== value) {
                // call related methods
                this._targetMappings.forEach(
                    mapping => {
                        mapping.doing.call(mapping.target, this._originTarget, mapping.target);
                    }
                );
            }
        });
    }

    vars(vars) {

        let keys;
        if (vars instanceof Array) {
            keys = vars;
        } else if (typeof vars === 'object') {
            keys = Object.keys(vars);
            keys.forEach(
                key => {
                    if (this._originTarget[key] === undefined) {
                        this._originTarget[key] = vars[key];
                    }
                }
            )
        }
        if (!this._vars || this._vars.length === 0) {
            this._vars = keys;
        } else if (this._vars.length > 0) {
            keys.forEach(
                key => {
                    if (!this._vars.includes(key)) {
                        this._vars.push(key);
                    }
                }
            )
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
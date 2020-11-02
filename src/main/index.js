import Ref from "./Ref";
import Link from "./Link";
import Utils from "../utils";
import InitialValue from "./InitialValue";

/**
 * @param target {Object}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */
export const ref = function (target, vars, mapping) {
    let varsList = Utils.getKeysOfConfiguration(vars);
    const r = new Ref(vars);
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
export const refs = function (targets = [], vars, mapping) {
    let varsList = Utils.getKeysOfConfiguration(vars);
    const r = new Ref(vars);
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

export const initial = function (value) {
    return new InitialValue(value);
};

export const createRef = function (initialVars = {}) {
    const linkRef = new Ref(initialVars);
    return linkRef.proxy;
};

export const link = function (...args) {
    return new Link(...args);
};

export {Ref, Link, InitialValue};
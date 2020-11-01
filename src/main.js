import Ref from "./Ref";
import LinkRef from "./LinkRef";
import Link from "./Link";

/**
 * @param target {Object}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */
export const ref = function (target, vars, mapping) {
    return new Ref().bind(target, mapping).vars(vars).proxy;
};

/**
 * @param targets {Array<Object>}
 * @param vars {Object|Array}
 * @param mapping {function}
 * @return {*}
 */
export const refs = function (targets = [], vars, mapping) {
    const ref = new Ref();
    ref.vars(vars);
    [...targets].forEach(t => {
        ref.bind(t, mapping);
    });
    return ref.proxy;
};

export const createRef = function (initialVars = {}) {
    const linkRef = new LinkRef(initialVars);
    return linkRef.proxy;
};

export const link = function (...args) {
    return new Link(...args);
};
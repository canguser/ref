import Ref from "./Ref";

export const ref = function (target, vars, mapping) {
    return new Ref().bind(target, mapping).vars(vars).proxy;
};

export const refs = function (targets = [], vars, mapping) {
    const ref = new Ref();
    ref.vars(vars);
    [...targets].forEach(t => {
        ref.bind(t, mapping);
    });
    return ref.proxy;
};
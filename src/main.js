import Ref from "./Ref";

export const ref = function (target, vars, mapping) {
    return new Ref().bind(target, mapping).vars(vars).proxy;
};
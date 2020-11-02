export default class Link {

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
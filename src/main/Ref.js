import Utils from "../utils";
import Link from "./Link";

export default class Ref {

    constructor(initialVars = {}) {
        if (!Utils.isConfigurableObject(initialVars)) {
            initialVars = {};
        }
        this.vars = initialVars || {};
        this.varsMapping = {};

        this.proxy = Utils.getProxyChain(this.vars, (
            {
                origin: [, name, value],
                info: {parentNames}
            }
        ) => {
            const propertyChain = parentNames.concat(name);
            const propertyName = propertyChain[0];
            const originValue = Utils.getProperty(this.vars, propertyChain);
            if (value instanceof Link) {
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
                    Utils.setProperty(this.vars, propertyChain, value.initialValue);
                }
            } else {
                Utils.setProperty(this.vars, propertyChain, value);
                // console.log('propertyChain', propertyChain);
                const links = this._getMappedLinks(propertyName);
                // console.log(propertyName);
                if (links.length > 0) {
                    links.forEach(link => {
                        if (typeof link.action === 'function') {
                            link.action(this.proxy);
                        }
                    })
                }
            }
        });
    }

    infectAll(callback) {
        this.infect(Object.keys(this.vars), callback);
    }

    infect(vars, callback) {
        vars.forEach(
            variable => {
                this._addMappedLink(variable, new Link(
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

}
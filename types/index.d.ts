export class Link {
    /**
     * @param vars {Array<string> | Object=} The related vars for this link
     * @param action {function=} the infect action defined
     * @param initialValue {*=} the initial value of declared var
     */
    public constructor(vars?: Array<string> | Object, action?: Function, initialValue?: any)

    /**
     * @param action {function=} the infect action defined
     * @param initialValue {*=} the initial value of declared var
     */
    public constructor(action?: Function, initialValue?: any)

    public setInitialValue(): void

    public get vars(): Array<string>

    public setAction(action: Function): void

    public applyVar(variable: string): void

    public setVars(variable: Array<string>): void
}

export class InitialValue extends Link {
    public constructor(value: any);
}


export class Ref {

    readonly vars: Object;
    readonly varsMapping: Object;
    readonly options: Object;
    readonly proxy: Object;

    public constructor(initialVars?: Object | Array<string>, options?: {
        isAsync?: boolean
    })

    private _getMappedLinks(name: string): Link

    private _addMappedLink(name: string, link: Link): void

    get isAsync(): boolean

    public infectAll(callback: Function): void

    public infect(vars: Array<string>, callback: Function): void

    public static setDefaultOption(options: Object): void

    public declareVar(name: string, value?: any): void

}


export function ref(target: Object, vars: Array<string> | Object, mapping: Function): Object;

export function refs(target: Array<Object>, vars: Array<string> | Object, mapping: Function): Object;

export function initial(value: any): InitialValue;

/**
 * @param vars {Array<string> | Object=} The related vars for this link
 * @param action {function=} the infect action defined
 * @param initialValue {*=} the initial value of declared var
 */
export function link(vars?: Array<string> | Object, action?: Function, initialValue?: any): Link;

/**
 * @param action {function=} the infect action defined
 * @param initialValue {*=} the initial value of declared var
 */
export function link(action?: Function, initialValue?: any): Link;

export function createRef(initialVars?: Object | Array<string>, options?: {
    isAsync?: boolean
}): Object;
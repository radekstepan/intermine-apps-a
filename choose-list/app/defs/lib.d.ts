// eco templates.
interface EcoTemplate {
    (context?: any): string;
}

// Hogan templates.
declare module Hogan {
    export class Template {
        constructor (precompiled: string);
        render(context: any): string;
    }
}

// Moment.
interface Moment {
    fromNow(): string;
}
interface MomentStatic {
    (date: Date): Moment;
}
declare var moment: MomentStatic;

// md5.
declare function md5(input: string): string;

// imjs.
interface Promise {}
declare module intermine {
    export class List {
        authorized: bool;
        dateCreated: string;
        description: string;
        folders: any[];
        name: string;
        size: number;
        status: string;
        tags: string[];
        timestamp: number;
        title: string;
        type: string;
    }

    interface InterMineServiceListsCallback {
        (lists: List[]): void;
    }

    export class Service {
        constructor (opts: {
            root: string
            token: string
            errorHandler: Function
        });
        fetchLists(cb: (lists: intermine.List[]) => void ): Promise;
    }
}

// async.
interface AsyncResultsCallback {
    (err: string, results?: any): void;
}
interface Async {
    each(arr: any[], iterator: Function, cb: AsyncResultsCallback): void;
    waterfall(tasks: any[], cb: AsyncResultsCallback): void;
}
declare var async: Async;

// Backbone 1.0.0 & Backbone-Relational 0.8.5
declare module Backbone {
    export class Model {
        constructor (attr?, opts?);
        get(name: string): any;
        set(name: string, val: any): void;
        set(obj: any, opts?: any): void;
        escape(attr: string): string;
        has(attr: string): bool;
        unset(attr: string, opts?: any): void;
        clear(opts?: any): void;
        id: string;
        idAttribute: string;
        cid: string;
        attributes: any;
        changed: any;
        defaults(opts?: any): any;
        toJSON(): any;
        sync(method: string, model: Model, opts?: any): void;
        fetch(opts?: any): void;
        save(attrs?: any, opts?: any): void;
        destroy(opts?: any): void;
        validate(attrs: any, opts: any);
        validationError: any;
        isValid(): bool;
        url(): string;
        urlRoot: any;
        parse(response:any, opts: any): any;
        clone(): Model;
        isNew(): bool;
        hasChanged(attr?: string): bool;
        changedAttributes(attrs?: any): any;
        previous(attr: string): any;
        previousAttributes(): any;

        // Events.
        bind(eventName: string, callback: (...args: any[]) => void , context?: any): any;
    }
    export class Collection {
        constructor (models?, opts?);
        model: any;
        models: any[];
        toJSON(): any;
        sync(method: string, collection: any, opts?: any): void;
        add(models: any, opts?: any): void;
        remove(models: any, opts?: any): void;
        reset(models?: any, opts?: any): void;
        set(models: any, opts?: any): void;
        get(id: string): Model;
        at(index: number): Model;
        push(model: any, opts?: any): void;
        pop(opts?: any): Model;
        unshift(model: Model, opts?: any): Model;
        shift(opts?: any): Model;
        slice(begin: number, end: number): Model[];
        length: number;
        comparator(element: any): any;
        comparator(compare: any, to?: any): any;
        sort(opts?: any): any;
        pluck(attr): any[];
        where(attrs): Model[];
        findWhere(attrs): Model;
        url: any;
        parse(response:any, opts: any): any;
        clone(): Collection;
        fetch(opts?: any): void;
        create(attrs: any, opts?: any): Collection;

        // from Underscore.
        find(iterator: (element: Model, index: number) => bool, context?: any): Model;
        forEach(iterator: (element: Model, index: number, list?: any) => void , context?: any);
        each(iterator: (element: Model, index: number, list?: any) => void , context?: any);
        filter(iterator: (element: Model, index: number) => bool, context?: any): Model[];

        // Events.
        bind(eventName: string, callback: (...args: any[]) => void , context?: any): any;
        trigger(eventName: string, ...args: any[]): any;
    }
    export class View {
        constructor (opts?);
        el: HTMLElement;
        $el: any;
        setElement(element: HTMLElement, delegate?: bool): void;
        attributes: any;
        $(selector: string): any;
        render(): View;
        remove(): void;
        delegateEvents(events?: any): void;
        undelegateEvent(): void;
        tagName: string;
        id: string;
        cid: string;
    }
    export class Events {
        on(eventName: string, callback: (...args: any[]) => void , context?: any): any;
        off(eventName?: string, callback?: (...args: any[]) => void , context?: any): any;
        trigger(eventName: string, ...args: any[]): any;
        bind(eventName: string, callback: (...args: any[]) => void , context?: any): any;
        unbind(eventName?: string, callback?: (...args: any[]) => void , context?: any): any;

        once(events: string, callback: (...args: any[]) => void , context?: any): any;
        listenTo(object: any, events: string, callback: (...args: any[]) => void ): any;
        listenToOnce(object: any, events: string, callback: (...args: any[]) => void ): any;
        stopListening(object?: any, events?: string, callback?: (...args: any[]) => void ): any;
    }

    // The relational bits.
    export class RelationalModel extends Model {
        relations: any;
    }
    export class Relation extends Model {

    }
    export class HasMany extends Relation {

    }
}
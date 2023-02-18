export const sealed = (name: string) => {
    console.log('Function sealed');
    return function (constructor: Function): void {
        console.log(`Sealing the constructor ${name}`);
        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
};

export const logger = <TFunction extends Function>(constructor: TFunction): TFunction => {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(constructor.name);
        this.age = 30;
    };
    newConstructor.prototype = Object.create(constructor.prototype);
    newConstructor.prototype.printLibrarian = function (): void {
        console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as TFunction;
};

export const writable = (isWritable: boolean) => {
    return function (target: object | Function, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor{
        descriptor.writable = isWritable;
        return descriptor;
    };
};

export const timeout = (ms: number) => {
    return function (target: object | Function, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor{
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: Parameters<typeof originalMethod>) {
            if (window.confirm('Are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args);
                }, ms);
            }
        };
        return descriptor;
    };
};

export const logParameter = (target: object | Function, methodName: string, index: number) => {
    const key = `${methodName}_decor_params_indexes`;
    const proto = typeof target === 'function' ? target.prototype : target;

    (proto[key] ??= []).push(index);
};

export const logMethod = (target: object | Function, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]): ReturnType<typeof originalMethod> {
        const key = `${methodName}_decor_params_indexes`;
        const proto = typeof target === 'function' ? target.prototype : target;
        const indexes = proto[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            });
        }

        return originalMethod.apply(this, args);
    };

    return descriptor;
};
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
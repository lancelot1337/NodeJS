export function Upper(target: any, propertyKey: string) {
    // let x: string = "";
    let privateKey = Symbol();
    const setter = function (this:any, data: string) {
        console.log("called setter");
        // x = data.toUpperCase();
        this[privateKey] = data.toUpperCase(); // {"name": "anil", age : 21, "idvsdf": "ANIL" }
    }

    const getter = function (this:any) {
        console.log("getter")
        // return x;
        return this[privateKey];
    }

    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    })
}
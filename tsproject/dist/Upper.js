"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upper = void 0;
function Upper(target, propertyKey) {
    // let x: string = "";
    let privateKey = Symbol();
    const setter = function (data) {
        console.log("called setter");
        // x = data.toUpperCase();
        this[privateKey] = data.toUpperCase(); // {"name": "anil", age : 21, "idvsdf": "ANIL" }
    };
    const getter = function () {
        console.log("getter");
        // return x;
        return this[privateKey];
    };
    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    });
}
exports.Upper = Upper;

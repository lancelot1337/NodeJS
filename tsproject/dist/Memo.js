"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Memo(target, methodName, descriptor) {
    let fn = descriptor.value; // actual function definition on which decorator is placed
    let cache = {};
    // proxy pattern
    descriptor.value = function (...args) {
        let key = args.join("_"); // add(4,5) ==> 4_5
        if (!cache[key]) {
            cache[key] = fn.apply(target, args);
        }
        else {
            console.log("Cache Hit!!!");
        }
        return cache[key];
    };
}
exports.default = Memo;

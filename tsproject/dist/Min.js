"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Min = void 0;
// decorator Factory
function Min(limit) {
    // called once when decorator is applied
    return function (target, propertyKey) {
        let x;
        const setter = function (newVal) {
            if (newVal < limit) {
                Object.defineProperty(target, "error", {
                    value: propertyKey + " should be minumum of " + limit + " you entered " + newVal
                });
            }
            else {
                x = newVal;
            }
        };
        const getter = function () {
            return x;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
exports.Min = Min;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nationality = void 0;
// decorator Factory
function Nationality(config) {
    return function (constructor) {
        Object.defineProperty(constructor.prototype, "country", { "value": config.name });
    };
}
exports.Nationality = Nationality;

"use strict";
// using Generics
// forEach([5,21,1], console.log) ==> T[] will be number[]
// forEach(["A", "B"], alert) ==> T[] will be string[]
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = exports.filter = exports.forEach = void 0;
function forEach(elems, action) {
    for (let i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
exports.forEach = forEach;
// predicate is a function passed as argument to filter
function filter(elems, predicate) {
    let result = [];
    forEach(elems, (elem) => {
        if (predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}
exports.filter = filter;
//filter([5,2,11,4], (elem) => elem % 2 === 0);
// filter(products, elem => elem.category === 'mobile');
// let memFib = memoize(fibanocci); ==> takes number returns a Number
// let memGetProduct = memoize(getProduct); ==> takes a number returns a JSON Product
function memoize(fn) {
    var cache = {};
    // @ts-ignore
    return function (args) {
        // @ts-ignore
        if (!cache[args]) {
            // @ts-ignore
            cache[args] = fn(args);
        }
        // @ts-ignore
        return cache[args];
    };
}
exports.memoize = memoize;

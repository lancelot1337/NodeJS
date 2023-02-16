"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const lib_1 = require("./lib");
const lodash_1 = require("lodash");
jquery.on("click", "", () => { });
console.log((0, lodash_1.random)(1, 100));
let p1 = new Person_1.default();
console.log(p1);
let p2 = new Person_1.default("Smith");
console.log(p2);
let p3 = new Person_1.default("Tim", 21);
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var data = [6, 3, 19, 65, 24];
let evens = (0, lib_1.filter)(data, e => e % 2 === 0);
let mobiles = (0, lib_1.filter)(products, e => e.category === 'mobile');
(0, lib_1.forEach)(evens, console.log);
(0, lib_1.forEach)(mobiles, console.log);
console.log("**********");
function fibanocci(num) {
    return (num == 0 || num == 1) ? num : fibanocci(num - 1) + fibanocci(num - 2);
}
let memFib = (0, lib_1.memoize)(fibanocci);
console.time("first");
console.log(memFib(34));
console.timeEnd("first");
console.time("second");
console.log(memFib(34));
console.timeEnd("second");

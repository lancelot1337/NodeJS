"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const lodash_1 = require("lodash");
// declare var jquery:any;
// jquery.on("click", "", () => {});
console.log((0, lodash_1.random)(1, 100));
// let p2:Person = new Person();
let p1 = new Person_1.default("Sam", 41);
let p2 = new Person_1.default("Peter", 99);
// console.log("P1", p1.getName());
// console.log("P2", p2.getName());
console.time("f");
console.log(p1.fibanocci(34));
console.log(p1.add(2, 3));
console.timeEnd("f");
console.time("s");
console.log(p1.fibanocci(34));
console.log(p1.add(2, 3));
console.timeEnd("s");
//@ts-ignore
// if(p1["error"]) {
//  //@ts-ignore 
//   console.log(p1["error"]);
// } else {
// //@ts-ignore
// console.log(p1.getName(), p1.getAge(), p1["country"]); 
// }
// let p2:Person = new Person("Smith");
// console.log(p2);
// let p3:Person = new Person("Tim", 21);
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }
// var products:Product[] = [
//     { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
//     { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
//     { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
//     { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
//     { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
// ];
// var data:number[] = [6,3,19,65,24];
// let evens:number[] = filter(data, e => e % 2 === 0);
// let mobiles:Product[] = filter(products, e => e.category === 'mobile');
// forEach(evens, console.log);
// forEach(mobiles, console.log);
// console.log("**********");
// function fibanocci(num: number):number {
//   return (num == 0 || num == 1) ? num : fibanocci(num - 1) + fibanocci(num -2);
// }
// let memFib = memoize(fibanocci);
// console.time("first");
//  console.log(memFib(34));
// console.timeEnd("first");
// console.time("second");
//  console.log(memFib(34));
// console.timeEnd("second");

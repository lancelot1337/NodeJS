import Person  from "./Person";
import {forEach, filter, memoize} from './lib'

import {random} from 'lodash';

// declare var jquery:any;
// jquery.on("click", "", () => {});

console.log(random(1, 100));

let p1:Person = new Person();
//@ts-ignore
console.log(p1.getName(), p1.getAge(), p1["country"]); 

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
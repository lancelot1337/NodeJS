import Person  from "./Person";
import {forEach, filter} from './lib'

let p1:Person = new Person();
console.log(p1); 
let p2:Person = new Person("Smith");
console.log(p2);

let p3:Person = new Person("Tim", 21);

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

var products:Product[] = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];

var data:number[] = [6,3,19,65,24];

let evens:number[] = filter(data, e => e % 2 === 0);
let mobiles:Product[] = filter(products, e => e.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);


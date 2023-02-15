"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name = "NoName", age = 18) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.default = Person;

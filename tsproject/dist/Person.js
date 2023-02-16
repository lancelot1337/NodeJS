"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Min_1 = require("./Min");
const Nationality_1 = require("./Nationality");
let Person = class Person {
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
    set fullName(name) {
    }
    get details() {
        return "name " + this.name + ", age = " + this.age;
    }
};
__decorate([
    (0, Min_1.Min)(18)
], Person.prototype, "age", void 0);
Person = __decorate([
    (0, Nationality_1.Nationality)({
        name: "Germany"
    })
], Person);
exports.default = Person;

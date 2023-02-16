"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Memo_1 = __importDefault(require("./Memo"));
const Min_1 = require("./Min");
const Nationality_1 = require("./Nationality");
const Upper_1 = require("./Upper");
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
    get fullName() {
        return this.name;
    }
    // let p:Person = ///
    // p.fullName = "Raj Shekar";
    // console.log(p.details, p.getName());
    // async code to get JSON from server
    getData(id) {
        setTimeout(() => {
            return { "id": id, "name": "George", age: 31 };
        }, 2000);
    }
    add(x, y) {
        return x + y;
    }
    fibanocci(no) {
        return (no == 0 || no == 1) ? no : this.fibanocci(no - 1) + this.fibanocci(no - 2);
    }
};
__decorate([
    Upper_1.Upper
], Person.prototype, "name", void 0);
__decorate([
    (0, Min_1.Min)(18)
], Person.prototype, "age", void 0);
__decorate([
    Memo_1.default
], Person.prototype, "getData", null);
__decorate([
    Memo_1.default
], Person.prototype, "add", null);
__decorate([
    Memo_1.default
], Person.prototype, "fibanocci", null);
Person = __decorate([
    (0, Nationality_1.Nationality)({
        name: "Germany"
    })
], Person);
exports.default = Person;

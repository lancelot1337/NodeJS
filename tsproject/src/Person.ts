export default class Person {
    constructor(private name:string = "NoName", private age:number = 18){}

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}
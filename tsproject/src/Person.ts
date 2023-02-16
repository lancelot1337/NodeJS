import { Min } from "./Min";
import { Nationality } from "./Nationality";

@Nationality({
    name:"Germany"
})
export default class Person {
    private name:string;

    @Min(18)
    private age:number;

    constructor(name:string = "NoName", age:number = 18){
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    set fullName(name:string) {

    }
    get details() {
        return "name " + this.name + ", age = " + this.age;
    }

    // let p:Person = ///
    // p.fullName = "Raj Shekar";
    // console.log(p.details, p.getName());
}
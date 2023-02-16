import { memoize } from "./lib";
import Memo from "./Memo";
import { Min } from "./Min";
import { Nationality } from "./Nationality";
import { Upper } from "./Upper";

@Nationality({
    name:"Germany"
})
export default class Person {
    @Upper
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

    get fullName() {
        return this.name;
    }
    // let p:Person = ///
    // p.fullName = "Raj Shekar";
    // console.log(p.details, p.getName());

    // async code to get JSON from server
    @Memo
    getData(id:number) {
        setTimeout(() => {
            return {"id": id, "name": "George", age: 31}
        }, 2000);
    }

    @Memo 
    add(x:number, y: number): number {
        return x + y;
    }
    
    @Memo 
    fibanocci(no:number): number {
        return (no == 0 || no == 1) ? no : this.fibanocci(no - 1) + this.fibanocci(no -2);
    }
    
}
export default function Memo(target:any, methodName:string, descriptor:PropertyDescriptor) {
    let fn: Function = descriptor.value; // actual function definition on which decorator is placed

    let cache: any = {};

    // proxy pattern
    descriptor.value = function(...args:number[]) {
        let key = args.join("_"); // add(4,5) ==> 4_5
        if(!cache[key]) {
            cache[key] = fn.apply(target, args); 
        } else {
            console.log("Cache Hit!!!");
        }
        return cache[key];
    }
}
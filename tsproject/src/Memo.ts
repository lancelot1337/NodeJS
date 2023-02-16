export default function Memo<T extends {}>(target:T, methodName:string, descriptor:PropertyDescriptor) {
    let fn: Function = descriptor.value; // actual function definition on which decorator is placed

    let cache: any = {};

    // proxy pattern
    descriptor.value = function(...args:any[]) {
        let key = args.join("_"); // add(4,5) ==> 4_5
        if(!cache[key]) {
            cache[key] = fn.apply(target, args); 
        } else {
            console.log("Cache Hit!!!");
        }
        return cache[key];
    }
}
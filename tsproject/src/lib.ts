// using Generics
// forEach([5,21,1], console.log) ==> T[] will be number[]
// forEach(["A", "B"], alert) ==> T[] will be string[]

export  function forEach<T>(elems:T[], action:(elem:T) => void) {
    for(let i:number = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

// predicate is a function passed as argument to filter
export function filter<T>(elems: T[], predicate: (elem:T) => boolean) {
    let result:T[] = [];
        forEach(elems, (elem) => {
            if(predicate(elem)) {
             result.push(elem);
            }
        });
    return result;
}

//filter([5,2,11,4], (elem) => elem % 2 === 0);
// filter(products, elem => elem.category === 'mobile');
// let memFib = memoize(fibanocci); ==> takes number returns a Number
// let memGetProduct = memoize(getProduct); ==> takes a number returns a JSON Product

export function memoize<T, R>(fn:(args:T) => R) {
    var cache = {};
    // @ts-ignore
    return function(args) {
        // @ts-ignore
        if(!cache[args]) {
            // @ts-ignore
            cache[args] = fn(args);
        }
        // @ts-ignore
        return cache[args];
    }
}


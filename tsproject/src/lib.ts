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


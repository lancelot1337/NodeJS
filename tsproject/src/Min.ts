// decorator Factory
export function Min(limit: number) {
    // called once when decorator is applied
    return function (target: any, propertyKey: string) {
       let x: number;
       const setter = function(newVal:number) {
        if(newVal < limit) {
            Object.defineProperty(target, "error", {
                value: propertyKey + " should be minumum of " + limit + " you entered " + newVal
            })
        } else {
            x = newVal;
        }
       }

       const getter = function () {
        return ;
       }

       Object.defineProperty(target, propertyKey, {
        set:setter,
        get:getter
       })
    }
}
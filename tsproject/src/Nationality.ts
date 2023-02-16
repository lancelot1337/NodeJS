// decorator Factory
export function Nationality(config:any) {
    return function(constructor:Function) {
        Object.defineProperty(constructor.prototype, "country", {"value": config.name})
    }
}
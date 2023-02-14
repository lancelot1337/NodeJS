// HOF --> function which accepts function as argument or return function
// action is a function passed as argument to forEach
function forEach(elems, action) {
    for(i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
// predicate is a function passed as argument to filter
function filter(elems, predicate) {
    let result = [];
        forEach(elems, (elem) => {
            result.push(elem);
        });
    return result;
}
// commonJS module system
module.exports = {
    forEach, filter
}

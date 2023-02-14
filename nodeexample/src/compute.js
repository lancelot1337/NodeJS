module.exports.add = function(x,y) {
    return x + y;
}

module.exports.subtract = (x, y) => x - y;

// private to module
function multiply(x,y) { return x * y};
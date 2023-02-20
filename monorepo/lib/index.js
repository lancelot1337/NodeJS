const {random} = require('lodash');

module.exports.doTask = function(a, b) {
    return a + b + random(1, 200);
}
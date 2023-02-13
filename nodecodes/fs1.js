const fs = require('fs'); // built-in

let content = fs.readFileSync(__filename); // blocking code

console.log(content.toString()); //code is executed only after file has been read
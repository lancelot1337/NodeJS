const fs = require('fs');


// non blocking IO
// 99% of callbacks take first argument as "err"
fs.readFile(__filename, (err, data) => {
    if(!err) {
        console.log(data.toString());
    }
});

console.log("Bye!!!"); // executed before file has been read!!!
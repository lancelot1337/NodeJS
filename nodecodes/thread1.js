// illustrate thread concept in nodeJS

const crypto = require('crypto'); // loads built-in module provided by nodejs 

const start = Date.now();

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("1: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("4: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("5: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("6: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("7: ", Date.now() - start);
});

crypto.pbkdf2("Welocme132", "topsecret", 100000, 512, "sha512", (err, pwd) => {
    console.log("8: ", Date.now() - start);
});

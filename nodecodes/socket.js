const https = require('https');

const start = Date.now();

// doesn't make use of threads, rather it uses libuv OS helpers and uses Sockets
function doRequest() {
    https.request("https://jsonplaceholder.typicode.com/users", response => {
        response.on("data", () => {});
        response.on("end", () => { console.log(" Completed ", Date.now() - start);})
    }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

/*
 Completed  116
 Completed  121
 Completed  123
 Completed  123
 Completed  126
 Completed  132
 Completed  132
 Completed  138
 Completed  139
 Completed  142
 Completed  188
 Completed  190
 */
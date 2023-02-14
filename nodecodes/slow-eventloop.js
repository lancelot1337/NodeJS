const http = require('http');
var tasks = []; // memory issues
var server = http.createServer( (request, response) => {
    // tasks.push({
    //     name:"A",
    //     date: Date.now()
    // });
    // setTimeout(() => {
        response.end("Hello!!!!");
    // }, 1000);
});

server.listen(1234, () => console.log("server started!!!"));
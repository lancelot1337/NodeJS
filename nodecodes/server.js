const fs = require('fs');
const http = require('http');

var server = http.createServer( (request, response) => {
    var stream = fs.createReadStream(__filename); // read from request
    stream.on("data", chunk => response.write(chunk.toString())); // 64kb --> execute many times based on size of file

    stream.on("end", () => response.end());

});

// 1234 is the server socket to listen to incomming connection
// each request places (request, response) => {} onto callback queue
server.listen(1234, () => console.log("Server Started!!!"))
const cluster = require('cluster');
const cpus = require('os').cpus().length;
const fs = require('fs');
const http = require('http');

if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    cluster.on("listening", (child) => console.log("started child " + child.process.pid));
    cluster.on("error", (child) => cluster.fork());
} else {
    var server = http.createServer((request, response) => {
        var stream = fs.createReadStream(__filename); // read from request
        stream.on("data", chunk => response.write(chunk.toString())); // 64kb --> execute many times based on size of file

        stream.on("end", () => response.end());

    });
    server.listen(1234, () => console.log("Server Started!!!"));
}
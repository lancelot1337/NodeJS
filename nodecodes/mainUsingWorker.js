const {Worker} = require('worker_threads');

let data = 34;

const worker = new Worker("./myWorker.js", {workerData: {number: data}});

worker.on("message", result => console.log(`Fibanocci of ${data} is ${result}`));
worker.on("error", (err) => console.log(err));
worker.on("exit", () => console.log("Worker thread completes!!!"))

console.log("Some other tasks!!!");


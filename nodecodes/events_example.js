const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => { console.log('Listener 1')});

eventEmitter.on("data", (chunk) => { console.log("1", chunk)});

eventEmitter.on("end", () => { console.log("1", "Done!!!")});



eventEmitter.on("start", () => { console.log("Listener 2")});

eventEmitter.on("data", (chunk) => { console.log("2" , chunk)});

eventEmitter.on("end", () => { console.log("2", "Done!!!")});


eventEmitter.emit('start');

eventEmitter.emit("data", "Hello");


eventEmitter.emit("data", "Good Day");


eventEmitter.emit("end");

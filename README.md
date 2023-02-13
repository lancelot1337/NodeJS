# NodeJS, TypeScript and ExpressJS

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NodeJS


Softwares Required:

Visual Studio Code.

Chrome Web Browser

NodeJS Latest LTS

Docker Desktop {MongoDB}

------------------------------

NodeJS: 
* Platform built on V8 engine
* uses Libuv C/C++ libraries for Threads and OS Async helpers
* Event-driven, non-blocking I/O model
* Ray Dual -- 2009

https://github.com/nodejs/node

JS ==> Js engine { V8, SpiderMonkey, Continnum, Nashorn, JavaScriptVM} --> ECMA


libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops. 

file.js

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function doTask() {
    let p = new Person("Smith", 44);
    console.log("Hello!!!);
}

console.log("Hello");

doTask();


==============

Event loop, Callback Queue Example:

console.log("Hello");

setTimeout(function one() {
    console.log("1");
}, 0);

setTimeout(function two() {
    console.log("2");
}, 0);

Promise.resolve().then(function p1() {
    console.log("p1");
});

Promise.resolve().then(function p2() {
    console.log("p2");
});


console.log("Bye");

====

class TimerThread extends Thread {
    TimerThread(MacroTaskQueue queue, int delay, Function cb) {
            //
    }

    public void run() {
        Thread.sleep(delay);
        queue.push(cb);
    }
}

class MiroThreads extends Thread {
    .. reference to MicroTaskQueue
}

Job of EventLoop Thread ==> Check if stack is empty; take functions for callback queue onto stack for exectuion
First empty MicroTask queue and then MacroTask Queue

====

function doTask() {
    return new Promise( (resolve, reject) => {
        make api call then based on result
        resolve(response) or reject(error);
    })
}
===============

Psuedocode for Event loop

const microTask = []; // promise, setImmediate
const pendingTimers = [];  // setInterval , setTimeout
const pendingOSTasks = []; // Listening to Port
const pendingOperations = []; // like "fs"

function shouldContinue() {
    check the size of all the above containers
}

while(shouldContinue() && isStackEmpty()) {
    // 1. check all microTasks and empty it
    // 2. PendingTimers
    // 3. PendingOsTasks and PendingOperations
    // Pause execution and continue...
}


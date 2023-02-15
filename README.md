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
```
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
```
====
```
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
```
Job of EventLoop Thread ==> Check if stack is empty; take functions for callback queue onto stack for exectuion
First empty MicroTask queue and then MacroTask Queue

====
```
function doTask() {
    return new Promise( (resolve, reject) => {
        make api call then based on result
        resolve(response) or reject(error);
    })
}
```
===============

Psuedocode for Event loop
```
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

```

Module System:

1) Plain JS module system is done using IIFE

(function() {...})();

2) CommonJS

NodeJS uses CommonJS module system by default;

module.exports
and
require(..); to import a module

3) ES 6 module
export and import


========
use PM2 instead of Cluster
https://pm2.keymetrics.io/

npx pm2 start server.js -i 4

npx pm2 list
npx pm2 ls
npx pm2 monit
npx pm2 stop 2
npx pm2 stop all
npx pm2 restart 2
npx pm2 restart all
npx pm2 delete all
npx pm2 delete 2

Dash: https://app.pm2.io/#/r/bzbgv7pqya8agxp

npx autocannon -c 100 http://localhost:1234/

----------


Recap:
NodeJs ---> Platform with V8 and Libuv async library {Threads and Async operations}
NodeJS comes with built-in modules ==> crypto, fs, http, worker-threads, cluster
CommonJS module system is the default module system supported by NodeJS {module.exports and require()}

EventLoop, Heap area, stack, Macro Task and Micro Task Callback queues, Garbage Collector 

PM2 to manage clusters

Day 2

autocannon for loadtesting, wrk or "Apache Benchmark --> ab"

Debug:
node --inspect-brk server.js
To place a breakpoint use;

 debugger;

 Chrome Web Browser:
 chrome://inspect

---

Issues in nodeJs applcations ==> event loop, memory, cpu

* clinic

https://clinicjs.org/documentation/doctor/
https://github.com/clinicjs/node-clinic
https://github.com/clinicjs/node-clinic-doctor-examples


Clinic.js Doctor
On GitHub
Example
Diagnose performance issues in your Node.js applications
Clinic.js Doctor


Executable modules has to be installed globally:

npm install -g autocannon clinic

npm root -g

npm list -g


$ clinic doctor --autocannon [ -c 1000 http://localhost:1234] -- node slow-eventloop.js

-------------------------------

Node Project
Package Managers:
1) NPM --> Node Package Manager --> installed by default along with NodeJS
2) YARN --> npm install -g yarn
3) PNPM --> npm install -g pnpm

Uses of Package Manager:
1) 
Global dependencies:
npm i -g yarn
these modules will be downloaded into "/usr/local/lib/node_modules" folder --> npm root -g

Project specific dependencies:
--> used to install 3rd party depdenencies for the project[ example: expressjs, react, angular, jquery]
npm install react
this install dependencies for the project ===> project/node_modules folder

yarn add react

2) 
Package managers are used to exceute scripts:

scripts: {
    "start": "node dist/server.js",
    "test": "..."
}

npm start
npm test

yarn start
yarn test

3) publish modules to repo
npm publish

npm config ls -l
registry = "https://registry.npmjs.org/" 

npm config set registry="http://cisco.com/webex"

=========

Node Project:
npm init --y
==> package.json
is the place where the following are configured:
1) scripts
2) dependencies
are modules required in "production" also
3) devDependencies
are modules required only in "development" mode
--> examples: any testing modules / Linting ==> static code analysis / Compiler {tsc, coffeescript, dart, livescript}
4) peerDependencies
    are modules which should be installed by the user of this module

When project ==> repo ==> code is commited without "node_modules"

npm i lodash

npm i -D mocha chai request


This installs transitive dependencies
Semantic versioninig : MAJOR.MINOR.PATCH

"lodash": "4.17.21" ==> need exact version from repo

"lodash": "^4.17.21" ==> min version number is 4.17.21; if latest version is available--> download

"lodash": "~4.17.21" ==> need MAJOR version as "4"; minor and patch can be different

======
Team Member:
npm install


JS Unit testing libraries:
* Jasmine
* Mocha
* Jest

Jasmine and JEST has a very good assertion apis

AAA ==> Assemble, Action and Assert

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
change:
"test": "mocha --reporter spec"
to
npm i -D jest
"test": "jest"

===

Exercises:

npm install -g javascripting

npm install -g functional-javascript-workshop

npm install -g learnyounode

$functional-javascript-workshop



Recap: 
NodeJS project --> package.json ; NPM, YARN , PNPM
JS Unit testing ==> Jasmine, JEST and Mocha, Chai.js assertion library

Day 3:

JS: loosely typed and dynamically typed language

var data = "test"; // string
data.toUpperCase();

data = 34; // number

data++;

// what type are you passing and what is the return type
function doTask(data) {

}
ES6/ ESNext ==> babel ==> JavaScript version understood by engine [ https://caniuse.com/]
typescript ==> tsc ==> JavaScript {executed on the engine}
coffeescript ==> csc ==> JavaScript
LiveScript ==> lsc ==> javaScript
Dart ==> dartc ==> javaScript

TypeScript
* Provide optional type system for JavaScript
* catch errors at compile time rather than runtime
* enhance code quality and understandibilty

Basic types: string, number, boolean

file.ts
let name:string = "Roger"; 
name = 23; // tsc picks this error and won't compile to "js" [ tsc file.ts ==> file.js]

var age:number = 22;

var employed:boolean = true;

------

Advance types:

1) enum

enum Direction {
    NORTH = 'north',
    EAST = 'east'
}

eum Prioirty {
    LOW = 0,
    MED = 1,
    HIGH = 2
}

const direction:Direction = Direction.NORTH;

2) type --> user defined types 

type Person = {
    name:string;
    age:number
}

let p:Person = {name:"Larry", age:32};

let r:Person = {name: "Peter"}; // error

Optional:

type Person = {
    name:string;
    age?:number
}

let p:Person = {name:"Larry", age:32};

let r:Person = {name: "Peter"}; // valid

Singleton

let p:{"name":string, "age":number} = {name:"Larry", age:32};

3) Array type
```
type Person = {
    name:string;
    age?:number
}

let people:Person[] = [
    {name:"Larry", age:32},
    {name:"Smitha", age:30}
]

let data:number[] = [ 42,11,48,12];
```
4) Union type

let course:string|number  = "Typescript";

course = 123; // valid

5) interface 

similar to "type" to define a shape of object
```
interface Person {
    name:string;
    age?:number
}
```
5.1) we can specialize
```
interface Product {
    id:number;
    name: string;
    price: number
}

// specialization ==> inheritance
interface Mobile extends Product {
    connectivity:string;
    camera:string;
}

interface Tv extends Product {
    screen:string;
}

let sony:Tv = {id:12, name:"Sony Bravia", price:234000.00, screen : "OLED"};
```
5.2) Realization relationship
```
interface Renderer {
    render(); 
}
// implements --> Realization
class ReactDOM implements Renderer {
    // state and behaviour
    render() {
        // logic
    }
}
// VDOM -=> DOM
ReactDOM.render(<App/>);

// WebOS , SmartTV
class ReactTv implements Renderer {
    // state and behaviour
    render() {
        // logic
    }
}

ReactTv.render(<App/>);
```
====

6) any

let data:any = "Hello";

let elem:string = data; // works fine

data = 32;
data = true;

7) unknown

let data:unknown = "Hello";
let elem:string = data; // error --> unknown type can be assigned to unknown type only

data = 32;
data = true;

Note: Before using "unknown" type ==> type checking has to be done
---

npm i -g typescript


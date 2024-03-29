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

npm i -g ts-node

ts-node file.ts

8) function types

let add:(x:number, y:number) => number;

add = function(x:number, y:number): number {
    return x + y;
}
OR
function add(x:number, y: number):number {
    return x + y;
}

9) class type

```
class Book {
    private title:string; // state
    private price:number;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    public getTitle(): string {
        return this.title;
    }

    getPrice(): number {
        return this.price;
    }
    setPrice(p:number): void {
        this.price = p;
    }
}

```

Specialization:

class Product {
    constructor(private id:number, private name:string) {}
    ///
    getPrice(): number {
        ...
    }
}

class Mobile extends Product {
     private connectivity:string;
     constructor(id:number, name:string, connectivity:string) {
        super(id, name); // chain to base class constructor
        this.connectivity = connectivity;
     }
    // override
     getPrice(): number {
        return super.getPrice() + 1000;
     }
}

======================

Not-Null Assertion [ ! ]

```
Scenario 1:
type ResponseData = string | null;

function someTask(data:ResponseData) {
    console.log(data.toUpperCase()); // error --> data can be null
}

Solution:
function someTask(data:ResponseData) {
    console.log(data!.toUpperCase()); // not null assertion
}
```
========

Keywords "as", "in", "is"

Type Assertions ==> as

```
type ResponseData = string | null;

function someTask(data:ResponseData) {
    console.log((data as string).toUpperCase());
}
```
<div class="card"></div>

let div = document.getElementById('.card') as HTMLDivElement;
div.(methods of HTML DivElement)


-----

Type Predicate functions with "is" keyword


function printData(data: User | ErrorMsg):void {
        console.log((data as User).name); 
}

===========================

TypeScript Utilities:

1) Partial
interface User {
    name: string;
    email: string;
    password:string;
}
makes all attributes as optional

UI I need to update User
let payload:Partial<User> = {"email": "a@gmail.com", "password": "secret"}; // valid

2) Required
interface User {
    name?: string;
    email?: string;
    password?:string;
}
// makes all attributes as compulsory
let user:Required<User> =  {"email": "a@gmail.com", "password": "secret"}; // error

3) Omit

type Person = Omit<User, "password" | "email">;

Person contains name 

4) Pick


type Person = Pick<User, "name" | "email">;

Person contains name and email

5) ReadOnly

let response:ReadOnly<User> = {"name": "A", "email": "a@gmail.com", "password": "secret"};

response.email = ""; // error --> readonly

Not same as:
const data = {
    "name": "A",
    "age": 32
}

data.age = 99; // valid

data = {}; // not valid

6) ReturnType

type T = ReturnType<() => string>;
now "T" is a string

function add(x:number, y:number) {
    return x + y;
}

type T = ReturnType<typeof add>;

"T" will be number

=====================
R2DBC and not JDBC

Where can I use NodeJS?

1) build APIs ==> RESTful / GraphQL web services ==> Sending JSON / XML
2) build traditional web applications where server sends rendered pages to client
3) Streaming platform
4) Real time applications ==> ChatGPT, webbot
5) Client side applications ==> React/ Angular/ Vue
 --> compile, testing, minifiy, uglify, bundle

==================

$tsproject> npm init --y
$tsproject> npm i typescript
$tsproject> tsc --init

$tsproject> tsc

Typescript uses ES6 module system =={ export and import instead}

===
HOF:
* function accepting function as an argument
* function return a function

Closure ==> used along with HOF ==> returned function / inner function can access all the members of outer function

Memoization
CPU intense operations has to be memoized

fibanocci(34) ==> execute funtion ==> store result in cache ==> return result

fibanocci(34) ==> get from cache

getProduct(3) ==> make api call to server ==> cache the result
getProduct(2) ==> make api call to server ==> cache the result

getProduct(3) ==> from cache

=======

Exercise ==> create a HOF map() in lib.ts
https://rxmarbles.com/#map

====

Using JS in TS and Decorators and Webpack


==========

Day 4

Closure ==> Mechansim wherein inner function can access the members of outer function

function adder(base) {
    return function(arg) {
        return base + arg;
    }
}


let fiveAdder = adder(5); // here fiveAdder points to returned function(arg) + base[5] is stored in heap as closure

let tenAdder = adder(10); // here tenAdder points to returned function(arg) + base[10] is stored in heap as closure

console.log(fiveAdder(2)); // 7 here we are invoking inner function

console.log(fiveAdder(4)); // 9 here we are invoking inner function

console.log(tenAdder(2)); //12 here we are invoking inner function

Recap:

npm i -g typescript

TypeScript types
string, number, boolean, enum, type, interface, class, union

as, in, is, any vs unknown

ES 6 module system {export and import instead of CommonJS --> module.exports and require}

Generics <T> and HOF

function print<T>(data:T[]) {}

Narrow type:
1)
function print<T extends Product>(data:T[]) {

}

interface Product{...}
interface Mobile extends Product{...}
interface Tv extends Product{..};

Also
2)
function print<T extends {"name":string}>(data:T[]) {

}

tsconfig.json ==> compiler settings

==================

Day 4

JavaScript in TypeScript

Most of the current available librarires are in JS: react, jquery, lodash, express, nodejs

npm i lodash

<script src=".../jquery"></script>

Type declarations are done in file [fileName.d.ts]

typings.d.ts ==> Global type declaration for JS

Using DefinitelyTyped
The repository for high quality TypeScript type definitions.

npm i lodash @types/lodash

npm i react 
npm i -D @types/react

npm i -D @types/node


---

Generate type system for JavaScript files:
tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types

================

Decorators [ @DecoratorName ]
--> Metadata for class / property / methods / parameters

Angular built-in decorators

@Component({
    selector:'app-customer',
    template-url:'customer.html',
    styled-url:'styles.css'
})
class CustomerComponent {
    // state and behaviour
    firstName: string;
    lastName:string;
    @Min(18)
    age: number;

    updateName(n: string) {
        this.lastName = n;
    }

    @Memo
    getCustomer() {
        fetch('http://server/customers');..
    }
}

CustomerComponent --> selector, template-url, styled-url are injected properties

<app-customer>
</app-customer>


@Component({
    selector:'product',
    template:`<div> {{title}} {{price}} </div>`
})
class ProductComponent {
    title:string = "iPhone";
    price:number = 120000.00

    @Memo
    fibanocci(num) {

    }
}

<product></product>

Compare with Specialization approach:

class Component {
    selector;
    template;
    template-url;
    styled-url;
    style;
    declarations;
    ...
}

class CustomerComponent extends Component {

}

class ProductComponent extends Component {

}


=====

Decorators are special functions with specific arguments:

1) class Decorator
function classDecorator(constructor:Function) {}

2) Property Decorator

function propertyDecorator(target:any, propertyKey:string) {
    target[propertyKey] ==> price or age

}

let p:Product = new Product("iPhone",200000.00);

class Product {
    @Min(0)
    price:number;
}

class Customer {
    @Min(18)
    age:number;
}

let c:Customer = new Customer("a", 34);

3) Method Decorator

function methodDecorator(target:any, methodName:string, descriptor?:PropertyDescriptor) {

}

 @Memo
fibanocci(num) {
    // logic
}

4) Parameter Decorator

function parameterDecorator(target:any, methodName:string, parameterIndex:number) {

}

addCustomer(name:string, age:number, @ValidEmail() email:string) {

}

-----------------

Example:

```
export function Nationality(constructor:Function) {
    Object.defineProperty(constructor.prototype, "country", {"value": "Indian"})
}

@Nationality
export default class Person {
    constructor(private name:string = "NoName", private age:number = 18){}

index.ts
let p1:Person = new Person();
//@ts-ignore
console.log(p1.getName(), p1.getAge(), p1["country"]); 

```

Decorator Factory

```
// decorator Factory
export function Nationality(config:any) {
    return function(constructor:Function) {
        Object.defineProperty(constructor.prototype, "country", {"value": config.name})
    }
}

@Nationality({
    name:"Germany"
})
export default class Person {
    constructor(private name:string = "NoName", private age:number = 18){}

```


let p:Person = ...

p.age = 2; // calls setter

p.age = 45; // calls setter



x = p.age; // calls getter

console.log(p.age); // calls getter

p["error"]

ExpressJS ==> using TypeScript and MongoDB
RESTful WS
rendered Page

For Day 5:

Docker Desktop ==> containers uses Images {software}

Install MongoDB on Docker

Windows:
docker run --name mongodb -d mongo:latest -p 27017:27017
 
for Mac:
docker run -d -p 27017:27017 --name mongodb mongo:latest

Docker Client:

$ docker exec -it mongodb bash
 
root@67c94a75e6f7:/# mongosh

test> show databases;

======


$ docker cp sales.json mongodb:/tmp/sales.json
$ docker cp employees.json mongodb:/tmp/employees.json

$ docker exec -it mongodb bash

root@67c94a75e6f7:/# mongoimport --db adobe_express --collection sales --drop --file tmp/sales.json


root@67c94a75e6f7:/# mongoimport --db adobe_express --collection employees --drop --file tmp/employees.json

========

Day 5:

$ mongosh
test> show databases;
test> use adobe_express;
test> db.employees.find() // select * from employees
test> db.employees.find({"company":"Adobe"}) // select * from employees where company = "Adobe"
test> db.employees.find({"company":"Adobe"} , {"username": 1, company:1}) // select username, company from employees where company = "Adobe"
test> db.employees.find({"company":"Adobe"} , {"username": 0})// all fields except username

test> db.employees.insert({...})
test> db.employees.insertMany([ {}, {}, {}])


=========

NodeJS ==> MongoDB driver ==> MongoDB

NodeJS ==> Mongoose ODM ==> MongoDB

ORM ==> Object Relational Mapping
ODM ==> Object Data Mapping

npm i mongoose

Mongoose:
Everything in Mongoose starts with a Schema
https://mongoosejs.com/docs/schematypes.html

Models are fancy constructors compiled from Schema definitions.
const Tank = mongoose.model('Tank', schema);
The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.

All CRUD operations are done using Model

$ npx ts-node src/mongo_user.ts

============================

ExpressJS --> on top of "http" module

Express is a minimal and flexible Node.js web application framework.
--> build RESTful WS
--> build tradional Web applications
--> GraphQL { Express + Apollo}

Spring Boot / Razor / Flask --> ExpressJS

* Middleware
* Routes
* Controllers
* Services

=====

expressapp> npm init --y

expressapp> npm i express body-parser cookie-parser cors bcrypt jsonwebtoken

expressapp> npm i -D typescript @types/node @types/express @types/body-parser @types/cookie-parser @types/cors ts-node

expressapp> tsc --init

POSTMAN

POST: http://localhost:1234/products
Headers:
Accept: application/json
Content-type:application/json

Body --> Raw

{
    "id": 9,
    "name": "test",
    "price": 4343,
    "category": "some"
}

===

Express and Mongoose

npm i mongoose
npm i -D @types/mongoose

============================================
CAP Theorem ==> Apply to decide DB
Avoid using RDBMS in NodeJS because most of the operations in RDBMS are Sync in nature and nodejs driver support is less.

MongoDB as NoSQL database for persistence

mongodb is a driver for NodeJS to perform CRUD operations on Mongodb,
Mongoose is a ODB  {Object Data Mapping} on top of Mongodb driver to perform CRUD operations using OO way
Mongoose has:
* Schema --> define fields of collections, validation rules ...
* Model --> allows mapping of schema to Collection, use Model we perform CRUD operation

ExpressJS --> Middleware web application framepwork for NodeJS to built 
* RESTful --> CSR
* GraphQL with extra GraphQL engine {like apollo} --> CSR
* Build traditional web applications { like PHP , Servlet with JSP, ASP.NET} where server sendes renderd pages --> SSR

app.ts --> Middleware {express.json()} --> Routes --> Middleware {ProductValidation} --> Controller --> Service --> where Mongoose is used to perform CRUD

------------------

Day 6

JWT Token:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Header:
{
  "alg": "HS256",
  "typ": "JWT"
}

PAYLOAD:
{
  "sub": "banu@gmail.com",
  "name": "Banu Prakash",
  "iat": 1516239022,
  "exp": 16000000,
  "iss": "adobe",
  "roles": ["admin", "guest"]
}

SIGNATURE:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  myTopSecretSaltValue
)

npm i jsonwebtoken
npm i -D @types/jsonwebtoken

npm i bcrypt
npm i -D @types/bcrypt

POSTMAN

POST: http://localhost:1234/register
Headers:
Accept: application/json
Content-type: application/json

BODY -> Raw
{
    "email":"peter@adobe.com",
    "password":"Secret123"
}

docker exec -it mongodb bash
# mongosh
test> use adobe_express
switched to db adobe_express
adobe_express> db.users.find()

---

Login

POST http://localhost:1234/login
Headers:
Accept: application/json
Content-type: application/json

BODY -> Raw
{
    "email":"peter@adobe.com",
    "password":"Secret123"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGV0ZXJAYWRvYmUuY29tIiwiaWF0IjoxNjc2ODcwMjkwLCJleHAiOjE2Nzg1NTIzNDQ4NTYsImlzcyI6IkFkb2JlIn0.p1tsP_iWYXswPnoR94RBkA_64tq_yYxbdHCrYTg4e8w"
}

===

GET http://localhost:1234/products
Headers:
Accept: application/json
Content-type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGV0ZXJAYWRvYmUuY29tIiwiaWF0IjoxNjc2ODcwMjkwLCJleHAiOjE2Nzg1NTIzNDQ4NTYsImlzcyI6IkFkb2JlIn0.p1tsP_iWYXswPnoR94RBkA_64tq_yYxbdHCrYTg4e8w


==

Angular Client or React client  or Swift Client or Xamarin client or desktop client

they should store token ==> different ways

client uses HttpInterceptors ==> automate sending headers

====
CSR ==> server sends JSON/ XML represetnatioin -=> Client apps has to convert into presentation

Express for SSR ==> data is converted into document [ HTML / PDF ] and sent to client

Templates for Express View Generation:
1) EJS
2) JADE
3) PUG
4) Handlebars
5) Mustache
6) jquery template

npm i ejs
npm i -D @types/ejs

Serve static pages:

http://localhost:1234/index.html ==> public folder


======================

% npm --version
9.1.3

npm 7+ version features:

1) peerDependencies

projectA
    package.json
    dependencies: {
        projectB: "1.0.0",
    }

projectB
    package.json
    peerDependencies: {
        "react":"18.2.0"
    }

This enforces projectA to include "react" in dependencies

projectA changes to
    package.json
    dependencies: {
        projectB: "1.0.0",
         "react":"18.2.0"
    }

2) Overrides

Enforce spscific versions of a dependency, resolve conflict

projectA
package.json
"dependencies" : {
    "react": "18.0.0",
    "react-select": "5.1.0"
}

react-select has peer-dendencies of "react@17.0.0" and "react-dom@17.0.0"

throws version issues

Solution:
projectA
package.json

"overrides" {
    "react-select": {
        "react": "$react",
        "react-dom":"$react-dom"
    }
}

==========

NPM Links

===

npm workspaces ==> moving towards Monorepo instead of multirepo
==> Not so popular in NPM communitity

MonoRepo and Multirepo

monorepo benifits:
* single build, test, lint configuration

npm config set http-proxy ...
npm config set https-proxy ...


workspaces> npm init --y
workspaces> npm init --workspace common --workspace service

MonoRepo ==> Lerna, Nx, Rush, ..

Rush: a scalable monorepo manager for the web ... Get Started! Rush makes life easier for JavaScript developers who build and publish many packages from a common ...

npm install -g @microsoft/rush
npm i -g pnpm

NPM doppelgangers phantom dependencies

https://rushjs.io/pages/advanced/npm_doppelgangers/

monorepo>rush init

monorepo/lib>pnpm init

lib --> package.json "name": "@shared/lib",

installing packages using "rush"

lib> rush add -p lodash

similar to npm start
lib> rushx start

service> pnpm init
package.json
{
  "name": "@shared/service",

in rush.json
"projects": [
    {
      "packageName": "@shared/lib",
      "projectFolder": "lib"
    },
    {
      "packageName": "@shared/service",
      "projectFolder": "service"
    }


service> rush add -p express // fails without adding the details in "rush.json"
service --> package.json
"dependencies": {
    "express": "~4.18.2",
    "@shared/lib":"workspace:*"
  }
 "start": "node ./index.js",

 service> rush update
 service>rushx start

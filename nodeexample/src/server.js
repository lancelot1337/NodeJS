const http = require('http'); // built-in 
const url = require('url'); // built-in
const {random} = require('lodash'); // installed module ==> node_modules
const {add, subtract} = require('./compute'); // project specific module

// http://localhost:1234/add?x=10&y=15
// http://localhost:1234/sub?x=80&y=15

// /add and /sub are pathparameter
// ?x=34&y=22 are query parameter
// Cypress or Playwright or puppetter or selenium
const server = http.createServer( (request, response) => {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;

    if(pathname === '/add') {
        let result = add( parseInt(query.x), parseInt(query.y));
        response.end(result.toString());
    } else if(pathname === '/sub') {
        let result = subtract( parseInt(query.x), parseInt(query.y));
        response.end(result.toString());
    } else {
        response.end(random(1,100).toString());
    }
});

server.listen(1234, () => console.log("server started!!!"));
let {expect} = require('chai');  // node_modules
let request = require('request');

// jest.setTimeout(50000)

describe("testing server", () => {
    it("testing add url", (done) => {
        //async code
        request("http://localhost:1234/add?x=10&y=15", (err, response, body) => {
            let expected = "25";
            expect(expected).to.be.equal(body);
            done();
        });
    })
});
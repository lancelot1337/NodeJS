let {expect} = require('chai');  // node_modules
let {add,subtract} = require('../src/compute'); // from project

// test suite
describe("testing compute module", () => {
    // test spec
    it("testing add", () => {
        let result = add(4,5);
        let expected = 9;
        expect(expected).to.be.equal(result);
    });

    // test spec
    it("testing subtract", () => {
        let result = subtract(24,4);
        let expected = 20;
        expect(expected).to.be.equal(result);
    });
});
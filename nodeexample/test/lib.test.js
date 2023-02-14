let {forEach, filter} = require('../src/lib');
// I will use JEST assertion library instead on chai

describe("testing lib module", () => {
    it("testing forEach", () => {
        let action = jest.fn(); // mock function
        let data = [6,1,22,44,77];
        forEach(data, action);
        console.log(action.mock.calls)
        expect(action.mock.calls.length).toBe(5);
        expect(action.mock.calls[0][0]).toBe(6);
        expect(action.mock.calls[1][0]).toBe(1);
        expect(action.mock.calls[2][0]).toBe(22);
    });

    it("testing filter", () => {
        let data = [6,1,22,44,77];
        const predicate = jest.fn(x => x % 2 !== 0);
        let res = filter(data, predicate);
        expect(res.length).toBe(2);
    });
});
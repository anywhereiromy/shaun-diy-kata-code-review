const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44,10)).toEqual('I should be there in 4.5 hours');
    expect(reachDestination(46,10)).toEqual('I should be there in 5 hours');
    expect(reachDestination(92,10)).toEqual('I should be there in 9.5 hours');
    expect(reachDestination(96,10)).toEqual('I should be there in 10 hours');

  });
});

const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5,4,3,2,1]);
    expect(numberToReversedDigits(9564721)).toEqual([1,2,7,4,6,5,9]);
    expect(numberToReversedDigits(345)).toEqual([5,4,3]);
  })
});


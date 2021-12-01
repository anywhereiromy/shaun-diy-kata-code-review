
const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns array of human, cat and dog years when passed human years", () => {
      expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
      expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
      expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
      expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    });
  
  })
d
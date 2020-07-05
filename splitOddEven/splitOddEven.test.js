const splitOddEven = require("./index");

describe("test cases for running the coding challenge", () => {
  it("return array sorted for values off first and even next", () => {
    expect(splitOddEven([1, 4, 3, 2, 5, 7, 6, 8])).toEqual([
      1,
      3,
      5,
      7,
      2,
      4,
      6,
      8,
    ]);
  });

  it("return array sorted for values in negative", () => {
    expect(splitOddEven([1, -4, 3, 0, -5, 7, 6, 8])).toEqual([
      -5,
      1,
      3,
      7,
      -4,
      0,
      6,
      8,
    ]);
  });

  it("return empty array with null values", () => {
    expect(splitOddEven([])).toEqual([]);
  });
});

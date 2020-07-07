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

  it("When only even numbers are passed", () => {
    expect(splitOddEven([8, 6, 2, 4])).toEqual([2, 4, 6, 8]);
  });

  it("When only odd numbers are passed", () => {
    expect(splitOddEven([7, 5, 11, 1])).toEqual([1, 5, 7, 11]);
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

  it("return empty array for no input parameter", () => {
    expect(splitOddEven()).toEqual([]);
  });

  it("return error with null values", () => {
    expect(splitOddEven([1, null, 3, 0, -5, 7, 6, 8])).toEqual("Invalid input");
  });

  it("return error with undefined values", () => {
    expect(splitOddEven([1, undefined, 3, 0, -5, 7, 6, 8])).toEqual(
      "Invalid input"
    );
  });
});

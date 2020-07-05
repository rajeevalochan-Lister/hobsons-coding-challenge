const permute = require("./index");

describe("test cases for running the coding challenge", () => {
  it("permute - should return permute values which contain characters", () => {
    expect(permute(["c", "a", "t"])).toEqual([
      ["c", "a", "t"],
      ["a", "c", "t"],
      ["t", "c", "a"],
      ["c", "t", "a"],
      ["a", "t", "c"],
      ["t", "a", "c"],
    ]);
  });

  // Test permute cases

  it("permute - should return permute values which contain duplicates", () => {
    expect(permute([1, 2, 1])).toEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 2],
      [1, 1, 2],
      [2, 1, 1],
      [1, 2, 1],
    ]);
  });

  it("permute - should return permute values which contain no duplicates", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1],
    ]);
  });

  it("return no value for array with null / undefined values", () => {
    expect(permute([1, null, 3])).toEqual(
      "no value provided in the input array"
    );
  });

  it("return no value for array with null / undefined values", () => {
    expect(permute([1, undefined, 3])).toEqual(
      "no value provided in the input array"
    );
  });
});

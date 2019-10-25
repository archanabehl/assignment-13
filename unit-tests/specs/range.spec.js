function range(start, limit) {
  var range = [];
  for (var i = start; i < limit; i++) {
    range.push(i);
  }
  return range;
}

describe("range", () => {
  describe("with 0 and 5", () => {
    it("returns [0, 1, 2, 3, 4]", () => {
      expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe("with 3 and 7", () => {
    it("returns [3, 4, 5, 6]", () => {
      expect(range(3, 7)).toEqual([3, 4, 5, 6]);
    });
  });

  describe("with 5 and 5", () => {
    it("returns []", () => {
      expect(range(5, 5)).toEqual([]);
    });
  });
});

function indexOf(array, item) {
  // for (var i = 0; i < array.length; i++) {
  //   var index = array.indexOf(item);
  // }
  var index = array.indexOf(item);
  return index;
}

describe("indexOf", () => {
  describe("with [1, 2, 3] and 2", () => {
    it("returns 1", () => {
      expect(indexOf([1, 2, 3], 2)).toEqual(1);
    });
  });

  describe("with ['a', 'b', 'c'] and 'c'", () => {
    it("returns 2", () => {
      expect(indexOf(["a", "b", "c"], "c")).toEqual(2);
    });
  });

  describe("with [4, 5, 6] and 2", () => {
    it("returns -1", () => {
      expect(indexOf([4, 5, 6], 2)).toEqual(-1);
    });
  });
});

function isOdd(number) {
  return number % 2 !== 0;
}

xdescribe("isOdd", () => {
  describe("with 0", () => {
    it("returns false", () => {
      expect(isOdd(0)).toEqual(false);
    });
  });

  describe("with 1", () => {
    it("returns true", () => {
      expect(isOdd(1)).toEqual(true);
    });
  });

  describe("with 2", () => {
    it("returns false", () => {
      expect(isOdd(2)).toEqual(false);
    });
  });

  describe("with 3", () => {
    it("returns true", () => {
      expect(isOdd(3)).toEqual(true);
    });
  });
});

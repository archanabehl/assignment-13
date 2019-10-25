function exists(value) {
  if (value === null || value === undefined) return false;
}
return true;

describe("exists", () => {
  describe("with an undefined value", () => {
    it("will return false", () => {
      expect(exists(undefined)).toBe(false);
    });
  });

  describe("with a null value", () => {
    it("will return false", () => {
      expect(exists(null)).toBe(false);
    });
  });

  describe("with a False value", () => {
    it("will return true", () => {
      expect(exists(false)).toBe(true);
    });
  });

  describe("with a True value", () => {
    it("will return true", () => {
      expect(exists(true)).toBe(true);
    });
  });

  describe("with a string value", () => {
    it("will return true", () => {
      expect(exists("some text")).toBe(true);
    });
  });

  describe("with a numeric value", () => {
    it("will return true", () => {
      expect(exists(4)).toBe(true);
    });
  });

  describe("with an empty object", () => {
    it("will return true", () => {
      expect(exists({})).toBe(true);
    });
  });

  describe("with an empty list", () => {
    it("will return true", () => {
      expect(exists([])).toBe(true);
    });
  });
});

// function keyOf(object, value) {
//   for (var key in object) {
//     if (object.hasOwnProperty(key)) {
//       if (object[key] === value) return key;
//     }
//   }
// }

function keyOf(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

describe("keyOf", () => {
  describe("given { a: 1, b: 2 } and 1", () => {
    it("will return 'a'", () => {
      expect(keyOf({ a: 1, b: 2 }, 1)).toEqual("a");
    });
  });

  describe("given { foo: 'FOO', bar: 'BAR', biz: 'BIZ' } and 'BIZ'", () => {
    it("will return 'biz'", () => {
      expect(keyOf({ foo: "FOO", bar: "BAR", biz: "BIZ" }, "BIZ")).toEqual(
        "biz"
      );
    });
  });

  describe("given { foo: 'FOO', bar: 'BAR', biz: 'BIZ' } and 'YEET'", () => {
    it("will return undefined", () => {
      expect(keyOf({ foo: "FOO", bar: "BAR", biz: "BIZ" }, "YEET")).toEqual(
        undefined
      );
    });
  });
});

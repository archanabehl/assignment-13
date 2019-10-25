function capitalize(text) {
  var splitstr = text.split(" ");
  for (let i = 0; i < splitstr.length; i++) {
    splitstr[i] =
      splitstr[i].charAt(0).toUpperCase() + splitstr[i].substring(1);
    // console.log(splitstr[i].substring(1));
  }
  return splitstr.join(" ");
}

xdescribe("capitalize", () => {
  describe("with hello", () => {
    it("will return Hello", () => {
      expect(capitalize("hello")).toBe("Hello");
    });
  });

  describe("with hello, world", () => {
    it("will return Hello, World", () => {
      expect(capitalize("hello, world")).toBe("Hello, World");
    });
  });

  describe("with 'the quick brown fox jumped over the lazy dog'", () => {
    it("will return 'The Quick Brown Fox Jumped Over The Lazy Dog'", () => {
      expect(capitalize("the quick brown fox jumped over the lazy dog")).toBe(
        "The Quick Brown Fox Jumped Over The Lazy Dog"
      );
    });
  });
});

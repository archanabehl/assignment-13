// function factorial(number) {
//   if (number <= 1) {
//     return number;
//   }
//   return number * factorial(number - 1);
// }
//--------------------------WHILE LOOP
// function factorial(num) {
//   var result = num;
//   if (num <= 1) return num;
//   while (num > 1) {
//     num--;
//     result = result + num;

//   }
//   return result;
// }
//------------------------------FOR LOOP
function factorial(num) {
  var result = num;
  if (num <= 1) return num;
  for (var i = num - 1; i >= 1; i--) {
    result = result + i;
  }
  return result;
}

xdescribe("factorial", () => {
  describe("with 0", () => {
    it("returns 0", () => {
      expect(factorial(0)).toEqual(0);
    });
  });

  describe("with 1", () => {
    it("returns 1", () => {
      expect(factorial(1)).toEqual(1);
    });
  });

  describe("with 2", () => {
    it("returns 3", () => {
      expect(factorial(2)).toEqual(3);
    });
  });

  describe("with 3", () => {
    it("returns 6", () => {
      expect(factorial(3)).toEqual(6);
    });
  });

  describe("with 4", () => {
    it("returns 10", () => {
      expect(factorial(4)).toEqual(10);
    });
  });
});

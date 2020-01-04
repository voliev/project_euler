const fiboEvenSum = require("./index");

describe("fiboEvenSum", () => {
  it("should return 44", () => {
    expect(fiboEvenSum(10)).toBe(44);
  });

  it("should return 3382", () => {
    expect(fiboEvenSum(18)).toBe(3382);
  });

  it("should return 60696", () => {
    expect(fiboEvenSum(23)).toBe(60696);
  });

  it("should return 350704366", () => {
    expect(fiboEvenSum(43)).toBe(350704366);
  });

  it("should return even integer", () => {
    expect(fiboEvenSum(70) % 2).toBe(0);
  });  
});

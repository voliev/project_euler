const multiplesOf3and5 = require("./index");

describe("multiplesOf3and5", () => {
  it("should pass", () => {
    expect(multiplesOf3and5(10)).toBe(23);
  });

  it("should pass", () => {
    expect(multiplesOf3and5(100)).toBe(2318);
  });

  it("should pass", () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
  });

  it("should pass", () => {
    expect(multiplesOf3and5(49)).toBe(543);
  });

  it("should pass", () => {
    expect(multiplesOf3and5(19564)).toBe(89301183);
  });

  it("should pass", () => {
    expect(multiplesOf3and5(8456)).toBe(16687353);
  });
});

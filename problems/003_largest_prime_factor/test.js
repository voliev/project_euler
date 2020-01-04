const largestPrimeFactor = require("./index");

describe("largestPrimeFactor", () => {
  it("should return 2", () => {
    expect(largestPrimeFactor(2)).toBe(2);
  });

  it("should return 3", () => {
    expect(largestPrimeFactor(3)).toBe(3);
  });

  it("should return 5", () => {
    expect(largestPrimeFactor(5)).toBe(5);
  });

  it("should return 7", () => {
    expect(largestPrimeFactor(7)).toBe(7);
  });

  it("should return 29", () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });

  it("should return 6857", () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
})

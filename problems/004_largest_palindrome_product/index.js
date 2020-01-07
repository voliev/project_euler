function isPalindrome(n) {
  const strVal = n.toString();
  return strVal.split("").reverse().join("") === strVal;
}

function largestPalindromeProduct(n) {
  let res = 1;

  // Min and max possible factors
  const factorMin = parseInt("1".padEnd(n, "0"));
  const factorMax = parseInt("".padEnd(n, "9"));
  // Min and max values of the n-digit product range
  const rangeMin = parseInt("1".padEnd(n, "0")) ** 2;
  const rangeMax = parseInt("".padEnd(n, "9")) ** 2;

  outer: for (let i = rangeMax; i >= rangeMin; i--) {
    if (isPalindrome(i)) {
      for (let j = factorMax; j >= factorMin; j--) {
        if (i % j === 0 && (i / j).toString().length === n) {
          res = i;
          // Breaks both loops using outer label
          break outer;
        }
      }
    }
  }

  return res;
}

module.exports = largestPalindromeProduct;

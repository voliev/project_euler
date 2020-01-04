// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  let factor = 2;
  let largest = 1;

  while (factor <= number) {
    if (number % factor == 0) {
      largest = factor;
      number = number / factor;
    } else {
      factor++;
    }
  }

  return largest;
};

module.exports = largestPrimeFactor;

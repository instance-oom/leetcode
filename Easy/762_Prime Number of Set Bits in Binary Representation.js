// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  var primeNumbers = {
    2: true, 3: true, 5: true, 7: true, 11: true, 13: true, 17: true, 19: true
  };

  var result = 0;
  for (L; L <= R; L++) {
    var setBits = L.toString(2).replace(/0/g, '').length;
    if (primeNumbers[setBits]) result++;
  }
  return result;
};

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
console.log(countPrimeSetBits(10, Math.pow(10, 6)));
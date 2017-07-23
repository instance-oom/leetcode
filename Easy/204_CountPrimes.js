// https://leetcode.com/problems/count-primes/#/description

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  var count = 0;

  var isPrime = function (num) {
    var tmp = Math.sqrt(num);
    for (var j = 2; j <= tmp; j++)
      if (num % j == 0)
        return false;
    return true;
  }

  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
};

console.log(countPrimes(120));
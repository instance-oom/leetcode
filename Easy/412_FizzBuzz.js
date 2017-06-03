// https://leetcode.com/problems/fizz-buzz/?tab=Description

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let resultArr = new Array(n);
  while (n > 0) {
    if (n % 15 === 0) {
      resultArr[n - 1] = 'FizzBuzz';
    } else if (n % 5 === 0) {
      resultArr[n - 1] = 'Buzz';
    } else if (n % 3 === 0) {
      resultArr[n - 1] = 'Fizz';
    } else {
      resultArr[n - 1] = String(n);
    }
    n -= 1;
  }
  return resultArr;
};

console.log(fizzBuzz(15));
// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }

  let oneStep = twoStep = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = oneStep + twoStep;
    twoStep = oneStep;
    oneStep = result;
  }
  return result;
};

console.log(climbStairs(2))
console.log(climbStairs(3))
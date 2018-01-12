// https://leetcode.com/problems/optimal-division/description/

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  var length = nums.length;
  if (length <= 2) {
    return nums.join('/');
  }
  var firstNum = nums.shift();
  return firstNum + '/(' + nums.join('/') + ')';
};

console.log(optimalDivision([1000]));
console.log(optimalDivision([1000, 100]));
console.log(optimalDivision([1000, 100, 10, 2]));
console.log(optimalDivision([1000, 200, 100, 10, 2]));
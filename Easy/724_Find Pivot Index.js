// https://leetcode.com/problems/find-pivot-index/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  var obj = {};
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    obj[i] = sum;
  }

  for (var i = 0; i < nums.length; i++) {
    var right = sum - obj[i];
    var left = obj[i] - nums[i];
    if (left === right) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([1, -8, 3, -6, 5, 6]));
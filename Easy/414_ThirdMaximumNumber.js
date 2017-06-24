// https://leetcode.com/problems/third-maximum-number/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var obj = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (obj[nums[i]]) continue;
    obj[nums[i]] = true;
  }
  var keys = Object.keys(obj);
  keys.sort(function (x1, x2) { return x1 - x2 });
  return parseInt(keys.length > 2 ? keys[keys.length - 3] : keys.pop());
};

var nums = [3, 2, 1];
console.log(thirdMax(nums));

nums = [1, 2];
console.log(thirdMax(nums));

nums = [2, 2, 3, 1, 4];
console.log(thirdMax(nums));

nums = [2, 2, 3, -1, 2, 4, 4, 4, 4, 5];
console.log(thirdMax(nums));
// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var len = nums.length;

  var result = [1];
  for (var i = 1; i < len; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  var tempArr2 = [];
  tempArr2[len - 1] = 1;
  for (var i = len - 2; i >= 0; i--) {
    tempArr2[i] = tempArr2[i + 1] * nums[i + 1];
  }

  for (var i = 0; i < len; i++) {
    result[i] *= tempArr2[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
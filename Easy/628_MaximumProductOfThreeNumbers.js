// https://leetcode.com/problems/maximum-product-of-three-numbers/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort(function (x1, x2) {
    return x2 - x1;
  });
  var len = nums.length;
  var result = nums[0] * nums[1] * nums[2];
  result = Math.max(result, nums[len - 1] * nums[len - 2] * nums[len - 3]);
  result = Math.max(result, nums[0] * nums[len - 1] * nums[len - 2]);
  result = Math.max(result, nums[0] * nums[1] * nums[len - 1]);
  if (result === -0) result = 0;
  return result;
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 4, 3]));
console.log(maximumProduct([-4, -3, -2, -1, 60]));
console.log(maximumProduct([-2, -1, 0, 60]));
console.log(maximumProduct([-1, -2, 1, 2, 3]));
console.log(maximumProduct([-4, -3, -2, -1]));
console.log(maximumProduct([-2, 0, 60]));
console.log(maximumProduct([1, 2, 3, 4]));
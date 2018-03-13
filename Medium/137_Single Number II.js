// https://leetcode.com/problems/single-number-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  nums.sort((x1, x2) => x1 - x2);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

console.log(singleNumber([3, 3, 1, 3, 1, 1, 2]));
console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]));
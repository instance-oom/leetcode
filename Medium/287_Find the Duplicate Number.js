// https://leetcode.com/problems/find-the-duplicate-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    for (j; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        return nums[i];
      }
    }
  }
};
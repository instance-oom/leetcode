// https://leetcode.com/problems/non-decreasing-array/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let inPossCount = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      inPossCount++;
      if (inPossCount === 2) {
        return false;
      }
      if (i !== 1 && i !== nums.length - 1) {
        if (nums[i - 1] > nums[i + 1] && nums[i] < nums[i - 2]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility([4, 2, 1]));
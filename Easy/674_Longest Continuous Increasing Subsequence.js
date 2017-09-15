// https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  var len = nums.length;
  if (len === 0) return 0;
  var result = 1;
  var temp = 1;
  for (var i = 0; i < len; i++) {
    if (nums[i] < nums[i + 1]) {
      temp++;
    } else {
      result = Math.max(result, temp);
      temp = 1;
      if (result >= len - i) {
        return result;
      }
    }
  }
  return Math.max(result, temp);
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1, 3, 5, 2, 4, 6, 7, 8, 1, 3, 6]));
console.log(findLengthOfLCIS([]));
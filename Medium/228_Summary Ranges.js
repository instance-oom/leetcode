// https://leetcode.com/problems/summary-ranges/description/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums || nums.length === 0) return nums;
  let res = [];
  let min = nums[0];
  let temp = min;
  for (let i = 1; i < nums.length; i++) {
    temp++;
    if (nums[i] !== temp) {
      if (nums[i - 1] === min) {
        res.push(min.toString());
      } else {
        res.push(`${min}->${nums[i - 1]}`)
      }
      min = nums[i];
      temp = min;
    }
  }
  if (nums[nums.length - 1] === min) {
    res.push(min.toString());
  } else {
    res.push(`${min}->${nums[nums.length - 1]}`)
  }
  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9, 11]));
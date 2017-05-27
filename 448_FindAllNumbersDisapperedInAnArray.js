// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/?tab=Description

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  if (!nums || !nums.length) return [];
  var temp = [];
  for (var num of nums) {
    temp[num - 1] = num;
  }
  var result = [];
  for (var i = 1; i <= nums.length; i++) {
    if (!temp[i - 1]) result.push(i);
  }
  return result;
};

var nums = [1, 1];
console.log(findDisappearedNumbers(nums));
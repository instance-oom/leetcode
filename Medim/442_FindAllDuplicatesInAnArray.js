// https://leetcode.com/problems/find-all-duplicates-in-an-array/#/description

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var obj = {};
  var result = [];
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    var num = nums[i];
    if (obj[num] === undefined) {
      obj[num] = num;
      continue;
    }
    if (obj[num] !== undefined) {
      result.push(num);
    }
  }
  return result;
};

var nums = [1, 2, 1, 3, 2, 4];
console.log(findDuplicates(nums));

nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums));

// https://leetcode.com/problems/longest-harmonious-subsequence/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 0;
    obj[nums[i]]++;
  }
  var keys = Object.keys(obj);
  var keyLength = keys.length;
  var max = 0;
  for (var j = 0; j < keyLength; j++) {
    var base = keys[j];
    var base1 = base - 0 + 1;
    if (!obj[base1]) {
      continue;
    }
    var temp = obj[base] + obj[base1];
    if (temp > max) max = temp;
  }
  return max;
};

var nums = [1, 3, 2, 2, 5, 2, 3, 7, 2];
console.log(findLHS(nums));

nums = [1, 1, 1, 1];
console.log(findLHS(nums));

nums = [1, 1, 1, 1, 3];
console.log(findLHS(nums));
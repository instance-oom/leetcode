// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var bakNums = [].concat(nums);
  nums.sort(function (x, y) { return x - y });
  if (bakNums.join('') === nums.join('')) return 0;

  var left = 0;
  var right = nums.length;
  for (var i = 0; i < right; i++) {
    if (bakNums[i] === nums[i]) continue;
    left = i;
    break;
  }
  for (var j = right - 1; j > left; j--) {
    if (bakNums[j] === nums[j]) continue;
    right = j;
    break;
  }
  return right - left + 1;
};

var nums = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(nums));
nums = [2];
console.log(findUnsortedSubarray(nums));
nums = [2, 1];
console.log(findUnsortedSubarray(nums));
nums = [1, 2, 3, 4, 5];
console.log(findUnsortedSubarray(nums));
nums = [9, 2, 3, 4, 1, 2, 3, 1, 100, 101, 102, 103];
console.log(findUnsortedSubarray(nums));
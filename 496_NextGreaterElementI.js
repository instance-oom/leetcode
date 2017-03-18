// https://leetcode.com/problems/next-greater-element-i/#/description

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  var length = findNums.length;
  var numsLength = nums.length;
  for (var i = 0; i < length; i++) {
    var j = nums.indexOf(findNums[i]);
    var finded = false;
    for (j; j < numsLength; j++) {
      if (findNums[i] < nums[j]) {
        findNums[i] = nums[j];
        finded = true;
        break;
      }
    }
    !finded && (findNums[i] = -1);
  }
  return findNums;
};

var nums1 = [4, 1, 2];
var nums2 = [1, 3, 4, 2];
console.log(`$[${nums1}] & [${nums2}] => [${nextGreaterElement(nums1, nums2)}]`);

nums1 = [2, 4], nums2 = [1, 2, 3, 4];
console.log(`$[${nums1}] & [${nums2}] => [${nextGreaterElement(nums1, nums2)}]`);

// https://leetcode.com/problems/intersection-of-two-arrays-ii/#/description

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var sortFunc = function (item1, item2) {
    return item1 - item2;
  };
  nums1.sort(sortFunc);
  nums2.sort(sortFunc);
  var num1Length = nums1.length;
  var num2Length = nums2.length;
  var i = j = 0;
  var result = [];
  while (i < num1Length && j < num2Length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
      continue;
    }
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};

var nums1 = [1, 2, 3, 3, 4, 1, 2];
var nums2 = [3, 4, 3];
console.log(intersect(nums1, nums2));
// https://leetcode.com/problems/intersection-of-two-arrays/?tab=Description

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];
  var obj = {};
  var num1Length = nums1.length;
  for (var i = 0; i < num1Length; i++) {
    if (obj[nums1[i]]) continue;
    obj[nums1[i]] = { v: 1 };
  }
  var result = [];
  var nums2Length = nums2.length;
  for (var j = 0; j < nums2Length; j++) {
    if (!obj[nums2[j]] || obj[nums2[j]].v !== 1) continue;
    result.push(nums2[j]);
    obj[nums2[j]].v = 2;
  }
  return result;
};

var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
console.log(intersection(nums1, nums2));
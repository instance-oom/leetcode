// https://leetcode.com/problems/merge-sorted-array/#/description


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var len = m + n - 1;
  var nums1Flag = m - 1;
  var nums2Flag = n - 1;
  while (nums1Flag >= 0 && nums2Flag >= 0) {
    if (nums1[nums1Flag] !== undefined && nums1[nums1Flag] > nums2[nums2Flag]) {
      nums1[len] = nums1[nums1Flag];
      nums1[nums1Flag] = undefined;
      nums1Flag--;
    } else {
      nums1[len] = nums2[nums2Flag];
      nums2Flag--;
    }
    len--;
  }
  while (nums1Flag >= 0) {
    nums1[len] = nums1[nums1Flag];
    nums1Flag--;
    len--;
  }
  while (nums2Flag >= 0) {
    nums1[len] = nums2[nums2Flag];
    nums2Flag--;
    len--;
  }
};

var nums1 = [1, 3, 5, 7];
var nums2 = [0, 2, 6];
merge(nums1, 4, nums2, 3);
console.log(nums1);

nums1 = [-1, 3, 5, 7];
nums2 = [-1, 3, 6, 8, 9];
merge(nums1, 4, nums2, 5);
console.log(nums1);

// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	nums.sort((x1, x2) => x2 - x1);
	return nums[k - 1];
};
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/#/description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  var build = function (tempNums, left, right) {
    if (left > right) return null;
    var mid = Math.floor((left + right) / 2);
    var root = new TreeNode(tempNums[mid]);
    root.left = build(tempNums, left, mid - 1);
    root.right = build(tempNums, mid + 1, right);
    return root;
  }
  return build(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST([1, 2, 3, 4, 5]));
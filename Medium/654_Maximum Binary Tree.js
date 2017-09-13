// https://leetcode.com/problems/maximum-binary-tree/description/


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
var constructMaximumBinaryTree = function (nums) {
  var len = nums.length;
  if (len === 0) return null;
  var max = nums[0];
  var maxIndex = 0;
  for (var i = 1; i < len; i++) {
    if (max < nums[i]) {
      max = nums[i];
      maxIndex = i;
    }
  }
  var tree = new TreeNode(max);
  var leftNums = nums.splice(0, maxIndex);
  if (leftNums.length > 0) {
    tree.left = constructMaximumBinaryTree(leftNums);
  }
  var rightNums = nums.splice(1);
  if (rightNums.length > 0) {
    tree.right = constructMaximumBinaryTree(rightNums);
  }
  return tree;
};


var nums = [3, 2, 1, 6, 0, 5];
console.log(constructMaximumBinaryTree(nums));
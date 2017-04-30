// https://leetcode.com/problems/sum-of-left-leaves/?tab=Description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  if (root.left && !root.left.right && !root.left.left) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

var tree = {
  val: 3,
  left: { val: 9, left: { val: 1 }, right: { val: 2 } },
  right: {
    val: 20,
    left: { val: 15 },
    right: {
      val: 7,
      left: { val: 3 }
    }
  }
};

console.log(sumOfLeftLeaves(tree));
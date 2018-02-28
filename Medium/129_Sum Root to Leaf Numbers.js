// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

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
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let doSum = (node, tempSum) => {
    if (!node) {
      return 0;
    }
    tempSum = tempSum * 10 + node.val;
    if (!node.left && !node.right) {
      return tempSum;
    }
    return doSum(node.left, tempSum) + doSum(node.right, tempSum);
  }

  let result = doSum(root, 0);
  return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(sumNumbers(root));
// https://leetcode.com/problems/symmetric-tree/#/description

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  var isSame = function (lNode, rNode) {
    if (lNode === null && rNode === null) return true;
    if (lNode !== null && rNode !== null) {
      return (lNode.val === rNode.val) && isSame(lNode.left, rNode.right) && isSame(lNode.right, rNode.left);
    }
    return false;
  }

  return isSame(root.left, root.right);
};


var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);
console.log(isSymmetric(tree));
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/#/description

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  var result = [];
  var getDeepValues = function (node, depth) {
    if (!node) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(node.val);
    getDeepValues(node.left, depth + 1);
    getDeepValues(node.right, depth + 1);
  }
  getDeepValues(root, 0);
  return result.reverse();
};

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.right = new TreeNode(4);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrderBottom(root));
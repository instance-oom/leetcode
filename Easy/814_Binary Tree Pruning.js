// https://leetcode.com/problems/binary-tree-pruning/description/

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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) return root;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) {
    root = null;
  }
  return root;
};

var root = new TreeNode(1);
root.right = new TreeNode(0);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);
console.log(JSON.stringify(pruneTree(root)));

var root = new TreeNode(1);
root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);
console.log(JSON.stringify(pruneTree(root)));
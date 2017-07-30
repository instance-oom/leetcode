// https://leetcode.com/problems/minimum-depth-of-binary-tree/tabs/description

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
var minDepth = function (root) {
  var min;

  var getPath = function (node, depth) {
    if (!node || (min !== undefined && depth > min)) return;
    var tempPath = depth + 1;
    if (!node.left && !node.right) {
      if (!min || min > tempPath) min = tempPath;
      return;
    }
    getPath(node.left, tempPath);
    getPath(node.right, tempPath);
  }

  getPath(root, 0);
  return min || 0;
};

var root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

console.log(minDepth(root));

console.log(minDepth(null));
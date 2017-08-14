// https://leetcode.com/problems/binary-tree-paths/description/

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  var paths = [];

  var getPath = function (node, path) {
    if (!node) return;
    var tempPath = path ? path += '->' + node.val : node.val.toString();
    if (node.left) {
      getPath(node.left, tempPath);
    }
    if (node.right) {
      getPath(node.right, tempPath);
    }
    if (!node.left && !node.right) {
      paths.push(tempPath);
      return;
    }
  }

  getPath(root);
  return paths;
};

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.left.right = new TreeNode(4);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(binaryTreePaths(root));
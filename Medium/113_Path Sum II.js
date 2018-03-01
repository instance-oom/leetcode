// https://leetcode.com/problems/path-sum-ii/description/

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let result = [];

  var getPath = function (node, parent, path) {
    if (!node) return;
    path.push(node.val);
    var tempSum = parent + node.val;
    if (!node.left && !node.right) {
      if (tempSum === sum) {
        result.push(path);
      }
      return;
    }
    getPath(node.left, tempSum, [].concat(path));
    getPath(node.right, tempSum, [].concat(path));
  }
  getPath(root, 0, []);

  return result;
};

var root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

console.log(pathSum(root, 22));

// root.right.right.left = new TreeNode(-3);
// console.log(pathSum(root, 23));
// https://leetcode.com/problems/path-sum/tabs/description

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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  var pathSums = [];
  var getPath = function (node, parent) {
    if (!node) return;
    var tempPath = parent + node.val;
    if (!node.left && !node.right) {
      pathSums.push(tempPath);
      return;
    }
    getPath(node.left, tempPath);
    getPath(node.right, tempPath);
  }

  getPath(root, 0);
  return pathSums.indexOf(sum) !== -1;
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

console.log(hasPathSum(root, 22));

root.right.right.left = new TreeNode(-3);
console.log(hasPathSum(root, 23));

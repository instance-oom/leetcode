// https://leetcode.com/problems/binary-tree-tilt/#/description

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
var findTilt = function (root) {
  var sum = 0;
  var tilt = function (node) {
    if (!node) return 0;
    var left = tilt(node.left);
    var right = tilt(node.right);
    sum += Math.abs(left - right);
    return left + right + node.val;
  }
  tilt(root);
  return sum;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(findTilt(root));

var root2 = new TreeNode(3);
root2.left = new TreeNode(1);
root2.left.right = new TreeNode(2);
root2.right = new TreeNode(5);
root2.right.left = new TreeNode(4);
console.log(findTilt(root2));
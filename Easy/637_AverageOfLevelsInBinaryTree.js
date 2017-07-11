// https://leetcode.com/problems/average-of-levels-in-binary-tree/#/description

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  var obj = {};

  var traverse = function (node, depth) {
    if (!node) return;

    if (obj[depth] === undefined) {
      obj[depth] = {
        sum: 0,
        count: 0
      };
    }
    obj[depth].sum += node.val;
    obj[depth].count++;

    depth++;
    traverse(node.left, depth);
    traverse(node.right, depth);
  }

  traverse(root, 0);

  var keys = Object.keys(obj);
  var result = [];
  for (var i = 0; i < keys.length; i++) {
    result[i] = obj[keys[i]].sum / obj[keys[i]].count;
  }
  return result;
};

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(averageOfLevels(root));

root.left.left = new TreeNode(4);
console.log(averageOfLevels(root));

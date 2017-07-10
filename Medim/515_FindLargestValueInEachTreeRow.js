// https://leetcode.com/problems/find-largest-value-in-each-tree-row/#/description

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
var largestValues = function (root) {
  if (!root) return [];
  var obj = {};
  var treeToObj = function (node, deepth) {
    if (obj[deepth] === undefined) {
      obj[deepth] = node.val;
    } else {
      if (obj[deepth] < node.val) {
        obj[deepth] = node.val;
      }
    }
    if (node.left) {
      treeToObj(node.left, deepth + 1);
    }
    if (node.right) {
      treeToObj(node.right, deepth + 1);
    }
  }
  treeToObj(root, 0);
  var keys = Object.keys(obj);
  var result = [];
  for (var key of keys) {
    result[key] = obj[key];
  }
  return result;
};

var root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(largestValues(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.left.right = new TreeNode(8);
console.log(largestValues(root));

root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);
console.log(largestValues(root));

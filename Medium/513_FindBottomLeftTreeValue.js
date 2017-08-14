// https://leetcode.com/problems/find-bottom-left-tree-value/#/description

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
var findBottomLeftValue = function (root) {
  var obj = {};
  var treeToObj = function (node, deepth) {
    if (!obj[deepth]) obj[deepth] = [];
    obj[deepth].push(node.val);
    if (node.left) {
      treeToObj(node.left, deepth + 1);
    } else {
      obj[deepth + 1] = obj[deepth + 1] || [];
      obj[deepth + 1].push(null);
    }
    if (node.right) {
      treeToObj(node.right, deepth + 1);
    } else {
      obj[deepth + 1] = obj[deepth + 1] || [];
      obj[deepth + 1].push(null);
    }
  }
  treeToObj(root, 0);
  var keys = Object.keys(obj);
  var bottomRow = obj[keys.length - 2];
  for (var i = 0; i < bottomRow.length; i++) {
    if (bottomRow[i] === null) continue;
    return bottomRow[i];
  }
};

var root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(findBottomLeftValue(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.left.right = new TreeNode(8);
console.log(findBottomLeftValue(root));

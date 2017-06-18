// https://leetcode.com/problems/construct-string-from-binary-tree/#/description

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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  var str = '';
  if (!t) return str;
  str = t.val;
  if (t.left) {
    str += '(' + tree2str(t.left) + ')';
  }
  if (t.right) {
    if (!t.left) str += '()';
    str += '(' + tree2str(t.right) + ')';
  }
  return str.toString();
};

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
console.log(tree2str(tree));

tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(4);
console.log(tree2str(tree));

tree = new TreeNode(1);
console.log(tree2str(tree));

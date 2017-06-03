// https://leetcode.com/problems/invert-binary-tree/#/description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  var temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};

var tree = {
  val: 4,
  left: { val: 2, left: { val: 1 }, right: { val: 3 } },
  right: { val: 7, left: { val: 6 }, right: { val: 9 } }
}

console.log(invertTree([]));
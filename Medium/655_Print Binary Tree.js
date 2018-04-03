// https://leetcode.com/problems/print-binary-tree/description/

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
 * @return {string[][]}
 */
var printTree = function (root) {
  let getDepth = function (node) {
    if (!node) return 0;
    return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
  }

  let fillNode = function (res, node, dep, pos, totalHeight) {
    if (!node) return;
    res[dep - 1][pos] = node.val.toString();
    fillNode(res, node.left, dep + 1, pos - Math.pow(2, (totalHeight - dep - 1)), totalHeight);
    fillNode(res, node.right, dep + 1, pos + Math.pow(2, (totalHeight - dep - 1)), totalHeight);
  }

  let depth = getDepth(root);
  let width = Math.pow(2, depth) - 1;
  let result = [];
  for (let i = 0; i < depth; i++) {
    result[i] = [];
    for (let j = 0; j < width; j++) {
      result[i][j] = '';
    }
  }
  fillNode(result, root, 1, Math.floor(width / 2), depth);
  return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right = new TreeNode(3);
console.log(printTree(root));
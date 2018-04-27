// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || !p || !q) return null;

  if (Math.max(p.val, q.val) < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (Math.min(p.val, q.val) > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};

var root = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
var root2 = JSON.parse(JSON.stringify(root));

console.log(lowestCommonAncestor(root, new TreeNode(2), new TreeNode(8)));
console.log('---------------------------');
console.log(lowestCommonAncestor(root2, new TreeNode(2), new TreeNode(4)));
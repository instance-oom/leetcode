// https://leetcode.com/problems/merge-two-binary-trees/#/description

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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  var t3 = new TreeNode(t1.val + t2.val);
  t3.left = mergeTrees(t1.left, t2.left);
  t3.right = mergeTrees(t1.right, t2.right);

  return t3;
};

var tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(5);

var tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.right.right = new TreeNode(7);

console.log(JSON.stringify(mergeTrees(tree1, tree2)));
// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

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
var preorderTraversal = function (root) {
  let result = [];
  if (!root) return result;
  let stack = [root];
  while (stack.length !== 0) {
    let temp = stack[stack.length - 1];
    stack.pop();
    result.push(temp.val);
    if (temp.right) stack.push(temp.right);
    if (temp.left) stack.push(temp.left);
  }
  return result;
};

var root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(preorderTraversal(root));

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right = new TreeNode(4);
root.right.left = new TreeNode(5);
console.log(preorderTraversal(root));
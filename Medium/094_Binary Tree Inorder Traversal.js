// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
var inorderTraversal = function (root) {
  let inOrder = (node) => {
    let result = [];
    if (node) {
      result = result.concat(inOrder(node.left));
      result.push(node.val);
      result = result.concat(inOrder(node.right));
    }
    return result;
  }

  let res = inOrder(root);
  return res;
};

var root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(inorderTraversal(root));
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder || !postorder) return null;

  let buildTempTree = function (tempInOrder, inS, inE, tempPostOrder, postS, postE) {
    if (inS > inE || postS > postE) return null;
    let tempRoot = new TreeNode(postorder[postE]);
    let i = inS;
    for (i; i < tempInOrder.length; i++) {
      if (tempInOrder[i] === tempRoot.val) break;
    }
    tempRoot.left = buildTempTree(tempInOrder, inS, i - 1, tempPostOrder, postS, postS + i - inS - 1);
    tempRoot.right = buildTempTree(tempInOrder, i + 1, inE, tempPostOrder, postS + i - inS, postE - 1);
    return tempRoot;
  }

  var root = buildTempTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
  return root;
};

var inorder = [9, 3, 15, 20, 7];
var postorder = [9, 15, 7, 20, 3];
console.log(JSON.stringify(buildTree(inorder, postorder)));
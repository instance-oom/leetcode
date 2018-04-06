// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder || !inorder) return null;

  let buildTempTree = function (tempPreOrder, preS, preE, tempInOrder, inS, inE) {
    if (preS > preE || inS > inE) return null;
    let tempRoot = new TreeNode(tempPreOrder[preS]);
    let rootIndex = 0;
    for (let i = inS; i <= inE; i++) {
      if (tempInOrder[i] === tempRoot.val) {
        rootIndex = i;
        break;
      }
    }
    let len = rootIndex - inS;
    tempRoot.left = buildTempTree(tempPreOrder, preS + 1, preS + len, tempInOrder, inS, rootIndex - 1);
    tempRoot.right = buildTempTree(tempPreOrder, preS + len + 1, preE, tempInOrder, rootIndex + 1, inE);
    return tempRoot;
  }

  var root = buildTempTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
  return root;
};

console.log(JSON.stringify(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
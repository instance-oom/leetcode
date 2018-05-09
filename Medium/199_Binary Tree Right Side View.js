// https://leetcode.com/problems/binary-tree-right-side-view/description/

const { TreeNode } = require('./../common/mode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {

  let treeToArray = (node, depth, arr) => {
    if (!node) return;
    if (!arr[depth]) {
      arr[depth] = [];
    }
    treeToArray(node.left, depth + 1, arr);
    arr[depth].push(node.val);
    treeToArray(node.right, depth + 1, arr);
  }

  let arr = [];
  treeToArray(root, 0, arr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].pop());
  }
  return result;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
console.log(rightSideView(root));
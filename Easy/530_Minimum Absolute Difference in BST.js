// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/

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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let result = Number.MAX_SAFE_INTEGER;
  let preVal = -1;
  let stack = [];
  let tempNode = root;
  while (tempNode || stack.length > 0) {
    while (tempNode) {
      stack.push(tempNode);
      tempNode = tempNode.left;
    }
    tempNode = stack[stack.length - 1];
    stack.pop();
    if (preVal !== -1) {
      result = Math.min(result, tempNode.val - preVal);
    }
    preVal = tempNode.val;
    tempNode = tempNode.right;
  }
  return result;
};

var root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
console.log(getMinimumDifference(root));
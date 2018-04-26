// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let tempNode = root;
  let stack = [];
  while (tempNode || stack.length > 0) {
    while (tempNode) {
      stack.push(tempNode);
      tempNode = tempNode.left;
    }
    tempNode = stack[stack.length - 1];
    stack.pop();
    count++;
    if (count === k) {
      return tempNode.val;
    }
    tempNode = tempNode.right;
  }
  return 0;
};

var root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
console.log(kthSmallest(root, 2));
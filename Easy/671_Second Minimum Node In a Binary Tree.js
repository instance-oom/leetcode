// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/

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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  var arr = [];

  var find = function (node) {
    if (!node) return;
    arr.push(node.val);
    find(node.left);
    find(node.right);
  }
  find(root);

  arr.sort(function (x, y) {
    return x - y;
  });

  var len = arr.length;
  if (arr[0] === arr[len - 1]) return -1;
  var min = arr[0];
  for (var i = 1; i < len; i++) {
    if (arr[i] > min) {
      return arr[i];
    }
  }
  return -1;
};

var root = {
  val: 2,
  left: { val: 2, left: null, right: null },
  right: {
    val: 5,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
}

console.log(findSecondMinimumValue(root));

var root = {
  val: 2,
  left: { val: 2, left: null, right: null },
  right: { val: 2, left: null, right: null }
}
console.log(findSecondMinimumValue(root));

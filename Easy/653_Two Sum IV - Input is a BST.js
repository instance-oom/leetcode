// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  var inOrder = function (node) {
    var result = [];
    if (node) {
      result = result.concat(inOrder(node.left));
      result.push(node.val);
      result = result.concat(inOrder(node.right));
    }
    return result;
  }
  var nums = inOrder(root);
  var i = 0, j = nums.length - 1;
  while (i < j) {
    var sum = nums[i] + nums[j];
    if (sum > k) {
      j--
    } else if (sum === k) {
      return true;
    } else {
      i++;
    }
  }
  return false;
};

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(findTarget(root, 9));
console.log(findTarget(root, 12));
console.log(findTarget(root, 20));

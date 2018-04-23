// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ergodic = (result, node, depth) => {
    if (!node) return;
    if (result[depth] === undefined) {
      result[depth] = [node.val];
    } else {
      result[depth].push(node.val);    
    }
    ergodic(result, node.left, depth + 1);
    ergodic(result, node.right, depth + 1);
  }

  let result = [];
  ergodic(result, root, 0);
  return result;
};

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrder(root));
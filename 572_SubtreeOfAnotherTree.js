// https://leetcode.com/problems/subtree-of-another-tree/#/description


//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  var preOrder = function (node) {
    var result = '';
    if (node) {
      result += 'N' + node.val;
      result += preOrder(node.left);
      result += preOrder(node.right);
    } else {
      result += 'NN';
    }
    return result;
  }
  var sp = preOrder(s);
  var tp = preOrder(t);
  return sp.indexOf(tp) !== -1;
};

var s = new TreeNode(3);
s.left = new TreeNode(4);
s.right = new TreeNode(5);
s.left.left = new TreeNode(1);
s.left.right = new TreeNode(2);

var t = new TreeNode(4);
t.left = new TreeNode(1);
t.right = new TreeNode(2);

console.log(isSubtree(s, t));

t.left.left = new TreeNode(0);
console.log(isSubtree(s, t));

s = new TreeNode(1);
s.left = new TreeNode(2);
s.right = new TreeNode(3);

t = new TreeNode(1);
t.left = new TreeNode(2);
console.log(isSubtree(s, t));

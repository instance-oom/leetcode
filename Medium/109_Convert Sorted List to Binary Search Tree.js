// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {

  var nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  var build = function (tempNums, left, right) {
    if (left > right) return null;
    var mid = Math.floor((left + right) / 2);
    var root = new TreeNode(tempNums[mid]);
    root.left = build(tempNums, left, mid - 1);
    root.right = build(tempNums, mid + 1, right);
    return root;
  }
  return build(nums, 0, nums.length - 1);
};
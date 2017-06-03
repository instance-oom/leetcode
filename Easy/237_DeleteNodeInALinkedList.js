// https://leetcode.com/problems/delete-node-in-a-linked-list/#/description

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  if (!node || !node.next) retun;
  node.val = node.next.val;
  node.next = node.next.next;
};

var list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }
}
var node = list.next;
deleteNode(node);
console.log(list);
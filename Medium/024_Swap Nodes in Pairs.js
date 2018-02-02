// https://leetcode.com/problems/swap-nodes-in-pairs/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let tempHead = new ListNode(0);
  tempHead.next = head;
  let node1 = tempHead;
  let node2 = head;
  let nextStart;
  while (node2 && node2.next) {
    nextStart = node2.next.next;
    node2.next.next = node2;
    node1.next = node2.next;
    node2.next = nextStart;
    node1 = node2;
    node2 = node2.next;
  }
  return tempHead.next;
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(JSON.stringify(swapPairs(head)));
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = head;
  let len = 0;
  while (temp) {
    len++;
    temp = temp.next;
  }
  if (n === len) {
    return head.next;
  }
  temp = head;
  let tartget = len - n - 1;
  for (let i = 0; i < len; i++) {
    if (i === tartget) {
      if (temp.next && temp.next.next) {
        temp.next = temp.next.next;
      } else {
        temp.next = null;
      }
    } else {
      temp = temp.next;
    }
  }
  return head;
};

let head = new ListNode(1);
let temp = head;
for (let i = 2; i <= 5; i++) {
  temp.next = new ListNode(i);
  temp = temp.next;
}
console.log(removeNthFromEnd(head, 2));
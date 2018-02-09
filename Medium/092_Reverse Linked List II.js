// https://leetcode.com/problems/reverse-linked-list-ii/description/

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head || m === n) return head;
  let extraNode = new ListNode(0);
  extraNode.next = head;
  let preNode = extraNode;
  for (let i = 0; i < m - 1; i++) {
    preNode = preNode.next;
  }
  let tempStart = preNode.next;
  for (let i = m; i < n; i++) {
    let temp = tempStart.next;
    tempStart.next = temp.next;
    temp.next = preNode.next;
    preNode.next = temp;
  }
  return extraNode.next;
};

let head = new ListNode(1);
let temp = head;
for (let i = 1; i <= 5; i++) {
  temp.next = new ListNode(i);
  temp = temp.next;
}
head = head.next;
console.log(JSON.stringify(reverseBetween(head, 2, 4)));
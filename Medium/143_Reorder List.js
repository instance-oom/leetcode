// https://leetcode.com/problems/reorder-list/description/

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return;
  let len = 0;
  let tArr = [];
  let temp = head;
  while (temp) {
    len++;
    tArr[len] = temp;
    temp = temp.next;
  }
  let mid = Math.floor(len / 2);
  temp = head;
  for (let i = 0; i < mid; i++) {
    let next = temp.next;
    temp.next = tArr[len - i];
    temp.next.next = next;
    temp = temp.next.next;
  }
  temp.next = null;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
reorderList(head);
console.log(JSON.stringify(head));

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
reorderList(head);
console.log(JSON.stringify(head));
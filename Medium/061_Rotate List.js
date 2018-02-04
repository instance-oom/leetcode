// https://leetcode.com/problems/rotate-list/description/

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !k) return head;
  let len = 0;
  let temp = head;
  while (temp) {
    len++;
    temp = temp.next;
  }
  let rotateStep = k % len;
  if (rotateStep === 0) return head;

  temp = head;
  let part1Len = len - k;
  let i = 1;
  while (i < part1Len && temp.next) {
    i++;
    temp = temp.next;
  }

  let result = temp.next;
  let temp2 = temp;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = head;
  temp2.next = null;
  return result;
};

let head = new ListNode(1);
let temp = head;
for (let i = 2; i < 6; i++) {
  temp.next = new ListNode(i);
  temp = temp.next;
}
console.log(JSON.stringify(rotateRight(head, 5)));
console.log(JSON.stringify(rotateRight(head, 2)));

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
console.log(JSON.stringify(rotateRight(head2, 2000000000)));

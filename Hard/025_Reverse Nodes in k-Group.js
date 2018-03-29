// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

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
var reverseKGroup = function (head, k) {
  if (k <= 1 || !head) {
    return head;
  }
  let headStore = new ListNode(-1);
  headStore.next = head;
  let tempHeadStore = headStore;

  let tempHead = head;
  let len = 0;
  while (tempHead) {
    len++;
    tempHead = tempHead.next;
  }
  tempHead = head;

  while (len >= k) {
    let reverseHead = tempHeadStore.next;
    for (let i = 1; i < k; i++) {
      let temp = reverseHead.next;
      reverseHead.next = temp.next;
      temp.next = tempHeadStore.next;
      tempHeadStore.next = temp;
    }
    tempHeadStore = reverseHead;
    len = len - k;
  }
  head = headStore.next;
  return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(JSON.stringify(reverseKGroup(head, 2)));

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);
console.log(JSON.stringify(reverseKGroup(head2, 3)));
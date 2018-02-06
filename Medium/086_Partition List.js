// https://leetcode.com/problems/partition-list/description/

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let less = [];
  let more = [];
  let temp = head;
  while (temp) {
    if (temp.val < x) {
      less.push(temp.val)
    } else {
      more.push(temp.val);
    }
    temp = temp.next;
  }

  if (less.length === 0) {
    return head;
  }

  let result = new ListNode(less[0]);
  temp = result;
  for (let i = 1; i < less.length; i++) {
    temp.next = new ListNode(less[i]);
    temp = temp.next;
  }
  for (let i = 0; i < more.length; i++) {
    temp.next = new ListNode(more[i]);
    temp = temp.next;
  }
  return result;
};

//1->4->3->2->5->2
var head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);
console.log(JSON.stringify(partition(head, 3)));
// https://leetcode.com/problems/remove-linked-list-elements/tabs/description

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var result;
  while (head && head.val === val) {
    head = head.next;
  }
  if (!head) {
    return null;
  }
  result = new ListNode(head.val);
  head = head.next;
  var temp = result;
  while (head) {
    if (head.val !== val) {
      temp.next = new ListNode(head.val);
      temp = temp.next;
    }
    head = head.next;
  }
  return result;
};

// 1 -- > 2 -- > 6 -- > 3 -- > 4 -- > 5 -- > 6
var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

console.log(JSON.stringify(removeElements(head, 6)));

// 1->1->6->3->1->5->6

var head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);
console.log(JSON.stringify(removeElements(head, 1)));

var head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
console.log(JSON.stringify(removeElements(head, 1)));

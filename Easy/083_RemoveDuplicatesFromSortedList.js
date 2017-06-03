// https://leetcode.com/problems/remove-duplicates-from-sorted-list/#/description

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  var pre = head;
  var current = head.next;
  while (current) {
    if (pre.val === current.val) {
      pre.next = current.next;
    } else {
      pre = current;
    }
    current = current.next;
  }
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var num1 = [1, 1, 1];
var num2 = [1, 1, 2, 3, 3];

var link1 = new ListNode(num1[0]);
var current1 = link1;
for (let i = 1; i < num1.length; i++) {
  let temp = new ListNode(num1[i]);
  current1.next = temp;
  current1 = temp;
}
console.log(deleteDuplicates(link1));

var link2 = new ListNode(num2[0]);
var current2 = link2;
for (let i = 1; i < num2.length; i++) {
  let temp = new ListNode(num2[i]);
  current2.next = temp;
  current2 = temp;
}
console.log(deleteDuplicates(link2));
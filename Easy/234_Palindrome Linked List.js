// https://leetcode.com/problems/palindrome-linked-list/description/

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr.join('') === arr.reverse().join('');
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head));
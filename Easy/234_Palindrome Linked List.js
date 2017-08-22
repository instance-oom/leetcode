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
  var arr = [head.val];
  head = head.next;
  var last = arr[0];
  var count = 1;
  while (head) {
    count++;
    if (head.val === last) {
      arr.pop();
    } else {
      arr.push(head.val);
    }
    last = arr[arr.length - 1];
    head = head.next;
  }
  console.log(arr);
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head));
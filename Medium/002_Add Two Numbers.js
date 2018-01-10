// https://leetcode.com/problems/add-two-numbers/description/

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var tempLink = new ListNode(-1);
  var result = tempLink;
  var carry = 0;
  while (l1 || l2) {
    var tempSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    if (tempSum > 9) {
      carry = 1;
      tempSum = tempSum % 10;
    } else {
      carry = 0;
    }
    var tempNode = new ListNode(tempSum);
    tempLink.next = tempNode;
    tempLink = tempLink.next;

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  if (carry === 1) {
    tempLink.next = new ListNode(carry);
  }

  return result.next;
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(9);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
l2.next.next.next = new ListNode(9);
console.log(JSON.stringify(addTwoNumbers(l1, l2)));
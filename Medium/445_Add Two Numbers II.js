// https://leetcode.com/problems/add-two-numbers-ii/description/

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
  var l1Arr = [];
  var head1 = l1;
  var len1 = 0;
  while (head1) {
    len1++;
    l1Arr.push(head1.val);
    head1 = head1.next;
  }
  l1Arr.reverse();

  var l2Arr = [];
  var head2 = l2;
  var len2 = 0;
  while (head2) {
    len2++;
    l2Arr.push(head2.val);
    head2 = head2.next;
  }
  l2Arr.reverse();

  var len = Math.max(len1, len2);
  var carry = 0;
  var lastNode;
  for (var i = 0; i < len; i++) {
    var val = (l1Arr[i] || 0) + (l2Arr[i] || 0) + carry;
    if (val > 9) {
      carry = 1;
      val = val % 10;
    } else {
      carry = 0;
    }
    var node = new ListNode(val);
    if (lastNode) {
      node.next = lastNode;
    }
    lastNode = node;
  }

  if (carry === 1) {
    var tempNode = new ListNode(1);
    tempNode.next = node;
    node = tempNode;
  }

  return node;

};

var l1 = new ListNode(9);
l1.next = new ListNode(5);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(JSON.stringify(addTwoNumbers(l1, l2)));
// https://leetcode.com/problems/merge-two-sorted-lists/#/description

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var head;
  if (l1.val > l2.val) {
    head = l2;
    l2 = l2.next;
  } else {
    head = l1;
    l1 = l1.next;
  }

  var temp = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }
  temp.next = l1 || l2;
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(8);
l1.next.next.next = new ListNode(10);

var l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(5);

var l3 = mergeTwoLists(l1, l2);
var list = '';
while (l3) {
  if (!list) {
    list = l3.val;
    continue;
  }
  list = `${list} -> ${l3.val}`;
  l3 = l3.next;
}
console.log(list);
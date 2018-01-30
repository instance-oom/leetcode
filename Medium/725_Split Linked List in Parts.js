// https://leetcode.com/problems/split-linked-list-in-parts/description/

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
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  var tempHead = root;
  var len = 0;
  while (tempHead) {
    len++;
    tempHead = tempHead.next;
  }

  var result = [];
  var average = Math.floor(len / k);
  var remainder = len % k;

  for (let i = 0; i < k; i++) {
    result.length++;
    result[i] = root;
    let end = average + (i < remainder);
    for (let j = 1; j < end; j++) {
      root = root.next;
    }
    if (root) {
      let t = root.next;
      root.next = null;
      root = t;
    }
  }
  return result;
};

var root = new ListNode(1);
var temp = root;
for (var i = 2; i <= 4; i++) {
  temp.next = new ListNode(i);
  temp = temp.next;
}
var k = 5;
console.log(splitListToParts(root, k));
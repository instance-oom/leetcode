// https://leetcode.com/problems/linked-list-random-node/description/

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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.size = 0;
  this.head = head;
  var node = head;
  while (node) {
    this.size++;
    node = node.next;
  }
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function () {
  var pos = parseInt(Math.random() * this.size, 10);
  var node = this.head;
  for (var i = 0; i < pos; i++) {
    node = node.next;
  }
  return node.val;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = Object.create(Solution).createNew(head)
* var param_1 = obj.getRandom()
*/

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
var solution = new Solution(head);

for (let i = 0; i < 5; i++) {
  console.log(solution.getRandom());
}
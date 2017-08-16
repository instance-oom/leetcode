// https://leetcode.com/problems/min-stack/description/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = [];
  this.minData = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.data.push(x);
  if (this.minData.length === 0 || (this.minData[this.minData.length - 1] >= x)) {
    this.minData.push(x);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  var x = this.data.pop();
  if (x === this.minData[this.minData.length - 1]) {
    this.minData.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  var num = this.data[this.data.length - 1];
  return num;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.minData[this.minData.length - 1];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/


var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());

// https://leetcode.com/problems/range-sum-query-immutable/#/description

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.obj = {};
  var length = nums.length;
  var sum = 0;
  for (var i = 0; i < length; i++) {
    sum += nums[i];
    this.obj[i] = sum;
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return i === 0 ? this.obj[j] : (this.obj[j] - this.obj[i - 1]);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);

console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));
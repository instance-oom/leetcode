// https://leetcode.com/problems/range-sum-query-mutable/description/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    this.sums[i] = this.sums[i - 1] + nums[i];
  }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  let sub = this.nums[i] - val;
  this.nums[i] = val;
  for (let j = i; j < this.sums.length; j++) {
    this.sums[j] -= sub;
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j] - this.sums[i] + this.nums[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

var nums = [1, 3, 5];
var obj = new NumArray(nums);
console.log(obj.sumRange(0, 2)); // 9
obj.update(1, 2)
console.log(obj.sumRange(0, 2)); // 8
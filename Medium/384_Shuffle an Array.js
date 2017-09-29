// https://leetcode.com/problems/shuffle-an-array/description/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums;
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function () {
  return this.original;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function () {
  var result = [].concat(this.original);
  var currentIndex = this.original.length;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    tempValue = result[currentIndex];
    result[currentIndex] = result[randomIndex];
    result[randomIndex] = tempValue;
  }
  return result;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = Object.create(Solution).createNew(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/

var solution = new Solution([1, 2, 3]);
console.log(solution.shuffle());
console.log(solution.reset());
console.log(solution.shuffle());
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var start = 0;
  var end = numbers.length;
  while (true) {
    var temp = numbers[start] + numbers[end];
    if (temp === target) break;
    if (temp < target) {
      start++;
    } else {
      end--;
    }
  }
  return [start, end];
};

var numbers = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(numbers, target));
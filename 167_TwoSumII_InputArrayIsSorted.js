// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var mid = target / 2;
  var tempArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > target) break;
    tempArr.push(numbers[i]);
  }
  console.log(tempArr);
};

var numbers = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(numbers, target));
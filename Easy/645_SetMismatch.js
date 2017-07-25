// https://leetcode.com/problems/set-mismatch/#/description

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  var obj = {};
  var len = nums.length;
  var dupNum, misNum;
  for (var i = 0; i < len; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = i;
    } else {
      dupNum = nums[i];
    }
  }

  for (var i = 1; i <= len; i++) {
    if (obj[i] === undefined) {
      misNum = i;
      break;
    }
  }

  return [dupNum, misNum];
};

var nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));

var nums = [1, 3, 4, 2, 1, 6];
console.log(findErrorNums(nums));

var nums = [3, 2, 3, 4, 6, 5];
console.log(findErrorNums(nums));

// https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  let result = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
};

// TODO: Time Limited

console.log(countSmaller([5, 2, 6, 1]));
// https://leetcode.com/problems/subsets/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]];
  for (let num of nums) {
    let len = result.length;
    for (let i = 0; i < len; i++) {
      let temp = [].concat(result[i]);
      temp.push(num);
      result.push(temp);
    }
  }
  return result;
};

var nums = [1, 2, 3];
console.log(subsets(nums));

var nums = [1, 2, 3, 4];
console.log(subsets(nums));
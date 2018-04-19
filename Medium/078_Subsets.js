// https://leetcode.com/problems/subsets/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function (nums) {
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

var subsets = function (nums) {
  let dfs = (tempRes, nums, start) => {
    if (start === nums.length) return [];
    let result = [];
    for (let i = start; i < nums.length; i++) {
      let temp = [].concat(tempRes);
      temp.push(nums[i]);
      result.push(temp);
      result = result.concat(dfs(temp, nums, i + 1));
    }
    return result;
  }

  let result = [[]].concat(dfs([], nums, 0));
  return result;
};

var nums = [1, 2, 3];
console.log(subsets(nums));

var nums = [1, 2, 3, 4];
console.log(subsets(nums));
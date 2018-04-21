// https://leetcode.com/problems/permutations/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

  let dfs = (nums, pos) => {
    let tempRes = [];
    if (pos === nums.length - 1) {
      tempRes.push([].concat(nums));
    } else {
      for (let i = pos; i < nums.length; i++) {
        [nums[pos], nums[i]] = [nums[i], nums[pos]];
        tempRes = tempRes.concat(dfs(nums, pos + 1));
        [nums[i], nums[pos]] = [nums[pos], nums[i]];
      }
    }
    return tempRes;
  }

  let result = dfs(nums, 0);
  return result;
};

console.log(permute([1, 2, 3]));
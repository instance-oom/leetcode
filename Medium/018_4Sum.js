// https://leetcode.com/problems/4sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort(function (x1, x2) {
    return x1 - x2;
  });
  let dupObj = {};
  let result = [];
  let len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let leftIndex = j + 1;
      let rightIndex = len - 1;
      while (leftIndex < rightIndex) {
        let sum = nums[i] + nums[j] + nums[leftIndex] + nums[rightIndex];
        if (sum === target) {
          let tempRes = [nums[i], nums[j], nums[leftIndex], nums[rightIndex]];
          let tempResStr = tempRes.join(',');
          if (!dupObj[tempResStr]) {
            result.push(tempRes);
            dupObj[tempResStr] = true;
          }
          leftIndex++;
          rightIndex--;
        } else if (sum < target) {
          leftIndex++;
        } else {
          rightIndex--;
        }
      }
    }
  }
  return result;
};

var S = [1, 0, -1, 0, -2, 2];
console.log(fourSum(S, 0));
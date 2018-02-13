// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let obj = {};
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num] === undefined) {
      obj[num] = 0;
      temp.push(num);
    }
    obj[num]++;
  }
  let index = 0;
  for (let i = 0; i < temp.length; i++) {
    let num = temp[i];
    let max = obj[num] > 2 ? 2 : obj[num];
    for (let j = 0; j < max; j++) {
      nums[index] = num;
      index++;
    }
  }
  nums.length = index;
  return index;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums), nums);
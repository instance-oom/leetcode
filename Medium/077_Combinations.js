// https://leetcode.com/problems/combinations/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let dfs = (tempRes, end, start, length) => {
    if (start === end) return [];
    let result = [];
    for (let i = start; i < end; i++) {
      let temp = [].concat(tempRes);
      temp.push(i);
      if (temp.length < k) {
        result = result.concat(dfs(temp, end, i + 1));
      } else if (temp.length === k) {
        result.push(temp);
      }
    }
    return result;
  }

  let result = dfs([], n + 1, 1, k);
  return result;
};

console.log(combine(4, 2));
console.log(combine(5, 3));
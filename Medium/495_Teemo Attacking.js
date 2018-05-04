// https://leetcode.com/problems/teemo-attacking/description/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let result = 0;
  let end = -1;
  for (let timeSerie of timeSeries) {
    let tempEnd = timeSerie + duration - 1;
    if (tempEnd > end) {
      result += Math.min(duration, tempEnd - end);
      end = tempEnd;
    }
  }
  return result;
};

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));
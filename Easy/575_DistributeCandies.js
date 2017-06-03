// https://leetcode.com/problems/distribute-candies/#/description

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  var length = candies.length;
  var tempObj = {};
  var count = 0;
  for (var i = 0; i < length; i++) {
    if (!tempObj[candies[i]]) {
      count++;
      tempObj[candies[i]] = 't';
    }
  }
  var half = length / 2;
  if (count > half) {
    return half;
  }
  return count;
};

var candies = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candies));

candies = [1, 1, 2, 3];
console.log(distributeCandies(candies));

candies = [1, 2, 3, 4, 5, 5];
console.log(distributeCandies(candies));
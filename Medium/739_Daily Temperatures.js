// https://leetcode.com/problems/daily-temperatures/description/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  var result = [];
  var length = temperatures.length;
  for (var i = 0; i < length; i++) {
    var j = i + 1;
    for (j; j < length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
    }
    result[i] = result[i] || 0;
  }

  return result;
};

var temperatures = [73, 74, 75, 71, 69, 72, 76, 73]; // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures(temperatures));
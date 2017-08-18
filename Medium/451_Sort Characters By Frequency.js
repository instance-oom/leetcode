// https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var obj = {};
  var characters = [];
  for (var i = 0; i < s.length; i++) {
    var temp = s[i];
    if (obj[temp] === undefined) {
      obj[temp] = 1;
      characters.push(temp);
    } else {
      obj[temp]++;
    }
  }

  characters.sort(function (x, y) {
    return obj[y] - obj[x];
  });
  var result = '';
  for (var char of characters) {
    var count = obj[char];
    for (var j = 0; j < count; j++) {
      result += char;
    }
  }
  return result;
};

console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));
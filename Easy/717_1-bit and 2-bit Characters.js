// https://leetcode.com/problems/1-bit-and-2-bit-characters/description/

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  var result;
  var i = 0;
  while (i < bits.length) {
    if (bits[i] === 0) {
      i++;
      result = true;
    } else {
      i += 2;
      result = false;
    }
  }
  return result;
};

var bits = [1, 0];
console.log(isOneBitCharacter(bits));

bits = [1, 0, 0];
console.log(isOneBitCharacter(bits));

bits = [1, 1, 1, 0]
console.log(isOneBitCharacter(bits));
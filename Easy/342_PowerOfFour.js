// https://leetcode.com/problems/power-of-four/#/description

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num === 1) return true;
  var binary = num.toString(2);
  if (!binary.startsWith(1)) return false;
  var removeZero = binary.replace(/0/g, '');
  if (removeZero.length !== 1) return false;
  var zeroNums = binary.length - removeZero.length;
  if (zeroNums > 0 && zeroNums % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(`1 => ${isPowerOfFour(1)}`);
console.log(`2 => ${isPowerOfFour(2)}`);
console.log(`4 => ${isPowerOfFour(4)}`);
console.log(`9 => ${isPowerOfFour(9)}`);
console.log(`15 => ${isPowerOfFour(15)}`);
console.log(`16384 => ${isPowerOfFour(16384)}`);
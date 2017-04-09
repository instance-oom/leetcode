// https://leetcode.com/problems/construct-the-rectangle/#/description

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  var sqrtValue = Math.floor(Math.sqrt(area));
  while (sqrtValue > 0) {
    if (area % sqrtValue === 0) {
      var Length = area / sqrtValue;
      return [Length, sqrtValue];
    }
    sqrtValue--;
  }
};

console.log(`4 => ${constructRectangle(4)}`);
console.log(`10 => ${constructRectangle(10)}`);
console.log(`500 => ${constructRectangle(500)}`);
console.log(`10,000,000 => ${constructRectangle(10000000)}`);
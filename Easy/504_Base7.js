// https://leetcode.com/problems/base-7/?tab=Description

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num === 0) return "0";
    var isNegative = num < 0;
    var arr = [];
    num = Math.abs(num);
    while (num > 0) {
        var temp = num % 7;
        arr.push(temp);
        num = Math.floor(num / 7);
    }
    var result = arr.reverse().join('');
    if (isNegative) result = '-' + result;
    return result;
};

console.log(`0 => ${convertToBase7(0)}`);
console.log(`1 => ${convertToBase7(1)}`);
console.log(`7 => ${convertToBase7(7)}`);
console.log(`100 => ${convertToBase7(100)}`);
console.log(`105 => ${convertToBase7(105)}`);
console.log(`-100 => ${convertToBase7(-100)}`);
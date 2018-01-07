// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], 'a'));
console.log(nextGreatestLetter(["c", "f", "j"], 'c'));
console.log(nextGreatestLetter(["c", "f", "j"], 'd'));
console.log(nextGreatestLetter(["c", "f", "j"], 'g'));
console.log(nextGreatestLetter(["c", "f", "j"], 'j'));
console.log(nextGreatestLetter(["c", "f", "j"], 'k'));
// https://leetcode.com/problems/find-anagram-mappings/description/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A, B) {
  var obj = {};
  for (var i = 0; i < B.length; i++) {
    obj[B[i]] = i;
  }

  var mapping = [];
  for (var j = 0; j < A.length; j++) {
    mapping[j] = obj[A[j]];
  }
  return mapping;
};

var A = [12, 28, 46, 32, 50];
var B = [50, 12, 32, 46, 28];
console.log(anagramMappings(A, B));

A = [12, 28, 46, 32, 50, 28];
B = [50, 28, 12, 32, 46, 28];
console.log(anagramMappings(A, B));

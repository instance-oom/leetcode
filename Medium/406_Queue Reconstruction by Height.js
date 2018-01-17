// https://leetcode.com/problems/queue-reconstruction-by-height/description/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort(function (p1, p2) {
    if (p1[0] === p2[0]) return p1[1] - p2[1];
    return p2[0] - p1[0];
  });

  var result = [];
  for (var i = 0; i < people.length; i++) {
    var tempP = people[i];
    result.splice(tempP[1], 0, tempP);
  }

  return result;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));  // [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
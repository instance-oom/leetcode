// https://leetcode.com/problems/find-duplicate-file-in-system/#/description

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  var pathLen = paths.length;
  var obj = {};
  for (var i = 0; i < pathLen; i++) {
    var tempArr = paths[i].split(' ');
    var tempLen = tempArr.length;

    var rootPath = tempArr[0];
    for (var j = 1; j < tempLen; j++) {
      var tempArr2 = tempArr[j].split('(');
      var fileName = rootPath + "/" + tempArr2[0];
      var fileContent = tempArr2[1];
      if (obj[fileContent] === undefined) obj[fileContent] = [fileName];
      else obj[fileContent].push(fileName);
    }
  }

  var result = [];
  for (var key in obj) {
    if (obj[key].length > 1)
      result.push(obj[key]);
  }
  return result;
};

var paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"];

console.log(findDuplicate(paths));
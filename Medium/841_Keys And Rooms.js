// https://leetcode-cn.com/contest/weekly-contest-86/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let keyFlags = { 0: true };
  let getKeys = (roomIndex) => {
    for (let key of rooms[roomIndex]) {
      if (keyFlags[key] === undefined) {
        keyFlags[key] = true;
        getKeys(key);
      }
    }
  }
  getKeys(0);
  for (let i = 0; i < rooms.length; i++) {
    if (keyFlags[i] !== true) {
      return false;
    }
  }
  return true;
};

var rooms = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms));

var rooms = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms));
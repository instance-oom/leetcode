// https://leetcode.com/problems/guess-number-higher-or-lower/#/description

// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
function guess(num) {
  if (num === 6) return 0;
  else if (num > 6) return -1;
  else return 1;
}


function guessNumber(n) {
  var lower = 1;
  var higher = n;
  var mid;
  var guessResult;
  while (higher >= lower) {
    mid = lower + Math.floor((higher - lower) / 2);
    guessResult = guess(mid);
    switch (guessResult) {
      case 1:
        lower = mid + 1;
        break;
      case -1:
        higher = mid - 1;
        break;
      case 0:
        return mid;
    }
  }
}

console.log(guessNumber(10));
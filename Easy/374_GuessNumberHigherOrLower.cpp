// https://leetcode.com/problems/guess-number-higher-or-lower/#/description

// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n)
    {
        int lower = 1;
        int higher = n;
        int mid;
        int guessResult;
        while (higher >= lower)
        {
            mid = lower + (higher - lower) / 2;
            guessResult = guess(mid);
            switch (guessResult)
            {
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
};
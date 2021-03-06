/* https://leetcode.com/problems/split-a-string-in-balanced-strings/ */

var balancedStringSplit = function (s) {
  let count = 0;
  let firstLetter, unbalance;
  let i = 0;

  while (i < s.length) {
    firstLetter = s[i];
    unbalance = 1;
    i++;
    while (unbalance) {
      if (s[i] == firstLetter) {
        unbalance++;
      } else {
        unbalance--;
      }
      i++;
    }
    count++;
  }

  return count;
};

/**
 * https://leetcode.com/problems/edit-distance/description/
 * https://leetcode.com/problems/edit-distance/solutions/6276572/three-solutions-top-down-bottom-up-itera-76ux/
72. Edit Distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 
Constraints:

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
 */

/**
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {number}
 */

function minDistance(word1, word2) {
  // return topDown(word1, word2)
  // return bottomUp(word1, word2)
  return iterative(word1, word2);
}

const iterative = (word1, word2) => {
  if (word1.length < word2.length) {
    [word1, word2] = [word2, word1];
  }

  let prev = new Array(word2.length + 1).fill(0);
  let curr = new Array(word2.length + 1).fill(0);

  for (let j = 0; j <= word2.length; j++) {
    prev[j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        curr[j] = prev[j - 1];
      } else {
        curr[j] = 1 + Math.min(prev[j], curr[j - 1], prev[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
  }

  return prev[word2.length];
};

const bottomUp = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;

  const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) memo[i][0] = i;
  for (let j = 0; j <= n; j++) memo[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        memo[i][j] =
          1 + Math.min(memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]);
      }
    }
  }

  return memo[m][n];
};

const topDown = (word1, word2) => {
  const memo = Array.from({ length: word1.length + 1 }, () =>
    Array(word2.length + 1).fill(-1)
  );

  const recursion = (i1, i2) => {
    if (memo[i1][i2] === -1) {
      if (i1 === 0) {
        memo[i1][i2] = i2;
      } else if (i2 === 0) {
        memo[i1][i2] = i1;
      } else {
        if (word1[i1 - 1] === word2[i2 - 1]) {
          memo[i1][i2] = recursion(i1 - 1, i2 - 1);
        } else {
          memo[i1][i2] =
            1 +
            Math.min(
              recursion(i1, i2 - 1),
              recursion(i1 - 1, i2),
              recursion(i1 - 1, i2 - 1)
            );
        }
      }
    }

    return memo[i1][i2];
  };

  return recursion(word1.length, word2.length);
};

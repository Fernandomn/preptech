/**
 * https://leetcode.com/problems/longest-common-subsequence/description/
 * https://leetcode.com/problems/longest-common-subsequence/solutions/6275819/two-solutions-by-fernamn-m4fz/
 * 1143. Longest Common Subsequence

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.


Example 1:
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:
1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
 * @param {string} text1 
 * @param {string} text2 
 * @returns {number}
 */

function longestCommonSubsequence(text1, text2) {
  // return recursiveSolution(text1, text2)
  return iterativeSolution(text1, text2);
}

const iterativeSolution = (text1, text2) => {
  let m = text1.length;
  let n = text2.length;
  let prev = new Array(n + 1).fill(0);
  let curr = new Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        curr[j] = 1 + prev[j - 1];
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
  }

  return prev[n];
};

const recursiveSolution = (text1, text2) => {
  const memo = Array.from({ length: text1.length + 1 }, () =>
    Array(text2.length + 1).fill(-1)
  );

  const recursive = (index1, index2) => {
    if (memo[index1][index2] == -1) {
      if (index1 == 0 || index2 == 0) {
        memo[index1][index2] = 0;
      } else if (text1[index1 - 1] == text2[index2 - 1]) {
        memo[index1][index2] = 1 + recursive(index1 - 1, index2 - 1);
      } else {
        memo[index1][index2] = Math.max(
          recursive(index1 - 1, index2),
          recursive(index1, index2 - 1)
        );
      }
    }

    return memo[index1][index2];
  };

  return recursive(text1.length, text2.length);
};

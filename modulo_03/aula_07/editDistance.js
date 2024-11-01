/**
 * https://leetcode.com/problems/edit-distance/description/
 * https://leetcode.com/problems/edit-distance/submissions/1439448464
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
 * @returns number
 */

function minDistance(word1, word2) {
    let memo = Array(word1.length + 1).fill(0).map(() => Array(word2.length + 1).fill(0))
    
    return evaluate(word1, word2, 0, 0, memo)
};

const evaluate = (word1, word2, i, j, memo) => {
    if (memo[i] && memo[i][j]) return memo[i][j]

    if (i > word1.length && j > word2.length) {
        return 0
    }
    if (i > word1.length) {
        return word2.length - j
    }
    if (j > word2.length) {
        return word1.length - i
    }

    if (word1[i] === word2[j]) {
        memo[i][j] = evaluate(word1, word2, i + 1, j + 1, memo)
    } else {
        memo[i][j] = 1 + Math.min(
            evaluate(word1, word2, i + 1, j, memo),
            evaluate(word1, word2, i, j + 1, memo),
            evaluate(word1, word2, i + 1, j + 1, memo)
        )
    }

    return memo[i][j]
}
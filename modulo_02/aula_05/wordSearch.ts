/**
 * https://leetcode.com/problems/word-search/description/
 * https://leetcode.com/problems/word-search/solutions/6315914/sliding-window-backtracking-and-pruning-v4iwo/
 * 79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 
Follow up: Could you use search pruning to make your solution faster with a larger board?
*/
/**
 *
 * @param {string[][]} board
 * @param {string} word
 * @returns {boolean}
 */
function exist(board: string[][], word: string): boolean {
  const m: number = board.length;
  const n: number = board[0].length;
  const l: number = word.length;

  const directions: [number, number][] = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const visited: boolean[][] = Array.from({ length: m }, () =>
    new Array(n).fill(false)
  );

  const boardCount: Record<string, number> = {};
  for (const row of board) {
    for (const char of row) {
      boardCount[char] = (boardCount[char] || 0) + 1;
    }
  }
  const wordCount: Record<string, number> = {};
  for (const char of word) {
    wordCount[char] = (wordCount[char] || 0) + 1;
  }
  for (const char in wordCount) {
    if (!boardCount[char] || wordCount[char] > boardCount[char]) {
      return false;
    }
  }

  const findWord = (i: number, j: number, k: number): boolean => {
    if (k === l) return true; // Palavra encontrada
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] ||
      board[i][j] !== word[k]
    ) {
      return false;
    }

    visited[i][j] = true;

    for (const [di, dj] of directions) {
      const ni: number = i + di;
      const nj: number = j + dj;
      if (findWord(ni, nj, k + 1)) return true;
    }

    visited[i][j] = false;

    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && findWord(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * https://leetcode.com/problems/unique-paths/
 * https://leetcode.com/problems/unique-paths/solutions/6316897/recursion-and-iterative-by-fernamn-aczk/
 * 62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.


Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 
Constraints:
1 <= m, n <= 100
 */

function uniquePaths(m: number, n: number): number {
  // let memo = Array.from({ length: m }, () => new Array(n).fill(0))
  // return sumPossiblePathsRecursive(m - 1, n - 1, memo)
  return sumPossiblePathsIterative(m, n);
}

const sumPossiblePathsRecursive = (
  row: number,
  column: number,
  memo: number[][]
): number => {
  if (row < 0 || column < 0) {
    return 0;
  }

  if (row === 0 && column === 0) {
    return 1;
  }

  if (!memo[row][column]) {
    memo[row][column] =
      sumPossiblePathsRecursive(row - 1, column, memo) +
      sumPossiblePathsRecursive(row, column - 1, memo);
  }

  return memo[row][column];
};

const sumPossiblePathsIterative = (rows: number, columns: number): number => {
  const memo = Array.from({ length: rows }, () => new Array(columns).fill(1));
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
    }
  }
  return memo[rows - 1][columns - 1];
};

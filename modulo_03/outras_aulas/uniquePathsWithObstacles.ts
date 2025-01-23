/**
 * https://leetcode.com/problems/unique-paths-ii/description/
 * https://leetcode.com/problems/unique-paths-ii/solutions/6320132/its-basically-the-same-as-problem-62-by-1qp4f/
 * 63. Unique Paths II

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The testcases are generated so that the answer will be less than or equal to 2 * 109.


Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

Example 2:
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1


Constraints:
m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] is 0 or 1.
 */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  //  ITERATIVE
  return sumPossiblePathsWithObstaclesIterative(obstacleGrid);

  // RECURSIVE
  // let m = obstacleGrid.length
  // let n = obstacleGrid[0].length
  // const memo = Array.from({ length: m }, () => Array(n).fill(0))
  // return sumPossiblePathsWithObstaclesRecursive(m - 1, n - 1, obstacleGrid, memo)
}

const sumPossiblePathsWithObstaclesRecursive = (
  row: number,
  column: number,
  obstacleGrid: number[][],
  memo: number[][]
): number => {
  if (obstacleGrid[row][column] === 1) {
    memo[row][column] = 0;
    return memo[row][column];
  }
  if (row === 0 && column === 0) {
    return 1;
  }

  if (!memo[row][column]) {
    const topWay =
      row > 0
        ? sumPossiblePathsWithObstaclesRecursive(
            row - 1,
            column,
            obstacleGrid,
            memo
          )
        : 0;
    const leftWay =
      column > 0
        ? sumPossiblePathsWithObstaclesRecursive(
            row,
            column - 1,
            obstacleGrid,
            memo
          )
        : 0;
    memo[row][column] = leftWay + topWay;
  }

  return memo[row][column];
};

const sumPossiblePathsWithObstaclesIterative = (
  obstacleGrid: number[][]
): number => {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  const memo = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        memo[i][j] = 0;
      } else if (i === 0 && j === 0) {
        memo[i][j] = 1;
      } else {
        const topWay = i > 0 ? memo[i - 1][j] : 0;
        const leftWay = j > 0 ? memo[i][j - 1] : 0;
        memo[i][j] = topWay + leftWay;
      }
    }
  }
  return memo[m - 1][n - 1];
};

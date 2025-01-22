/**
 * https://leetcode.com/problems/detect-cycles-in-2d-grid/description/
 * https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/6313042/bfs-or-dfs-you-choose-by-fernamn-2yvh/
 * 1559. Detect Cycles in 2D Grid

Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.
A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.
Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.
Return true if any cycle of the same value exists in grid, otherwise, return false.


Example 1:
Input: grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
Output: true
Explanation: There are two valid cycles shown in different colors in the image below:

Example 2:
Input: grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
Output: true
Explanation: There is only one valid cycle highlighted in the image below:

Example 3:
Input: grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
Output: false
 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid consists only of lowercase English letters.
 */

function containsCycle(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () => new Array(m).fill(false));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const isInBounds = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

  const bfsSolution = (grid) => {
    const bfs = (i, j) => {
      const queue = [];

      queue.push([i, j, -1, -1]);
      visited[i][j] = true;

      while (queue.length) {
        const [ci, cj, pi, pj] = queue.shift();

        for (const [di, dj] of directions) {
          const ni = ci + di;
          const nj = cj + dj;

          if (
            isInBounds(ni, nj) &&
            (ni !== pi || nj !== pj) &&
            grid[ci][cj] === grid[ni][nj]
          ) {
            if (visited[ni][nj]) {
              return true;
            }
            visited[ni][nj] = true;
            queue.push([ni, nj, ci, cj]);
          }
        }
      }
      return false;
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!visited[i][j]) {
          if (bfs(i, j)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const dfsSolution = (grid) => {
    const dfs = (i, j, parentI = -1, parentJ = -1) => {
      if (visited[i][j]) {
        return true;
      }

      visited[i][j] = true;

      for (const [di, dj] of directions) {
        const ni = i + di;
        const nj = j + dj;

        if (
          isInBounds(ni, nj) &&
          (ni !== parentI || nj !== parentJ) &&
          grid[i][j] === grid[ni][nj]
        ) {
          if (dfs(ni, nj, i, j)) {
            return true;
          }
        }
      }
      return false;
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!visited[i][j]) {
          if (dfs(i, j)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return dfsSolution(grid);
  // return bfsSolution(grid);
}

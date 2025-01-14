/**
 * https://leetcode.com/problems/island-perimeter/description/
 * https://leetcode.com/problems/island-perimeter/solutions/6073363/basically-the-island-counter-but-for-per-ur5o/
 * 463. Island Perimeter

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


Example 1:
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

Example 2:
Input: grid = [[1]]
Output: 4

Example 3:
Input: grid = [[1,0]]
Output: 4


Constraints:
row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] is 0 or 1.
There is exactly one island in grid.
 */

// const WATER = 0
// const LAND = 1
// const VISITED = 2

// const WATER = 0
// const LAND = 1
// const VISITED = 2

function islandPerimeter(grid) {
  let rows = grid.length;
  let columns = grid[0].length;

  const dfs = (row, column) => {
    if (
      row < 0 ||
      row >= rows ||
      column < 0 ||
      column >= columns ||
      grid[row][column] == 0
    ) {
      return 1;
    }
    if (grid[row][column] == 2) {
      return 0;
    }

    grid[row][column] = 2;

    return (
      dfs(row - 1, column) +
      dfs(row + 1, column) +
      dfs(row, column + 1) +
      dfs(row, column - 1)
    );
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] == 1) {
        return dfs(i, j);
      }
    }
  }
}

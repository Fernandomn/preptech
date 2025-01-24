/**
 * https://leetcode.com/problems/coloring-a-border/description/
 * https://leetcode.com/problems/coloring-a-border/solutions/6322282/first-we-find-the-borders-then-we-paint-jf0ab/
 * 1034. Coloring A Border

You are given an m x n integer matrix grid, and three integers row, col, and color. Each value in the grid represents the color of the grid square at that location.
Two squares are called adjacent if they are next to each other in any of the 4 directions.
Two squares belong to the same connected component if they have the same color and they are adjacent.
The border of a connected component is all the squares in the connected component that are either adjacent to (at least) a square not in the component, or on the boundary of the grid (the first or last row or column).
You should color the border of the connected component that contains the square grid[row][col] with color.
Return the final grid.


Example 1:
Input: grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
Output: [[3,3],[3,2]]

Example 2:
Input: grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
Output: [[1,3,3],[2,3,3]]

Example 3:
Input: grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
Output: [[2,2,2],[2,1,2],[2,2,2]]


Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j], color <= 1000
0 <= row < m
0 <= col < n
 */
/**
 *
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @returns {number[][]}
 */
function colorBorder(
  grid: number[][],
  row: number,
  col: number,
  color: number
): number[][] {
  const previousColor: number = grid[row][col];

  if (previousColor !== color) {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const directions: [number, number][] = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const visited: boolean[][] = Array.from({ length: m }, () =>
      new Array(n).fill(false)
    );
    const borders: [number, number][] = [];

    const outOfBorders = (row: number, col: number): boolean =>
      row < 0 || row >= m || col < 0 || col >= n;

    const dfs = (row: number, col: number): void => {
      if (
        outOfBorders(row, col) ||
        visited[row][col] ||
        grid[row][col] !== previousColor
      ) {
        return;
      }
      visited[row][col] = true;

      let isBorder: boolean = false;
      for (const [di, dj] of directions) {
        const ni: number = row + di;
        const nj: number = col + dj;

        if (
          !isBorder &&
          (outOfBorders(ni, nj) || grid[row][col] !== grid[ni][nj])
        ) {
          borders.push([row, col]);
          isBorder = true;
        }
        dfs(ni, nj);
      }
    };

    dfs(row, col);
    for (const [i, j] of borders) {
      grid[i][j] = color;
    }
  }

  return grid;
}

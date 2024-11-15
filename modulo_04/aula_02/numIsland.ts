/**
 * https://leetcode.com/problems/number-of-islands/description/
 * https://leetcode.com/problems/number-of-islands/solutions/6046255/fishnet-graph/
 * 200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.


 * @param  {string[][]} grid
 * @returns {number}
 */

// const WATER: string = "0"
// const LAND: string = "1"
// const VISITED: string = "-1"
function numIslands(grid: string[][]): number {
    // try to do dfs for every map piece. if it's water, whatever, skip
    // if it's land, , and this piece was not visited yet, do the bfs. for every completed dfs, you have 1 island
    // on the dfs run, mark the visited land to do not run over it again
    // in the end, the result will be every valid dfs run possible.
    const m: number = grid.length;
    const n: number = grid[0].length;

    let islandCounter: number = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "1") {
                checkIsland(grid, i, j)
                islandCounter++
            }
        }
    }

    return islandCounter
};

const checkIsland = (grid: string[][], i: number, j: number): void => {
    if (!(grid[i]) ||
        !(grid[i][j]) ||
        (grid[i] && grid[i][j] && grid[i][j] != "1")) {
        return
    }

    grid[i][j] = "-1";

    for (let u = -1; u <= 1; u++) {
        for (let v = -1; v <= 1; v++) {
            if ((u === 0 && v !== 0) || (u !== 0 && v === 0)) {
                checkIsland(grid, i + u, j + v)
            }
        }
    }
}
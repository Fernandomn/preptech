/**
 * https://leetcode.com/problems/regions-cut-by-slashes/
 * https://leetcode.com/problems/regions-cut-by-slashes/solutions/6304349/maybe-the-input-is-not-well-formed-by-fe-ykam/
 * 959. Regions Cut By Slashes

An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.
Given the grid grid represented as a string array, return the number of regions.
Note that backslash characters are escaped, so a '\' is represented as '\\'.


Example 1:
Input: grid = [" /","/ "]
Output: 2

Example 2:
Input: grid = [" /","  "]
Output: 1

Example 3:
Input: grid = ["/\\","\\/"]
Output: 5
Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.
 

Constraints:
n == grid.length == grid[i].length
1 <= n <= 30
grid[i][j] is either '/', '\', or ' '.
 */

function regionsBySlashes(grid: string[]): number {
    const newGrid = rewrite(grid)
    const n = newGrid.length

    let emptyCounter: number = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (newGrid[i][j] === 0) {
                paintMatrix(newGrid, i, j)
                emptyCounter++
            }
        }
    }

    return emptyCounter
};

const rewrite = (grid: string[]): number[][] => {
    const cellSize: number = 3
    const oldGridSize: number = grid.length
    const newGridSize: number = oldGridSize * cellSize
    const newGrid: number[][] = Array.from({ length: newGridSize }, () => new Array(newGridSize).fill(0))

    for (let i = 0; i < oldGridSize; i++) {
        for (let j = 0; j < oldGridSize; j++) {
            const char = grid[i][j]
            switch (char) {
                case '\\':
                    for (let k = 0; k < cellSize; k++) {
                        newGrid[(i * 3) + k][(j * 3) + k] = 1
                    }
                    break;
                case '/':
                    for (let k = 0; k < cellSize; k++) {
                        newGrid[(i * 3) + (cellSize - 1 - k)][(j * 3) + k] = 1
                    }
                    break;
            }
        }
    }

    return newGrid
}

const paintMatrix = (grid: number[][], i: number, j: number): void => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 1) {
        return
    }

    grid[i][j] = 1

    paintMatrix(grid, i - 1, j)
    paintMatrix(grid, i + 1, j)
    paintMatrix(grid, i, j - 1)
    paintMatrix(grid, i, j + 1)
}
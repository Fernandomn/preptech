/**
 * https://leetcode.com/problems/sudoku-solver/description/
 * https://leetcode.com/problems/sudoku-solver/solutions/6266404/backtraking-by-fernamn-fme8/
 * 37. Sudoku Solver
Write a program to solve a Sudoku puzzle by filling the empty cells.
A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Example 1:
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit or '.'.
It is guaranteed that the input board has only one solution.
 */

/**
 Do not return anything, modify board in-place instead.
 */
 function solveSudoku(board: ) {
    const rowSets= Array.from({ length: 9 }, () => new Set());
    const colSets= Array.from({ length: 9 }, () => new Set());
    const boxSets= Array.from({ length: 9 }, () => new Set());

    const getBoxIndex = (row, col) => {
        return Math.floor(row / 3) * 3 + Math.floor(col / 3);
    };

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value = board[row][col];
            if (value !== '.') {
                rowSets[row].add(value);
                colSets[col].add(value);
                boxSets[getBoxIndex(row, col)].add(value);
            }
        }
    }

    const backtracking = (row, col) => {
        if (row >= 9) return true

        let nextCol = (col + 1) % 9
        let nextRow = nextCol == 0 ? row + 1 : row

        if (board[row][col] != '.') {
            return backtracking(nextRow, nextCol)
        }

        for (let i = 1; i <= 9; i++) {
            let char = i.toString();
            let boxIndex = getBoxIndex(row, col)

            if (!rowSets[row].has(char) && !colSets[col].has(char) && !boxSets[boxIndex].has(char)) {
                board[row][col] = char
                rowSets[row].add(char)
                colSets[col].add(char)
                boxSets[boxIndex].add(char)

                if (backtracking(nextRow, nextCol)) {
                    return true
                }

                // backtracking
                board[row][col] = '.'
                rowSets[row].delete(char)
                colSets[col].delete(char)
                boxSets[boxIndex].delete(char)
            }
        }
        return false
    }

    backtracking(0, 0)
};
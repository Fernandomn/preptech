/**
 * https://leetcode.com/problems/rotting-oranges/description/
 * https://leetcode.com/problems/rotting-oranges/solutions/6281339/double-bfs-by-fernamn-fkr6/
 * 994. Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
 */

function orangesRotting(grid) {
  const EMPTY = 0;
  const FRESH = 1;
  const ROTTEN = 2;

  let m = grid.length;
  let n = grid[0].length;

  let timeCounter = 0;
  let freshCounter = 0;

  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === FRESH) {
        freshCounter++;
      } else if (grid[i][j] === ROTTEN) {
        queue.push([i, j]);
      }
    }
  }

  if (freshCounter === 0) return 0;

  const directions = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  while (queue.length) {
    let levelSize = queue.length;
    let infected = false;

    while (levelSize--) {
      const [i, j] = queue.shift();

      for (const [ni, nj] of directions) {
        const newI = i + ni;
        const newJ = j + nj;

        if (
          newI >= 0 &&
          newJ >= 0 &&
          newI < m &&
          newJ < n &&
          grid[newI][newJ] === FRESH
        ) {
          grid[newI][newJ] = ROTTEN;
          freshCounter--;
          queue.push([newI, newJ]);
          infected = true;
        }
      }
    }
    if (infected) {
      timeCounter++;
    }
  }

  return freshCounter === 0 ? timeCounter : -1;

  // const visited = new Set()

  // const createKey = (i: number, j: number): string => `${i},${j}`

  // const bfs = (indexesArray: number[][]): void => {

  //     const queue = []
  //     for (let [i, j] of indexesArray) {
  //         visited.add(createKey(i, j))
  //         queue.push({ i: i, j: j })
  //     }

  //     while (queue.length) {
  //         let levelSize = queue.length

  //         while (levelSize--) {
  //             let { i: fruitI, j: fruitJ } = queue.shift()

  //             for (let [newI, newJ] of [[-1, 0], [0, -1], [0, 1], [1, 0]]) {
  //                 let nextFruitI = fruitI + newI
  //                 let nextFruitJ = fruitJ + newJ
  //                 let key = createKey(nextFruitI, nextFruitJ)

  //                 if (
  //                     nextFruitI >= 0 &&
  //                     nextFruitJ >= 0 &&
  //                     nextFruitI < m &&
  //                     nextFruitJ < n &&
  //                     !visited.has(key) &&
  //                     grid[nextFruitI]?.[nextFruitJ] === FRESH
  //                 ) {
  //                     grid[nextFruitI][nextFruitJ] = ROTTEN
  //                     visited.add(key)
  //                     queue.push({ i: nextFruitI, j: nextFruitJ })
  //                 }
  //             }
  //         }
  //         timeCounter++
  //     }

  //     timeCounter--
  // }

  // if (rottenFruits.length) {
  //     bfs(rottenFruits)
  // }
  //return visited.size === (m * n) ? timeCounter : -1
}

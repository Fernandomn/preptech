
/**
 * https://leetcode.com/problems/flood-fill/description/
 * https://leetcode.com/problems/flood-fill/solutions/6322127/fds-and-bfs-for-you-by-fernamn-caob/
 * 733. Flood Fill

You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:
Begin with the starting pixel and change its color to color.
Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
The process stops when there are no more adjacent pixels of the original color to update.
Return the modified image after performing the flood fill.


Example 1:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not horizontally or vertically connected to the starting pixel.

Example 2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation:
The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.
 

Constraints:
m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n

 * @param {number[][]} image 
 * @param {number} sr 
 * @param {number} sc 
 * @param {number} color 
 * @returns {number[][]}
 */
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const currentColor = image[sr][sc];

  if (currentColor !== color) {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    const outLimits = (row: number, column: number) =>
      row < 0 || row >= image.length || column < 0 || column >= image[0].length;

    const dfsRecursive = (row: number, column: number) => {
      if (outLimits(row, column) || image[row][column] !== currentColor) {
        return;
      }
      image[row][column] = color;
      for (let [dr, dc] of directions) {
        dfsRecursive(row + dr, column + dc);
      }
    };

    const dfsIterative = (row: number, column: number) => {
      let stack = [];
      stack.push([row, column]);

      while (stack.length) {
        const [cr, cc] = stack.pop()!;

        image[cr][cc] = color;

        for (let [dr, dc] of directions) {
          const nr: number = cr + dr;
          const nc: number = cc + dc;
          if (!outLimits(nr, nc) && image[nr][nc] === currentColor) {
            stack.push([nr, nc]);
          }
        }
      }
    };

    const bfs = (row: number, column: number) => {
      let queue = [];
      queue.push([row, column]);

      while (queue.length) {
        const [cr, cc] = queue.shift()!;

        image[cr][cc] = color;

        for (let [dr, dc] of directions) {
          const nr: number = cr + dr;
          const nc: number = cc + dc;
          if (!outLimits(nr, nc) && image[nr][nc] === currentColor) {
            queue.push([nr, nc]);
          }
        }
      }
    };

    // dfsRecursive(sr, sc)
    // dfsIterative(sr, sc)
    bfs(sr, sc);
  }

  return image;
}

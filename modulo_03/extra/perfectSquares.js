/**
 * https://leetcode.com/problems/perfect-squares/description/
 * https://leetcode.com/problems/perfect-squares/solutions/6321898/is-like-the-coins-exchange-problem-by-fe-99xb/
 * 279. Perfect Squares

Given an integer n, return the least number of perfect square numbers that sum to n.
A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

Example 1:
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.

Example 2:
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 

Constraints:
1 <= n <= 104
 * @param {number} n 
 * @returns {number}
 */

function numSquares(n) {
  let squares = Array.from(
    { length: Math.floor(Math.sqrt(n)) },
    (_, i) => (i + 1) * (i + 1)
  );
  let memo = new Array(n + 1).fill(Infinity);
  memo[0] = 0;

  for (let square of squares) {
    for (let i = square; i <= n; i++) {
      memo[i] = Math.min(memo[i], memo[i - square] + 1);
    }
  }

  return memo[n];

  // let visited = new Set()
  // visited.add(0)

  // let queue = []
  // queue.push({ value: 0, totalSquares: 0 })

  // while (queue.length) {
  //     let { value, totalSquares } = queue.shift()

  //     if (value === n) {
  //         return totalSquares
  //     }

  //     for (let square of squares) {
  //         let sum = value + square
  //         if (!visited.has(sum) && sum <= n) {
  //             queue.push({ value: sum, totalSquares: (totalSquares || 0) + 1 })
  //             visited.add(sum)
  //         }
  //     }
  // }
  // return -1
}

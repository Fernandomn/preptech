/**
 * https://leetcode.com/problems/knight-dialer/description/
 * https://leetcode.com/problems/knight-dialer/solutions/6320565/this-horse-rides-a-lot-by-fernamn-q6vv/
 *935. Knight Dialer

The chess knight has a unique movement, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagram:
A chess knight can move as indicated in the chess diagram below:
We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell (i.e. blue cell).
Given an integer n, return how many distinct phone numbers of length n we can dial.
You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.
As the answer may be very large, return the answer modulo 109 + 7.


Example 1:
Input: n = 1
Output: 10
Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.

Example 2:
Input: n = 2
Output: 20
Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]

Example 3:
Input: n = 3131
Output: 136006598
Explanation: Please take care of the mod.
 

Constraints:
1 <= n <= 5000
 */

const MAX_INT = Math.pow(10, 9) + 7;

const possibleRides: Record<number, number[]> = {
  0: [4, 6],
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [0, 3, 9],
  5: [],
  6: [0, 1, 7],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
};

function knightDialer(n: number): number {
  return recursiveSolution(n);
  // return iteractiveSolution(n)
}

const recursiveSolution = (n: number): number => {
  let memo = Array(n + 1)
    .fill(0)
    .map(() => Array(10).fill(0)); // matrix[n+1][digits]
  let result = 0;

  for (let key = 0; key < 10; key++) {
    result += recursiveDial(n, key, memo) % MAX_INT;
  }

  return result % MAX_INT;
};

const recursiveDial = (n: number, key: number, memo: number[][]): number => {
  if (!memo[n][key]) {
    if (n === 1) {
      memo[n][key] = 1;
    } else {
      for (let destiny of possibleRides[key]) {
        memo[n][key] += recursiveDial(n - 1, destiny, memo) % MAX_INT;
      }
    }
  }
  return memo[n][key];
};

const iteractiveSolution = (n: number): number => {
  let prev = Array(10).fill(1);
  let curr = Array(10).fill(0);

  for (let step = 2; step <= n; step++) {
    for (let key = 0; key < 10; key++) {
      curr[key] = 0;
      for (let destiny of possibleRides[key]) {
        curr[key] = (curr[key] + prev[destiny]) % MAX_INT;
      }
    }
    [prev, curr] = [curr, prev];
  }

  return prev.reduce((sum, count) => (sum + count) % MAX_INT, 0);
};

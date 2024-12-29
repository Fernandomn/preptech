/**
 * https://leetcode.com/problems/fibonacci-number/description/
 * https://leetcode.com/problems/fibonacci-number/solutions/6199605/fibo-with-dp-by-fernamn-57z2/
 * 509. Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Constraints:

0 <= n <= 30
 * @param {number} n 
 * @returns {number}
 */


// recursive fibo (simples)
const fibonacci = (n) => {
  if (n === 1 || n === 0) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

// interactive fibo
const fib = (n) => {
  if (n < 2) {
    return n;
  }
  let n0 = 0;
  let n1 = 1;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    current = n0 + n1;
    n0 = n1;
    n1 = current;
  }
  return current;
};

// dinamyc programing fibo
const fibDP = (n, memo = []) => {
  if (n < 2) {
    return n;
  }

  if (!memo[n]) {
    memo[n] = fibDP(n - 2, memo) + fibDP(n - 1, memo);
  }
  return memo[n];
};

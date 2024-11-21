/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/6070221/stacks/
 * 150. Evaluate Reverse Polish Notation
 * 
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 
Constraints:
1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let pilha = [];
  const symbolTokens = ['+', '-', '*', '/'];

  for (let token of tokens) {
    console.log('token:', token);
    if (symbolTokens.some((t) => t === token)) {
      const val2 = pilha.pop();
      const val1 = pilha.pop();

      let result = 0;
      switch (token) {
        case '+':
          result = val1 + val2;
          break;
        case '-':
          result = val1 - val2;
          break;
        case '*':
          result = val1 * val2;
          break;
        case '/':
          result = Math.trunc(val1 / val2);
          break;
      }
      console.log('temp result', result);
      pilha.push(result);
    } else {
      pilha.push(Number(token));
    }
  }
  return pilha.pop();
};

const tokens1 = ['2', '1', '+', '3', '*'];
const output1 = 9;

console.log('exec1: ', evalRPN(tokens1), '; expected: ', output1);

const tokens2 = ['4', '13', '5', '/', '+'];
const output2 = 6;
console.log('exec2: ', evalRPN(tokens2), '; expected: ', output2);

const tokens3 = [
  '10',
  '6',
  '9',
  '3',
  '+',
  '-11',
  '*',
  '/',
  '*',
  '17',
  '+',
  '5',
  '+',
];
const output3 = 22;

console.log('exec3: ', evalRPN(tokens3), '; expected: ', output3);

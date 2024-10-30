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

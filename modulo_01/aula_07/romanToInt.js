/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let finalValue = 0;
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i + 1]] > dict[s[i]]) {
      finalValue -= dict[s[i]];
    } else {
      finalValue += dict[s[i]];
    }
  }

  return finalValue;
};

const dict = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let finalValue = 0;
  //   for (let i = s.length - 1; i >= 0; i--) {
  //     let currentValue = 0;
  //     let currentChar = s[i];
  //     currentValue += dict[currentChar];
  //     if (
  //       ((currentChar === 'V' || currentChar === 'X') && s[i - 1] === 'I') ||
  //       ((currentChar === 'L' || currentChar === 'C') && s[i - 1] === 'X') ||
  //       ((currentChar === 'D' || currentChar === 'M') && s[i - 1] === 'C')
  //     ) {
  //       i--;
  //       currentValue -= dict[s[i]];
  //     }
  //     finalValue += currentValue;
  //   }
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


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const sequenceLog = {};
    const resultArray = [];

    for (let i = 0; i < s.length - 9; i++) {
        let sequence = s.substring(i, i + 10);
        if (sequenceLog[sequence]) {
            sequenceLog[sequence]++;
            if(sequenceLog[sequence] === 2){
                resultArray.push(sequence)
            }
        }
        else {
            sequenceLog[sequence] = 1
        }
    }
    return resultArray;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charMap = {};
    let stringStart = 0;
    let largestStringLength = 0;
    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i]
        if (charMap[currentChar] !== null && charMap[currentChar] >= stringStart) {
            stringStart = charMap[currentChar] + 1;
        }
        largestStringLength = Math.max(largestStringLength, (i + 1) - stringStart)
        charMap[currentChar] = i
    }
    return largestStringLength
};
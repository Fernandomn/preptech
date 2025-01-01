/**
 * https://leetcode.com/problems/repeated-dna-sequences/description/
 * https://leetcode.com/problems/repeated-dna-sequences/solutions/6215277/never-forget-the-hash-sets-by-fernamn-vgij/
 * 
 * 187. Repeated DNA Sequences

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.
Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example 1:
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]

Constraints:
1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // return usingHashTable(s)
  return usingHashSet(s);
};

const usingHashTable = (s) => {
  const sequenceLog = {};
  const resultArray = [];

  for (let i = 0; i < s.length - 9; i++) {
    let sequence = s.substring(i, i + 10);
    if (sequenceLog[sequence]) {
      sequenceLog[sequence]++;
      if (sequenceLog[sequence] === 2) {
        resultArray.push(sequence);
      }
    } else {
      sequenceLog[sequence] = 1;
    }
  }
  return resultArray;
};

const usingHashSet = (s) => {
  const sequenceLog = new Set();
  const repeatedLog = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    let sequence = s.substring(i, i + 10);
    if (!sequenceLog.has(sequence)) {
      sequenceLog.add(sequence);
    } else {
      repeatedLog.add(sequence);
    }
  }
  return [...repeatedLog];
};

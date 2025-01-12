/**
 * https://leetcode.com/problems/integer-to-roman/description/
 * https://leetcode.com/problems/integer-to-roman/solutions/6266983/huge-hash-table-by-fernamn-nwvs/
 * 12. Integer to Roman
 * 
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

 

Example 1:
Input: num = 3749
Output: "MMMDCCXLIX"
Explanation:
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

Example 2:
Input: num = 58
Output: "LVIII"
Explanation:
50 = L
 8 = VIII
 

Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation:
1000 = M
 900 = CM
  90 = XC
   4 = IV
 
   Constraints:
1 <= num <= 3999
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let finalString = "";
    const stringNum = num.toString();
    const len = stringNum.length

    for (let i = 0; i < len; i++) {
        let currentChar = stringNum[i]
        if (currentChar !== "0") {
            let value = currentChar * Math.pow(10, len - i - 1);
            finalString += numberToSymbol[value];
        }
    }
    return finalString;
};

// const symbolToNumber = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }

// const numberToSymbol = {
//     1: (value) => (value === 1000 ? "M" : value === 100 ? "C" : value === 10 ? "X" : "I"),
//     2: (value) => (value === 2000 ? "MM" : value === 200 ? "CC" : value === 20 ? "XX" : "II"),
//     3: (value) => (value === 3000 ? "MMM" : value === 300 ? "CCC" : value === 30 ? "XXX" : "III"),
//     4: (value) => (value === 400 ? "CD" : value === 40 ? "XL" : "IV"),
//     5: (value) => (value === 500 ? "D" : value === 50 ? "L" : "V"),
//     6: (value) => (value === 600 ? "DC" : value === 60 ? "LX" : "VI"),
//     7: (value) => (value === 700 ? "DCC" : value === 70 ? "LXX" : "VII"),
//     8: (value) => (value === 800 ? "DCCC" : value === 80 ? "LXXX" : "VIII"),
//     9: (value) => (value === 900 ? "CM" : value === 90 ? "XC" : "IX"),
// }
const numberToSymbol = {
    1: "I",
    10: "X",
    100: "C",
    1000: "M",
    2: "II",
    20: "XX",
    200: "CC",
    2000: "MM",
    3: "III",
    30: "XXX",
    300: "CCC",
    3000: "MMM",
    4: "IV",
    40: "XL",
    400: "CD",
    5: "V",
    50: "L",
    500: "D",
    6: "VI",
    60: "LX",
    600: "DC",
    7: "VII",
    70: "LXX",
    700: "DCC",
    8: "VIII",
    80: "LXXX",
    800: "DCCC",
    9: "IX",
    90: "XC",
    900: "CM"
}
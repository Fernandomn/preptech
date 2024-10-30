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
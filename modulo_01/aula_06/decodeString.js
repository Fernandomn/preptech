/**
 * https://leetcode.com/problems/decode-string/description/
 * 394. Decode String
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 
Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
 */

function decodeString(s) {
    // todo
    
    let resultString = ""
    let multiplier = 0
    let ignore = false

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        console.log('char:', char)
        console.log('ignore:', ignore)

        if (ignore) {
            if (char == ']') {
                ignore = false
            }
        }
        else {
            if (!Number.isNaN(Number(char))) { // is a number
                console.log('// is a number')
                console.log("char:", char)
                multiplier = 10 * multiplier + Number(char)
                console.log("multiplier:", multiplier)
            } else if (char == '[') { // recursion
                console.log('// recursion')
                ignore = true
                resultString += decodeString(s.substring(i + 1)).repeat(multiplier)
                multiplier = 0
            } else if (char == ']') { // end recursion
                console.log('// end recursion')
                return resultString
            } else { // add char
                console.log('// add char')
                resultString += char
            }
        }

        console.log('resultString:', resultString)
    }
    return resultString
};
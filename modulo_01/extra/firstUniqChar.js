/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 * https://leetcode.com/problems/first-unique-character-in-a-string/solutions/6321526/not-hard-by-fernamn-xtgo/
 * 387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
 

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const hash = {}
    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]] || hash[s[i]].length < 1) hash[s[i]] = [i];
        else hash[s[i]].push(i)
    }

    let result = -1;
    for (let [key, value] of Object.entries(hash)) {
        if (value.length === 1) {
            result = value[0]
            break
        }
    }
    return result
};
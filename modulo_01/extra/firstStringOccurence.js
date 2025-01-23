/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/6321777/two-pointers-are-cool-but-you-just-need-21j5q/
 * 28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:
1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

 * @param {string} haystack 
 * @param {string} needle 
 * @returns {number}
 */

function strStr(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}

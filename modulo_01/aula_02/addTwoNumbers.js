/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * https://leetcode.com/problems/add-two-numbers/solutions/5986862/the-tricky-part-is-the-sum/
 * 2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let resultListPointer = new ListNode();
  let resultListHead = resultListPointer;

  let pos1 = l1;
  let pos2 = l2;
  let rest = 0;
  while (pos1 || pos2 || rest > 0) {
    let sum = (pos1 ? pos1.val : 0) + (pos2 ? pos2.val : 0) + rest;
    rest = 0;
    if (sum > 9) {
      rest = Math.floor(sum / 10);
      sum = sum % 10;
    }
    if (pos1) pos1 = pos1.next;
    if (pos2) pos2 = pos2.next;

    const newNode = new ListNode(sum);
    resultListPointer.next = newNode;
    resultListPointer = resultListPointer.next;
  }
  return resultListHead.next;
};

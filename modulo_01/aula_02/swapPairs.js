/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * https://leetcode.com/problems/swap-nodes-in-pairs/solutions/5986926/braid/
 * 24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Example 4:
Input: head = [1,2,3]
Output: [2,1,3]

Constraints:
The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let current = head;
  let prev = null;

  while (current && current.next) {
    const nextNode = current.next;

    current.next = nextNode.next;
    nextNode.next = current;

    if (prev) {
      prev.next = nextNode;
    } else {
      head = nextNode;
    }

    prev = current;
    current = current.next;
  }
  return head;
};

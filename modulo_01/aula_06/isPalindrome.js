/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * https://leetcode.com/problems/palindrome-linked-list/solutions/6215038/what-is-a-palindrome-by-fernamn-yijm
 * 
 * 234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true


Example 2:
Input: head = [1,2]
Output: false
 
Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 
Follow up: Could you do it in O(n) time and O(1) space?
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head) {
  // return isPalindromeAuxArray(head)
  return isPalindromeReverseList(head);
}

const isPalindromeAuxArray = (head) => {
  if (!head || !head.next) return true;

  const arrayList = [];

  let current = head;

  while (current != null) {
    arrayList.push(current.val);
    current = current.next;
  }

  for (let i = 0, j = arrayList.length - 1; i < j; i++, j--) {
    if (arrayList[i] != arrayList[j]) {
      return false;
    }
  }

  return true;
};

const isPalindromeReverseList = (head) => {
  if (!head || !head.next) return true;

  let fast = head;
  let slow = head;

  // finding list's half point
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let current = slow;
  let prev = null;

  // reversing list's second half
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // comparing list's both halves
  let first = head;
  let second = prev;

  while (first && second) {
    if (first.val != second.val) {
      return false;
    }

    first = first.next;
    second = second.next;
  }
  return true;
};

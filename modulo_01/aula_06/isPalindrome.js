/**
 * https://leetcode.com/problems/palindrome-linked-list/
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
}

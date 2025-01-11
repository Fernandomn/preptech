/**
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 * https://leetcode.com/problems/reverse-linked-list-ii/solutions/6266909/is-like-the-common-reversion-just-changi-8vnk/
 * 92. Reverse Linked List II
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next || left === right) {
        return head;
    }

    let prevLeft = null;
    let leftNode = null;
    let prev = null;
    let current = head;
    let counter = 0;
    let stopChanging = false;

    while (current) {
        counter++
        let nextNode = current.next;

        if (left === counter) {
            prevLeft = prev;
            leftNode = current;
        }

        if (leftNode != null && !stopChanging) {
            current.next = prev
        }

        if (counter === right) {
            stopChanging = true;
            if (prevLeft !== null) {
                prevLeft.next = current;
            } else {
                head = current;
            }
            leftNode.next = nextNode;
        }

        prev = current
        current = nextNode
    }

    return head;
};
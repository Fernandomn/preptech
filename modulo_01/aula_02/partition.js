/**
 * https://leetcode.com/problems/partition-list/
 * https://leetcode.com/problems/partition-list/solutions/5988428/where-to-put-the-small/
 * 86. Partition List
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * 
 * Example 1:
 * Input: head = [1,4,3,2,5,2], x = 3
 * Output: [1,2,2,4,3,5]
 * Example 2:
 * 
 * Input: head = [2,1], x = 2
 * Output: [1,2]
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 200].
 * -100 <= Node.val <= 100
 * -200 <= x <= 200
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head || !head.next) return head;

    let current = head;
    let prev = null;
    let firstBigger = null
    let prevBigger = null

    while (current) {
        if (firstBigger == null && current.val >= x) {
            firstBigger = current
            prevBigger = prev
        }

        if (firstBigger != null && current.val < x) {
            if (prev) {
                prev.next = current.next;
            }
            if (prevBigger) {
                prevBigger.next = current;
            } else {
                head = current
            }
            prevBigger = current
            prevBigger.next = firstBigger;
        }
        // if (current.val >= x) {
        //     console.log('val > x')
        //     let monitorPrev = prev;
        //     let monitorCurrent = current;

        //     while (monitorCurrent) {
        //         console.log("innerCurrent:", monitorCurrent.val)
        //         if (monitorCurrent.val < x) {
        //             console.log("innerCurrent < x")

        //             if (monitorPrev) {
        //                 monitorPrev.next = monitorCurrent.next;
        //             }
        //             if (prev) {
        //                 prev.next = monitorCurrent;
        //                 prev = monitorCurrent;
        //             }else{
        //                 head = monitorCurrent;
        //                 prev = head
        //             }
        //             monitorCurrent.next = current;

        //             monitorCurrent = current
        //         }
        //         monitorPrev = monitorCurrent
        //         monitorCurrent = monitorCurrent.next
        //     }
        // }
        prev = current
        current = current.next
    }
    return head;
};
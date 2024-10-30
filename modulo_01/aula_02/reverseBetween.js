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
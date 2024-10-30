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

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

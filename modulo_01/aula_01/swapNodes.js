/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    const listCopy = [];
    let current = head;

    while (current) {
        listCopy.push(current.val);
        current = current.next;
    }

    let u = k - 1;
    let v = (listCopy.length - 1) - (k - 1);
    let temp = listCopy[u];
    listCopy[u] = listCopy[v];
    listCopy[v] = temp;

    let resultList = new ListNode(0, null);
    current = resultList;
    for(let i = 0; i < listCopy.length; i++){
        const newNode = new ListNode(listCopy[i], null);
        current.next = newNode;
        current = current.next;
    }
    return resultList.next
};
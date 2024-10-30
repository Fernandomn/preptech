/**
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/5987082/the-rabbit-again/
 * 1721. Swapping Nodes in a Linked List
You are given the head of a linked list, and an integer k.
Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 
Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 105
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
 * @param {number} k
 * @return {ListNode}
 */

//TODO: redo.
var swapNodesArray = function (head, k) {
  const listCopy = [];
  let current = head;

  while (current) {
    listCopy.push(current.val);
    current = current.next;
  }

  let u = k - 1;
  let v = listCopy.length - 1 - (k - 1);
  let temp = listCopy[u];
  listCopy[u] = listCopy[v];
  listCopy[v] = temp;

  let resultList = new ListNode(0, null);
  current = resultList;
  for (let i = 0; i < listCopy.length; i++) {
    const newNode = new ListNode(listCopy[i], null);
    current.next = newNode;
    current = current.next;
  }
  return resultList.next;
};

function swapNodes(head, k) {
  if (!head || !head.next) {
    return head;
  }

  let current = head,
    end = null;
  let initNode = null,
    endNode = null;
  let counter = 0;

  while (current) {
    counter++;
    if (counter === k) {
      initNode = current;
      end = head;
    }
    if (counter > k) {
      end = end.next;
    }

    if (!current.next) {
      endNode = end;
    }
    current = current.next;
  }

  let temp = endNode.val;
  endNode.val = initNode.val;
  initNode.val = temp;

  return head;
}

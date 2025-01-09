/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * https://leetcode.com/problems/merge-k-sorted-lists/solutions/6251739/sometimes-its-very-simple-by-fernamn-yyrg/
 * 23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.


Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
 

Constraints:
k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
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

function mergeKLists(lists) {
  // // Using Bruteforce
  // let remainingLists: number = lists.reduce((acc, cur) => acc + (cur != null ? 1 : 0), 0);

  // let listHeader = new ListNode();
  // let current = listHeader

  // while (remainingLists) {
  //     let nextListIndex = -1
  //     let minValue = Infinity

  //     for (let i = 0; i < lists.length; i++) {
  //         if (lists[i]) {
  //             if (lists[i].val < minValue) {
  //                 minValue = lists[i].val
  //                 nextListIndex = i
  //             }
  //         }
  //     }
  //     current.next = lists[nextListIndex]
  //     lists[nextListIndex] = lists[nextListIndex].next
  //     if (!lists[nextListIndex]) remainingLists--
  //     current = current.next
  // }

  // return listHeader.next

  let values = [];

  for (let list of lists) {
    let current = list;
    while (current) {
      values.push(current.val);
      current = current.next;
    }
  }

  values.sort((a, b) => a - b);
  return arrayToList(values);
}

const arrayToList = (values) => {
  if (values.length == 0) return null;

  const newList = new ListNode();
  let current = newList;
  for (let value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return newList.next;
};

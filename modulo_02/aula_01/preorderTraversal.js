/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 * https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/6246204/a-classic-pt-2-by-fernamn-gfs1/
 * 144. Binary Tree Preorder Traversal
Given the root of a binary tree, return the preorder traversal of its nodes' values.


Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]
 

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root) {
    if (!root) return [];

    return [
      root.val,
      ...preorderTraversal(root.left),
      ...preorderTraversal(root.right),
    ];

//   const resultList: number[] = [];
//   const stack: TreeNode[] = [];

//   let current = root;
//   while (current || stack.length) {
//     if (current) {
//       resultList.push(current.val);
//       stack.push(current);
//       current = current.left;
//     } else {
//       const popped = stack.pop();
//       current = popped.right;
//     }
//   }

//   return resultList;
}

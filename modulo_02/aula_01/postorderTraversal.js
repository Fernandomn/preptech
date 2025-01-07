/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 * https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/6246348/a-classic-pt3-by-fernamn-bn6k/
 * 145. Binary Tree Postorder Traversal
Given the root of a binary tree, return the postorder traversal of its nodes' values.


Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]


Constraints:
The number of the nodes in the tree is in the range [0, 100].
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

function postorderTraversal(root) {
  // if (!root) return [];
  // return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val,]

  if (!root) return [];

  const resultList = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    resultList.push(current.val);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return resultList.reverse();
}

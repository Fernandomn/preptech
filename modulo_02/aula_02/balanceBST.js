/**
 * https://leetcode.com/problems/balance-a-binary-search-tree/description/
 * https://leetcode.com/problems/balance-a-binary-search-tree/solutions/6246739/avoid-more-problems-by-fernamn-oger/
 * 1382. Balance a Binary Search Tree
Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

Example 1:
Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

Example 2:
Input: root = [2,1,3]
Output: [2,1,3]
 
Constraints:
The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 105
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

function balanceBST(root) {
  let plainTree = [];
  inOrder(root, plainTree);

  return newTree(plainTree, 0, plainTree.length - 1);
}

const inOrder = (root, plainTree) => {
  if (!root) return [];

  inOrder(root.left, plainTree);
  plainTree.push(root.val);
  inOrder(root.right, plainTree);
};

const newTree = (plainTree, start, end) => {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);
  const newNode = new TreeNode(plainTree[mid]);
  newNode.left = newTree(plainTree, start, mid - 1);
  newNode.right = newTree(plainTree, mid + 1, end);

  return newNode;
};

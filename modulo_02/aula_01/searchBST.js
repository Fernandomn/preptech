/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/description/
 * https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/6215788/easy-ride-by-fernamn-i58p/
 * 700. Search in a Binary Search Tree
Solved
Easy
Topics
Companies
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
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

function searchBST(root, val) {
  // return iteractiveSolution(root, val)
  return recursiveSolution(root, val);
}

const iteractiveSolution = (root, val) => {
  if (!root) return root;
  let current = root;

  while (current) {
    if (val == current.val) return current;
    else if (val < current.val) current = current.left;
    else current = current.right;
  }
  return null;
};

const recursiveSolution = (root, val) => {
  if (!root) return null;

  if (val == root.val) return root;
  else if (val < root.val) return recursiveSolution(root.left, val);
  else return recursiveSolution(root.right, val);
};

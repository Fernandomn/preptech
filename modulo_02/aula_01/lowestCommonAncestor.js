/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/6245964/the-lca-is-the-root-right-by-fernamn-y82i/
 * 
 * 235. Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:
Input: root = [2,1], p = 2, q = 1
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
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

function lowestCommonAncestor(root, p, q) {

    // if ((root.val <= p.val && root.val >= q.val) || (root.val <= q.val && root.val >= p.val))
    //     return root

    // if (root.val >= p.val && root.val >= q.val)
    //     return lowestCommonAncestor(root.left, p, q)
    // else
    //     return lowestCommonAncestor(root.right, p, q)

    while (root) {
        if (root.val < q.val && root.val < p.val) {
            root = root.right
        } else if (root.val > q.val && root.val > p.val) {
            root = root.left
        } else {
            break
        }
    }
    return root
}

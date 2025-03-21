/**
 * https://leetcode.com/problems/balanced-binary-tree/description/
 * https://leetcode.com/problems/balanced-binary-tree/solutions/6215625/just-height-is-not-enough-by-fernamn-ueoz/
 * 110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
 

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
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

function isBalanced(root) {
    let [_, isBalanced] = checkHeightsAndBalance(root)

    return isBalanced
};

const checkHeightsAndBalance = (root) => {
    if (!root) return [0, true]

    let [leftHeight, leftIsBalanced] = checkHeightsAndBalance(root.left)
    let [rightHeight, rightIsBalanced] = checkHeightsAndBalance(root.right)

    let currentHeight = Math.max(leftHeight, rightHeight) + 1
    let isBalanced = leftIsBalanced && rightIsBalanced && (Math.abs(leftHeight - rightHeight) <= 1)

    return [currentHeight, isBalanced]
}
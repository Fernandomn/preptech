/**
 * https://www.geeksforgeeks.org/problems/inorder-successor-in-bst/1
 * Inorder Successor in BST
Given a BST, and a reference to a Node k in the BST. Find the Inorder Successor of the given node in the BST. If there is no successor, return -1. 

Examples :

Input: root = [2, 1, 3], k = 2
      2
    /   \
   1     3
Output: 3 
Explanation: Inorder traversal : 1 2 3 Hence, inorder successor of 2 is 3.

Input: root = [20, 8, 22, 4, 12, N, N, N, N, 10, 14], k = 8
             20
            /   \
           8     22
          / \
         4   12
            /  \
           10   14
Output: 10
Explanation: Inorder traversal: 4 8 10 12 14 20 22. Hence, successor of 8 is 10.

Input: root = [2, 1, 3], k = 3
      2
    /   \
   1     3
Output: -1 
Explanation: Inorder traversal : 1 2 3 Hence, inorder successor of 3 is null.
Constraints:
1 <= n <= 105, where n is the number of nodes
 */

//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] == 'N') return null;

  // Creating vector of strings from input
  // string after spliting by space
  let ip = new Array();

  let ip_str = str.split(' ');

  for (let i = 0; i < ip_str.length; i++) ip.push(ip_str[i]);

  // Create the root of the tree
  let root = new Node(parseInt(ip[0]));

  // Push the root to the queue
  let queue = new Array();
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== 0 && i < ip.length) {
    // Get and remove the front of the queue
    let currNode = queue[0];
    queue.shift();

    // Get the current node's value from the string
    let currVal = ip[i];

    // If the left child is not null
    if (currVal != 'N') {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= ip.length) break;
    currVal = ip[i];

    // If the right child is not null
    if (currVal != 'N') {
      // Create the right child for the current node
      currNode.right = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.right);
    }
    i++;
  }

  return root;
}

function search(root, k) {
  if (!root || root.data === k) return root;

  if (root.data < k) return search(root.right, k);
  return search(root.left, k);
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let s_tree = readLine().trim();
    let root = buildTree(s_tree);
    let k = parseInt(readLine());
    let kNode = search(root, k);
    let obj = new Solution();

    console.log(obj.inOrderSuccessor(root, kNode));

    console.log('~');
  }
}
// } Driver Code Ends

// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {Node} x
 * @return {Number}
 */
class Solution {
  // returns the inorder successor of the Node x in BST (rooted at 'root')
  inOrderSuccessor(root, x) {
    let successor = null;
    while (root) {
      if (root.data > x.data) {
        successor = root;
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return successor ? successor.data : -1;
  }
}

/**
 * 
 * https://leetcode.com/problems/find-center-of-star-graph/
 * https://leetcode.com/problems/find-center-of-star-graph/solutions/6039077/the-core-always-have-more-than-1-connection/
1791. Find Center of Star Graph

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

Example 1:
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

Example 2:
Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
 

Constraints:
3 <= n <= 105
edges.length == n - 1
edges[i].length == 2
1 <= ui, vi <= n
ui != vi
The given edges represent a valid star graph.
 */

function findCenter(edges) {
  let n = edges.length + 1;
  let connList = new Array(n + 1).fill(0);

  for (let [origin, destiny] of edges) {
    connList[origin]++;
    connList[destiny]++;

    // tentativa 2: qualquer nó com mais de uma conexão é o centro da estrela
    if (connList[origin] > 1) return origin;
    if (connList[destiny] > 1) return destiny;
  }

  // tentativa 1: verificando as condições da lista
  // for (let i = 0; i < connList.length; i++) {
  //     if (connList[i] == n - 1) return i
  // }
}

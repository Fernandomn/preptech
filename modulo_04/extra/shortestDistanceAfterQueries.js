/**
 * https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/description/?envType=daily-question&envId=2024-11-27
 * https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6325261/modified-bfs-by-fernamn-xgoz/
 * 3243. Shortest Distance After Road Addition Queries I

You are given an integer n and a 2D integer array queries.

There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.
queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi. After each query, you need to find the length of the shortest path from city 0 to city n - 1.
Return an array answer where for each i in the range [0, queries.length - 1], answer[i] is the length of the shortest path from city 0 to city n - 1 after processing the first i + 1 queries.


Example 1:
Input: n = 5, queries = [[2,4],[0,2],[0,4]]
Output: [3,2,1]
Explanation:
After the addition of the road from 2 to 4, the length of the shortest path from 0 to 4 is 3.
After the addition of the road from 0 to 2, the length of the shortest path from 0 to 4 is 2.
After the addition of the road from 0 to 4, the length of the shortest path from 0 to 4 is 1.

Example 2:
Input: n = 4, queries = [[0,3],[0,2]]
Output: [1,1]
Explanation:
After the addition of the road from 0 to 3, the length of the shortest path from 0 to 3 is 1.
After the addition of the road from 0 to 2, the length of the shortest path remains 1.


Constraints:
3 <= n <= 500
1 <= queries.length <= 500
queries[i].length == 2
0 <= queries[i][0] < queries[i][1] < n
1 < queries[i][1] - queries[i][0]
There are no repeated roads among the queries.
 */
/**
 *
 * @param {number} n
 * @param {number[][]} queries
 * @returns
 */
function shortestDistanceAfterQueries(n, queries) {
  const graph = Array.from({ length: n }, () => new Array());
  const resultList = [];
  let distance = new Array(n).fill(Infinity);

  for (let i = 0; i < n; i++) {
    graph[i].push(i + 1);
  }

  const bfs = () => {
    distance.fill(Infinity);
    // const queue = [[start, 0]]
    const queue = [0];
    // const visited = new Set()
    // visited.add(start)
    distance[0] = 0;

    while (queue.length) {
      const currentNode = queue.shift();
      // const [currentNode, steps] = queue.shift()

      // if (currentNode == end) {
      //     return steps
      // }

      for (const neighbor of graph[currentNode]) {
        if (distance[neighbor] === Infinity) {
          distance[neighbor] = distance[currentNode] + 1;
          queue.push(neighbor);
        }
        // if (!visited.has(neighbor)) {
        //     visited.add(neighbor)
        //     queue.push([neighbor, steps + 1])
        // }
      }
    }
  };

  bfs();

  for (const [from, to] of queries) {
    graph[from].push(to);
    if (distance[from] + 1 < distance[to]) {
      bfs();
    }
    resultList.push(distance[n - 1]);
  }

  return resultList;
}

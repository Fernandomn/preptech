/**
 * https://leetcode.com/problems/course-schedule/description/
 * https://leetcode.com/problems/course-schedule/solutions/6368166/toposort-by-fernamn-2tk0/
 * 207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
 

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:
1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
 */

/**
 * 
 * @param numCourses 
 * @param prerequisites 
 * @returns 
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let rankList: number[] = new Array(numCourses).fill(0);
  // let resultList = []
  let resultCount = 0;
  const graph: number[][] = new Array(numCourses).fill(null).map(() => []);

  for (let [course, prereq] of prerequisites) {
    rankList[course]++;
    graph[prereq].push(course);
  }
  // console.log(`rankList`, rankList)
  // console.log(`graph`, graph)

  let queue: number[] = rankList
    .map((val, index) => (val == 0 ? index : -1))
    .filter((val) => val > -1);

  // console.log('queue', queue)

  while (queue.length) {
    let node: number = queue.shift()!;

    // resultList.push(node);
    resultCount++;
    for (let course of graph[node]) {
      rankList[course]--;
      if (rankList[course] == 0) {
        queue.push(course);
      }
    }
  }

  // console.log(resultList)
  return resultCount == numCourses;
}

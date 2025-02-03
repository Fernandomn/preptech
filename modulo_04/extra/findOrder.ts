/**
 * https://leetcode.com/problems/course-schedule-ii/description/
 * https://leetcode.com/problems/course-schedule-ii/solutions/6368230/toposort-ii-by-fernamn-1wg4/
 * 210. Course Schedule II

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.


Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]
 

Constraints:
1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
 */
/**
 *
 * @param numCourses
 * @param prerequisites
 * @returns
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let rankList = new Array(numCourses).fill(0);
  let resultList = [];
  // let resultCount = 0
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
    const node = queue.shift()!;

    resultList.push(node);
    // resultCount++
    for (let course of graph[node]) {
      rankList[course]--;
      if (rankList[course] == 0) {
        queue.push(course);
      }
    }
  }

  return resultList.length != numCourses ? [] : resultList;
}

// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//     let rankList = new Array(numCourses).fill(0)
//     // let resultList = []
//     let resultCount = 0
//     const graph = new Array(numCourses).fill(null).map(() => [])

//     for (let [course, prereq] of prerequisites) {
//         rankList[course]++
//         graph[prereq].push(course)
//     }
//     // console.log(`rankList`, rankList)
//     // console.log(`graph`, graph)

//     let queue = rankList
//         .map((val, index) => (val == 0 ? index : -1))
//         .filter((val) => val > -1);

//     // console.log('queue', queue)

//     while (queue.length) {
//         let node = queue.shift();

//         // resultList.push(node);
//         resultCount++
//         for (let course of graph[node]) {
//             rankList[course]--;
//             if (rankList[course] == 0) {
//                 queue.push(course);
//             }
//         }
//     }

//     // console.log(resultList)
//     return resultCount == numCourses;
// };

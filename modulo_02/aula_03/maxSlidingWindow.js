/**
 * https://leetcode.com/problems/sliding-window-maximum/description/
 * https://leetcode.com/problems/sliding-window-maximum/solutions/6251674/using-heaps-by-fernamn-jois/
 * 239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 


Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 
 Example 2:
Input: nums = [1], k = 1
Output: [1]
 


Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
 */

function maxSlidingWindow(nums, k) {
  // return iterativeWay(nums, k)
  return heapWay(nums, k);
}

// const iterativeWay = (nums, k) => {
//     const resultList = []

//     for (let i = 0; i <= nums.length - k; i++) {
//         let maxValue = - Infinity
//         for (let j = i; j < i + k; j++) {
//             maxValue = Math.max(maxValue, nums[j])
//         }
//         resultList.push(maxValue)
//     }

//     return resultList
// }

const heapWay = (nums, k) => {
  const heap = new MaxPriorityQueue({ priority: (pair) => pair.value });
  const resultList = [];

  for (let i = 0; i < k; i++) {
    heap.enqueue({ index: i, value: nums[i] });
  }

  resultList.push(heap.front().element.value);

  for (let i = 1; i <= nums.length - k; i++) {
    heap.enqueue({ index: i + k - 1, value: nums[i + k - 1] });
    let maxValue = -Infinity;

    while (maxValue == -Infinity) {
      if (heap.front().element.index < i) {
        heap.dequeue();
      } else {
        maxValue = heap.front().element.value;
      }
    }
    resultList.push(maxValue);
  }

  return resultList;
};

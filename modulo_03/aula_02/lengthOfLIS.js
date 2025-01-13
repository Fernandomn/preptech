/**
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 * https://leetcode.com/problems/longest-increasing-subsequence/solutions/6275520/three-ways-of-solving-it-by-fernamn-3eky/
 * 300. Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing subsequence.


Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:
1 <= nums.length <= 2500
-104 <= nums[i] <= 104

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 */

function lengthOfLIS(nums) {
  // return topDownSolution(nums)
  // return bottomUpSolution(nums)
  return binarySearchSolution(nums);
}

const binarySearchSolution = (nums) => {
  const memo = [];

  for (let num of nums) {
    let left = 0,
      right = memo.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (memo[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < memo.length) {
      memo[left] = num;
    } else {
      memo.push(num);
    }
  }

  return memo.length;
};

const bottomUpSolution = (nums) => {
  const memo = [];
  let max = 1;
  memo[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    let maxSequence = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        maxSequence = Math.max(maxSequence, memo[j]);
      }
    }
    memo[i] = 1 + maxSequence;
    max = Math.max(max, memo[i]);
  }

  return max;
};

const topDownSolution = (nums) => {
  const memo = [];

  const LISByIndex = (index) => {
    if (!memo[index]) {
      let maxSize = 1;
      for (let i = index + 1; i < nums.length; i++) {
        if (nums[index] < nums[i]) {
          const size = 1 + LISByIndex(i);
          maxSize = Math.max(maxSize, size);
        }
      }
      memo[index] = maxSize;
    }
    return memo[index];
  };

  let maxSize = 0;
  for (let i = 0; i < nums.length; i++) {
    const size = LISByIndex(i);
    maxSize = Math.max(maxSize, size);
  }

  return maxSize;
};

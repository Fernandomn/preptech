/**
 * https://leetcode.com/problems/maximum-subarray/description/
 * https://leetcode.com/problems/maximum-subarray/solutions/6271199/kadane-algorithm-by-fernamn-azj1/
 * 53. Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

 
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

function maxSubArray(nums) {
  return kadaneSolution(nums);
  // return quadraticSolution(nums)
}

const kadaneSolution = (nums) => {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);

    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
};

const quadraticSolution = (nums) => {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = nums[i];
    maxSum = Math.max(maxSum, currentSum);

    for (let j = i + 1; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

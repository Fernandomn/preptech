/**
 * https://leetcode.com/problems/permutations/description/
 * https://leetcode.com/problems/permutations/solutions/6257379/why-is-backtracking-so-hard-by-fernamn-8b50/
 * 46. Permutations

Given an array nums of distinct integers, return all the possible 
permutations
. You can return the answer in any order.

 
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
 

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
 */

function permute(nums) {
  // return recursive(nums, [])
  return inPlace(nums);
}

const inPlace = (nums) => {
  const results = [];

  const backtrack = (start) => {
    if (start === nums.length) {
      results.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  };

  backtrack(0);
  return results;
};

const recursive = (nums, partial) => {
  if (nums.length == 0) {
    return [partial];
  }

  let resultList = [];

  for (let i = 0; i < nums.length; i++) {
    let result = recursive(
      [...nums.slice(0, i), ...nums.slice(i + 1)],
      [nums[i], ...partial]
    );
    resultList.push(...result);
  }

  return resultList;
};

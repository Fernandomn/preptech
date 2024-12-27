const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  return nums;
};

const nums1 = [5, 2, 3, 1];
const expec1 = [1, 2, 3, 5];

const nums2 = [5, 1, 1, 2, 0, 0];
const expec2 = [0, 0, 1, 1, 2, 5];

console.log(
  `insertion sort run 1: ${selectionSort(nums1)}. Expected: ${expec1}`
);
console.log(
  `insertion sort run 1: ${selectionSort(nums2)}. Expected: ${expec2}`
);

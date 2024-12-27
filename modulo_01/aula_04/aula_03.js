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

const bubbleSort = (nums) => {
  for (let i = nums.length - 1; i > 1; i--) {
    let anySwap = false;
    for (let j = 1; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        anySwap = true;
      }
    }
    if (!anySwap) break;
  }
};

const mergeSort = (nums, start, end) => {
  if (start >= end) return;

  const mid = Math.floor(start + (end - start) / 2);
  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);
  merge(arr, start, mid, end);
};

const merge = (arr, start, mid, end) => {
  const left = [];
  const right = [];

  // for(let i = 0; i < )
};

const quickSort = (nums) => {};

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

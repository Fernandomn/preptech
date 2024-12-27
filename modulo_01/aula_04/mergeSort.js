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


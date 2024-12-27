const mergeSort = (arr, start, end) => {
  if (start >= end) return;

  const mid = Math.floor(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
};

const merge = (arr, start, mid, end) => {
  let n1 = mid - start + 1;
  let n2 = end - mid;
  const left = [];
  const right = [];

  for (let i = 0; i < n1; i++) {
    left[i] = arr[start + i];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[mid + 1 + j];
  }

  let i = 0,
    j = 0;
  let k = start;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

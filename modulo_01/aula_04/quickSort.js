const quickSort = (array, startIndex = 0, endIndex = array.length - 1) => {
  if (startIndex < endIndex) {
    let pivot = partition(array, startIndex, endIndex);

    quickSort(array, startIndex, pivot - 1);
    quickSort(array, pivot + 1, endIndex);
  }
};

const partition = (array, startIndex, endIndex) => {
  let pivot = array[endIndex];

  let i = startIndex - 1;

  for (let j = startIndex; j <= endIndex; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[endIndex]] = [array[endIndex], array[i + 1]];

  return i + 1;
};

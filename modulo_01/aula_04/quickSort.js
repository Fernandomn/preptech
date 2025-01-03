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

const quickSortAuxMem = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSortAuxMem(left), pivot, ...quickSortAuxMem(right)];
};

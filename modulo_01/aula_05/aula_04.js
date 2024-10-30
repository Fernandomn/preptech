const LinkedList = require('../aula_02/aula01');

const countingSort = (nums) => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  const countingArray = new Array(max + 1).fill(0);
  const resultingArray = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    countingArray[value]++;
  }

  for (let j = 1; j < countingArray.length; j++) {
    countingArray[j] = countingArray[j] + countingArray[j - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const item = nums[i];
    let index = countingArray[item] - 1;
    countingArray[item]--;
    resultingArray[index] = item;
  }

  return resultingArray;
};

const unstableCountingSort = (nums) => {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  const countingArray = new Array(max + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    countingArray[value]++;
  }

  let j = 0;
  for (let i = 0; i < countingArray.length; i++) {
    while (countingArray[i] > 0) {
      nums[j] = i;
      countingArray[i]--;
      j++;
    }
  }
  return nums;
};

const radixSort = (nums) => {
  let linkedListsArray = new Array(10).fill(null).map(() => new LinkedList());
  let biggestNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    let lastDigit = Math.abs(nums[i]) % 10;
    linkedListsArray[lastDigit].insertEnd(nums[i]);

    if (nums[i].toString().length > biggestNumber) {
      biggestNumber = nums[i].toString().length;
    }
  }

  let divisor = 10;
  for (let digitPosition = 1; digitPosition <= biggestNumber; digitPosition++) {
    let currentLinkedListArray = new Array(10)
      .fill(null)
      .map(() => new LinkedList());

    for (let i = 0; i < linkedListsArray.length; i++) {
      while (linkedListsArray[i] !== null && linkedListsArray[i].length() > 0) {
        const currentNumber = linkedListsArray[i].removeBegin();
        let digit = Math.floor(Math.abs(currentNumber.data) / divisor) % 10;

        currentLinkedListArray[digit].insertEnd(currentNumber.data);
      }
    }

    linkedListsArray = currentLinkedListArray;
    divisor *= 10;
  }

  const resultArray = new Array(nums.length).fill(0);
  j = 0;
  for (let i = 0; i < linkedListsArray.length; i++) {
    while (linkedListsArray[i] !== null && linkedListsArray[i].length() > 0) {
      const node = linkedListsArray[i].removeBegin();

      if (node !== null) {
        resultArray[j] = node.data;
        j++;
      }
    }
  }

  return resultArray;
};

const entry1 = [2, 5, 3, 0, 2, 3, 0, 3];
const expec1 = [0, 0, 2, 2, 3, 3, 3, 5];

console.log(
  `Counting sort result: ${countingSort(entry1)}; expected result:${expec1}.`
);
console.log(
  `Unstable counting sort result: ${unstableCountingSort(
    entry1
  )}; expected result:${expec1}.`
);
console.log(
  `Radix sort result: ${radixSort(entry1)}; expected result:${expec1}.`
);

const entry2 = [
  73, 20, 97, 24, 86, 17, 43, 40, 27, 91, 69, 87, 68, 19, 76, 16, 17, 79, 46,
  45,
];
const expec2 = [
  16, 17, 17, 19, 20, 24, 27, 40, 43, 45, 46, 68, 69, 73, 76, 79, 86, 87, 91,
  97,
];

console.log(
  `Counting sort result: ${countingSort(entry2)}; expected result:${expec2}.`
);
console.log(
  `Unstable counting sort result: ${unstableCountingSort(
    entry2
  )}; expected result:${expec2}.`
);
console.log(
  `Radix sort result: ${radixSort(entry2)}; expected result:${expec2}.`
);

const entry3 = [
  23891, 1845, 98542, 123456, 3002, 99999, 4567, 7890, 5678, 12345,
];

const expec3 = [
  1845, 3002, 4567, 5678, 7890, 12345, 23891, 99999, 98542, 123456,
];

console.log(
  `Counting sort result: ${countingSort(entry3)}; expected result:${expec3}.`
);
console.log(
  `Unstable counting sort result: ${unstableCountingSort(
    entry3
  )}; expected result:${expec3}.`
);
console.log(
  `Radix sort result: ${radixSort(entry3)}; expected result:${expec3}.`
);

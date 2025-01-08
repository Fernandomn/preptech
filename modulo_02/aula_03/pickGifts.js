/**
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile/
 * https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6251000/run-the-array-will-work-but-heaps-are-be-oxnm/
 * 2558. Take Gifts From the Richest Pile
 * 
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Reduce the number of gifts in the pile to the floor of the square root of the original number of gifts in the pile.
Return the number of gifts remaining after k seconds.


Example 1:
Input: gifts = [25,64,9,4,100], k = 4
Output: 29
Explanation: 
The gifts are taken in the following way:
- In the first second, the last pile is chosen and 10 gifts are left behind.
- Then the second pile is chosen and 8 gifts are left behind.
- After that the first pile is chosen and 5 gifts are left behind.
- Finally, the last pile is chosen again and 3 gifts are left behind.
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.

Example 2:
Input: gifts = [1,1,1,1], k = 4
Output: 4
Explanation: 
In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile. 
That is, you can't take any pile with you. 
So, the total gifts remaining are 4.
 

Constraints:
1 <= gifts.length <= 103
1 <= gifts[i] <= 109
1 <= k <= 103
 */

function pickGifts(gifts, k) {
  return usingHeap(gifts, k);
  // return usingArrays(gifts, k)
}

const usingArrays = (gifts, k) => {
  while (k--) {
    let maxVal = -Infinity;
    let maxId = -1;
    for (let i = 0; i < gifts.length; i++) {
      if (gifts[i] > maxVal) {
        maxVal = gifts[i];
        maxId = i;
      }
    }
    gifts[maxId] = Math.floor(Math.sqrt(gifts[maxId]));
  }

  return gifts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

// ------------------------------------------------------------

const usingHeap = (gifts, k) => {
  let heap = new Heap(gifts);

  while (k--) {
    const pile = heap.extractMax();
    let newPile = Math.floor(Math.sqrt(pile));
    heap.add(newPile);
  }

  return heap
    .getValues()
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

class Heap {
  heap = [];

  constructor(array = []) {
    this.heapfy(array);
  }

  get lastIndex() {
    return this.heap.length - 1;
  }

  getValues() {
    return this.heap;
  }

  left(index) {
    return 2 * index + 1;
  }

  right(index) {
    return 2 * (index + 1);
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  add(value) {
    this.heap.push(value);

    this.heapfyUp(this.lastIndex);
  }

  peek() {
    return this.heap[0];
  }

  extractMax() {
    if (this.heap.length == 0) return null;

    if (this.heap.length == 1) return this.heap.pop();

    let max = this.heap[0];
    let end = this.heap.pop();
    this.heap[0] = end;

    this.heapfyDown(0);

    return max;
  }

  heapfy(array) {
    this.heap = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.heapfyDown(i);
    }
  }

  heapfyUp(index) {
    const parentIndex = this.parent(index);
    if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapfyUp(parentIndex);
    }
  }

  heapfyDown(index) {
    const leftIndex = this.left(index);
    const rightIndex = this.right(index);
    let greaterIndex = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[greaterIndex] < this.heap[leftIndex]
    ) {
      greaterIndex = leftIndex;
    }
    if (
      rightIndex < this.heap.length &&
      this.heap[greaterIndex] < this.heap[rightIndex]
    ) {
      greaterIndex = rightIndex;
    }
    if (greaterIndex != index) {
      [this.heap[index], this.heap[greaterIndex]] = [
        this.heap[greaterIndex],
        this.heap[index],
      ];
      this.heapfyDown(greaterIndex);
    }
  }
}

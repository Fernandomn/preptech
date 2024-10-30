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

  add(value, index) {
    this.heap.push({ val: value, index: index });

    this.heapfyUp(this.lastIndex);
  }

  peek() {
    return this.heap[0];
  }

  extractMax() {
    if (this.heap.length > 0) {
      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0 && end !== undefined) {
        this.heap[0] = end;
        this.heapfyDown(0);
      }
      return max;
    }
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
      this.heap[leftIndex] > this.heap[greaterIndex]
    ) {
      greaterIndex = leftIndex;
    }
    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] > this.heap[greaterIndex]
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

  getFullHeap() {
    return this.heap;
  }
}

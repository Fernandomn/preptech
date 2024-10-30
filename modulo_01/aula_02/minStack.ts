class MinStack {
  stack: number[] = [];
  min: number[] = [];
  
  constructor() {}

  get minTop(): number {
    return this.min.length - 1;
  }
  get minStack(): number {
    return this.stack.length - 1;
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.min.length === 0) {
      this.min.push(val);
    } else if (val <= this.min[this.minTop]) {
      this.min.push(val);
    }
  }

  pop(): void {
    if (this.stack[this.minStack] === this.min[this.minTop]) {
      this.min.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.minStack];
  }

  getMin(): number {
    return this.min[this.minTop];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

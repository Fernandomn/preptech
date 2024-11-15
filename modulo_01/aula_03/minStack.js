"use strict";
class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }
    get minTop() {
        return this.min.length - 1;
    }
    get minStack() {
        return this.stack.length - 1;
    }
    push(val) {
        this.stack.push(val);
        if (this.min.length === 0) {
            this.min.push(val);
        }
        else if (val <= this.min[this.minTop]) {
            this.min.push(val);
        }
    }
    pop() {
        if (this.stack[this.minStack] === this.min[this.minTop]) {
            this.min.pop();
        }
        this.stack.pop();
    }
    top() {
        return this.stack[this.minStack];
    }
    getMin() {
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

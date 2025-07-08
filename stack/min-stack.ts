/**
 * Problem: Min Stack
 * ------------------------------------------
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * 
 * Implement the MinStack class:
 * - push(val): Pushes the element onto the stack.
 * - pop(): Removes the element on the top of the stack.
 * - top(): Gets the top element.
 * - getMin(): Retrieves the minimum element in the stack.
 * 
 * ------------------------------------------
 * Difficulty: Medium (LeetCode #155)
 * 
 * ------------------------------------------
 * Constraints:
 * - Methods will be called at most 3 * 10^4 times.
 * - -2^31 <= val <= 2^31 - 1
 */

class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const min = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3

minStack.pop();
console.log(minStack.top());    // Expected: 0
console.log(minStack.getMin()); // Expected: -2

const s = new MinStack();
s.push(1);
s.push(2);
s.push(-2);
s.push(3);
console.log(s.getMin()); // Expected: -2
s.pop();
s.pop();
console.log(s.getMin()); // Expected: 1

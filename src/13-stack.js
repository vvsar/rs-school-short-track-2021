/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.length = 0;
    this.elements = {};
  }

  push(element) {
    ++this.length;
    this.elements[this.length] = element;
  }

  pop() {
    if (this.length > 0) {
      const dataToDelete = this.elements[this.length];
      delete this.elements[this.length];
      --this.length;
      return dataToDelete;
    }
    return null;
  }

  peek() {
    return this.elements[this.length];
  }
}

module.exports = Stack;

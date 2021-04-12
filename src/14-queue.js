// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.size = 0;
    this.elements = {};
  }

  get size() {
    // throw new Error('Not implemented');
    return this.size;
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    ++this.size;
    this.elements[this.size] = element;
  }

  dequeue() {
    // throw new Error('Not implemented');
    if (this.length > 0) {
      const dataToDelete = this.elements[0];
      delete this.elements[0];
      --this.length;
      return dataToDelete;
    }
    return null;
  }
}

module.exports = Queue;

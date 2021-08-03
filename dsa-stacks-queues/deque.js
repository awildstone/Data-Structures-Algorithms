/** Node: node for a deque. */

class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }

  /** Deque: chained-together nodes where you can add/remove
 *  from the front or add/remove from the back. */

class Deque {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    /** appendleft(val): add new value to beginning of the deque. Returns undefined. */

    appendleft(val) {
        let newNode = new Node(val);

        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size += 1;
    }

    /** appendright(val): add new value to end of the deque. Returns undefined. */

    appendright(val) {
        let newNode = new Node(val);

        if (this.isEmpty()) {
            this.last = newNode;
            this.first = newNode;
        } else {
            this.last.next = newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }

        this.size += 1;
    }

    /** popleft(): remove the node from the start of the deque
    * and return its value. Should throw an error if the deque is empty. */

    popleft() {
        if (this.isEmpty()) throw new Error('Cannot remove node from the beginning of an empty deque!');

        let removed = this.first;
        this.first = this.first.next;

        if (this.size < 2) this.last = this.first;
        this.size -= 1;

        return removed.val;
    }

    /** popright(): remove the node from the end of the deque
    * and return its value. Should throw an error if the deque is empty. */

    popright() {
        if (this.isEmpty()) throw new Error('Cannot remove node from the end of an empty deque!');

        let removed = this.last;
        this.last = this.last.prev;

        if (this.size < 2) this.first = this.last;
        this.size -= 1;

        return removed.val;
    }

    /** peekleft(): return the value of the first node in the deque. */

    peekleft() {
        return this.first.val;
    }

    /** peekright(): return the value of the last node in the deque. */

    peekright() {
        return this.last.val; 
    }

    /** isEmpty(): return true if the deque is empty, otherwise false */

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = Deque;
  
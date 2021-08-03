/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _getNode(idx): get the node at a given index. */

  _getNode(idx) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode !== null && count !== idx) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;

    this.length += 1;
  }

  /** pop(): return & remove last item. Throws error if list is empty. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. Throws error if list is empty. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. Throws error if index is invalid. */

  getAt(idx) {
    try {
      if (idx >= this.length || idx < 0) throw new Error('Index is invalid!');
      return this._getNode(idx).val;
    } catch (e) {
      console.warn(e);
    }
  }

  /** setAt(idx, val): set val at idx to val. Throws error if index is invalid. */

  setAt(idx, val) {
    try {
      if (idx >= this.length || idx < 0) throw new Error('Index is invalid!');
      let targetNode = this._getNode(idx);
      targetNode.val = val;
    } catch (e) {
      console.warn(e);
    }
  }

  /** insertAt(idx, val): insert new node w/val at idx. */

  insertAt(idx, val) {
    try {
      if (idx > this.length || idx < 0) throw new Error('Index is invalid!');

      //case add before first node (unshift)
      if (idx === 0) {
        this.unshift(val);
      //case add after last node (push)
      } else if (idx === this.length) {
        this.push(val)
      //case update in middle of list
      } else {
        let newNode = new Node(val);
        let previousNode = this._getNode(idx - 1);
        
        newNode.next = previousNode.next;
        previousNode.next = newNode;

        this.length += 1;
      }
    } catch (e) {
      console.warn(e);
    }
  }

  /** removeAt(idx): return & remove item at idx, throws error if index is invalid. */

  removeAt(idx) {
    try {
      if (idx >= this.length || idx < 0) throw new Error('Index is invalid!');

      let previousNode = this._getNode(idx - 1);
      let currentNode = this._getNode(idx);

      // case first node
      if (idx === 0) {
        this.head = this.head.next
        this.length -= 1;
        //set the tail to head if there are 1 or less nodes
        if (this.length < 2) this.tail = this.head;
        return currentNode.val;
      }

      //case last node
      if (idx === this.length - 1) {
        previousNode.next = null;
        this.tail = previousNode;
        this.length -= 1;
        return currentNode.val;
      }
      
      //case middle node
      previousNode.next = currentNode.next;
      this.length -= 1;
      return currentNode.val;

    } catch(e){
      console.warn(e);
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    try {
      //case empty list
      if (this.length === 0) return 0;

      let currentNode = this.head;
      let total = 0;
      while(currentNode) {
        if (isNaN(currentNode.val)) throw new Error('Can only average number values!');
        total += currentNode.val;
        currentNode = currentNode.next
      }
      return total / this.length

    } catch (e) {
      console.warn(e);
    }
  }
}

module.exports = LinkedList;

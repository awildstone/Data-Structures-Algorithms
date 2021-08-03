/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // let toSumQueue = [this.root];
    // let sum = 0;

    // while (toSumQueue.length) {
    //   let current = toSumQueue.shift();
      
    //   if (current !== null) { //if node is not empty
    //     sum += current.val;

    //     for (let child of current.children) {
    //       toSumQueue.push(child);
    //     }
    //   }
    // } 
    // return sum;

    //Kept my old solution as reference. This solution is better because it has O(1) space complexity while my previous solution had O(n) space complexity. Both have O(n) time complexity.

    if (this.root === null) return 0;

    let sum = this.root.val;

    function _findSum(node) {
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length > 0) _findSum(child);
      }
    }
    _findSum(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // let toCountQueue = [this.root];
    // let count = 0;

    // while(toCountQueue.length) {
    //   let current = toCountQueue.shift();

    //   if (current !== null) { //if node is not empty

    //     if (current.val % 2 === 0) count++; //if val is even

    //     for (let child of current.children) {
    //       toCountQueue.push(child);
    //     }
    //   }
    // }
    // return count;

    //Kept my old solution as reference. This solution is better because it has O(1) space complexity while my previous solution had O(n) space complexity. Both have O(n) time complexity.

    if (this.root === null) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function _getCount(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        if (child.children.length > 0) _getCount(child);
      }
    }
    _getCount(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // let toCountQueue = [this.root];
    // let count = 0;

    // while(toCountQueue.length) {
    //   let current = toCountQueue.shift();

    //   if (current !== null) { //if node is not empty

    //     if (current.val > lowerBound) count++; //if val is greater than lowerBound

    //     for (let child of current.children) {
    //       toCountQueue.push(child);
    //     }
    //   }
    // }
    // return count;

    //Kept my old solution as reference. This solution is better because it has O(1) space complexity while my previous solution had O(n) space complexity. Both have O(n) time complexity.

    if (this.root === null) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;

    function _countNums(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) count++;
        if (child.children.length > 0) _countNums(child);
      }
    }
    _countNums(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };

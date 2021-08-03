class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while(true) {
      if (newNode.val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    function _insertNode(node) {
      if (node === null) return newNode;

      if (newNode.val > node.val) {
        node.right = _insertNode(node.right);
      } else {
        node.left = _insertNode(node.left);
      }
      return node;
    }

     if (this.root === null) {
       this.root = newNode;
       return this;
     }
    return _insertNode(this.root);;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    if (!currentNode) return;
    
    while (currentNode) {
      if (currentNode.val === val) return currentNode;

      if (val > currentNode.val) {
        if (!currentNode.right) return;
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) return
        currentNode = currentNode.left;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;

    function _findVal(currNode) {
      if (!currNode) return;
      if (currNode.val === val) return currNode;

      if (val > currNode.val) {
        return _findVal(currNode.right);
      } else {
        return _findVal(currNode.left);
      }
    }
    return _findVal(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let result = [];

    function _traverse(node) {
      result.push(node.val);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right); 
    }
    _traverse(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let result = [];

    function _traverse(node) {
      if (node.left) _traverse(node.left);
      result.push(node.val);
      if (node.right) _traverse(node.right); 
    }
    _traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];

    function _traverse(node) {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      result.push(node.val);
    }
    _traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let result = [];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      result.push(currentNode.val);
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    //finds the smallest value in the subtree
    function _findMinVal(node) {
      let min = node.val;
      while(node.left) {
        min = node.left.val;
        node = node.left;
      }
      return min;
    }

    function _removeNode(node, val) {
      //base case
      if (!node) return node;

      //val is in the left subtree somewhere
      if (node.val > val) {
        node.left = _removeNode(node.left, val);

      //val is in the right subtree somewhere   
      } else if (node.val < val) {
        node.right = _removeNode(node.right, val);

      //current node matches val
      } else {
        //case single child or no children
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        //case two children. find the inorder successor of the node (the node that is larger than the node we are removing (aka smallest in right subtree).

        //assign inorder successor val to the current node
        node.val = _findMinVal(node.right);

        //delete the successor
        node.right = _removeNode(node.right, node.val);
      }
      return node;
    }

    return _removeNode(this.root, val);
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(node=this.root) {
    //case empty tree
    if (!node) return true;

    //get and return the height of a subtree
    function _getHeight(node) {
      //base case
      if (!node) return 0;
      return Math.max(_getHeight(node.left), _getHeight(node.right)) + 1;
    }

    let leftHeight = _getHeight(node.left);
    let rightHeight = _getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) <= 1) return true;

    return false;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(node=this.root) {
    //case empty tree
    if (!node) return;

    //node has a left child but no right child, so we want the largest element in the left subtree.
    if (!node.right && node.left) return this.findSecondHighest(node.left);

    //if the next node is the largest (there are no children) we found the second largest.
    if (node.right && !node.right.left && !node.right.right) return node.val;

    //recurse on the right subtree until we match a case above
    return this.findSecondHighest(node.right);
  }
}

module.exports = BinarySearchTree;

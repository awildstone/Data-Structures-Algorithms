/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node=this.root) {
    //case empty node
    if (node === null) return 0;

    //get the count for left and right depths
    let leftDepth = this.minDepth(node.left);
    let rightDepth = this.minDepth(node.right);

    //return smallest +1 to account for root node
    return Math.min(leftDepth, rightDepth) + 1
  }

  // minDepth() {
  //   //case empty tree
  //   if (this.root === null) return 0;

  //   function _countDepth(node) {
  //     //case single node return depth of 1
  //     if (node.left === null && node.right === null) return 1;
  //     //why is this check here??
  //     if (node.left === null) return _countDepth(node.right) + 1;
  //     //why is this check here??
  //     if (node.right === null) return _countDepth(node.left) + 1;

  //     //return smallest +1 to account for root node
  //     return Math.min(_countDepth(node.right), _countDepth(node.left)) + 1;

  //   }
  //   return _countDepth(this.root);
  // }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node=this.root) {
    //case empty node
    if (node === null) return 0;

    //get the count for left and right depths
    let leftDepth = this.maxDepth(node.left);
    let rightDepth = this.maxDepth(node.right);

    //return largest +1 to account for root node
    return Math.max(leftDepth, rightDepth) + 1
  }

  // maxDepth() {
  //   //case empty tree
  //   if (this.root === null) return 0;

  //   function _countDepth(node) {
  //     //case single node return depth of 1
  //     if (node.left === null && node.right === null) return 1;
  //     //why is this check here??
  //     if (node.left === null) return _countDepth(node.right) + 1;
  //     //why is this check here??
  //     if (node.right === null) return _countDepth(node.left) + 1;

  //     //return smallest +1 to account for root node
  //     return Math.max(_countDepth(node.right), _countDepth(node.left)) + 1;

  //   }
  //   return _countDepth(this.root);
  // }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    function _findMaxSum(node) {
      //case empty node
      if (node === null) return 0;
  
      //get the sum for left and right depths
      let leftSum = _findMaxSum(node.left);
      let rightSum = _findMaxSum(node.right);

      //new maxSum is the greater between current node and children sum and current maxSum
      maxSum = Math.max(maxSum, leftSum + rightSum + node.val);

      //return greater between left and right sum + the root node value
      return Math.max(leftSum, rightSum) + node.val;
    }
    
    let maxSum = 0;
    //call private method to recurse tree starting with root node
    _findMaxSum(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    function _findNextLarger(node) {
      //case empty node
      if (node === null) return;
      
      // if the current node is greater than the lowerbound & less than current nextlarger, set the node val to nextlarger
      if (node.val > lowerBound) {
        if (node.val < nextLarger || nextLarger === null) nextLarger = node.val;
      }

      //while node is not null, recurse all child nodes and check if they meet conditions above
      _findNextLarger(node.left);
      _findNextLarger(node.right);

      return;
    }

    let nextLarger = null;
    //call private method to recurse tree starting with root node
    _findNextLarger(this.root);
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    //case single node tree
    if (node1 === this.root || node2 === this.root) return false;

    function _findNodeData(nodeToFind, currentNode, level=0, data={level: 0, parent: null}) {
      //we have all found node data so return it
      if (data.parent) return data;

      //we found the node's parent, so record it
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      }

      //recurse left child nodes until we find the node add 1 to level each recursion
      if (currentNode.left) _findNodeData(nodeToFind, currentNode.left, level + 1, data);

      //recurse right child nodes until we find the node add 1 to level each recursion
      if (currentNode.right) _findNodeData(nodeToFind, currentNode.right, level + 1, data);

      return data;
    }

    //recurse until we find (or don't find) the nodes, and collect the parent and level data
    let node1Data = _findNodeData(node1, this.root);
    let node2Data = _findNodeData(node2, this.root);

    let differentParents = node1Data.parent !== node2Data.parent;
    let sameLevels = node1Data.level === node2Data.level;

    return differentParents && sameLevels;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const treeNodes = [];

    function _serialize(node) {
      if (node) {
        treeNodes.push(node.val);
        _serialize(node.left);
        _serialize(node.right);
      } else {
        treeNodes.push('#');
      }
    }
    _serialize(tree.root);
    return treeNodes.join(" ");
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    if (!stringTree) return null;

    const chars = stringTree.split(" ");

    function _buildTree() {
      if (chars.length) {
        const currentVal = chars.shift();

        if (currentVal === '#') return null;

        let currentNode = new BinaryTreeNode(+currentVal);
        currentNode.left = _buildTree();
        currentNode.right = _buildTree();

        return currentNode;
      }
    }

    const root = _buildTree();
    return new BinaryTree(root);
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode=this.root) {
    // case empty tree
    if (currentNode === null) return null;

    // case root is one of the target nodes
    if (currentNode === node1 || currentNode === node2) return currentNode;

    //recursively search the left & right sub-tree
    let left = this.lowestCommonAncestor(node1, node2, currentNode.left);
    let right = this.lowestCommonAncestor(node1, node2, currentNode.right);

    // if neither left nor right is null, currentNode is the ancestor
    if (left !== null && right !== null) return currentNode;
    
    // if one node is not null, return it
    if (left !== null || right !== null) return left || right;
    
    // left and right are both null, return null
    if (left === null && right === null) return null;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
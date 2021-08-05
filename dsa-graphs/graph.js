class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let visitStack = [start];
    let seen = new Set(visitStack);
    let result = [];

    while (visitStack.length > 0) {
      let currentNode = visitStack.pop();
      result.push(currentNode.value);

      for (let neighbor of currentNode.adjacent) {
        if(!seen.has(neighbor)) {
          visitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let visitQueue = [start];
    let seen = new Set(visitQueue);
    let result = [];

    while (visitQueue.length > 0) {
      let currentNode = visitQueue.shift();
      result.push(currentNode.value);

      for (let neighbor of currentNode.adjacent) {
        if(!seen.has(neighbor)) {
          visitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return result;
  }

  //This function accepts a source vertex and a target vertex. Returns the shortest path between the two vertex.
  shortestPath(source, target) {
    if (source === target) return [source.value];

    let visitQueue = [source];
    let visited = new Set();
    let predecessors = new Map();
    let path = [];

    while(visitQueue.length > 0) {
      let currentNode = visitQueue.shift();

      if (currentNode === target) {
        let last = predecessors.get(target.value);
        while(last) {
          path.push(last);
          last = predecessors.get(last);
        }
        path.unshift(target.value);
        path.reverse();
        return path;
      }
      visited.add(currentNode);

      for (let node of currentNode.adjacent) {
        if (!visited.has(node)) {
          predecessors.set(node.value, currentNode.value);
          visitQueue.push(node);
        }
      }
    }
  }
}

module.exports = {Graph, Node}
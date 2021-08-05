const { Graph, Node } = require("./graph");

describe("addVertex", function() {
  it("should add a key in the adjacency", function() {
    let graph = new Graph();
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    expect(graph.nodes.has(a)).toBe(false);
    expect(graph.nodes.has(b)).toBe(false);
    expect(graph.nodes.has(c)).toBe(false);
    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    expect(graph.nodes.has(a)).toBe(true);
    expect(graph.nodes.has(b)).toBe(true);
    expect(graph.nodes.has(c)).toBe(true);
  });
});

describe("addVertices", function() {
  it("should add multiple keys in the adjacency", function() {
    let graph = new Graph();
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    expect(graph.nodes.has(a)).toBe(false);
    expect(graph.nodes.has(b)).toBe(false);
    expect(graph.nodes.has(c)).toBe(false);
    graph.addVertices([a, b, c]);
    expect(graph.nodes.has(a)).toBe(true);
    expect(graph.nodes.has(b)).toBe(true);
    expect(graph.nodes.has(c)).toBe(true);
  });
});

describe("addEdge", function() {
  it("should add the appropriate edges to the adjacency list", function() {
    let graph = new Graph();
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    let d = new Node("D");
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);
    expect(a.adjacent).toContain(b, c);
    expect(b.adjacent).toContain(a, d);
    expect(c.adjacent).toContain(a, d);
    expect(d.adjacent).toContain(b, c);
  });
});

describe("removeEdge", function() {
  it("should remove the vertices from the adjacency list", function() {
    let graph = new Graph();
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    let d = new Node("D");
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

    graph.removeEdge(b, a);
    graph.removeEdge(c, d);

    expect(a.adjacent).not.toContain(b);
    expect(c.adjacent).not.toContain(d);
  });
});

describe("removeVertex", function() {
  it("should remove the vertex as well as any edges", function() {
    let graph = new Graph();
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    let d = new Node("D");
    graph.addVertices([a, b, c, d]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    graph.addEdge(c, d);

    graph.removeVertex(c);
    graph.removeVertex(d);

    expect(graph.nodes.has(a)).toBeTruthy();
    expect(graph.nodes.has(b)).toBeTruthy();
    expect(graph.nodes.has(c)).toBeFalsy();
    expect(graph.nodes.has(d)).toBeFalsy();
  });
});

describe("DFS", function() {
  it("return an array of the nodes searched using DFS", function() {
    let graph = new Graph();
    let S = new Node("S");
    let P = new Node("P");
    let U = new Node("U");
    let X = new Node("X");
    let Q = new Node("Q");
    let Y = new Node("Y");
    let V = new Node("V");
    let R = new Node("R");
    let W = new Node("W");
    let T = new Node("T");

    graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

    graph.addEdge(S, P);
    graph.addEdge(S, U);

    graph.addEdge(P, X);
    graph.addEdge(U, X);

    graph.addEdge(P, Q);
    graph.addEdge(U, V);

    graph.addEdge(X, Q);
    graph.addEdge(X, Y);
    graph.addEdge(X, V);

    graph.addEdge(Q, R);
    graph.addEdge(Y, R);

    graph.addEdge(Y, W);
    graph.addEdge(V, W);

    graph.addEdge(R, T);
    graph.addEdge(W, T);

    var result = JSON.stringify(graph.depthFirstSearch(S));
    var validResult =
      result ===
        JSON.stringify(["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]) ||
      result ===
        JSON.stringify(["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"]);

    expect(validResult).toBe(true);
  });
});

describe("BFS", function() {
  it("should return an array of the nodes searched using BFS", function() {
    let graph = new Graph();
    let S = new Node("S");
    let P = new Node("P");
    let U = new Node("U");
    let X = new Node("X");
    let Q = new Node("Q");
    let Y = new Node("Y");
    let V = new Node("V");
    let R = new Node("R");
    let W = new Node("W");
    let T = new Node("T");

    graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

    graph.addEdge(S, P);
    graph.addEdge(S, U);

    graph.addEdge(P, X);
    graph.addEdge(U, X);

    graph.addEdge(P, Q);
    graph.addEdge(U, V);

    graph.addEdge(X, Q);
    graph.addEdge(X, Y);
    graph.addEdge(X, V);

    graph.addEdge(Q, R);
    graph.addEdge(Y, R);

    graph.addEdge(Y, W);
    graph.addEdge(V, W);

    graph.addEdge(R, T);
    graph.addEdge(W, T);

    expect(graph.breadthFirstSearch(S)).toEqual([
      "S",
      "P",
      "U",
      "X",
      "Q",
      "V",
      "Y",
      "R",
      "W",
      "T"
    ]);
  });
});

describe("shortestPath", function() {

  it("returns an array containing the value for a singleton graph", function() {
    let graph = new Graph();
    let A = new Node("A");
    graph.addVertex(A);

    expect(graph.shortestPath(A, A)).toEqual(["A"]);
  });

  it("returns an array containing the shortest path values between two vertex.", function() {
    let graph = new Graph();
    let A = new Node("A");
    let B = new Node("B");
    let C = new Node("C");
    let D = new Node("D");
    let E = new Node("E");
    let F = new Node("F");

    graph.addVertices([A, B, C, D, E, F]);
    graph.addEdge(A, B);
    graph.addEdge(A, F);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(B, E);
    graph.addEdge(C, D);
    graph.addEdge(E, F);

    expect(graph.shortestPath(A, E)).toEqual(["A", "F", "E"]);
    expect(graph.shortestPath(B, F)).toEqual(["B", "E", "F"]);
    expect(graph.shortestPath(D, F)).toEqual(["D", "B", "E", "F"]);
  });

});

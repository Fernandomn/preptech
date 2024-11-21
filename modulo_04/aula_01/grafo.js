class MatrixGraph {
  adjMatrix = null;
  vertexCount = 0;
  edgeCount = 0;

  constructor(vertex) {
    this.vertexCount = vertex;
    this.edgeCount = 0;
    this.adjMatrix = new Array(vertex)
      .fill(false)
      .map(() => new Array(vertex).fill(false));
  }

  addSingleDirectionEdge(u, v) {
    this.adjMatrix[u][v] = true;
    this.edgeCount++;
  }

  addBiDiretionalEdge(u, v) {
    this.addSingleDirectionEdge(u, v);
    this.addSingleDirectionEdge(v, u);
  }

  dfs(node, visited = new Set()) {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of new Array(this.vertexCount).keys()) {
        if (this.adjMatrix[node][neighbor]) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }

  dfsVisitedList(node, visited = Set()) {
    if (visited.has(node)) {
      return [];
    }
    let visitedNodesList = [node];

    for (let neighbor of new Array(this.vertexCount).keys()) {
      if (this.adjMatrix[node][neighbor]) {
        visitedNodesList = [
          ...visitedNodesList,
          ...this.dfsVisitedList(neighbor, visited),
        ];
      }
    }
    return visitedNodesList;
  }
}

class ListGraph {
  adjList = [];
  vertexCount = 0;
  edgeCount = 0;

  constructor(v) {
    this.vertexCount = v;
    this.edgeCount = 0;
    this.adjList = new Array(v).fill([])
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.edgeCount++;
  }

  addBiDiretionalEdge(u, v) {
    this.addEdge(u, v);
    this.addEdge(v, u);
  }

  dfs(node, visited = new Set()) {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of this.adjList[node]) {
        this.dfs(neighbor, visited);
      }
    }
  }

  dfsVisitedList(node, visited = new Set()) {
    if (visited.has(node)) {
      return [];
    }
    visited.add(node);
    let visitedNodesList = [node];

    for (let neighbor of this.adjList[node]) {
      visitedNodesList = [
        ...visitedNodesList,
        ...this.dfsVisitedList(neighbor, visited),
      ];
    }
    return visitedNodesList;
  }

  bfs(node) {
    let visited = new Set();
    visited.add(node);

    let queue = [];
    queue.push(node);

    while (queue.length > 0) {
      let currentNode = qqueue.shift();
      for (let neigh of this.adjList[currentNode]) {
        if (!visited.has(neigh)) {
          visited.add(neigh);
          queue.push(neigh);
        }
      }
    }
  }

  bfsVisitedList(node) {
    let visited = new Set();
    visited.add(node);

    let queue = [];
    queue.push(node);

    let listOfVisitedNodes = [];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      listOfVisitedNodes.push(currentNode);

      for (let neigh of this.adjList[currentNode]) {
        if (!visited.has(neigh)) {
          visited.add(neigh);
          queue.push(neigh);
        }
      }
    }
    return listOfVisitedNodes;
  }
}

// tests

let g = new ListGraph(6); // ignoring the 0 node
g.addEdge(1, 2);
g.addEdge(2, 1);
g.addEdge(1, 4);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 2);
g.addEdge(2, 4);
g.addEdge(4, 2);
g.addEdge(2, 5);
g.addEdge(5, 2);
g.addEdge(3, 5);
g.addEdge(5, 3);
g.addEdge(4, 5);
g.addEdge(5, 4);
console.log(g.bfsVisitedList(1));

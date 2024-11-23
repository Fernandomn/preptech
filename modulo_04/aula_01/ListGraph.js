export default class ListGraph {
  adjList = [];
  vertexCount = 0;
  edgeCount = 0;

  constructor(v) {
    this.vertexCount = v;
    this.edgeCount = 0;
    this.adjList = new Array(v).fill([]);
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

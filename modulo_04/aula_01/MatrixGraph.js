export default class MatrixGraph {
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

class MatrixWeightedGraph {}

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
}

class ListGraph {
  adjList = [];
  vertexCount = 0;
  edgeCount = 0;

  constructor(v) {
    this.vertexCount = v;
    this.edgeCount = 0;
    this.adjList = new Array(v);
  }

  addSingleDirectionEdge(u, v) {
    this.adjList[u].push(v);
    this.edgeCount++;
  }

  addBiDiretionalEdge(u, v) {
    this.addSingleDirectionEdge(u, v);
    this.addSingleDirectionEdge(v, u);
  }
}

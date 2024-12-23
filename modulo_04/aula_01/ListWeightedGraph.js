class ListWeightedGraph {
  adjList = [];
  vertexCount = 0;
  edgeCount = 0;

  constructor(v) {
    this.vertexCount = v;
    this.edgeCount = 0;
    for (let i = 0; i < v; i++) {
      this.adjList.push([]);
    }
  }

  addEdge(u, v, w) {
    this.adjList[u].push({ vertex: v, weight: w });
    this.edgeCount++;
  }

  addBiDiretionalEdge(u, v, w) {
    this.addEdge(u, v, w);
    this.addEdge(v, u, w);
  }

  dijkstraWithouthHeap(source, target) {
    let visited = new Array(this.vertexCount).fill(false);
    let distances = new Array(this.vertexCount).fill(Number.MAX_VALUE);
    // let unvisited = Object.keys(new Array(this.vertexCount));

    distances[source] = 0;

    while (visited.some((val) => !val)) {
      let workingNode = this.minimunDistance(distances, visited);
      //   if (workingNode < 0) {
      //     return -1;
      //   }
      if (workingNode == target) {
        return distances[target];
      }
      visited[workingNode] = true;

      for (let { neigh, weight } of this.adjList[workingNode]) {
        const newdistance = distances[workingNode] + weight;
        if (newdistance < distances[neigh]) {
          distances[neigh] = newdistance;
        }
      }
    }
    return distances[target];
    //     for (let count = 0; count < this.vertexCount - 1; count++) {
    //       let closestNode = minimunDistance(distances, visited);
    //       visited[closestNode] = true;

    //       for(let v = 0; v < this.vertexCount; v++){
    // if(!visited[v] && this.adjList[])
    //       }
    //     }
  }

  minimunDistance(distances, visited) {
    let min = Number.MAX_VALUE;
    let minIndex = -1;

    for (let v = 0; v < this.vertexCount; v++) {
      if (!visited[v] && distances[v] <= min) {
        min = distances[v];
        minIndex = v;
      }
    }
    return minIndex;
  }

  printGraph() {
    console.log('Graph:');
    for (let v = 0; v < this.vertexCount; v++) {
      let exit = `[${v}]: `;
      for (let { vertex, weight } of this.adjList[v]) {
        exit += `(${vertex}, ${weight}) ->`;
      }
      exit += ' |';
      // console.log(`${v}: ${this.adjList[v].join('->')},`);
      console.log(exit);
    }
    console.log('end graph.');
  }
}

// Testing Dijkstra
let g2 = new ListWeightedGraph(8);
g2.addEdge(0, 1, 2); //O->A
g2.addEdge(1, 0, 2); //A->O
g2.addEdge(0, 2, 5); //O->B
g2.addEdge(2, 0, 5); //B->O
g2.addEdge(0, 3, 4); //O->C
g2.addEdge(3, 0, 4); //C->O
g2.addEdge(1, 2, 2); //A->B
g2.addEdge(2, 1, 2); //B->A
g2.addEdge(1, 4, 7); //A->D
g2.addEdge(4, 1, 7); //D->A
g2.addEdge(1, 6, 12); //A->F
g2.addEdge(6, 1, 12); //F->A
g2.addEdge(2, 3, 1); //B->C
g2.addEdge(3, 2, 1); //C->B
g2.addEdge(2, 4, 4); //B->D
g2.addEdge(4, 2, 4); //D->B
g2.addEdge(2, 5, 3); //B->E
g2.addEdge(5, 2, 3); //E->B
g2.addEdge(3, 5, 4); //C->E
g2.addEdge(5, 3, 4); //E->C
g2.addEdge(4, 5, 4); //D->E
g2.addEdge(5, 4, 4); //E->D
g2.addEdge(4, 7, 5); //D->T
g2.addEdge(7, 4, 5); //T->D
g2.addEdge(5, 7, 7); //E->T
g2.addEdge(7, 5, 7); //T->E
g2.addEdge(6, 7, 3); //F->T
g2.addEdge(7, 6, 3); //T->F

g2.printGraph();
console.log(`Dijskstra's of 0 and 7: ${g2.dijkstraWithouthHeap(0, 7)}`);

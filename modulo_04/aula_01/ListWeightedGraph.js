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
    let visited = new Set();
    let distances = new Array(this.vertexCount).fill(Infinity);
    distances[source] = 0;

    const queue = new MinPriorityQueue({ priority: (node) => node.distance });

    queue.enqueue({ node: source, distance: 0 });

    while (queue.size()) {
      let { node: currentNode, distance: currentDistance } =
        queue.dequeue().element;

      if (!visited.has(currentNode)) {
        visited.add(currentNode);

        for (let { vertex, weight } of this.adjList[currentNode]) {
          const newDistance = currentDistance + weight;

          if (newDistance < distances[vertex]) {
            distances[vertex] = newDistance;
            queue.enqueue({ node: vertex, distance: newDistance });
          }
        }
      }
    }

    return distances;
  }

  kruskal_noDisjointSets() {
    const edges = [];
    for (let node = 0; node < this.vertexCount; node++) {
      for (let neigh of this.adjList[node]) {
        edges.push([neigh.weight, node, neigh.vertex]);
      }
    }

    edges.sort((a, b) => a[0] - b[0]);
    const subsets = new Array(this.vertexCount)
      .fill(0)
      .map((_, index) => index);

    let sumOfEdges = 0;
    let countEdges = 0;

    for (let [weight, source, target] of edges) {
      if (subsets[source] != subsets[target]) {
        sumOfEdges += weight;
        let subset = subsets[source];

        for (let i = 0; i < this.vertexCount; i++) {
          if (subsets[i] == subset) {
            subsets[i] = subsets[target];
          }
        }
        countEdges++;

        if (countEdges == this.vertexCount - 1) {
          break;
        }
      }
    }
    return sumOfEdges;
  }

  kruskal_withDisjointSets() {
    const edges = [];
    for (let node = 0; node < this.vertexCount; node++) {
      for (let neigh of this.adjList[node]) {
        edges.push([neigh.weight, node, neigh.vertex]);
      }
    }

    edges.sort((a, b) => a[0] - b[0]);
    const subsets = new DisjointSet(this.vertexCount);

    let sumOfEdges = 0;
    let countEdges = 0;

    for (let [weight, source, target] of edges) {
      if (subsets.find(source) != subsets.find(target)) {
        sumOfEdges += weight;
        subsets.union(source, target);
        countEdges++;

        if (countEdges == this.vertexCount - 1) {
          break;
        }
      }
    }
    return sumOfEdges;
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

class DisjointSet {
  subsets = [];

  constructor(size) {
    this.subsets = new Array(size).fill(0).map((_, index) => index);
  }

  find(elem) {
    if (this.subsets[elem] != elem) {
      this.subsets[elem] = this.find(this.subsets[elem]);
    }
    return this.subsets[elem];
  }

  union(elem1, elem2) {
    this.subsets[this.find(elem1)] = this.find(elem2);
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

// g2.printGraph();
// console.log(`Dijskstra's of 0 and 7: ${g2.dijkstraWithouthHeap(0, 7)}`);

let resultKruskal = g2.kruskal_noDisjointSets();
console.log(`result Kruskal: ${resultKruskal}`);

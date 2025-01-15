/**
 * https://leetcode.com/problems/min-cost-to-connect-all-points/description/
 * https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/6284118/prim-and-kruskal-by-fernamn-mhk9/
 *1584. Min Cost to Connect All Points

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.


Example 1:
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20

Explanation: 
We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.

Example 2:
Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
 

Constraints:
1 <= points.length <= 1000
-106 <= xi, yi <= 106
All pairs (xi, yi) are distinct.
 */

function minCostConnectPoints(points) {
  // with Kruskal
  return usingKruskal(points);
  // with Prim
  // return usingPrim(points)
}

const usingPrim = (points) => {
  let n = points.length;

  let graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let point1 = points[i];
      let point2 = points[j];
      let weight = dist(point1[0], point1[1], point2[0], point2[1]);
      graph[i].push([j, weight]);
      graph[j].push([i, weight]);
    }
  }

  // console.log(graph)

  return prim(graph, n, 0);
};

const prim = (graph, n, start) => {
  const visited = new Set();
  const minHeap = new MinHeap();
  let cost = 0;

  minHeap.enqueue({ vertex: 0, weight: 0 });

  while (!minHeap.isEmpty()) {
    const { vertex, weight } = minHeap.dequeue();

    if (!visited.has(vertex)) {
      visited.add(vertex);

      cost += weight;

      for (let edge of graph[vertex]) {
        if (!visited.has(edge[0])) {
          minHeap.enqueue({ vertex: edge[0], weight: edge[1] });
        }
      }
    }
  }

  return cost;
};

//-------------------------------------------------------------

const usingKruskal = (points) => {
  let graph = [];
  let n = points.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      graph.push([
        i,
        j,
        dist(points[i][0], points[i][1], points[j][0], points[j][1]),
      ]);
    }
  }
  graph.sort((a, b) => a[2] - b[2]);

  return kruskal(graph, n);
};

const kruskal = (graph, n) => {
  // const subset = [...Array(n).keys()]
  const subsets = new DisjointSet(n);

  let stop = n - 1;
  let sum_of_edges = 0;
  let count_edges = 0;
  for (let [target, source, weight] of graph) {
    // if (subset[target] != subset[source]) {
    if (subsets.find(source) != subsets.find(target)) {
      sum_of_edges += weight;
      // let save_subset = subset[source]
      // for (let i = 0; i < n; i++) {
      //     if (subset[i] == save_subset) {
      //         subset[i] = subset[target]
      //     }
      // }
      subsets.union(source, target);

      count_edges++;
      if (count_edges == stop) {
        break;
      }
    }
  }
  return sum_of_edges;
};

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

const dist = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

// type HeapNode = { vertex; weight };

class MinHeap {
  heap = [];

  enqueue(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index].weight >= this.heap[parent].weight) break;
      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (
        left <= lastIndex &&
        this.heap[left].weight < this.heap[smallest].weight
      ) {
        smallest = left;
      }

      if (
        right <= lastIndex &&
        this.heap[right].weight < this.heap[smallest].weight
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

/**
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/description/
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/submissions/1518537393
 *787. Cheapest Flights Within K Stops

There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.


Example 1:
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

Example 2:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

Example 3:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 

Constraints:
1 <= n <= 100
0 <= flights.length <= (n * (n - 1) / 2)
flights[i].length == 3
0 <= fromi, toi < n
fromi != toi
1 <= pricei <= 104
There will not be any multiple flights between two cities.
0 <= src, dst, k < n
src != dst
 */

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  return bellmanFord(n, flights, src, dst, k);
  // return dijkstra(n, flights, src, dst, k)
  // return dijkstraWithHeap(n, flights, src, dst, k)
}

const bellmanFord = (
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number => {
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  while (k-- >= 0) {
    let nextDist = [...dist];
    for (let [from, to, price] of flights) {
      if (dist[from] !== Infinity) {
        nextDist[to] = Math.min(nextDist[to], dist[from] + price);
      }
    }
    dist = nextDist;
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
};

const dijkstra = (
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number => {
  // Adjacency list for graph
  let graph = new Map<number, [number, number][]>();
  for (let [from, to, price] of flights) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from)?.push([to, price]);
  }

  // Min-heap priority queue (cost, city, stops)
  let pq: [number, number, number][] = [[0, src, 0]]; // (cost, city, stops)

  // Distances array, dist[city][stops] = min cost
  let dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity)); // k+2 to consider k+1 stops
  dist[src][0] = 0; // Starting point, no cost, 0 stops

  while (pq.length > 0) {
    let [cost, city, stops] = pq.shift()!;

    // If we already found a cheaper path for this city with fewer or equal stops, skip
    if (cost > dist[city][stops]) continue;

    // If we have already taken k stops, we can't go further
    if (stops > k) continue;

    // Process neighbors
    for (let [nextCity, price] of graph.get(city) || []) {
      let newCost = cost + price;
      if (newCost < dist[nextCity][stops + 1]) {
        dist[nextCity][stops + 1] = newCost;
        pq.push([newCost, nextCity, stops + 1]);
      }
    }
  }

  // Find the minimum cost to reach the destination with up to k stops
  let minCost = Math.min(...dist[dst]);
  return minCost === Infinity ? -1 : minCost;
};

const dijkstraWithHeap = (
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number => {
  // Adjacency list for graph
  let graph = new Map<number, [number, number][]>();
  for (let [from, to, price] of flights) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from)?.push([to, price]);
  }

  // Min-heap priority queue (cost, city, stops)
  const pq = new MinHeap();
  pq.push([0, src, 0]); // (cost, city, stops)

  // Distances array, dist[city][stops] = min cost
  let dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity)); // k+2 to consider k+1 stops
  dist[src][0] = 0; // Starting point, no cost, 0 stops

  while (pq.size() > 0) {
    const [cost, city, stops] = pq.pop()!;

    // If we already found a cheaper path for this city with fewer or equal stops, skip
    if (cost > dist[city][stops]) continue;

    // If we have already taken k stops, we can't go further
    if (stops > k) continue;

    // Process neighbors
    for (let [nextCity, price] of graph.get(city) || []) {
      let newCost = cost + price;
      if (newCost < dist[nextCity][stops + 1]) {
        dist[nextCity][stops + 1] = newCost;
        pq.push([newCost, nextCity, stops + 1]);
      }
    }
  }

  // Find the minimum cost to reach the destination with up to k stops
  let minCost = Math.min(...dist[dst]);
  return minCost === Infinity ? -1 : minCost;
};

class MinHeap {
  heap: [number, number, number][]; // (cost, city, stops)

  constructor() {
    this.heap = [];
  }

  push(item: [number, number, number]) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop(): [number, number, number] | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;
    const minItem = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return minItem;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex][0] < element[0]) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        if (
          (swapIndex === null && this.heap[rightChildIndex][0] < element[0]) ||
          (swapIndex !== null &&
            this.heap[rightChildIndex][0] < this.heap[swapIndex][0])
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      [this.heap[index], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[index],
      ];
      index = swapIndex;
    }
  }

  size(): number {
    return this.heap.length;
  }
}

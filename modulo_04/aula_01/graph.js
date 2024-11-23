import ListWeightedGraph from './ListWeightedGraph';
// import ListGraph from './ListGraph';
// // tests

// let g = new ListGraph(6); // ignoring the 0 node
// g.addEdge(1, 2);
// g.addEdge(2, 1);
// g.addEdge(1, 4);
// g.addEdge(4, 1);
// g.addEdge(2, 3);
// g.addEdge(3, 2);
// g.addEdge(2, 4);
// g.addEdge(4, 2);
// g.addEdge(2, 5);
// g.addEdge(5, 2);
// g.addEdge(3, 5);
// g.addEdge(5, 3);
// g.addEdge(4, 5);
// g.addEdge(5, 4);
// console.log(g.bfsVisitedList(1));

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

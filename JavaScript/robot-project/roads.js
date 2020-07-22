
const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

export const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function buildGraph(edges) {
  let graph = {};
  for (let [from, to] of edges) {
    addEdge(graph, from, to);
    addEdge(graph, to, from);
  }
  return graph;
}

function addEdge(graph, from, to) {
  if (graph[from] === undefined) {
    graph[from] = [to];
  } else {
    graph[from].push(to);
  }
}

const edges = roads.map((road) => road.split('-'));
//console.log(edges);
export const roadGraph = buildGraph(edges);
//console.log(roadGraph);

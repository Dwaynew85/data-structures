const { Graph } = require('./Graph.js');

const testDijkstras = new Graph(true, true);
const a = testDijkstras.addVertex('A');
const b = testDijkstras.addVertex('B');
const c = testDijkstras.addVertex('C');
const d = testDijkstras.addVertex('D');
const e = testDijkstras.addVertex('E');
const f = testDijkstras.addVertex('F');
const g = testDijkstras.addVertex('G');

testDijkstras.addEdge(a, c, 100);
testDijkstras.addEdge(a, b, 3);
testDijkstras.addEdge(a, d, 4);
testDijkstras.addEdge(d, c, 3);
testDijkstras.addEdge(d, e, 8);
testDijkstras.addEdge(e, b, -2);
testDijkstras.addEdge(e, f, 10);
testDijkstras.addEdge(b, g, 9);
testDijkstras.addEdge(e, g, -50);

module.exports = testDijkstras;

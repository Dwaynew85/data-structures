const Graph = require('./Graph.js');

let trainNetwork = new Graph(true, true);

let la = trainNetwork.addVertex('Los Angeles');
let sf = trainNetwork.addVertex('San Francisco');
let ny = trainNetwork.addVertex('New York');
let atl = trainNetwork.addVertex('Atlanta');
let den = trainNetwork.addVertex('Denver');
let calg = trainNetwork.addVertex('Calgary');

trainNetwork.addEdge(sf, la, 400);
trainNetwork.addEdge(la, sf, 400);
trainNetwork.addEdge(ny, den, 1800);
trainNetwork.addEdge(den, ny, 1800);
trainNetwork.addEdge(calg, den, 1000);
trainNetwork.addEdge(den, calg, 1000);
trainNetwork.addEdge(la, atl, 2100);
trainNetwork.addEdge(atl, la, 2100);

trainNetwork.removeEdge(ny, den);
trainNetwork.removeEdge(den, calg);
trainNetwork.removeEdge(calg, den);
trainNetwork.removeVertex(calg);

trainNetwork.print();
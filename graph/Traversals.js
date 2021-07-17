const testGraph = require('./testGraph.js');
const testGraph2 = require('./testGraph2.js');
const Queue = require('../Queue.js');
const PriorityQueue = require('../PriorityQueue.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  callback(start);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    })
  }
  
};

// Dijkstras algorithm

const dijkstras = (graph, startingVertex) => {
	const distances = {};
	const previous = {};
	const queue = new PriorityQueue();

	queue.add({ vertex: startingVertex, priority: 0 });

	graph.vertices.forEach((vertex) => {
		distances[vertex.data] = Infinity;
		previous[vertex.data] = null;
	});

	distances[startingVertex.data] = 0;

	while (!queue.isEmpty()) {
		const { vertex } = queue.popMin();

		vertex.edges.forEach((edge) => {
			const alternate = edge.weight + distances[vertex.data];
			const neighborValue = edge.end.data;

			if (alternate < distances[neighborValue]) {
				distances[neighborValue] = alternate;
				previous[neighborValue] = vertex;

				queue.add({ vertex: edge.end, priority: distances[neighborValue] })
			}
		})
	}

	return { distances, previous };
};

const results = dijkstras(testGraph2, testGraph2.vertices[0]);
console.log(results);

module.exports = {
    depthFirstTraversal,
    breadthFirstTraversal,
    dijkstras

}

depthFirstTraversal(testGraph.vertices[0], (vertex) => { console.log(vertex.data) });
breadthFirstTraversal(testGraph.vertices[0]);
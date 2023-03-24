class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex) {
        while (this.adjList[vertex].length) {
            const adjVertex = this.adjList[vertex].pop();

            this.removeEdge(vertex, adjVertex);
        }

        delete this.adjList[vertex];
    }

}

const g = new Graph();

g.addVertex('Tom Brady')
g.addVertex('Tony Kim')
g.addVertex('Patrick Mahomes')
g.addVertex('Lebron James')
g.addEdge('Tom Brady', 'Lebron James')
g.addEdge('Tom Brady', 'Tony Kim')
g.addEdge('Tony Kim', 'Patrick Mahomes')
g.addEdge('Tony Kim', 'Lebron James')
g.addEdge('Patrick Mahomes', 'Lebron James')
g.removeVertex('Lebron James')

console.log(g)
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

    depthFirstRecursive(start) {
        const result = [];

        const visited = {};
        const adjList = this.adjList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);


            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor);
            })
        })(start)

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];

        const result = [];

        const visited = {};

        const adjList = this.adjList;

        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            if (currentVertex % 2 !== 0) result.push(currentVertex);

            adjList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;

                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    breadthFirst(start) {
        const queue = [start];

        const result = [];

        const visited = {};

        const adjList = this.adjList;

        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            if (currentVertex % 2 === 0) result.push(currentVertex);

            adjList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
}


let g = new Graph();
g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")
g.addEdge("1", "2")
g.addEdge("1", "3")
g.addEdge("2", "4")
g.addEdge("3", "5")
g.addEdge("4", "5")
g.addEdge("4", "6")
g.addEdge("5", "6")

console.log(g.depthFirstIterative("1"))
console.log(g.breadthFirst("1"))

let g2 = new Graph();
g2.addVertex("0")
g2.addVertex("1")
g2.addVertex("2")
g2.addVertex("3")
g2.addVertex("4")
g2.addEdge("0", "2")
g2.addEdge("0", "3")
g2.addEdge("0", "1")
g2.addEdge("2", "4")

console.log(g2)
console.log(g2.depthFirstRecursive("0"))




<strong><h2>Week 5 Assignment</h2></strong>

<h3>Challenge 1: Using the DFS (recursive or iterative) method on a undirected, unweighted graph, create a method 
that returns all the odd valued vertices, for example, with the following</h3><br>
<img src="challenge1.png" alt="Challenge 1"><br>

Solution: 

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

        console.log(g.depthFirstIterative("1")) // [ '1', '3', '5' ]

<h3>Challenge 2: Using the BFS (recursive or iterative) method on a undirected, unweighted graph, create a method 
that returns all the even valued vertices, for example, with the following </h3><br>

<img src="challenge2.png" alt="Challenge 2"><br>

Solution: 

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

        console.log(g.breadthFirst("1")) // [ '2', '4', '6' ]


<h3>Challenge 3:</h3>

<img src="challenge3.png" alt="Challenge 3"><br>

Solution: 

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

        console.log(g2.depthFirstRecursive("0")) // [ '0', '2', '4', '3', '1' ]
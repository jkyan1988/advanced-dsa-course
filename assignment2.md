<strong>Challenge 1: Please solve this problem using BFS & DFS. </strong><br>

<h5>Given a binary tree, create a method called countLeafs(tree) that returns the count of all the LEAFS of the tree. </h5><br>

<h5>For example, given the following example:</h5><br>

<img src="Challenge1.png" alt="Challenge 1">
<br><br>
<h5>The following tree when passed in to the countLeafs(tree) function should return 3. </h5><br>
<h5>NOTE: countLeafs(tree) takes in a argument of a tree. E.g.</h5><br>

<h5>Set-up: </h5><br>
<h5>In order to create a tree to test, for example for the following above, you can create this tree like so: </h5><br>

        var tree = new BinarySearchTree();
        tree.insert(8);
        tree.insert(3);
        tree.insert(1);
        tree.insert(6);
        tree.insert(4);
        tree.insert(7);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.countLeafs(tree)

<br>

SOLUTION:<br>

        countLeafs() {
                let node = this.root
                let queue = [node]
                let counter = 0;

                if (!node) return counter;

                while (queue.length) {

                        node = queue.shift();

                        if (node.left === null && node.right === null) {
                                counter++;
                        }
                        if (node.left) queue.push(node.left);
                        if (node.right) queue.push(node.right);
                }
                return counter;
        }
<br>
<strong>Challenge 2: Please solve this problem using either BFS or DFS. </strong><br>
<h5>Given a binary tree, create a method called countOdds(tree) that returns a object that has a SORTED list of all odd nodes and count. </h5><br>

<img src="Challenge2.png" alt="Challenge 2">
<br><br>

<h5>The following tree when passed in to the countOdds(tree) function should return something like this: </h5><br>

            {
            nodes: [1, 3, 7, 13],
            count: 4
            }

<h5>NOTE: countOdds(tree) takes in a argument of a tree. E.g. </h5><br>

<h5>Set-up: </h5><br>
<h5>In order to create a tree to test, for example for the following above, you can create this tree like so: </h5><br>

        var tree = new BinarySearchTree();
        tree.insert(8);
        tree.insert(3);
        tree.insert(1);
        tree.insert(6);
        tree.insert(4);
        tree.insert(7);
        tree.insert(10);
        tree.insert(14);
        tree.insert(13);
        tree.countOdds(tree)

<br>
SOLUTION:<br>

        countOdds(tree) {
                let visited = [];
                let node = this.root;

                function traverse(node) {
                        if (node.left) traverse(node.left);
                        if (node.value % 2 !== 0) visited.push(node.value)
                        if (node.right) traverse(node.right);
                }

                traverse(node);

                return { nodes: visited, count: visited.length }
        }

<br>
<h5>Challenge 3: Please solve this problem using either BFS or DFS. </h5><br>
<h5>Given two binary trees, create a method called same(tree1, tree2) that returns true or false if the two binary trees are the same!</h5><br>
<img src="Challenge3.png" alt="Challenge 3">
<br><br>
<h5>The following tree when passed in to the same(tree1, tree2) function should return something like this: </h5><br>

        true

<h5>NOTE: same(tree1, tree2) takes in a argument of tree1 and tree2. E.g.</h5><br>

<h5>Set-up: </h5><br>
<h5>In order to create a tree to test, for example for the following above, you can create this tree like so: </h5><br>

        var tree1 = new BinarySearchTree();
        var tree2 = new BinarySearchTree();
        tree1.insert(8);
        tree1.insert(3);
        tree1.insert(1);
        tree2.insert(8);
        tree2.insert(3);
        tree2.insert(1);
        tree1.same(tree1, tree2)
<br>
SOLUTION: <br>

        same(tree1, tree2) {
                let firstTreeNode = tree1.root;
                let secondTreeNode = tree2.root;
                let queue = [[firstTreeNode, secondTreeNode]];

                while (queue.length) {
                let [firstTreeNode, secondTreeNode] = queue.shift();
                if (!firstTreeNode && !secondTreeNode) continue;
                if (!firstTreeNode || !secondTreeNode) return false;
                if (firstTreeNode.value === secondTreeNode.value) {
                        queue.push([firstTreeNode.left, secondTreeNode.left]);
                        queue.push([firstTreeNode.right, secondTreeNode.right]);
                } else {
                        return false;
                }
                }
                return true;
        }
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value) {
        if (this.root === null) return false;

        var current = this.root,
            found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

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

    same(tree1, tree2) {
        let firstTreeNode = tree1.root;
        let secondTreeNode = tree2.root;
        let visited = [];
        let visited2 = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        function traverse2(node) {
            if (node.left) traverse2(node.left);
            if (node.right) traverse2(node.right);
            visited2.push(node.value);
        }
        traverse(firstTreeNode);
        traverse2(secondTreeNode);
        return visited.toString() === visited2.toString();
    }
}


// Challenge 1

// var tree = new BinarySearchTree();
// tree.insert(8);
// tree.insert(3);
// tree.insert(1);
// tree.insert(6);
// tree.insert(4);
// tree.insert(7);
// tree.insert(10);
// tree.insert(14);
// tree.insert(13);

// console.log(tree.countLeafs(tree)) // 4


// Challenge 2
// var tree = new BinarySearchTree();
// tree.insert(8);
// tree.insert(3);
// tree.insert(1);
// tree.insert(6);
// tree.insert(4);
// tree.insert(7);
// tree.insert(10);
// tree.insert(14);
// tree.insert(13);
// console.log(tree.countOdds(tree))

// Challenge 3
var tree1 = new BinarySearchTree();
var tree2 = new BinarySearchTree();
tree1.insert(8);
tree1.insert(3);
tree1.insert(1);
tree2.insert(8);
tree2.insert(3);
tree2.insert(1);
console.log(tree1.same(tree1, tree2))

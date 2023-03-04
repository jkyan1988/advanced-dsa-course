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
}

// Challenge 1
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

// Challenge 2
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

// Challenge 3
var tree1 = new BinarySearchTree();
var tree2 = new BinarySearchTree();
tree1.insert(8);
tree1.insert(3);
tree1.insert(1);
tree2.insert(8);
tree2.insert(3);
tree2.insert(1);
tree1.same(tree1, tree2)
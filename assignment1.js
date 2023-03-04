// STACKS

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val); //substantiate a node

        // edge case - check if stack is empty or not - first node should be top and bottom 
        if (!this.size) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;

            this.top = newNode;
            this.top.next = temp;
        }

        this.size++; // increase size
        return this; // return stack
    }

    pop() { // popping from the top of the stack

        if (!this.size) return null; // edge case - if empty return null

        let poppedNode = this.top // establish the popped node which is the top of the stack

        if (this.top === this.bottom) { // can also do this.size === 1 too
            this.top = null;
            this.bottom = null;
        }

        this.top = this.top.next // also can use poppedNode.next
        this.size--; // decrease size
        return poppedNode;  // return the popped node

    }

    peek() { // returns element from the top of stack without removal
        return this.top;
    }

    isEmpty() { // returns true if empty stack or false if not
        return this.size === 0;
    }

    printStack() { // prints out elements of the stack
        let currentStack = this.top

        while (currentStack) {
            console.log(currentStack)
            currentStack = currentStack.next
        }
    }
}

let stack = new Stack();
stack.push(5);
stack.push(7);
stack.push(2);
stack.push(3);
stack.push(9);

console.log(stack);
console.log(stack.printStack());
console.log(stack.isEmpty());
console.log(stack.peek());



// QUEUES

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) { // adding to end of the list
        let newNode = new Node(val); // establish new node

        // edge case - empty or not
        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++; // increase size
        return this; // return entire list
    }

    dequeue() {
        // check if empty return null if so
        if (!this.size) return null;

        let removed = this.first;

        // check if only one node

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }

        this.first = this.first.next;

        this.size--;

        return removed;

    }

    peek() {
        return this.first;
    }

    isEmpty() {
        return this.size === 0;
    }

    printQueue() {
        let currentQueue = this.first;

        while (currentQueue) {
            console.log(currentQueue)
            currentQueue = currentQueue.next
        }
    }
}

let queue = new Queue();

queue.enqueue(12)
queue.enqueue(10)
queue.enqueue(3)
queue.enqueue(15)
queue.enqueue(9)

console.log(queue)
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.printQueue())


// Binary Search Tree

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

        // create new node
        let newNode = new Node(value);

        // edge case, if empty return this.root = newNode then return this
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        // start the loop

        let current = this.root;
        while (true) {
            // edge case
            if (value === current.value) return; // return undefined

            // checks left value if it's lesser than current value, otherwise will check right value if more than current value

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }

    }

    find(value) {
        if (!this.root) return;

        // start at top and use this current to keep track
        let current = this.root;
        // boolean value 
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true;
            }
        }

        return current;
    }

    contains(value) {
        if (!this.root) return;

        // start at top and use this current to keep track
        let current = this.root;
        // boolean value 
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true;
            }
        }

        return false;
    }
    remove(value) {
        // edge case
        if (!this.root) return;
        // establish root
        let current = this.root;
        // boolean value
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                if (value === current.left.value) {
                    current.left = null;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (value === current.right.value) {
                    current.right = null;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


console.log(tree.remove(5))
console.log(tree)


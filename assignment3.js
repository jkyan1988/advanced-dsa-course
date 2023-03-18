class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {

        let idx = this.values.length - 1;

        const element = this.values[idx];


        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            let parent = this.values[parentIdx];

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    maxValue() {
        const max = this.values[0];

        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;

            this.sinkDown()
        }

        return max;
    }

    sinkDown() {

        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild;
            let rightChild;

            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            idx = swap;
        }
    }

    isMaxHeap(heap) {
        let parentValue = heap.values[0]
        let parentIdx = 0;
        let length = heap.values.length;
        let parentIdxCheck = Math.floor((length - 1) / 2)

        while (parentIdx < parentIdxCheck) {
            let leftChildIdx = parentIdx * 2 + 1;
            let rightChildIdx = parentIdx * 2 + 2;

            if (leftChildIdx < length && heap.values[leftChildIdx] > parentValue) {
                return false;
            }

            if (rightChildIdx < length && heap.values[rightChildIdx] > parentValue) {
                return false;
            }

            parentIdx++;
            parentValue = heap.values[parentIdx];
        }

        return true;
    }
}
class MinBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {

        let idx = this.values.length - 1;

        const element = this.values[idx];


        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            let parent = this.values[parentIdx];

            if (element >= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }
    minValue() {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {

        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            let leftChild;
            let rightChild;

            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            idx = swap;
        }
    }

    isMaxHeap(heap) {
        let parentValue = heap.values[0]
        let parentIdx = 0;
        let length = heap.values.length;
        let parentIdxCheck = Math.floor((length - 1) / 2)

        while (parentIdx < parentIdxCheck) {
            let leftChildIdx = parentIdx * 2 + 1;
            let rightChildIdx = parentIdx * 2 + 2;

            if (leftChildIdx < length && heap.values[leftChildIdx] > parentValue) {
                return false;
            }

            if (rightChildIdx < length && heap.values[rightChildIdx] > parentValue) {
                return false;
            }

            parentIdx++;
            parentValue = heap.values[parentIdx];
        }

        return true;
    }
}

let newHeap = new MaxBinaryHeap();
newHeap.insert(6);
newHeap.insert(5);
newHeap.insert(4);
newHeap.insert(3);
newHeap.insert(2);
newHeap.insert(1);

let minHeap = new MinBinaryHeap();
minHeap.insert(6)
minHeap.insert(5)
minHeap.insert(4)
minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(1)


console.log(minHeap.isMaxHeap(minHeap))

console.log(minHeap)
console.log(minHeap.minValue(minHeap))
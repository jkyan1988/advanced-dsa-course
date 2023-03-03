<h2>QUEUES</h2>

<strong>Challenge 1: Draw and explain in a diagram of how the queue data structure works.</strong>



<strong>Challenge 2: Create 2 methods that are: </strong>
    <br>
    • enqueue (insert a element at the end of the queue)<br>
    • dequeue (remove a element from the start of the queue)<br><br>
        class Node {
            constructor(value){
            }
            }
        class Queue {
            constructor(){
            }
            enqueue(val){
            }
            dequeue(){
            }
        }

<strong>Challenge 3: Create 3 additional methods that are: </strong><br>
    • peek (retrieves the element at the start of the queue, WITHOUT removing it)<br>
    • isEmpty (checks if the queue is empty – should return true or false) <br>
    o hint - what property of the queue can you use to build this method J? <br>
    • printQueue (prints the elements in the queue)<br>


<h2>STACKS</h2>

<strong>Challenge 1: Draw and explain in a diagram of how the stack data structure works.</strong>


<strong>Challenge 2: Create 2 methods that are: </strong><br>
    • push (insert a element to the top of the stack)<br>
    • pop (remove a element from the top of the stack)<br>


<strong>Challenge 3: Create 3 additional methods that are: </strong><br>
• peek (retrieves the element at the top of the stack, WITHOUT removing it)<br>
• isEmpty (checks if the stack is empty – should return true or false) <br>
o hint - what property of the stack can you use to build this method J? <br>
• printStack (prints the elements in the stack)<br>

<strong>Challenge 4: Valid Parenthesis </strong>

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the 
input string is valid. <br>
PLEASE USE A STACK DATA STRUCTURE TO SOLVE THIS PROBLEM!<br>
An input string is valid if:<br>
Open brackets must be closed by the same type of brackets.<br>
Open brackets must be closed in the correct order.<br>
Every close bracket has a corresponding open bracket of the same type.<br>
        Example 1:<br>
            Input: s = "()"<br>
            Output: true<br>
        Example 2:<br>
            Input: s = "()[]{}"<br>
            Output: true<br>
        Example 3:<br>
            Input: s = "(]"<br>
            Output: false<br>
            const isValid = (s) => { <br>
            };



<h2>BINARY SEARCH TREES</h2>
<strong>Challenge 1: Given the following illustrations, identify each tree as: </strong><br>
- Tree<br>
- Binary Tree<br>
- Binary Search Tree<br>
- Not Applicable<br>
<br>
Tree #1:<br>
Tree #2:<br>
Tree #3:<br>
Tree #4:<br>
Tree #5:<br>
Tree #6:<br><br>


<strong>Challenge 2: Create 3 methods that are: </strong><br>
• insert (inserts a node as a child of the given parent node)<br>
• find (retrieves a given node)<br>
• contains (returns a Boolean if a given node exists)<br>

        class Node {
            constructor(value){
            }
        }
        class BinarySearchTree {
            constructor(){
            }
            insert(value){
            }
            find(value){
            }
            contains(value){
            }
        }

<strong>Challenge 3: Create 1 additional method that is: </strong><br>
• remove (removes a node and its children from the BST)<br>

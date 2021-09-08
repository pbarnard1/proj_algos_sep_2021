// Node data structure we'll use inside the singly linked list
class SLLNode {
    constructor(data) {
        this.value = data; // Value being held inside the node
        this.next = null; // .next is a pointer connecting to another node - but by default, we'll not connect it, hence the value null
    }
}

var node1 = new SLLNode(10);
var node2 = new SLLNode(3);
// console.log(node1);
node1.next = node2; // Connecting node1 to node2
// console.log(node1);

// The singly linked list class itself
class SLL {
    constructor() {
        this.head = null; // Head = start of the list, with no nodes initially inside (hence the value null)
    }

    // Add a node to the front of the list
    // Time: O(1)
    // Space: O(1)
    addNodeToFront(val) {
        var newNode = new SLLNode(val); // Create a node with this value
        newNode.next = this.head; // Connects the new node to the list
        this.head = newNode; // Move the head of the list to the new node
        return this; // To allow for chaining (see below)
    }

    // Method: returns true if the given value can be found in the linked list, and false otherwise
    // Time: O(n)
    // Space: O(1)
    findValue(val) {
        var runner = this.head; // Start runner off at the start of the list
        while (runner != null) { // Loop to go through the list
            // Check to see whether the value is found
            if (runner.value == val) {
                return true; // Value found, so return true
            }
            runner = runner.next; // Move to next node in the list
        }
        return false; // Value not found
    }

    // Adding a node to the BACK of the list
    // Time: O(n)
    // Space: O(1)
    addNodeToBack(val) {
        var newNode = new SLLNode(val); // Create a node with this value
        var runner = this.head; // Start runner off at the start of the list
        // Edge case: the list is empty
        if (this.head == null) {
            this.head = newNode;
            return this;
        }
        // Loop used to go to the final node in the list
        while (runner.next != null) {
            runner = runner.next; // Moves the runner down the list
        }
        // Connects the last node in the list to the new node that's been created
        runner.next = newNode;
        return this; // Allows for chaining
    }
}

var mySLL = new SLL();
// console.log(mySLL);
mySLL.addNodeToFront(15);
// console.log(mySLL);
mySLL.addNodeToFront(10).addNodeToFront(5); // Chaining commands
mySLL.addNodeToBack(20);
console.log(mySLL); // Prints first two nodes
console.log(mySLL.head.next.next); // Prints next two nodes
mySLL.addNodeToBack(25).addNodeToBack(30);
console.log(mySLL.head.next.next.next.next); // Prints 5th and 6th nodes
// console.log(mySLL);
console.log(mySLL.findValue(15));
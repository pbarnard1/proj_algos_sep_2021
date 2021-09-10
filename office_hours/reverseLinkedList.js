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

/* Reverse a singly linked list

Given a list, reverse the list.  Do NOT use a second linked list data structure.  
You MAY NOT changes the values of the nodes - you may only rearrange the nodes themselves.
When the list is reversed, return the head of the list.
*/

/*
1. Go through each node.  Have the .next (pointer) go the other direction.
2. Once we're done reversing the list, move the head to the original end of the list.
*/

function reverseSLL(someSLL) {
    var runner = someSLL.head; // NOT this.head since this method is outside the SLL class
    var prevRunner = null; // Runner for hold previous nodes
    // Loop to reverse the list - while the runner is not at the end
    while (runner != null && prevRunner != runner) {
        if (runner.next != null) { // If we're NOT at the end of the original list, move the head down
            someSLL.head = runner.next;
        }
        runner.next = prevRunner; // Reverse the pointer (next) at this current node
        prevRunner = runner;
        runner = someSLL.head; // Move runner to head of list
    }
    return someSLL; // Return the reversed list
}

var mySLL = new SLL();
mySLL.addNodeToBack(1).addNodeToBack(2).addNodeToBack(3);
reverseSLL(mySLL);
console.log(mySLL);
// console.log(mySLL.head.next.next);
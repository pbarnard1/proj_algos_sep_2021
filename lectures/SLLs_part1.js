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

    addNodeToFront(val) {
        var newNode = new SLLNode(val); // Create a node with this value
        newNode.next = this.head; // Connects the new node to the list
        this.head = newNode; // Move the head of the list to the new node
        return this; // To allow for chaining (see below)
    }
}

var mySLL = new SLL();
// console.log(mySLL);
mySLL.addNodeToFront(20);
// console.log(mySLL);
mySLL.addNodeToFront(30).addNodeToFront(40); // Chaining commands
console.log(mySLL);
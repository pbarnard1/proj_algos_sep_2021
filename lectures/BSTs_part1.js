// The binary search tree node
class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null; 
        this.right = null;
    }
}

// Binary search tree data structure itself
class BST {
    constructor(val) {
        this.root = null; // The top of the tree
    }

    // Add a node to the tree
    addNode(val) {
        var newNode = new BSTNode(val); // Creates a node that encapsulates the value (holds it)
        if (this.root == null) { // If the tree is empty, set the new node as the root of the tree
            this.root = newNode;
            return this;
        }
        // Runner starting at ??? that keeps track of where we are in the tree
        var runner = this.root;
        while (runner != null) {
            if (newNode.value < runner.value) { // If smaller, go left
                if (runner.left != null) { // If a node is already immediately to the left, just travel down
                    runner = runner.left;
                } else { // Otherwise, put the new node there
                    runner.left = newNode;
                    break; // Exit the loop - the node has been inserted; nothing more to do
                }
            } else { // Go right
                if (runner.right != null) { // If a node is already immediately to the right, just travel down
                    runner = runner.right;
                } else { // Otherwise, put the new node there
                    runner.right = newNode;
                    break; // Exit the loop - the node has been inserted; nothing more to do
                }
            }
        }
        return this; // To allow for chaining of commands
    }
}

var myBST = new BST(); // Start with an empty tree
myBST.addNode(15).addNode(25).addNode(5).addNode(10).addNode(20);
console.log(myBST);
// console.log(myBST.root.right);
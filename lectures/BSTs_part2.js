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

    // Count the number of nodes in the tree
    size(curNode = this.root) {
        // Base case: where we're at has no nodes, so we'll return 0
        if (curNode == null) {
            console.log("Hit a dead end");
            return 0;
        } else { // At least one node here
            // Get number of nodes to the left
            console.log("Counting nodes to the left of the "+curNode.value+" node");
            var numNodesLeft = this.size(curNode.left);
            // Get nodes to the right
            console.log("Counting nodes to the right of the "+curNode.value+" node");
            var numNodesRight = this.size(curNode.right);
            // Add the nodes to the left, to the right, AND the topmost node where we are (curNode) right now
            return numNodesLeft + numNodesRight + 1;
        }
    }
}

var myBST = new BST(); // Start with an empty tree
myBST.addNode(15).addNode(25).addNode(5).addNode(10).addNode(20).addNode(8);
console.log(myBST.size());
// console.log(myBST);
// console.log(myBST.root.right);
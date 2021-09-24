# Binary Search Trees (continued)

## Reminder of our Binary Search Tree class and node:

BST node:
```js
class BSTNode {
    constructor(value) {
        this.val = value; // Value (or key) held in the node
        this.left = null; // Points to node(s) to left that is/are smaller than this one
        this.right = null; // Points to node(s) to right that is/are bigger than this one
    }
}
```

Binary Search Tree structure itself:
```js
class BST {
    constructor() {
        this.root = null; // No nodes to start; root is the top of the tree
    }

    // Additional methods for the BST class go here.
}
```

## Additional methods: size, height, and three different types of traversing the tree
```js
class BST {
    constructor() {
        this.root = null; // No nodes to start; root is the top of the tree
    }

    add(val) {
        var newNode = new BSTNode(val); // Create new node
        if (this.root == null) { // Edge case: tree is empty
            this.root = newNode; // Make this node the root
            return this;
        }
        // At least one node in the tree if we reach this point
        var runner = this.root; // Runner pointing to current node
        while (runner) { // While we have nodes to look at
            if (runner.val < val) { // Move right (or insert)
                if (runner.right == null) { // No node to the right, so insert new node here
                    runner.right = newNode;
                    return this;
                } else { // If there are nodes to the right, move down the tree
                    runner = runner.right;
                }
            } else {
                if (runner.left == null) { // No node to the left, so insert new node here
                    runner.left = newNode;
                    return this;
                } else { // If there are nodes to the left, move down the tree
                    runner = runner.left;
                }
            }
        }
    }
        // Size of binary search tree
    size(curNode = this.root) {
        if (curNode == null) { // If we've hit a dead end, we're done in this branch
            return 0;
        } else { // Otherwise add this node and the nodes to the left and right of this one
            return 1 + this.size(curNode.left) + this.size(curNode.right);
        }
    }

    // Height of BST tree
    height(curNode = this.root) {
        if (curNode == null) { // If we've hit a dead end, doesn't count towards height
            return 0;
        } else { // Add this level to the height, then determine which is bigger between the left and right in terms of height
            return 1 + Math.max(this.height(curNode.left),this.height(curNode.right));
        }
    }

    /* Traversals:
    preorder: current node, then the nodes to the left, then the nodes to the right
    in order: nodes to the left, current node, then nodes to the right
    postorder: nodes to the left, nodes to the right, then current node

    In these examples, we'll use an array to hold the values called "dataArr".
    */
    preOrder(curNode = this.root, dataArr = []) {
        if (curNode != null) {
            dataArr.push(curNode.val);
            this.preOrder(curNode.left,dataArr);
            this.preOrder(curNode.right,dataArr);
        }
        return dataArr;
    }

    inOrder(curNode = this.root, dataArr = []) {
        if (curNode != null) {
            this.inOrder(curNode.left,dataArr);
            dataArr.push(curNode.val);
            this.inOrder(curNode.right,dataArr);
        }
        return dataArr;
    }

    postOrder(curNode = this.root, dataArr = []) {
        if (curNode != null) {
            this.postOrder(curNode.left,dataArr);
            this.postOrder(curNode.right,dataArr);
            dataArr.push(curNode.val);
        }
        return dataArr;
    }

    // Determine if the tree is balanced
    isBalancedTree(node = this.root) {
        if (node == null) { // Edge case: tree is empty, so we'll assume it's balanced
            return true;
        } else { // Tree is balanced if there are the same number of nodes on each side of the root, OR there is AT MOST a difference of one node between them
            return Math.abs(this.size(node.left) - this.size(node.right)) <= 1;
        }
    }
}
```

## Useful terms for BSTs:

- Root: The topmost node in the tree
- Height: The number of levels, or generations, in the tree
- Leaf: A node with no children
- Balanced tree: When the number nodes to the left of the root and the number of nodes to the right are equal or within one
- Siblings: Nodes that have the same parent
- Subtree: The smaller tree to the left/right of the current node
- Pre-order traversal: Listing nodes in this order: root, left recursively, right recursively
- In-order traversal: Listing nodes in this order: left recursively, root, right recursively
- Post-order traversal: Listing nodes in this order: left recursively, right recursively, root
- Breadth-first search, also called level order: list all nodes one level at a time before moving to the next level
# Binary Search algorithm and Binary Search Trees (BSTs)

# Binary search algorithm:

**Binary search** is used to search through a *sorted* set of data.  (If the data aren't sorted, this algorithm is useless.)  The basic idea is that you narrow the scope of the problem in half each time when you search for a value, i.e. the number of possible values to search for is cut in half each iteration.  So if you had an array of 16 items, after just one iteration, you've narrowed the set of values down to 8.  So after just two iterations, you're down to only 4 possibilities.  Then you keep repeating the process until you find the value or you reach the end of the search.

It might not seem like a big deal for a smaller set of values, but imagine if you had several million - or billion - values to search through.  You can imagine how long it would take to search iteratively from start to finish.  Thus with binary search it would only take a handful of searches to find your value.

Useful links: 
- https://en.wikipedia.org/wiki/Binary_search_algorithm
- https://medium.com/swlh/visualizing-a-binary-search-c6d145555dd0

Here is my code for binary search - it has a few optimizations built in, like a quick fail if a value isn't between min and max in the sorted array.

```js
function binarySearch(arr, val) {
    // Edge cases
    if (arr.length == 0) { // Empty array
        return -1;
    } else if (arr.length == 1) { // One item in array only, so see if it matches
        if (arr[0] == val) {
            return 0;
        } else {
            return -1;
        }
        // One-line version with a ternary operator: return arr[0] == val ? 0 : -1;
    }
    // Two or more values in array
    var leftInd = 0;
    var rightInd = arr.length - 1;
    // If value is smallest than smallest in array or bigger than biggest in array, it can't be found
    if (val < arr[leftInd] || val > arr[rightInd]) {
        return -1;
    }
    // Now do binary search
    while (leftInd <= rightInd) {
        // console.log("Searching between indices",leftInd,"and",rightInd);
        var middleInd = Math.floor((leftInd + rightInd)/2);
        if (arr[middleInd] < val) { // Go to left subarray if value is within that range
            leftInd = middleInd + 1;
            // console.log("Narrowing down to indices",leftInd,"and",rightInd);
        } else if (arr[middleInd] > val) { // Go to right subarray if value is within that range
            rightInd = middleInd - 1;
            // console.log("Narrowing down to indices",leftInd,"and",rightInd);
        } else { // Value found
            // console.log("Value found at index",middleInd);
            return middleInd;
        }
    }
    // console.log("Value not found");
    return -1; // Value not found
}
```
Here's a fun challenge: try to write a recursive version of binary search!

# The Binary Search Tree data structure:

A binary search tree (BST) is another data structure that's used for quick retrieval of data.  When you do binary search on an array, each time you iterate you cut the range of possibilities in half.  The idea is the same in a binary search tree.  We start with a root node that serves as the entrance to the tree, and then move to the left if the value is smaller than the one we're examining right now, and move to the right if the value is bigger.  (Usually a binary search tree will not contain duplicate values.  There are ways to handle them, but we won't go over them in detail.)

Here is a visual of a BST from gitconnected with a nice article that covers the essentials of BSTs that you can read [here](https://levelup.gitconnected.com/an-into-to-binary-search-trees-432f94d180da):
![Image of Binary Search Tree](https://miro.medium.com/max/2388/1*ziYvZzrttFYMXkkV9u66jw.png)

## Defining our BST tree:

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

## Adding a node to the BST
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
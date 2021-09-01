/*
Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

Input: array ("given", "accepts", "takes in")
Output: array ("return")
*/

/*
1. Find the minimum value.
2. Set the minimum value aside.
3. Move the other blocks over to the right.
4. Put in the smallest value at the beginning.
*/

/* Pseudocode
function moveMinToFront(array) {
    // Find the minimum
    // Set minimum to first item in the array
    // Variable that holds *where* the minimum occurs in terms of an index
    for (each item in the array) {
        if (current value in array is smaller than the minimum so far) {
            make this the new minimum
            Set the index where the minimum occurs accordingly
        }
    }
    Move the values over - lots of ways to do this; one way is to loop BACKWARDS
    Put the minimum value at the start of the array
    Return the array
}
*/

function minToFront(arr) {
    if (arr.length <= 1) { // If the array is empty or has only one item, just return the array back - nothing to move
        return arr;
    }
    // If we reach this point, we have at least 2 items in the array
    var curMin = arr[0]; // Set the minimum value to the first item in the array
    var minInd = 0; // Minimum index where the actual minimum value occurs
    // Loop where we will locate the minimum - starting at index 1 since we actually pulled the value at index 0
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] < curMin) {
            curMin = arr[k]; // New min value
            minInd = k; // New index where it occurs
        }
    }
    // console.log(curMin);
    // Loop to move values to the right
    for (var p = minInd; p > 0; p--) { // Loop backwards
        arr[p] = arr[p-1];
    }
    arr[0] = curMin; // Move min to front
    return arr;
}

var test1 = [4, 2, 1, 3, 5];
console.log(minToFront(test1));

var test2 = [4, 15, 8, 3, 5];
console.log(minToFront(test2));

var test3 = [];
console.log(minToFront(test3));

// Other things to consider: handling multiple instances of a minimum value
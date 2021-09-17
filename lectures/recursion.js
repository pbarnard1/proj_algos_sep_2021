// Non-recursive countdown function
function countdown(n) {
    for (var k = n; k >= 1; k--) {
        console.log(k);
    }
    console.log("Liftoff!");
}

countdown(10);

// Recursive countdown function
function rCountdown(n) {
    if (n < 1) { // or n <= 0
        // This code will run to stop the recursion because the base case is reached
        console.log("Liftoff");
        return;
    }
    console.log(n);
    rCountdown(n-1); // Recursive step
}

// If the recursion doesn't stop, you get stack overflow
rCountdown(10);

function findMin(arr) {
    var minVal = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] < minVal) {
            minVal = arr[k];
        }
    }
    return minVal;
}

console.log(findMin([3, 8, 4, -2, 5, 9]));

function rFindMin(arr, curInd = 0) {
    // Base case: return the value at the end of the array
    if (curInd == arr.length - 1) {
        return arr[curInd];
    } else {
        // recursive step (with forward progress)
        var minRemainingValues = rFindMin(arr,curInd+1);
        console.log("Comparing",arr[curInd],"and",minRemainingValues);
        return Math.min(arr[curInd],minRemainingValues);
        // One-line version
        // return Math.min(arr[curInd],rFindMin(arr,curInd+1));
    }
}

console.log(rFindMin([8,5,4,11]));
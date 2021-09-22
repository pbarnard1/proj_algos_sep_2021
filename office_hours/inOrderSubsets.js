/*
String: In-Order Subsets
Create strSubsets(str). Return an array with every possible in-order character subset of str. The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order as they were in the original string. Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
*/

/*
"abc" -> [""
"a"
"b"
"c"
"ab"
"ac"
"bc"
"abc"]
*/

function inOrderSubsets(str) {
    var allCombos = []; // Holds all possible subsets of the string
    rFindAllCombos(allCombos,"",str,0); // Actual recursion
    return allCombos;
}

/* The recursive function solving the problem:
allCombos = Array holding all the possible subsets of the string
curStr = String we've built so far recursively
originalStr = String we're originally given to start
curInd = Where we are in the string in terms of an index
*/
function rFindAllCombos(allCombos, curStr, originalStr, curInd) {
    allCombos.push(curStr);
    if (curInd >= originalStr.length) { // Base case: end of string reached
        return; // Stop the recursion
    }
    // For loop to add all possible letters after the current one
    for (var k = curInd; k < originalStr.length; k++) {
        rFindAllCombos(allCombos, curStr+originalStr[k], originalStr, k+1);
    }
}

console.log(inOrderSubsets("12"));
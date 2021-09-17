# Recursion

(Type "recursion" in Google for a joke!)

**Recursion** is considered one of the most difficult topics to master in programming in general.  The basic idea of recursion is that a function calls itself.  Why would one want to do that?

When you solve a challenge like finding the max value, determining the longest palindrome, etc. you can write a loop that will work in most, if not all, cases.  However, some challenges can't be solve so easily by writing a for loop - or even a fixed number of loops.  For example, try finding a target sum using 3 integers - or 4 integers - or 5.  Or even a variable number of integers.

## Illustration of recursion
Here's an analogy - imagine you're in a mine digging for gold.  You're at a junction with a bunch of paths you can take.  You send a group along each path.  But a couple of paths branch even further. So you break those groups up and send a person their way.  Everybody finds gold nuggets, and they come back to the junction.  Here is the breakdown:

- Left path: 45 -> branches to path A and path B, where path A you get 20 and path B you get 25
- Central path: 30 -> branches to paths C, D and E, where you get 5, 15 and 10, respectively
- Right path: 15

```js
/*   
                       Entrance
                          *
     --------------------------------------------
     *                    *                     * 
     *                    *                     *   
Left *            Central *               Right *
     *                    *                     * 
     *                    *                     *
  *******         *****************           [ 15]
  *     *         *       *       *
A *     * B     C *     D *     E *
  *     *         *       *       *
[ 20] [ 25]     [ 5 ]   [ 15]   [ 10]
*/
```

So you break up the problem into smaller ones (left, central and right paths), and break each of those up as needed (left into A and B, central into C, D and E).  Therein lies the power of recursion - splitting the problem up into a smaller set of more manageable ones, and then breaking those up as needed.

Using the illustration, let's say we have a function called findGold().  The initial call would then call findGold(left), then findGold(central) and findGold(right).  findGold(left) would be broken up into findGold(A) and findGold(B), while findGold(central) would break up into findGold(C), findGold(D) and findGold(E).

```js
/*   
                                        findGold()
                                            *
           ----------------------------------------------------------------
           *                                *                             * 
           *                                *                             *   
     findGold(left)                 findGold(central)              findGold(right)
           *                                *                             *
     **************            ***************************              [ 15]
     *            *            *            *            *
findGold(A)  findGold(B)  findGold(C)  findGold(D)  findGold(E)
     *            *            *            *            *
   [ 20]        [ 25]        [ 5 ]        [ 15]        [ 10]
*/
```

findGold(A) through findGold(E) would return values.  So findGold(left) would return the sum of findGold(A) and findGold(B), or 45.  findGold(central) would return 30 from doing findGold(C) + findGold(D) + findGold(E).  findGold(right) would return 15 immediately without further recursion.  Finally, findGold() would return 90 = 45 + 30 + 15 = findGold(left) + findGold(central) + findGold(right).

When you solve problems recursively, you want to have a couple of things in mind:
1. Base case - this is when the recursion will end.
2. Making forward progress - each time you call the function again, the problem narrows in scope.

In other words, you're breaking up the bigger problem into a smaller problem, like guessing a number or finding the range of indices where a value might be found.

## Examples of recursion with code

**Factorial:** A factorial is defined as the product of positive integers from 1 to n, and it's written as "n!".  For example:
- 1! = 1 = 0! (by definition, 0! = 1)
- 2! = 2\*1 = 2 = 2\*1!
- 3! = 3\*2\*1 = 6 = 3\*2!
- 4! = 4\*3\*2\*1 = 24 = 4\*3!
- 5! = 5\*4\*3\*2\*1 = 120 = 5\*4!

Notice that n! = n*(n-1)!.  So the problem can be broken up into a simpler case.

Here is how to implement factorial:
```js
function factorial(n) {
    n = Math.floor(n); // Round n to prevent possible stack overflow
    if (n <= 1) { // Base case: n is 1 or smaller
        return 1;
    } else { // Work our own down to an easier case - so make forward progress
        return n*factorial(n-1);
    }
}
```

Merge sort and quick sort use recursion - if you feel comfortable with this concept, try implementing those - they're pretty challenging!

If you want to see recursion in action with some visuals, you can go to this site to play with examples like the Fibonacci sequence: https://visualgo.net/en/recursion.

## Stack overflow

When you use recursion, each time you call the function you are placing it into a stack, known as a **call stack.**  In the illustration above, you would have a stack like the following for grabbing the value in path A:
```js
/*
------------------
* findGold(A)    *
------------------
* findGold(left) *
------------------
* findGold()     *
------------------
*/
```
The original call, findGold(), is at the bottom, and each successive call goes on top in this stack.  When a value is returned, the most recent call is popped off the stack.  So when the value from path A is returned, we remove findGold(A) from the stack.

With a handful of recursive calls, the call stack is manageable.  However, if you call the function too many times, you get what's called **stack overflow.**  Basically there is not enough room in memory to handle all these recursive calls, and hence the stack will blow up and overflow. 

Some data structures use recursion extensively to solve a problem efficiently.  One type of data structure that utilizes this is called a binary search tree (BST), which we will go over in the next lecture.
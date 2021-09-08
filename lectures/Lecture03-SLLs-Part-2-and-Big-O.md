# More on Singly Linked Lists, plus Big O Notation

## Runners

A **runner** is used to keep track of where you are in a list; it is a pointer to where you are in the list.  You might need multiple runners for more complex problems, like inserting and removing nodes at specific spots.  

## Runner vs. runner.next

When you traverse through a singly linked list (SLL), the condition to continue moving will usually depend on one important question - do you need to look ahead for an operation?  If the answer is yes, you want to use runner.next, but if not, then just runner is sufficient as looking ahead isn't necessary.  Determine when to use runner vs. runner.next when writing methods like the following: adding a node to the end of the list, finding a specific value, printing the list's values, etc.

## Big O notation

Big O notation is used to describe two things: the amount of time it takes a block of code or a function to run, and the amount of extra space needed to complete said code.  When we use big O notation, we're talking about the *worst* case scenario.

An O(1) operation is one that uses the same amount of space or time regardless of the size of variables like objects, arrays, strings, etc.

An O(n) operation is when the amount of time/space scales linearly with the amount of space of a string, object, etc.  For example, inserting a value at the start of an array is actually an O(n) operation because every item has to be moved one index before the new value can be inserted.

Other common types of operations are O(n log n), O(n^2), O(n^3), O(log n), among others.  ("log" is short for a logarithm, which is used to find the power in an expression like 2^x = 32, which in this case is x = 5.  We're talking about the base-2 logarithm usually in these operations.  Don't worry if this math doesn't make too much sense - we don't expect you to be math geniuses.)

Here's a visual of Big O complexity, from [this article](https://medium.com/@devontem/simple-guide-to-big-o-notation-time-complexity-space-complexity-9e906c60f7f9):
![Visual of Big O complexity](https://miro.medium.com/max/3600/1*JoJCMJzq5FJElGUSoiUeyw.png)
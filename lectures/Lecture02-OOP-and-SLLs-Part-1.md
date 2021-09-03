# Singly Linked Lists and similar data structures

## Review of (or introduction to) classes and object-oriented programming (OOP)
For those of you who took Python or Java, you might call seeing code like the following:

Python:
```py
class Building():
    def __init__(self, floorCount, myColor):
        self.floors = floorCount
        self.color = myColor
    
    def numberFloors(self):
        print(self.floors)
        return self

skyscraper = Building(100, 'gray')
skyscraper.numberFloors()
```

Java:
```java
public class Building {
    private int floors;
    private String color;

    public Building() {
        this.floors = 10;
        this.color = "brown";
    }

    public Building(int floorNum, String myColor) {
        this.floors = floorNum;
        this.color = myColor;
    }

    public void countFloors() {
        System.out.println(this.floors);
    }
}
```
In another file that has the main method:
```java
Building skyscraper = new Building(100, "gray");
skyscraper.countFloors();
```
We have defined a Building object with a method called countFloors.  You define an object as a class, and then you have constructors that describe the qualities of that object - basically field names.  You can define your own methods as well.  You can also inherit from other classes/objects as well.  We won't go over the more complex details of topics like inheritance, polymorphism, etc. in Projects & Algorithms.

It turns out in JavaScript, you actually can define your own objects through classes as well.  Here is how:

```js
class Building {
    constructor(floorCount, myColor) {
        this.floors = floorCount;
        this.color = myColor;
    }

    countFloors() {
        console.log(this.floors);
    }
}
```
The constructor method is called when you create an instance of that class, just like the \_\_init\_\_ method in Python or the constructors that have the same name as the class in Java.  You define the properties of your class inside the constructor - in this case, "floors" and "color".  Methods can be added for the class as well, like countFloors in the example above.

To create an instance of a class in JavaScript, follow this format: `varName = new ClassName()`, where any fields needed would go inside the parentheses.  In this example, we can do:
```js
skyscraper = new Building(100, 'gray'); // Define a specific building
skyscraper.countFloors(); // Calls on the countFloors method
```

Note about the "this" keyword: the word "this" refers to an instance of that class.  So "this.floors" for the skyscraper variable is saying "skyscraper.floors", or the skyscraper's floors.  "this" is equivalent to "self" in Python.

## Introduction to nodes

We'll define our node as an object containing a value and a pointer like so:

```js
class SLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
    /* Visual of node:

    ----------  next
    |  data  |-------->
    ----------
    */
}
```
"Next" is a pointer that points to another node.  By default, we'll set it to null, i.e. it won't point to anything.

## Introduce the SLL class
```js
class SLL {
    constructor() {
        this.head = null;
    }

    // Methods go here.
}
```
We'll start with an empty singly-linked list (SLL).  It contains a pointer called "head" that points to the first node in the list.  There is nothing in the list to start, so the head will point to null.

Inside the SLL class you can define your own methods.  Try to figure out how to define a method that adds a node to the start of the list.  (This is part of one of your assignments!)

## Visual of an SLL:
![Image of linked list](https://miro.medium.com/max/1940/1*f2oDQ0cdY54olxCFOIMIdQ.png)

[Link to build your own](https://visualgo.net/en/list)
// Link to challenge on CodeWars: https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript

/*
Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:
If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.
*/

function looseChange(cents){
    // Coin object/dictionary
    var coinDict = {
        'Pennies': 0,
        'Nickels': 0,
        'Dimes': 0,
        'Quarters': 0,
    };
    // Figure out the number of quarters
    if (cents <= 0) {
         return coinDict;
    }
    // If we hit this point in the code, we have a positive amount of change
    cents = Math.floor(cents); // Removes the decimal
    // Get quarters
    coinDict['Quarters'] = Math.floor(cents/25);
    cents = cents % 25; // Determining how much change is left
    // Get dimes
    coinDict['Dimes'] = Math.floor(cents/10);
    cents = cents % 10; // Determining how much change is left
    // Get nickels
    coinDict['Nickels'] = Math.floor(cents/5);
    cents = cents % 5; // Determining how much change is left\
    // Get pennies
    coinDict['Pennies'] = cents;
    return coinDict;
}
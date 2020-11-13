'use strict';

// array destructuring = unpacking values from and arry or object into seperate variables, break down into smaller structures like variables.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// older method of assigning array values to variables
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring an array, when you place an = in before an array JS will know to destructure the array
const [x, y, z] = arr;
console.log(x, y, z);

// destructuring does not destroy the array, we are simply unpacking it.
console.log(arr);

// destructuring property values from restaurant object
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// required a temp variable in the middle
// we are switching the values in the variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables 2
[main, secondary] = [secondary, main];
// console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// **nested array** is an array within an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// destructuring an array within array
const [i, , [, k]] = nested;
console.log(i, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];

// r is set to undefined here
console.log(p, q, r);

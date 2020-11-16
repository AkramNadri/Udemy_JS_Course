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

  // added default values to orderDelivery function, if no value is passed to a argument the default value will be used instead.
  orderDelivery: function ({
    // starterIndex will always have a default value of 1.
    starterIndex = 1,
    // mainIndex default value always 0
    mainIndex = 0,
    // time default always 20:00
    time = '20:00',
    // address has no default value
    address,
  }) {
    // using keyword this for scoping
    console.log(
      ` Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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

// calling orderDelivery function and passing values into the arguments. Property names here must match argument names in the function that the values are being passed to.
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// passing only 2 properties to orderDelivery function, default values in orderDelivery function will be used for missing arguments.
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//****************************************/
// object destructuring we use curly braces {}
// fundementals of destructuring an object
// place properties inside curly braces, select then object pertaining to the properties.
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

// what if we want the variable names different then property names
// changing the default names in restaurant property to new variable names.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console logging by using new variable names
// Very helpful when dealing with 3rd party data
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating values
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// to destructure an object we must wrap destructuring assignment in paranthesis
({ a, b } = obj);
console.log(a, b);

// nested objects
// selecting properties within an object properties
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//*******************************************/
// older method of assigning array values to variables
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // destructuring an array, when you place an = in before an array JS will know to destructure the array
// const [x, y, z] = arr;
// console.log(x, y, z);

// // destructuring does not destroy the array, we are simply unpacking it.
// console.log(arr);

// // destructuring property values from restaurant object
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // required a temp variable in the middle
// // we are switching the values in the variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Switching variables 2
// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // **nested array** is an array within an array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // destructuring an array within array
// const [i, , [, k]] = nested;
// console.log(i, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];

// // r is set to undefined here
// console.log(p, q, r);

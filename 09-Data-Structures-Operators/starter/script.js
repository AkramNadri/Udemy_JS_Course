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

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
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

// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// Its called REST because it will take the rest of the elements, or remaining elements of the array and put them into a new array.
// REST collects the unused elements in the destructuring assignment.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// this will select the first and third value in mainMenu, and REST of the starterMenu
// does not include any skipped elements
// REST should always be placed at the end.
const [pizza, , risoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risoto, otherFood);

// Objects
// we placed thurs and fri properties into
// ...weekdays array
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
// REST arguments
// here we pack them into an array
// ...numbers can now take arrays and single numbers
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 5, 2, 7, 1, 6);

const x = [23, 5, 7];
// taking all the numbers of the array and spreading them.
// they will then enter the add function
// they will be collected by the ...numbers argument in the add function
// here we unpack the values
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

// calling orderDelivery function and passing values into the arguments. Property names here must match argument names in the function that the values are being passed to.
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // passing only 2 properties to orderDelivery function, default values in orderDelivery function will be used for missing arguments.
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

/////////////////////////////////////////////////////
// //****************************************/
// // object destructuring we use curly braces {}
// // fundementals of destructuring an object
// // place properties inside curly braces, select then object pertaining to the properties.
// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// // what if we want the variable names different then property names
// // changing the default names in restaurant property to new variable names.
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // console logging by using new variable names
// // Very helpful when dealing with 3rd party data
// console.log(restaurantName, hours, tags);

// // setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating values
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // to destructure an object we must wrap destructuring assignment in paranthesis
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// // selecting properties within an object properties
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // old method of combining or adding to array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

/////////////////////////////////////////////////////
// // SPREAD OPERATOR ************************//
// // spread operator ... takes all the values inside the arr array and writes them out individually
// // use spread operator whenever write multiple values
// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr);

// console.log(...newGoodArr);
// // same as above
// console.log(1, 2, 7, 8, 9);

// // creating a new array, use spread operator on mainMenu property and adding a value 'Gnocci' to the end of the new array

// // spread operator takes all the elements in the array and doesnt create new variables. We can only use it in place where we'd otherwise write values seperated by commas.
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join two or more array together
// const menuNew = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuNew);

// // Iterables are arrays, strings, maps, sets.
// // NOT objects.

// // Spread operator on String
// // Each letter of the original string is now an original element.
// // we can only use the spread operator when building an array or passing to a function
// const str = 'Akram';
// const letters = [...str, '', 's.'];
// console.log(letters);
// // this will not work in template literal because it does not expect it here ***
// // console.log(`${...str} Nadri`);

// // const ingredients = [
// //   prompt('Lets make pasta! Ingredient 1? '),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingerdient 3?'),
// // ];
// // console.log(ingredients);

// // passing values to orderPasta function arguments
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // same as above, better way of doing it
// // restaurant.orderPasta(...ingredients);

// // Objects with ... spread operator
// const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Akram' };

// console.log(newRestaurant);

// // copy restaurant into restaurantCopy
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante';

// // the new copy has name changed to Ristorante
// console.log(restaurantCopy.name);

// // the original has not changed
// console.log(restaurant.name);

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

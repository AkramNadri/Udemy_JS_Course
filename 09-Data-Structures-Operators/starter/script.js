'use strict';

// array destructuring = unpacking values from and arry or object into seperate variables, break down into smaller structures like variables.

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES5 old method of adding property to object
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // Older style of writing a function, which required the property name followed by function.
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // newer style of writing functions do not require the keyword function in place here or the : colon
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // added default values to orderDelivery function, if no value is passed to a argument the default value will be used instead.
  orderDelivery({
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

  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////////////////////////////
// Coding Challenge #2

/* 

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉


BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////////////////////////////
// MAPS: FUNDEMENTALS
// Map is a datastructure to map values to keys
// data is store in key/value pairs in objects
// the keys can have any types - it can even be objects, array or other maps

// create variable and set it to Map
const rest = new Map();

// set key= 'name, value='Italiano'
rest.set('name', 'Italiano');

// key = 1, value='Italy'
rest.set(1, 'Firenze, Italy');
// key = 2, value = 'Lisbon, Portugal'
console.log(rest.set(2, 'Lisbon, Portugal'));

// setting key and values to the Map of rest variable
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  // can have boolean keys
  .set(true, 'we are open')
  .set(false, 'we are closed');

// in order to read data from a Map we use the 'get' method
console.log(rest.get('name'));
console.log(rest.get(true));

// here we set time variable to 21 and check condition of open and close in the rest Map.
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Methodsd available to Map - we already used get and set
// 'has' checks if Map contains a certain key
console.log(rest.has('categories'));

// delete elements from the Map
rest.delete(2);
console.log(rest);

// Map also has size property
console.log(rest.size);

// removes everything from Map
rest.clear();
console.log(rest);

// use Array or Objects as Map keys
// in order to use this key we must create a array variable which we can use as a key
// Array arr is the key here
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

// we can use the key to retrieve the value
console.log(rest.get(arr));

// we can use document.querySelector as a key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
///////////////////////////////////////////////////////////////
// ** SETS **
// SET - collection of unique values, can never have duplicates
// SET has all unique values and you cannot retrieve a specific element from the SET, you can only check if the value exists or not in the SET
// Use an Array if you want to create a list of values that are retrievable
// keep Sets in mind when you need to work with unique values

// need to pass in an iterable in Set argument
// Sets are also iterable
// Set elements are unique
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// // will not display duplicates
// console.log(ordersSet);

// console.log(new Set('Akram'));

// // get the size of the set without the duplicates
// console.log(ordersSet.size);

// // check to see if value exists in Set
// // returns true or false
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// // add to Set
// // only one of the values here will be added to the set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// // deletes element from Set
// ordersSet.delete('Risotto');

// // deletes everything from the Set
// // ordersSet.clear();
// // console.log(ordersSet);

// // can loop through a Set
// for (const order of ordersSet) console.log(order);

// // the main use case for a Set is to remove duplicates values from Arrays
// // Example
// const stuff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // placing array stuff into Set stuffUnique
// // this will remove duplicates and only contain unique values
// // use the ... spread operator to add elements to Set array
// const stuffUnique = [...new Set(stuff)];
// console.log(stuffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// // size of the string in the set
// console.log(new Set('AkramNadri').size);

//////////////////////////////////////////////////////////////

// 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal: ${i + 1}  ${player}`);
// }

// 2. dont destruct the object, use the elements inside to calculate the average

// placing values of game.odds into new variable odds
// const odds = Object.values(game.odds);
// let average = 0;
// // looping odds and placing values into odd.
// // each iteration of the loop adds odd value to average variable.
// for (const odd of odds) average += odd;
// // dividing average by the number of elements in odds - .length
// average /= odds.length;
// console.log(average);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.

// // create 2 variables of team and odd which takes name and values from game.odds
// for (const [team, odd] of Object.entries(game.odds)) {
//   // ternary operator which converts x to draw if true, and while false prints string with name of the team
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   // template literal which prints the teamStr and odd values
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

////////////////////////////////////////////////////////////////

// Looping Objects: Object keys, values and entries. ///////////
// we can loop over objects which are not iterables but in a indirect way
// Property NAMES **************************
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days `;
// // loop over property names which are also called keys
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES **********************
// const values = Object.values(openingHours);
// console.log(values);

// // entries equals name plus values together
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // we can use destructuring here to list the property and values inside the openingHours object
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
/////////////////////////////////////////////
//  Optional Chaining

// checking if property exists in the object, will return and error if no property exist
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri.open)
// console.log(restaurant.openingHours.fri.open);

// only if the property before the ? exists, then the open property will be read
// a property exists if it is not null and not undefined.
// now instead of getting an error we get undefined
// console.log(restaurant.openingHours.mon?.open);

// if openingHours and mon do not exists
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // use nullish coalescing operator and optional chaining operator working together.
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// check to see if method exists with ?. optional chaining
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Risoto does not exist, so the string message will print
// this would return undefined, but since we used nullish coalescing the this statement goes to the second operand
// console.log(restaurant.Risoto?.(0, 1) ?? 'Method does not exist');

// Arrays optional chaining
// const users = [
//   {
//     name: 'Akram',
//     email: 'akakak@',
//   },
// ];

// ?. tests if the value on the left exists "users[0]"
// optional chaining and nullish coalescing are almost always used together so that we can actually do something in case we dont get something from the object.
// console.log(users[0]?.name ?? 'User array empty');

// Without using optional chaining we would have to write something like this

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

/////////////////////////////////////////////////////////////
// Enhanced Object Literals

///////////////////////////////////////////////////////////
// For Of Loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // old way of destructuring an item
// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item}[1]`);
// // }

// // new way of destructuring an item
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(menu.entries());
///////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(draw);

// const printGoals = function (...playerNames) {
//   console.log(playerNames);
//   console.log(` ${playerNames.length} goals were scored`);
// };

// printGoals(...game.scored);

// team1 < team2 && console.log(`team 1 likely to win`);
// team1 > team2 && console.log(`team 2 likely to win`);

// 1. create array of all players in team1
// const player1 = [...game.players[0]];
// 1. create array of all players in team2
// const player2 = [...game.players[1]];

// const [player1, player2] = game.players;
// console.log(player1, player2);

// 2. first player set to gk, and all remaining players set to fieldPlayers
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// 3. all players on team1 and team2 on allPlayers
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// 4. all players on team1 into players1Final plus add 'Thiago', 'Coutinho' and 'Perisic'.
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5. renaming property name inside the game object
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;

// console.log(` team1=${team1}, draw=${draw}, team2=${team2}`);

// 6. printGoals function takes arbitrary number of names
// const printGoals = function (...playerNames) {
//   console.log(playerNames);
//   console.log(`${playerNames.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// printGoals(...game.scored);

// 7. we use the AND operator here because if the first condition is true it will continue through to the last condition and print
// team1 < team2 && console.log('Team 1 likely to win');
// team1 > team2 && console.log('Team 2 likely to win');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests);

// // ??
// // this operator only works with nullish values
// // Nullish: null and undefined (NOT 0 or '')
// const guestCorret = restaurant.numGuests ?? 10;
// console.log(guestCorret);

// console.log(' ------------- OR -----------');
// // use ANY data type
// // return any data type
// // short-circuiting
// console.log(3 || 'Akram');
// console.log('' || 'Akram');
// console.log(true || 0);
// console.log(undefined || null);

// // short-circuit through all the falsey values until a truthy element/value found, then return value
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// // OR short-circuit will run through values until first truthy element
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log(' ------------- AND -----------');

// // all values must be true
// // * the end operator is only true if all operands are true.
// console.log(0 && 'Akram');
// console.log(0 && 'Akram');
// console.log(7 && 'Akram');

// console.log('hello' && 23 && null && 'string');

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrrom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrrom', 'spinach');

/******************** SPREAD  ******************/
// SPREAD, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// // Its called REST because it will take the rest of the elements, or remaining elements of the array and put them into a new array.
// // REST collects the unused elements in the destructuring assignment.
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // this will select the first and third value in mainMenu, and REST of the starterMenu
// // does not include any skipped elements
// // REST should always be placed at the end.
// const [pizza, , risoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risoto, otherFood);

// // Objects
// // we placed thurs and fri properties into
// // ...weekdays array
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// // REST arguments
// // here we pack them into an array
// // ...numbers can now take arrays and single numbers
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 5, 2, 7, 1, 6);

// const x = [23, 5, 7];
// // taking all the numbers of the array and spreading them.
// // they will then enter the add function
// // they will be collected by the ...numbers argument in the add function
// // here we unpack the values
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// restaurant.orderPizza('mushrooms');

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

/**** */
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

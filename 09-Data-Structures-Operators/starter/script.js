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

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉

HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b

HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
GOOD LUCK 😀

*/

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const row = text.split('\n');
  // console.log(row);

  for (const rows of row) {
    const newRow = rows.toLowerCase().trim().split('_');

    const [first, second] = newRow;
    // console.log(first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const row = text.split('\n');

//   // console.log(row);

//   for (const rows of row) {
//     const newRow = rows.toLowerCase().trim().split('_');
//     const [first, second] = newRow;
//     // console.log(first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   // console.log(rows);

//   for (const row of rows) {
//     const newRow = row.toLowerCase().trim().split('_');
//     const [first, second] = newRow;
//     // console.log(first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const row = text.split('\n');

//   console.log(row);

//   for (const rows of row) {
//     const newRow = rows.toLowerCase().trim().split('_');
//     const [first, second] = newRow;
//     console.log(first, second);
//     console.log(newRow);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const row = text.split('\n');
//   console.log(text);

//   for (const rows of row) {
//     const x = rows.toLowerCase().trim().split('_');

//     const [first, second] = x;
//     console.log(first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(output);

//     // console.log(x);
//   }
// });
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // console.log(first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'!'.repeat(i + 1)}`);
//     console.log(output);
//   }
// });

// document.querySelector('button').addEventListener('click', function () {
//   // takes the value input in text area box and places it into text variable
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   // console.log(rows);

//   // loop over the rows, find the entries and create 2 variables for them

//   for (const [i, row] of rows.entries()) {
//     // console.log(i, row);

//     // convert all the strings to lower case
//     // trim removes any spaces
//     // split will split the strings into seperate elements where ever it find the _ character
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // console.log(first, second);

//     // output takes the first string element, takes the second string element and replaces the first index of the string to upperCase.
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'💰'.repeat(i + 1)}`);
//   }
// });

/////////////////////////////////////////////////////////////////
// Working with Strings 3
// creates an array with each string split by +

// Split **
// console.log('a+very+nice+string'.split('+'));

// // creates an array with each string split by space ' '.
// console.log('Akram Nadri'.split(' '));

// // can directly name variables with splitting string, the first element[0] on the split will go into firstName, and second elements at index[1] will go into lastName
// const [firstName, lastName] = 'Akram Nadri'.split(' ');
// console.log(firstName, lastName);

// // Join **
// // we can place anything inside the join parameters, it will place the value in between each element
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' <(^o^)> ');
// console.log(newName);

// const capatilizeName = function (name) {
//   // creates an array with each string split into its own element by spaces (' ')
//   const names = name.split(' ');
//   console.log(names);

//   // each iteration we will push to this array
//   const namesUpper = [];

//   for (const n of names) {
//     // n[0]toUpperCase capitilizes the first index[0] of the string
//     // n.slice(1) starts at the second index[2] of the array and attaches it to namesUpper
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper);

//   // since each of the strings are their own element, we need to join them together by using .join and placing a space(' ') between each element
//   console.log(namesUpper.join(' '));
// };

// // feeding lower case names into the function
// capatilizeName('jessica ann smith davis');
// capatilizeName('akram nadri');

// // Padding
// // add padding to a string at the start
// const message = 'Go to gate 23';

// // we want the length of the string equal to 25 and adding + to the padded area until the full length of the string = 25.
// console.log(message.padStart(25, '+'));

// // more plus + added here because the original string length was shorter, which in return caused more + to print in order to pad the entire length of the string to equal 25
// console.log('Akram'.padStart(25, '+'));

// // We can also add padding to the end of the string
// // now the entire strings length equals 35 with the padding added at the end
// console.log('Akram'.padStart(25, '+').padEnd(35, '+'));

// // When you see credit card info online, only the 4 first numbers appear and the rest are hidden

// const maskCreditCard = function (number) {
//   // converting number to string
//   const str = number + '';

//   // we take the last 4 numbers from the string
//   const last = str.slice(-4);
//   console.log(last);

//   // here we add * to the last 4 numbers to the length of the str
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(43563212323421234));
// console.log(maskCreditCard('4562234565432345'));

// // Repeat
// // repeat the same string multiple times

// const message2 = 'Bad weather... All departures Delayed... ';

// // this will repeat the above string 5 times
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

/////////////////////////////////////////////////////////////////
// Working with Strings 2

// const airline = 'Canada Air';
// // const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('Akram'.toUpperCase());

// // Fix capitilization in name
// const passenger = 'aKram';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // created a function that takes any string argument and modifies the string so that the first index is capatilized and the rest lower case.
// const nameFixer = function (name) {
//   const passengerLower = name.toLowerCase();
//   const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
//   console.log(passengerCorrect);
// };
// // calling nameFixer function
// nameFixer('aKrAm');

// // Comparing emails
// const email = 'hello@ak.com';
// const loginEmail = '   HeLLo@Ak.com  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// // since loginEmail is converted to object you can call methods on it
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing

// const priceGB = '288,97*';
// const priceUS = priceGB.replace('*', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23, boarding door 23';

// // target all occurances of 'door'
// console.log(announcement.replaceAll('door', 'gate'));

// // this also replaces all occurances of 'door'
// // the 'g' here stands for global
// console.log(announcement.replace(/door/g, 'gate'));

// // three simple methods that return booleans
// // Includes, Starts-with, Ends-with

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('A3'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   // must use toLowercase method to convert items to lower case because capitilization matters here
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('Laptop, food and a Knife');
// checkBaggage('I have socks and camera');
// checkBaggage('got some snacks and a gun for protection');
/////////////////////////////////////////////////////////////////
// Working with Strings 1

// const airline = 'Canada Air';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('n'));
// console.log(airline.indexOf('Canada'));

// // Slice method - extract part of a String, needs index as argument

// // the begin parameter, its where the extraction will start
// // 0 based
// console.log(airline.slice(4));
// // stops extracting before reaching 7
// console.log(airline.slice(4, 7));

// // index start at 0 and ends at the first space found ' '.
// // helpful to find the first word in a string
// console.log(airline.slice(0, airline.indexOf(' ')));

// // index begins extracting after last empty space found
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleStead = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleStead('11B');
// checkMiddleStead('23C');
// checkMiddleStead('3E');

// // How this all works !?
// // We know strings are primitives, so why do they have methods ?
// // Should methods only be available on Objects and Arrays ?
// // Whenever we call a method on a string, JS automatically behind the scenes convert that String primitive to a String Object with the same content, its on that object that the methods are called. This process is called Boxing, takes our string and puts it in a box which is called object.

// // Example below
// console.log(new String('Akram'));

// // typeOf indicates this String to be an Object
// // methods are available to be used on String because JS converts the String into an Object
// // Conversion occurs whenever we call a method on a String
// // When the operation is done, the object is converted back to a String primitive.
// console.log(typeof new String('Akram'));
// // converting back to String
// console.log(typeof new String('Akram').slice(1));

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates).

2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes).

4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// console.log(`An event on average occured every ${90 / gameEvents.size}`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event on average occured every ${time / gameEvents.size}`);

// for (const [min, event] of gameEvents) {
//   console.log(min, event);
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} half ${min}: ${event}`);
// }
// 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// console.log(`An event happened on average every ${90 / gameEvents.size}`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event happened on average every ${time / gameEvents.size}`);

// // 4
// for (const [key, value] of gameEvents) {
//   console.log(key, value);

//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} HALF ${key}: ${value}`);
// }

// // 1)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2)
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   console.log(min, event);
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} HALF ${min}: ${event}`);
// }

// 1.
// const stuffUnique = [...new Set(stuff)];
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. Remove 64
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4. Loop over the events

// for (const [min, event] of gameEvents.entries()) {
//   console.log(min, event);

//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

/*
///////////////////////////////////////////////////////////////
// which data structure to use ?
/*
Sources of Data
1. From the program itself
2. From the UI - data input from user
3. From external source - Data fetched for example from web API


- Array or Set - 
Do we just need a simple list of values if so then use Array or Set.

- Object or Map -
If we need key/Value pairs we need Object or Map.


*** Most commong source of Data comes from Web API's ***
Data from web API usually comes in a special data format which is called JSON. JSON is essentially just text, but can be converted to JavaScript Object because it uses the same formatting as JavaScript objects and arrays. Creating an Array of objects is extremely common in JavaScript. 


** When to use them ? **

 * Arrays vs Sets *

Arrays  - Use when you need ordered list of values (might contain duplicates).
        - Use when you need to manipulate data

Sets  - Use when you need to work with unique values
      - Use when high-performance is really important
      - Use to remove duplicates from arrays



Should use these key/value data structures whenever we need to describe the values using keys.
 * Objects vs Maps

Objects - More traditional key/value store
        - Easier to write and access values with . and []

    * USE when you need to include functions(methods)
    * USE when working with JSON(can convert to map)



Maps  - Better performance
      - Keys can have ANY data type
      - Easy to iterate
      - Easy to compute size


    * USE when you simply need to map key to values
    * USE when you need keys that are NOT strings


*/

///////////////////////////////////////////////////////////////
// MAPS: ITERATION

// Array of arrays
// question contains Map Array which contains arrays inside
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!!'],
//   [false, 'Try Again'],
// ]);

// console.log(question);

// console.log(Object.entries(openingHours));
// // convert object to Map
// // whenever you need a map and you already have an object
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // quiz app
// // first question is the Map, second question is the key
// console.log(question.get('question'));

// // Iteration is possible on Map
// // we only want to print an element if the key is number
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // to get answer from user we use prompt
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// // checks to see if answer is correct
// // this will return true, we then take the true key and place it into the question Map which returns the value 'Correct!!'
// console.log(question.get(question.get('correct') === answer));

// // Sometimes we need to convert Map back to Array
// // here we deconstruct the map using the SPREAD operator which creates an array of elements.
// console.log([...question]);
// // displays all the keys
// console.log([...question.keys()]);
// // displays all the values
// console.log([...question.values()]);

///////////////////////////////////////////////////////////////
// MAPS: FUNDEMENTALS
// Map is a datastructure to map values to keys
// data is store in key/value pairs in objects
// the keys can have any types - it can even be objects, array or other maps

// create variable and set it to Map
// const rest = new Map();

// // set key= 'name, value='Italiano'
// rest.set('name', 'Italiano');

// // key = 1, value='Italy'
// rest.set(1, 'Firenze, Italy');
// // key = 2, value = 'Lisbon, Portugal'
// console.log(rest.set(2, 'Lisbon, Portugal'));

// // setting key and values to the Map of rest variable
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   // can have boolean keys
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// // in order to read data from a Map we use the 'get' method
// console.log(rest.get('name'));
// console.log(rest.get(true));

// // here we set time variable to 21 and check condition of open and close in the rest Map.
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Methodsd available to Map - we already used get and set
// // 'has' checks if Map contains a certain key
// console.log(rest.has('categories'));

// // delete elements from the Map
// rest.delete(2);
// console.log(rest);

// // Map also has size property
// console.log(rest.size);

// // removes everything from Map
// rest.clear();
// console.log(rest);

// // use Array or Objects as Map keys
// // in order to use this key we must create a array variable which we can use as a key
// // Array arr is the key here
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);

// // we can use the key to retrieve the value
// console.log(rest.get(arr));

// // we can use document.querySelector as a key
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
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

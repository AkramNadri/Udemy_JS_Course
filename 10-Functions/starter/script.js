'use strict';

////////////////////////////////////////////////////////////////
// CODING CHALLENGE #2

/* 

This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀

*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener(
//     'click',

//     // this function has the Closure of the IIFY above, it contains all the environment variables, it has access to the header variable. Once the IIFY executes it is removed from the call stack, and its variables are no longer accessible, but this function still has access due to Closure.
//     function () {
//       header.style.color = 'blue';
//       console.dir(header);
//     }
//   );
// })();

////////////////////////////////////////////////////////////////
// 3 EXAMPLES OF CLOSURES

// Example 1 is displaying how a Closure can be reasigned.

// let f;

// // f Closure is the environment varibale of g
// // environment variable: const a = 23;
// const g = function () {
//   const a = 23;

//   // f Closure is g, and environment variable contains const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// f Closure is environment variable of h
// environment variable: const b = 777;
// const h = function () {
//   const b = 777;

//   f = function () {
//     console.log(b * 2);
//   };
// };

// // f Closure is currently set to g
// g();
// f();
// console.dir(f);

// // reasigned f function - f Closure is now assigned to h
// // the old closure dissapears and gets reasigned to h
// h();
// f();

// // f Closure is now h - [[Scopes]]: Closure(h){b:777}
// console.dir(f);

// // EXAMPLE 2 - CLOSURES

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   // Use a timer, this function will be called after 1 second
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // Closure has priority over Scope chain.
// const perGroup = 1000;
// boardPassengers(180, 3);

////////////////////////////////////////////////////////////////
// CLOSURES

// A closure is not a feature that we explicitly use, we dont create closure manualy like we create an array or new function.
// Closure happens automatically in certain situations, we just need to recognize those situations so that we can take a closer look at closures.

// // Take a look at a closure
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

////////////////////////////////////////////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

// Sometimes in JS we need a function that is only executed once, and then never again. A function that dissapears after it is called. Common technique for Async/Await
// IIFE is a pattern used by developers

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// // error: Function statements require a function name
// // But, we can trick JS into thinking that this is just an expression, we could do that by wrapping everything into paranthesis. Transform statement into expression.

// // Example of IIFE.
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // We dont have access to isPrivate var because of scoping.
// // we are trying to access isPrivate from the outside which will not work because the scopechain works the other way around.
// // The inner scope would have access to anything defined in global scope.
// // console.log(isPrivate);

// // Same as above, arrow function
// // wrap function in paranthesis which will transform to IIFE.
// (() => console.log('This will never run again 2'))();

// // we cannot access this variable
// // Scoping - const can only be access within the scope block
// // var can be access outside scope block
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(notPrivate);
// console.log(isPrivate);

////////////////////////////////////////////////////////////////
// /**
//  * https://leetcode.com/problems/shuffle-string/submissions/
//  * @param {string} s
//  * @param {number[]} indices
//  * @return {string}
//  */
// var restoreString = function (s, indices) {
//   let ret = [];
//   for (let i = 0; i < indices.length; i++) {
//     ret[indices[i]] = s[i];
//   }
//   return ret.join('');
// };

// console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
////////////////////////////////////////////////////////////////
// THE CALL AND APPLY METHODS

// Practice 2

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   name: 'Akram',

//   // before
//   // book: function(){
//   // }
//   // after - similar way of creating a method

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );

//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// // copied book function in lufthansa object and created a new book function.
// const book = lufthansa.book;

// // does not work
// // book(23, 'Sarah Williams');\

// book.call(eurowings, 23, 'Sara williams');
// console.log(eurowings);

// book.call(lufthansa, 23, 'Micheal Jordan');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 45, 'Mary Cooper');
// console.log(swiss);

// const flightDate = [583, 'George Cooper'];
// book.apply(swiss, flightDate);
// console.log(swiss);

// book.call(swiss, ...flightDate);
// const canadaAir = {
//   airline: 'Canada Air',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function(){} same as below
//   book(flightNum, name) {
//     console.log(
//       // this points at the properties inside canadaAir
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// // im back
// // calling the book method inside canadaAir object
// canadaAir.book(239, 'Akram Nadri');
// canadaAir.book(543, 'John Smith');
// console.log(canadaAir);
// console.log(canadaAir.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// creating function book which takes method from canadaAir object, book is now a regular function, it is not a method.
// this function does not have access to canadaAir properties
// const book = canadaAir.book;

// This function is now a regular function call, in a regular function call the 'this' keyword points to undefined.
// this does NOT work
// book(23, 'Sarah Williams'); // cannot read property 'airline' of undefined...

// THIS KEYWORD ****************************//************ */
// ***** this keyword - how to tell JS explicitly or manually what the this keyword should look like ???
// ******** There are 3 function methods to do that - They are called CALL // APPLY // BIND.

// a function is really just an object, and objects have methods and therefor functions can have methods too
// the first argument is exactly what we want the this keyword to point to - followed by the rest of the arguments.
// the call method will call the book function, the this keyword set to 'eurowings. This allows us to manually set the this keyword of any function that we want to call.
// how do we tell JS that we want to create a booking on the new eurowings object, we need to tell JS what the 'this' keyword explicitly points to
// book.call(eurowings, 23, 'Sarah Williams'); // this pointing to eurowings
// console.log(eurowings);

// the first argument will manually point the this keyword to the object.
// book.call(canadaAir, 239, 'Mary Cooper'); // this pointing to canadaAir
// console.log(canadaAir);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 123, 'Fred Wilson');
// console.log(swiss);

// // APPLY METHOD
// // Similiar method to the CALL method
// // Apply method is not used that much anymore
// const flightDate = [583, 'George Cooper'];
// book.apply(swiss, flightDate);
// console.log(swiss);

// // this is the same as above, much simpler with spread operator
// book.call(swiss, ...flightDate);

// Bind method ******************************************
////////////////////////////////////////////////////////////////

// THE BIND METHOD

// manually set the this keyword for any function call
// bind does not immediately call the function
// it returns a new function where the this keyword is bound

// one book function for each of the airlines
// Instead of using Call all the time, we could just Bind once
// we can always use these functions
// const bookEw = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// // using the bind functions here
// bookEw(23, 'Steven Williams');
// bookLH(11, 'Cat Smith');
// bookLX(43, 'Billy Bob');

// // we can set the parameters
// // this one only needs the name because the first argument already contains the flight number
// // preset the 23
// const bookEW23 = book.bind(eurowings, 23);
// // all we need to pass is the passenger name, since the flight number is preset in the argument.
// bookEW23('Akram Nadri');
// bookEW23('Martha Stewart');

// // with event listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// lufthansa.poll = 1;
// lufthansa.answerPoll = function () {
//   console.log(this);
//   this.poll++;
//   console.log(this.poll);
// };

// // the . in front of buy means that its a class
// // in an event handler function, the this keyword always points to the element on which the handler is attached too.
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // binding function to lufthansa object, now the this keyword in function points to lufthansa object.
// // document
// //   .querySelector('.poll')
// //   .addEventListener('click', lufthansa.answerPoll.bind(lufthansa));

// // console.log(lufthansa);

// // partial application
// // means we can preset parameters

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // we are binding addTax function to addGST with the first parameter rate preset to 0.23.
// // we set the first parameter as null because we dont need to point the this keyword to anything
// const addGST = addTax.bind(null, 0.23);

// // this is what our addTax function looks like now
// // addGST = value => value + value * 0.23;

// // since the rate parameter is already preset, we only pass the value argument to addTax function
// // using bing gives us a new function
// console.log(addGST(100));

// // Challenge

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addGST2 = addTaxRate(0.23);

// console.log(addGST2(100));
// console.log(addGST2(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join(
//           '\n '
//         )} \n (Write option number)`
//       )
//     );
//     console.log(answer);

//     // check to see if answer is a number, answer less then answers array and increment answers array based on answer.
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     console.log(this.answers);

//     this.displayResults();
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(`${this.answers}`);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // poll.registerNewAnswer();

// // We use the call method to point the this keyword to the new answers object we created and passed new array.
// // answers here is a new object
// poll.displayResults.call({ answers: [1, 2, 3, 4] });

// // create a new object answers with array value, call will point the this keyword to this new object, and type is equal to string.
// poll.displayResults.call({ answers: [1, 2, 3, 4] }, 'string');

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')} \n(Write option number)`
//       )
//     );

//     // typeof is checking the value type of answer, answer must be a number, answer must be less then answers.length, then increment answers array based off input
//     typeof answer === 'number' &&
//       answer <= this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// poll.displayResults.call({ answers: [1, 1, 1, 1] });
// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// create a method called 'registerNewAnswer'
//   registerNewAnswer() {
//     // 1.1 Display prompt for user to input
//     // get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     // 1.2 based on number, update answers array
//     // register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // 4. Run displayResults method at the end of each method call
//     this.displayResults();
//     this.displayResults('string');
//   },

//   // 3. create method called displayResults which displays poll results
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // 2. Call this method whenever the user clicks the 'answer poll; button
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

////////////////////////////////////////////////////////////////

// using call method we have to pass in the object we want the this keyword to point to
// book.call(eurowings, 23, 'Sarah Williams') ;

// once we bind a method to the object, the this keyword will always point to this object.
// book is the method and bookEw is the object
// const bookEw = book.bind(eurowings);
// const bookCanAir = book.bind(canadaAir);
// const bookSwiss = book.bind(swiss);
// bookEw(25, 'Steven William');

// This allows us to set/pass values to argument
// can set in stone values here
// values we place in here will override any other values we call to this method
// Here for example, 23 will always be passed to the first argument in the book method(book method is inside canadaAir object)
// specifiying parts of the argument before hand is a common pattern called partial application - a part of the argument of the original argument is already applied.
// const bookEW23 = book.bind(eurowings, 23);
// // passing string to name argument in book method
// bookEW23('Akram Nadri');
// bookEW23('Martha Cooper');

// // With Event Listeners
// canadaAir.planes = 300;
// canadaAir.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', canadaAir.buyPlane);

// ////////////////////////////////////////////////////////////////
// // Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name} `);
//   };
// };

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey(f'Akram');
// greeterHey('Steven');

// greetArr('Hi')('Ak');

// const greet = function (greeting) {
//   // when greet is called, this block of code will execute and any arguments sent to it will be in the name argument.
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // Challenge - arrow function
// // one arrow function returning another function
// const greetArrow = greeting => name => {
//   console.log(` ${greeting} ${name}`);
// };

// // greetHey is now a function, when greetHey is called it will run the block of code inside lines 7, 8.
// // const greetHey = greet('hey');
// const greetArr = greetArrow('Hi');
// greetArr('Ak');

// // console.log(greetHey);

// // greetHey('Akram');
// // greetHey('Pardis');

// // Passing 2 arguments to greet function
// greet('Hello')('Akram');
////////////////////////////////////////////////////////////////

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('!!!!!');
// };

// document.body.addEventListener('click', high5);

// ['akram', 'martha', 'adam'].forEach(high5);

// const addTwoNumbers = function (a, b) {
//   const sum = a + b;
//   return sum;
// };

// const multiplyTwoNumbers = function (a, b) {
//   const sum = a * b;
//   return sum;
// };

// const toUpperString = function (str) {
//   str.toUpperString();
//   return str;
// };

// const miniCalc = function (num1, num2, fn) {
//   console.log(`${fn.name} ${num1} ${num2} = ${fn(num1, num2)}`);
// };

// // const oneWord = function (str) {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// miniCalc(1, 2, addTwoNumbers);
// miniCalc(2, 2, multiplyTwoNumbers);

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUppe  rCase(), ...others].join(' ');
// };

// upperFirstWord('hello there');

// // Higher-order function
// // transformer is the higher-order function
// const transformer = function (str, fn) {
//   console.log(`'original string: ${str}`);
//   // fn is the function passed in the argument and is a callback function
//   console.log(`'Transformed string: ${fn(str)}`);
//   console.log(`'Transformed by: ${fn.name}`);
// };

// const highOrderFunction = function (str, fn) {
//   console.log(` this is the ${str}`);
//   console.log(` callback uppFirstWord function ${fn(str)}`);
// };

// highOrderFunction('sending to function oneWord', oneWord);

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('The oneWord function', oneWord);

// // JS uses callbacks ALL the time
// const high5 = function () {
//   console.log(' !!! ');
// };

// document.body.addEventListener('click', high5);

// ['Akram', 'Martha', 'Adam'].forEach(high5);

////////////////////////////////////////////////////////////////
// First-class and higher-order functions

/*

FIRST CLASS FUNCTIONS

- JavaScript treats functions as a first-class citizens.
- This means that functions are simply values.
- Functions are just another "type" of object.


//Example
- Store functions in variables or properties
*/

// const add = (a, b) => a + b;

// const counter = {
//   value: 23,
//   inc: function () {
//     this.value++;
//   },
// };

// // Pass functions as arguments to OTHER functions:
// const greet = () => console.log('Hey my name is Akram');
// btnClose.addEventListener('click', greet);

// // Return function FROM function
// // Call methods on functions

// counter.inc.bind(someOtherObject);

// HIGHER-ORDER FUNCTIONS

// - A function that receives another function as an argument, that returns a new function, or both.
// This is only possible because of the first-class functions

//- Functions that receives another function
// Here the addEventListener is the higher-order function because it receives another function as an input and greet is the callback function because it is the function that is being passed in
// The callback function will be called later by the higher-order function
// In this case addEventListener will call the greet callback later as soon as the click event happens
// Its like the greet function saying hey there dont greet me yet, but call me back once your ready

// EXAMPLE HIGHER-ORDER FUNCTION
// const greet = () => console.log('Hey my name is Akram');
// btnClose.addEventListener('click', greet);

// Functions that returns a new function
// This functions returns another function

// function count() {
//   let counter = 0;
//   return function(){
//     counter++
//   }
// }

// First-class functions VS Higher-order function
// First-class functions is just a feature that a programming language either has or does not have, all it means is that all functions are values...

////////////////////////////////////////////////////////////////

// How passing arguments works: Value vs Reference

// const flight = 'LH234';
// const akram = {
//   name: 'Akram Nadri',
//   passport: 234234234,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 234234234) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, akram);
// console.log(flight);
// console.log(akram);

// // is the same as doing...
// // these variables simply point at the object address on the heap
// const flightNum = flight;
// const passenger = akram;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(akram);
// checkIn(flight, akram);
////////////////////////////////////////
// const flight = 'LH234';
// const akram = {
//   name: 'Akram Nadri',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 234567789) {
//     alert('check in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, akram);

// // flight is primitive value
// console.log(flight);

// // akram is an object
// // passing this akram to the function parameter will point at the same object on the heap
// console.log(akram);

// // is the same as doing...
// const flightNum = flight;
// const passenger = akram;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// // seeing how the interaction of different functions with the same object can creat some issues here.
// // newPassport function will take in akram and apply the change in the function to now randomize the passport, which will now make the checkIn function passport comparison false
// newPassport(akram);

// checkIn(flight, akram);

// ** In programming there are two terms used all the times when dealing with functions, passing by value, passing by reference.
// Javascript does not have passing by reference, only passing by value.
// A reference simply contains the memory address to the object, that reference itself is still a value, it simply a value that contains a memory address.

// We pass a reference to the function, but we do not pass via reference.
// We pass a reference to the function

// Default parameters //////////////////////////////////////////
// const bookings = []

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1;
//   // price = price || '199';

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   console.log(bookings);

//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH444', undefined, 2);

// const bookings = [];

// // ES6 we can set the default values inside the paramaters.
// // default values can contain any expression.
// // we can use the values of the other parameters that were set BEFORE it.

// const createBooking = function (
//   ES6
//   flightNum,
//   numPassengers = 1,
//   price  = 199 * numPassengers
// ) {
//   // ES5
//   // old way setting default parameter
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// // we cannot skip a parameter in an argument
// createBooking('LH123', , 100);

// // set the parameter to undefine to skip
// // undefine here will return the default value set in the parameter
// createBooking('LH123', undefined , 100);

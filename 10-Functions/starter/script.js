'use strict';

////////////////////////////////////////////////////////////////
// THE CALL AND APPLY METHODS

// Practice 2

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  name: 'Akram',
  // before
  // book: function(){
  // }
  // after - similar way of creating a method
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

var divStr = '<div class="text-warning"> Hi Beebee! </div>';
document.getElementsByTagName('h1')[0].innerHTML += divStr;

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

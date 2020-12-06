'use strict';

// How passing arguments works: Value vs Reference

const flight = 'LH234';
const akram = {
  name: 'Akram Nadri',
  passport: 234567789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 234567789) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};

checkIn(flight, akram);

// flight is primitive value
console.log(flight);

// akram is an object
// passing this akram to the function parameter will point at the same object on the heap
console.log(akram);

// is the same as doing...
const flightNum = flight;
const passenger = akram;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

// seeing how the interaction of different functions with the same object can creat some issues here.
// newPassport function will take in akram and apply the change in the function to now randomize the passport, which will now make the checkIn function passport comparison false
newPassport(akram);

checkIn(flight, akram);

// ** In programming there are two terms used all the times when dealing with functions, passing by value, passing by reference.
// Javascript does not have passing by reference, only passing by value.
// A reference simply contains the memory address to the object, that reference itself is still a value, it simply a value that contains a memory address.

// We pass a reference to the function, but we do not pass via reference.
// We pass a reference to the function

// Default parameters //////////////////////////////////////////

// const bookings = [];

// // ES6 we can set the default values inside the paramaters.
// // default values can contain any expression.
// // we can use the values of the other parameters that were set BEFORE it.
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
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

'use strict';

// CONSTRUCTOR FUNCTION AND THE NEW OPERATOR
// A constructor is a completely normal function, the only difference between a regular function and a constructor function is the we call a constructor function with the 'new' operator.

// Constructor functions always start with a capital letter.

// => Arrow function will not work as a constructor function because it doesnt have its own 'this' keyword and we need that in a constructor function.
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor functions !!
  // imagine we need to create 100 or thousands of Person object using this constructor function, what would happen is each of these objects would carry around this function, we would create thousands of copies of this function which is bad for performance.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// Only difference between regular function and constructor function is that we call the constructor function with 'new' keyword.

const jonas = new Person('jonas', 1991);
console.log(jonas);
// The process of 'new' keyword - 4 steps -----------------
// 1. New 'empty object is created {}

// 2. function is called, this = {}. The 'this' keyword will point to the object that was created in step 1.

// 3. {} linked to prototype.

// 4. function automatically returns {} 'object'.
// --------------------------------------------------------

const matilda = new Person('Matilda', 2044);
const bill = new Person('Bill', 2022);
console.log(matilda, bill);

console.log(jonas instanceof Person);

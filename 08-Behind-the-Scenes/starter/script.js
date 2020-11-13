'use strict';

// // function/local scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   // function/local scope within calcAge function
//   // has access to variables in calcAge function
//   function printAge() {
//     let output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     // const and let are blocked scoped, they are only available within the function or block
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // var type can be access outside the function/block scope
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//     }

//     console.log(output);
//     // var millenial is accesible outside the function or block
//     console.log(millenial);
//     // console.log(add(2, 3));
//   }

//   printAge();

//   return age;
// }

// // global scope
// const firstName = 'Akram';
// calcAge(1984);

// HOISTING

// var is undefined
// console.log(me);

// job and year are in the TEMPORAL DEAD ZONE
// console.log(job);
// console.log(year);

// var me = 'Akram';
// let job = 'programmer';
// const year = 1984;

// FUNCTIONS

// console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrowFunction(2, 3));

// only this function will work because it is declared as a function
// function addDeclaration(a, b) {
//   return a + b;
// }

// this function will not work because it is declared as const and so must be initialized before calling it - so calling it before it initialized will treat it like and undefined variable
// const addExpression = function () {
//   return a + b;
// };

// var will not work because addArrowFunction now becomes a variable and it is undefined
// var addArrowFunction = (a, b) => a + b;

// EXAMPLE
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// let lastName = 'Nadri';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log(lastName, oldLastName);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// jessica object is store on the heap, assigning a new variable to this object does not create a new object with the properties, instead the variable will point to the objects address on the stack.
// reference type
const jessica = {
  firstName: 'Jessice',
  lastName: 'Williams',
  age: 27,
};

// marriedJessice will not create a new object, will point at the jessica object address on stack.
// They both hold the same memory address reference.
// if we change a property on marriedJessica, it will change the property on jessice as well because they both point to the same object on the heap.
// The stack only holds the reference which we are not changing
// The only thing we are changing is the underlying object which is stored on the heap.
// const marriedJessica = jessica;

// changing the lastName property in the jessica object.
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);

// We cannot assign a new object to marriedJessica because it is a const on the stack, const on the stack cannot be changed.
// If it was a 'let' we could assign a new object to it.
// marriedJessica = {};

// jessica2 is an object
const jessica2 = {
  // these are properties of the object
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,

  // array within the object
  family: ['akram', 'pardis'],
};

// Object.assign will do a shallow copy of the object
// jessicaCopy now has a shallow copy of the jessica2 object
const jessicaCopy = Object.assign({}, jessica2);

// jessicaCopy will only contain a shallow copy of the jessica2 object, other objects, arrays or functions inside jessica2 object will be copied into the new object
jessicaCopy.lastName = 'Davis';

// Here we try to push new strings into the family array inside jessica2 object
jessicaCopy.family.push('Bob');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

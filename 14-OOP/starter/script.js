'use strict';

// CONSTRUCTOR FUNCTION AND THE NEW OPERATOR ----

// A constructor is a completely normal function, the only difference between a regular function and a constructor function is the we call a constructor function with the 'new' operator.

// Constructor functions always start with a capital letter.

// => Arrow function will not work as a constructor function because it doesnt have its own 'this' keyword and we need that in a constructor function.
// const Person = function (firstName, birthYear) {
//   // instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// Never create a method inside a constructor functions !!
// imagine we need to create 100 or thousands of Person object using this constructor function, what would happen is each of these objects would carry around this function, we would create thousands of copies of this function which is bad for performance.
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// Only difference between regular function and constructor function is that we call the constructor function with 'new' keyword.

// const jonas = new Person('jonas', 1991);
// console.log(jonas);

//
//
//
// The process of 'new' keyword - 4 steps -----------------

// 1. New empty object is created {}

// 2. function is called, 'this = {}'. The 'this' keyword will point to the object that was created in step 1.

// 3. {} linked to prototype.

// 4. function automatically returns {} 'object'.

//
//
//
// --------------------------------------------------------
// --------------------------------------------------------

// const matilda = new Person('Matilda', 2044);
// const bill = new Person('Bill', 2022);
// console.log(matilda, bill);

// console.log(jonas instanceof Person);

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// PROTOTYPES ----

// Each and every function in JS automatically has a property called prototype, and that includes constructor function. Every object thats created by a certain constructor function will get access to all the methods and properties that we define on the constructor prototype property.

//
// console.log(Person.prototype);

// instead of creating a new function within each object creation, we can instead re-use this function calcAge within the object itself. Reusability.

// The 'this' keyword is set to the object thats calling the method.
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// since 'jonas' is an instance of Person, jonas has access to methods on Person. jonas has access to calcAge.
// We have access to it since prototypal inheritance
// jonas.calcAge();

// This is the prototype of jonas
// The prototype of jonas object is essentially the prototype property of the constructor function
// console.log(jonas.__proto__);

// console.log(jonas.__proto__ === Person.prototype); // true

// // Check if one prototype is the same as another
// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true

// // This is not the prototype of Person
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// How is jonas object connected to Person constructor ???
// During step 3 of creating an object with Person constructor, a link is created between the object and constructor, we can see that link in 'console.log(Person.prototype.isPrototypeOf(jonas));' // true

// Person and jonas object share the same prototype
// It sets the proto property on the object to the proto property of the constructor function, this is how JS knows they are connected.

// We can also set properties on the prototype, not just methods.
// This property will now be in each object under __proto__
// Person.prototype.species = 'Homosapiens';

// these objects now have a property called species in __proto__
// console.log(jonas, matilda);

// Check if a property exists in an object
// console.log(jonas.hasOwnProperty('firstName')); // true

// false since species is not directly in the object, it simply has access to it becuase of its prototype
// console.log(jonas.hasOwnProperty('species')); // false

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

// Going up the chain of prototypes
// console.log(jonas.__proto__);

// higher up the chain
// object.prototype
// console.log(jonas.__proto__.__proto__);

// highest point in the chain now points to object.prototype
// null because its the highest point in the scope chain
// console.log(jonas.__proto__.__proto__.__proto__); // null

// points back to the constructor function
// console.dir(Person.prototype.constructor);

// const arr = [2, 4, 5, 5, 7, 7, 8, 9];
// console.log(arr.__proto__);

// Arrays are created by an Array constructor function
// console.log(jonas.__proto__ === Array.prototype); // true

// We can also add a method to the Array.prototype
// Set object lets you store unique values of any type
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// will return only unique values from the array
// Generally not a good idea to create your own method inside a prototype because JS can eventually release a method with the same name as yours that will work or do something different. Also multiple developers working on the same project and each implementing their own methods can cause bugs
// console.log(arr.unique());

// const h1 = document.querySelector('h1');

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.


DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

// 1. Car constructor function

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  //
};

// 2. Accelerate method - increase cars speed by 10 and log it
Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

// 3. Brake method - decrease cars speed by 5 and log it.
Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

// 4. Create 2 Car objects and call Accelerate and Brake.

const car1 = new Car('Honda', 200);
const car2 = new Car('McLarenP1', 400);

console.log(car1, car2);

// calling accelerate method on car1 and car2 objects
car1.accelerate();
car2.brake();

car1.brake();

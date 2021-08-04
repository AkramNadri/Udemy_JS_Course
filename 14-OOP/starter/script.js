'use strict';

// CONSTRUCTOR FUNCTION AND THE NEW OPERATOR ----

// A constructor is a completely normal function, the only difference between a regular function and a constructor function is we call a constructor function with the 'new' operator.

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

// Static method
// Person.hey = function () {
//   console.log('Hey there ');
//   // this is pointing to entire Person constructor
//   console.log(this);
// };

// // the object calling the method, this will work.
// // whatever object is calling the method will have the this keyword
// Person.hey();
// This static method is not inherited, it is not in prototype, so there is no wau jonas can inherit it.
// jonas.hey(); // TypeError

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   //
// };

// // 2. Accelerate method - increase cars speed by 10 and log it
// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// // 3. Brake method - decrease cars speed by 5 and log it.
// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// // 4. Create 2 Car objects and call Accelerate and Brake.

// const car1 = new Car('Honda', 200);
// const car2 = new Car('McLarenP1', 400);

// console.log(car1, car2);

// // calling accelerate method on car1 and car2 objects
// car1.accelerate();
// car2.brake();

// car1.brake();

// --------------------------------------------------------
// --------------------------------------------------------

// ES6 CLASSES

// Classes in JS are just syntactic sugar for constructor functions. They still implement prototypal syntax.
// Classes are still functions.

// Implement Person using class

// Class expression
// const PersonCl = class {

//   //
// }

// ** Recommended ** //
// Class Decleration
// class PersonCl {
//   // constructor is a method of this class
//   // we pass in arguements
//   constructor(fullName, birthYear) {
//     // set properties of the object
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // methods - all of the methods that we write in the class will be on the prototype of the objects, not on the objects themselves - prototype inheritance. This method will not be found in the objects, instead it will be in the objects __proto__
//   // methods will be added to .prototype property
//   // ***!!! Instance method - these are methods that will be added to the prototype property so that all instance will have acces to them, hence the name instance method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // manually created this method on line 265
//   // greet() {
//   //   console.log(`Hey ${this.firstName}`);
//   // }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // "Data validation" to check if name contains spaces/if name is full name or not
//   // Since fullname already exists, we add _fullName which becomes a new property.
//   set fullName(name) {
//     // when creating a new object with class PersonCl, this checks wether the name includes a space which indicates its a full name, if no space is found '' will print alert.
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }
// }

// const pardis = new PersonCl('Pardis Honarvar', 1988);
// const akram = new PersonCl('Akram Nadri', 1984);
// console.log(pardis);
// pardis.calcAge();
// akram.calcAge();
// console.log(akram.age);
// console.log(akram.__proto__);

// console.log(pardis.__proto__ === PersonCl.prototype); // true

// // adding method manually to the prototype
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// pardis.greet();

// PersonCl.hey();

// 1. Classes are NOT hoisted. BUT function declerations ARE hoisted, which means we can use them before they are declared in the code.

// 2. Classes are also first-class citizens - we can pass them into functions and also return them from functions. That is because classes are really just a special kind of function behind the scenes.

// 3. Classes are executed in 'Strict Mode'.

// USE 'CLASSES' OR 'CONSTRUCTOR FUNCTION' ? based on personal preference.

// --------------------------------------------------------
// --------------------------------------------------------
// SETTERS AND GETTERS
// Every object in JS can have Setter and getter property, we call these special properties assessor properties and the normal properties are called data properties.
// getter and setter are functions that get and set a value.

// creating a new object using PersonCl class, must include a full name with space for fullName property to be created on new object. Alert if name does not contain spaces
// example below is only first name
// const walter = new PersonCl('Walter', 1995); // Alert
// const walter = new PersonCl('Walter White', 1995);

// const account = {
//   owner: 'Akram',
//   movements: [200, 300, 500, 700],

//   // this will return an array with the last position
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   // Any setter method needs to have atleast 1 parameter
//   // Can add a new movement to the array
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// // we write it as if its just a property.
// console.log(account.latest);

// // how we pass a value into the setter
// account.latest = 50;
// console.log(account.movements);

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// STATIC METHODS

// --------------------------------------------------------
// --------------------------------------------------------

// OBJECT.CREATE
// Learned about constructor functions and ES6 Classes, there is a 3rd way of implementing prototypal inheritance or delegation. Function called Object.create.

// Object.create
// no prototype properties, no constructor functions and no "new" operator

// ~~~ manually set the prototype of an object to any other object that we want. ~~~~

// Create an object is going to be the prototype of all the Person objects.

// Implementing prototypal inheritance in a completely different way below ! ~~
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   // This is not a constructor function !!!
//   // We are not using the "new" keyword to call this.
//   // Manually initializing an object
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // Create an object and inherit prototype from PersonProto
// const steven = Object.create(PersonProto);

// console.log(steven);

// // Manually create properties
// steven.name = 'Steven';
// steven.birthYear = 2002;

// // steven has access to calcAge - delegation - since it has the __proto__ from PersonProto object
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// // Create another object
// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1979);
// sarah.calcAge();
// console.log(sarah);
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);

4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.


DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   //
// };

// 1.
// class Car {
//   //
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   // since this method is in a class we dont need to write it out as 'Car.prototype.accelerate'
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going ${this.speed} km/h`);
//   }

//   // 2.
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   // 3.
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// // 4.
// const ford = new Car('ford', 120);

// console.log(ford);

// console.log(ford.speedUS); // calling getter divide 1.6=75

// ford.speedUS = 40; // convert miles to km=64
// console.log(ford);

// ford.accelerate(); // increase speed by 10
// ford.brake(); // decrease speed by 5

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// INHERITANCE BETWEEN 'CLASSES': CONSTRUCTOR FUNCTIONS

// ~~~~ //
// 1. CONSTRUCTOR FUNCTIONS
// 2. ES6 CLASSES
// 3. OBJECT.CREATE()
// ~~~~ //

// PROTOTYPAL INHERITANCE - CONSTRUCTOR FUNCTIONS, ES6 CLASSES AND OBJECT.CREATE - ALLOW OBJECTS TO INHERIT METHODS FROM ITS PROTOTYPE - DELEGATE THEIR BEHAVIOUR TO THE PROTOTYPES.

// @ Inheritance -- Child classes can share behaviour from their parent classes

// Parent Class !!!
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // Child Class !!!
// // Student constructor
// const Student = function (firstName, birthYear, course) {
//   // we use the call method here and set the this keyword to the new object
//   Person.call(this, firstName, birthYear);

//   // DRY - solution above
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   this.course = course;
// };

// // student.proto is now an object that inherits from Person.proto
// Student.prototype = Object.create(Person.prototype);

// // method
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const akram = new Student('akram', 2020, 'Computer science');
// console.log(akram);

// akram.introduce();

// akram.calcAge();

// // Person because on line 496 we set the proto of Student to Person.
// console.log(akram.__proto__); // Person
// console.log(akram.__proto__.__proto__);

// // Change proto of akram object to Student
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// console.log(akram);

// console.log(akram instanceof Student); // true
// console.log(akram instanceof Person); // true - because we linked the prototypes together
// console.log(akram instanceof Object); // true

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

// 1.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const Ev = function (make, speed, charge) {
//   // this will point to Car object
//   Car.call(this, make, speed);

//   this.charge = charge;
// };

// // Set prototype of Ev to Car, Car is parent class and Ev is child class
// Ev.prototype = Object.create(Car.prototype);
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// // 2.
// Ev.prototype.chargeBattery = function (chargeTo) {
//   //
//   this.charge = chargeTo;
// };

// // 3.
// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed}, with a charge of %${this.charge}`
//   );
// };

// // 4. Create new Ev object
// const tesla = new Ev('Tesla', 120, 23);

// //
// Ev.prototype.constructor = Ev;

// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);

// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();

// console.log(tesla);

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// INHERITANCE BETWEEN "CLASSES: ES6 CLASSES"
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }
// }

// // Classes are really just a layer of abstraction over constructor functions.
// // To implement inheritance between ES6 Classes we only need 2 ingredients, we need the EXTEND keyword and the SUPER function.

// // extends - implements inheritance between StudentCl and PersonCl - will link the prototypes.
// // PersonCl is parent class and StudentCl is the child class.
// class StudentCl extends PersonCl {
//   // we still need a constructor
//   constructor(fullName, birthYear, course) {
//     // super is the constructor function of the parent class
//     // similar to Person.call(this, fullName, birthYear)
//     // Always needs to happen first because this call to the super function is responsible for creating the "this" keyword in this subclass.
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }

//   // Override calcAge method
//   // this new method overrode the one that was already there in the prototype chain, this new calcAge method appears first in the prototype chain, therefore it is essentially overriding the calcAge coming from the parent class.
//   calcAge() {
//     `Im ${2037 - this.birthYear} years old, but as a student i feel more like ${
//       2037 - this.birthYear + 10
//     }`;
//   }
// }

// const martha = new StudentCl('martha stewart', 2012, 'computer science');
// // const martha = new StudentCl('martha', 2012, 'computer science');

// martha.introduce();
// martha.calcAge();

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

// Child prototype can reuse the init method from the PersonProto prototype which is the parent prototype.
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);

jay.introduce();
jay.calcAge();

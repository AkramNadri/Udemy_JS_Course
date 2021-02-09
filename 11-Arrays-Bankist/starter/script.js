'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array Methods

// Why do arrays have methods ?
// Methods are simply functions that we can call on objects, they are functions attached to objects. Arrays themselves are also objects. These array methods are simply functions that are attached to all arrays that we create in JavaScript. Arrays are objects and they have access to special built in methods that we can essentially see as tools for arrays.

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE METHOD
// // this does not mutate the original arr array
// // returns a new array but only with the extracted parts
// console.log(arr.slice(2));

// // end parameter minus the beginning one
// console.log(arr.slice(2, 4));

// // negative parameter will start selecting indexes from the end of array
// // count backwards from array
// console.log(arr.slice(-2));

// // -1 selects the last element in the array
// console.log(arr.slice(-1));

// // parameter begins at b and parameter 2 ends at c
// console.log(arr.slice(1, -2));

// console.log(arr.slice(0, -2));

// // create shallow copy of array
// console.log(arr.slice());

// // spread operator to create shallow copy of array
// console.log(...arr);

// // SPLICE - mutates original array

// // extracts elements from array
// // console.log(arr.splice(2));

// // the extracted elements are gone from the orginal array
// console.log(arr);

// // most of the time the value splice methods returns does not interest us. Delete one or more elements from an array using splice.

// // remove the last element in the array
// arr.splice(-1);
// console.log(arr); // a, b, c, d

// // removes b ,c - which leaves a, d
// // the first paremeter is similar to the slice method, and the second parameter is how many items we want to delete
// arr.splice(1, 2);
// console.log(arr); // a, d

// REVERSE - does mutate array
// Tip - sometimes we do not want to mutate the original array, in this case we do not want to use certain array methods.

// let arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// // will reverse the array and mutate
// console.log(arr2.reverse());

// // arr2 array has been mutated - not the same as orginal.
// console.log(arr2);

// //CONCAT - used to concat two arrays
// const letters = arr.concat(arr2);
// console.log(letters);

// // spread ... this gives us the same results as above, and does not mutate the original arrays
// console.log(...arr, ...arr2);

// // JOIN
// console.log(letters.join(' - '));

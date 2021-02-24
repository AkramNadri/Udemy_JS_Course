'use strict';

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

// *****

// DOM manipulation
// This function will display HTML of movements inside the containerMovements class.

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
        ${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// calling displayMovements, passing account1 object with movements parameter
displayMovements(account1.movements);

// *****

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => (acc += curr), 0);

  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

// *****

const calcDisplaySummaryIn = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => (acc += curr), 0);

  labelSumIn.textContent = `${incomes}€`;
};

calcDisplaySummaryIn(account1.movements);

// *****

const calcDisplaySummaryOut = function (movements) {
  const incomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => (acc += curr), 0);

  labelSumOut.textContent = `${Math.abs(incomes)}€`;
};

calcDisplaySummaryOut(account1.movements);

// *****
// Calculate interest
const interestRate = function (movements) {
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

interestRate(account1.movements);

// *****

// Create usernames
const createUserNames = function (accs) {
  // here we are creating a new property 'username' inside the accounts objects.
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase() // lower case all characters
      .split(' ') // select all strings that have a space in between
      .map(name => name[0]) // map iterates username, select index[0]
      .join(''); // join concats the strings
  });
};

createUserNames(accounts);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Magic of chaining methods - we can chain multiple methods
const eurToUsd = 1.1;

// Pipeline
// each chained method calls upon the results of the previous method
const totalDepositsUSD = movements
  .filter(mov => mov > 0) // can chain method after .filter
  // .map(mov => mov * eurToUsd) // can chain method after .map
  .map((mov, i, arr) => {
    // .map receieves value results from previous method, printing arr will display new array received from .filter
    // We can inspect the current array at any stage of the pipeline using the third parameter of the call back function.
    console.log(arr);
    return mov * eurToUsd;
  })

  .reduce((acc, curr) => acc + curr, 0); // can NOT chain method after reduce because it returns a value.

console.log(totalDepositsUSD);
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages =>
  ages
    .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
    .filter(ages => ages >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old).

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉).

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const dogHumanAge = ages.map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4));

//   const adultDogs = dogHumanAge.filter(ages => ages >= 18);

//   const avgHumanAge = adultDogs.reduce(
//     (acc, curr, i, arr) => acc + curr / adultDogs.length,
//     0
//   );

//   console.log(avgHumanAge);
//   console.log(adultDogs);
//   console.log(dogHumanAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)); // 1

//   const dogsAbove18 = humanAge.filter(ages => ages >= 18); // 2

//   // const avgHumanAge =
//   //   dogsAbove18.reduce((acc, curr) => acc + curr, 0) / dogsAbove18.length;

//   // same as above

//   const average = dogsAbove18.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // return avgHumanAge;
//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // REDUCE METHOD

// console.log(movements);

// //  Reduce - First parameter is call the accumulator is like a snowball, it keeps accumulating the value that we ultimately want to return.

// // Accumulator -> snowball
// // reduce loops through the array
// // All the values will add up to one final value
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   // i is the index and curr is the current element in array
//   console.log(`Iteration ${i + 1}: ${acc}`);

//   // each iteration we return the updated accumulator plus the new current element.
//   return acc + curr;
//   // the 0 here is the initial value of the accumulator
//   // each iteration will update the accumulator
// }, 0);

// console.log(balance); // expected output 3840. Accumulated number of all the elements in the array.

// // same as above - arrow function
// const balance3 = movements.reduce((acc, curr) => (acc += curr), 0);
// console.log(balance3);

// // Same thing as above but with for loop - this way can become combursome when doing many operations
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // reduce function example
// const newBalance = movements.reduce(function (acc, curr, i) {
//   console.log(
//     `Iteration ${i + 1}: Current Acc: ${acc} Current element: ${curr}`
//   );

//   return acc + curr;

//   // 0 is the initial value of the accumulator
// }, 0);
// console.log(newBalance);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Maximum value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }

//   console.log(maxValue);
// }, movements[0]);

// console.log(max);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// THE FILTER METHOD - used to filter for elements that satisfy a certain condition.

// Filter method passes 3 arguments, the element, current index and the entire array.
// Filter method will pass arguments and filter elements in the expression.
// This is called functional programming, and its more popular with less lines of code.
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// same as above, except we are using 'for of' loop and pushing into array with push method.
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// for of loop to find withdrawals or number less then 0 and push it to withdrawals array
// const withdrawals = [];
// for (const mov of movements) if (mov < 0) withdrawals.push(mov);
// console.log(withdrawals);

// Same as above except using the filter method
// Filter method only returns values that are true for the expression.
// the => arrow is like having a RETURN.
// const withdrawalsFilter = movements.filter(mov => mov < 0);
// console.log(withdrawalsFilter);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// COMPUTING USERNAMES

// const user = 'Steven Thomas Williams';

// const createUserNames = function (accs) {
//   // here we are creating a new property 'username' inside the accounts objects.
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase() // lower case all characters
//       .split(' ') // select all strings that have a space in between
//       .map(name => name[0]) // map iterates username, select index[0]
//       .join(''); // join concats the strings
//   });

// const username = user
//   .toLowerCase() // lower case all characters
//   .split(' ') // select all strings that have a space in between
//   .map(name => name[0]) // map iterates username, select index[0]
//   .join(''); // join concats the strings

// return username;
// };

// createUserNames(accounts);
// console.log(accounts);
// const userInitials = username.map(users => users.charAt(0));
// console.log(userInitials);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// this will display all the contents inside containerMovements
// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// The Map Method

// The map method will give us a brand new array, this new array will contain in each new position the results of applying a call back function to the original array elements.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // map will pass 3 arguments
// // map method does not mutate original array, will return a new array.
// // here we use a function for each iteration
// const movementsToUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
//   // return 23;
// });

// // Code challenge - Create an arrow function as same function above
// // => this is a return
// console.log(movements.map(movement => movement * eurToUsd));

// // same as above, except we do not use function.
// const movementsUSDfor = [];

// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movements);
// console.log(movementsToUsd);

// // map passes 3 arguments, the same as forEach
// // map does not mutate original array

// // map method will iterate through array and create a new array and will print to the console wants it fully iterates through the array - whereas forEach will print to console each time it iterates through an array.
// const movementsDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
//       mov
//     )}`
// );

// //   if (mov > 0) {

// //     return `Movement ${i + 1}: You deposited ${mov}`;
// //   } else {
// //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// //   }
// // });

// console.log(movementsDesc);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// DATA TRANSFORMATION: MAP, FILTER, REDUCE

// MAP //////

// MAP: another method used to loop over arrays. Similar to forEach, except map creates a brand new array based on the original array. It maps the values of the original array, thats why we call this method map.
// MAP - returns a new array containing the results of applying an operation on all orginal array element.

// FILTER //////

// FILTER: returns a new array containing the array elements that passed a specified test condition. Elements that are considered true will be passed to the new created array, all other elements will be filtered out.

// REDUCE //////

// REDUCE: boils ('reduces') all array elements down to one single value (e.g. adding all elements together).

/////////////////////////////////////////////////
/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters).

2. Create an array with both Julia's (corrected) and Kate's data.

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶").

4. Run the function for both test datasets.

HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const juliasData = [3, 5, 2, 12, 7];
// const katesData = [4, 1, 15, 8, 3];

// Create function 'checkDogs' which takes 2 parameters('dogsJulia' and 'dogsKate')

// const checkDogs = function (dogsJulia, dogsKate) {
//   // 1. Removed the first and last two
//   const correctedDogsJulia = dogsJulia.splice(1, 2);

//   // concat both arrays
//   const concatJuliasAndKates = correctedDogsJulia.concat(dogsKate);

//   concatJuliasAndKates.forEach(function (element, i, arr) {
//     if (element >= 3) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${element} years old `
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });

//   // console.log(concatJuliasAndKates);
//   // console.log(correctedDogsJulia);
// };

// console.log('Test Data 1');

// // test data 1
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// console.log('Test Data 2');

// // test data 2
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// forEach with Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}: ${map}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// // the _value underscore in front of value here means that we dont care about this value, or its a throw away variable.
// currenciesUnique.forEach(function (value, _value, map) {
//   console.log(`${value}, ${value}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// create a new variable movement which is a copy of movements
// for (const movement of movements) {

// counter variable added, i is index of element
// for (const [i, movement] of movements.entries()) {
//   // if movement is > 0 log message
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     // Math.abs is the absolute number, removing the sign ( - )
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     // console.log(`You withdrew ${movement}`);
//   }
// }

// forEach method - does the exact same thing as above in simpler way.
// forEach is a higher order function, which requires a call back function
// Loops over the array and each iteration will execute the call back function, also as the forEach method calls the callback function in each iteration, it will pass in this current element of the array as an argument.

// forEach logic - at iteration 0; forEach will call the anonymous function and its going to call it with the value of 200, then 450 and so on until it reaches the end of the array.

// console.log(' --- FOR EACH --- ');

// the order of arguments in parameter matter, 1st parameter is current element, 2nd current index, and 3rd the entire array.
// thats the order in which the arguements are passed into our function.
// forEach passes 3 things to the function - current element, index and array.
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}, Array: ${arr}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const heaven = [1, 2, 3, 4, 5, 6, 7];

// console.log(heaven);

// heaven.forEach(function (element, i) {
//   if (element > 4) {
//     console.log(`higher heaven level ${element} ${i}`);
//   } else {
//     console.log(`lower heaven level ${element}`);
//   }
// });

// What if we need access to a counter variable

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

'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data/Accounts
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

const account5 = {
  owner: 'Akram Nadri',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5555,
};

const account6 = {
  owner: 'Paradis Honarvar',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 6666,
};

const account7 = {
  owner: 'Moe Al',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 7777,
};

const account8 = {
  owner: 'John Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 8888,
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

// *****// *****// *****// *****// *****// *****

// DOM manipulation
// This function will display HTML of movements inside the containerMovements class.

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // if sort = true, make a copy of movements with slice, then sort the array by ascending order.
  // slice here creates a shallow copy of the movements array, does not mutate original array. We then use that shallow copy and sort over array passing 2 arguments a, b which will compare the two elements.
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

// *****// *****// *****// *****// *****// *****

const calcDisplayBalance = function (acc) {
  // here we create a new property in accounts object called balance.
  // the way we are able to do this is because were not actually creating a new object, instead the new variable points to the same object on the memory heap.
  // So acc.balance points to the accounts object on the memory heap
  acc.balance = acc.movements.reduce(
    (accumulator, curr) => (accumulator += curr),
    0
  );

  labelBalance.textContent = `${acc.balance} €`;
};

// *****// *****// *****// *****// *****// *****

const calcDisplaySummaryIn = function (accs) {
  const incomes = accs.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => (acc += curr), 0);

  labelSumIn.textContent = `${Math.abs(incomes)}€`;
};

// *****// *****// *****// *****// *****// *****

const calcDisplaySummaryOut = function (accs) {
  const incomes = accs.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => (acc += curr), 0);

  labelSumOut.textContent = `${Math.abs(incomes)}€`;
};

// *****// *****// *****// *****// *****// *****

// Calculate interest
const interestRate = function (accs) {
  const interest = accs.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * accs.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

// *****// *****// *****// *****// *****// *****

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

// *****// *****// *****// *****// *****// *****

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary In/Out
  calcDisplaySummaryIn(acc);
  calcDisplaySummaryOut(acc);
};

// *****// *****// *****// *****// *****// *****

// Event handler
let currentAccount;

// LOGIN BUTTON
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // creating a new variable property inside accounts object
  // currentAccount variable actually points to the accounts object on the memory heap.
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear login input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    // blur removes the cursor from login pin field
    inputLoginPin.blur();

    // Same as all the function calls below
    updateUI(currentAccount);

    // Replacing all the function calls below with a single function above (updateUI)
    // // Display movements
    // displayMovements(currentAccount.movements);

    // // Display balance
    // calcDisplayBalance(currentAccount);

    // // Display summary
    // calcDisplaySummaryIn(currentAccount);
    // calcDisplaySummaryOut(currentAccount);
    // interestRate(currentAccount);
  }
});

// *****// *****// *****// *****// *****// *****

// TRANSFER BUTTON
btnTransfer.addEventListener('click', function (e) {
  // prevents the form from submitting
  e.preventDefault();

  // Number here converts the value to a number
  const amount = Number(inputTransferAmount.value);

  // strictly comparing if username property inside accounts array equals the value in inputTransferTo value.
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // clears the input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

// *****// *****// *****// *****// *****// *****
// REQUEST LOAN

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = inputLoanAmount.value;

  // selects amount >0 and applies expression of * 0.1 to values in array
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// *****// *****// *****// *****// *****// *****

// THE FINDINDEX METHOD
// Returns index, not the element itself
// The findIndex method will return the index of the first element in the array that matches the condition.

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // correct credentials
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount?.pin === Number(inputClosePin.value)
  ) {
    // delete user from data
    // here we find the index of the current logged in user
    // we use this index to delete the selected user
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // .splice will delete(mutate) selected array, starting at index to 1
    accounts.splice(index, 1);

    // log user out(hide UI)
    containerApp.style.opacity = 0;
  } else {
    console.log('error');
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// *****// *****// *****// *****// *****// *****
// SORT BUTTON

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// example below
let sorted2 = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  // if sorted does not equal false will then sort
  displayMovements(currentAccount.movements, !sorted2);
  sorted2 = !sorted2;
});
// *****// *****// *****// *****// *****// *****

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉

HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);

// 2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

// if (dogSarah.curFood > dogSarah.recFood) {
//   console.log('Sarah dog eating too much');
// } else {
//   console.log('Sarah dog eating too little');
// }

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

console.log(dogSarah);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// eating too much food
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

// eating too little food
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

// logs to console owners dogs that eats to little
console.log(ownersEatTooLittle);

// *****// *****// *****// *****// *****// *****
// ARRAY METHODS PRACTICE

// 1.
// contains all movements arrays
// flatMap iterates over arrays and concatenates all arrays into one array
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.
// // one way of doing it
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // prefix increment ++count
//   // count the number of deposits over or equal to 1000
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // prefix increment example
// // let a = 10;
// // console.log(++a);
// // console.log(a);

// // 3. Sum of deposits and sum of withdrawals

// // destructuring with {}
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, cur) => {
//       // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
//       acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

//       return acc;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// // Example  -- same as above
// const sums1 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, cur) => {
//       cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
//       return acc;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(sums1);

// // 4. Title Case
// // this is a nice title -> This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capatilize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capatilize(word)))
//     .join(' ');

//   return capatilize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// *****// *****// *****// *****// *****// *****
// WHICH ARRAY METHOD TO USE ?
// 23 different array methods

// Must ask the question what do I want to do with the array ?

// *** Do i want to mutate the array ?

// add to original:
// .push (end)
// .unshift (start)

// Remove from original:
// .pop (end)
// .shift (start)
// .splice (any)

// Others
// .reverse
// .sort
// .fill

// *** Want new array ?

// Computed from original:
// .map (loop)

// Filtered using condition:
// .filter

// Portion of original:
// .slice

// Adding original to other:
// .concat

// Flattening the original:
// .flat
// .flatMap

// *** Want an array Index ?

// Based on value:
// .indexOf

// Based on test condition:
// .findIndex

// *** Want array element ?

// Based on test condition:
// .find

// *** Know if array includes ?

// Based on value:
// .includes

// Based on test condition:
// .some (true if some satisfy condition)
// .every (true if all satisfy condition)

// *** Want new string ?

// Based on seperator string:
// .join

// *** Transform to value ?

// Based on accumulator:
// .join (Boil down array to single value of any type: number, string, boolean or even new array or object)

// *** Simply loop over an array ?

// Based on callback:
// .forEach (does not create new value or new array, just loops over it)

// *****// *****// *****// *****// *****// *****
//CREATING AND FILLING ARRAYS

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // create a new empty array with 7 empty elements
// // creates a new empty argument with that length
// const x = new Array(7);
// console.log(x);

// // empty array
// console.log(x.map(() => 5));

// // Fill method ****
// // fill inserts the passed value to the empty array
// // specifiy at which index to start filling
// // value is 1, and index start point is 3
// // index 5 and above is empty
// // will place the value 1 between indexes 3 and 5
// x.fill(1, 3, 5);

// console.log(x);

// // we place value 23 in the arr array at index 4 to 6
// arr.fill(23, 4, 6);
// console.log(arr);

// // Array.from function ****
// // Array here is a function and we are calling the from method on it
// // creates array with length of 7 and places value 1 into array
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// // curr is current element and i is current index
// // _curr is a throw away value because we do not need the current value here
// // this is how we create and array programmatically
// const z = Array.from({ length: 7 }, (_curr, i) => i + 1);
// console.log(z);

// // Create an array with 100 random dice rolls
// // const randomDiceRoll = Array.from(
// //   { length: 100 },
// //   (_curr, i) => i + Math.random()
// // );
// // console.log(randomDiceRoll);

// // Event when labelBalance is clicked to display all values in .movements__value div
// // Array.from creates a new array of movementsUI from the values found in .movements__value
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );

//   // map iterates over array and selects each element, here we replace the pound sign € with empty string in each element
//   console.log(
//     movementsUI.map(element => Number(element.textContent.replace('€', '')))
//   );
// });

// *****// *****// *****// *****// *****// *****

// SORTING ARRAYS

// let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Strings
// // will sort arrays based on alphabetical order
// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
// console.log(owners);
// console.log(owners.sort());

// //NUMBERS
// // will sort number array based on the first digit of the number
// console.log(movements);
// console.log(movements.sort());

// a is the current value, and b is the next value as were looping through the array

// return < 0  A, B (keep order)
// return > 0 B, A (switch order)
// sorting in ascending order
// sort method keeps looping over the array, applying callback function until everything is in ascending order.
// Ascending = Lowest number to the highest number.
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// We can simply put a - b, same as above
// movements.sort((a, b) => a - b);
// console.log(movements);

// Descending = Highest number to lowest.
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// movements.sort((a, b) => b - a);
// console.log(movements);

// *****// *****// *****// *****// *****// *****

// FLAT AND FLATMAP

// flat will return array as a single array
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// // here we have deeper nested array
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// // here we can select how deep we go into the nested arrays, by indicating a number in the flat argument (2) - second level of nesting
// console.log(arrDeep.flat(2));

// putting all movements into one array
// Without method chaining
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// With method chaining
// advantage instead of creating new variables to hold the changes to the current array, we chain the methods and make changes along the way.
// Using map first and then flat the results is a common practice
// flat
// const overalBalance1 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance1);

// // flatMap
// // Here flatMap combines map and flat
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// *****// *****// *****// *****// *****// *****

// SOME AND EVERY

// let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// // we use includes method to test if an array includes a certain value
// // includes method will return true if any value in the array equals -130.

// // EQUALITY
// console.log(movements.includes(-130)); // true

// // what if we want to test for some condition instead ?
// // Any positive movements in this array ? any number above zero

// // SOME: CONDITION
// console.log(movements.some(mov => mov === -130)); // true

// const anyDeposits = movements.some(mov => mov > 5000); // false
// console.log(anyDeposits);

// // EVERY
// // similar to some method - every only returns true only if all of the elements satisfy the condition that we pass in
// // only then the every method will return true

// // not all values in array are above 0, this will return false
// console.log(movements.every(mov => mov > 0)); // false

// // all values are above zero, will return true
// console.log(account4.movements.every(mov => mov > 0)); // true

// // Seperate callback
// // DRY principle = Dont Repeat Yourself
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// *****// *****// *****// *****// *****// *****

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // The find method
// // Loops over the array - retrieves an element of the array.
// // Also needs a call back function to return a value
// // Will return the FIRST element of the array which it finds to be true, will not return entire array.
// // Find only returns the element itself and not the array
// const firstWithdrawal = movements.find(mov => mov < 0);

// // Using .find to loop through accounts and find owner with string name
// // compare 'Jessica Davis' with account owner
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);
////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Magic of chaining methods - we can chain multiple methods
// const eurToUsd = 1.1;

// Pipeline
// each chained method calls upon the results of the previous method
// const totalDepositsUSD = movements
// .filter(mov => mov > 0) // can chain method after .filter
// .map(mov => mov * eurToUsd) // can chain method after .map
// .map((mov, i, arr) => {
// .map receieves value results from previous method, printing arr will display new array received from .filter
// We can inspect the current array at any stage of the pipeline using the third parameter of the call back function.
//   console.log(arr);
//   return mov * eurToUsd;
// })

// .reduce((acc, curr) => acc + curr, 0); // can NOT chain method after reduce because it returns a value.

// console.log(totalDepositsUSD);

///////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
//     .filter(ages => ages >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

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

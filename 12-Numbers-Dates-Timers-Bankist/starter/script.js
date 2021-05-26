'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

// updated function to take in entire account instead of just movements property
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // i is the index
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // current index in the movements array
    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    // month is 0 based so we add the 1
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// ******************** // ** // ** //
// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// day/month/year
// ******************** // ** // ** //

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // the + here is the same as using Number function
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    // month is 0 based so we add the 1
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // updated so amounts are using Math.floor function to round and handle negative numbers
  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LECTURES

// CONVERTING AND CHECKING NUMBERS

// console.log(23 === 23.0);

// // Base 10 is 0 - 9
// // Binary base 2 is 0 or 1

// console.log(0.1 + 0.2);

// console.log(0.1 + 0.2 === 0.3); // false

// // convert string to number
// console.log(Number('23'));

// // the + sign is the same as Number, type coercion
// console.log(+'23');

// // Parsing
// // Here we are using base 10 number.
// // JS will parse the number from a String, in order for this to work the string must start with a number.
// // base 10 number
// console.log(Number.parseInt('30px', 10));

// // example - the string here does not start with a number so we get NaN
// // base 10 number
// console.log(Number.parseInt('px30', 10)); // NaN

// // parseFloat will include decimal
// console.log(Number.parseFloat('2.5rem')); // 2.5

// // parseInt does not include decimal
// console.log(Number.parseInt('2.5rem')); // 2

// // ** isNaN checks if a value is NOT a number **
// console.log(Number.isNaN(20)); // false since 20 is a number

// console.log(Number.isNaN('20')); // false because this isnt also not a number

// console.log(Number.isNaN(+'20')); // true

// console.log(Number.isNaN(23 / 0)); // false - infinity

// // ** isFinite ** - better method to check if value is number
// // checks if value is a number
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false - since its string

// console.log(Number.isFinite(+'20X')); // false

// console.log(Number.isFinite(23 / 0)); // false - infinity

///////////////////////////////////////////////// ******

// MATH AND ROUNDING

// square root
// console.log(Math.sqrt(25));

// // same as square root
// console.log(25 ** (1 / 2));

// // cube root
// console.log(8 ** (1 / 3));

// // find MAX number
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// // find MIN number
// console.log(Math.min(5, 18, 23, 11, 2));

// // Math.PI - calculate radius of circle with 10 pixels
// // calculate are of circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // random value between 1 and 6
// console.log(Math.trunc(Math.random() * 6 + 1));

// // Math.random will output number between 0 and 1
// // using Math.floor to handle all situations including negative number inputs
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(5, 10));

// // Rounding integer

// // trunc removes and decimal parts
// console.log(Math.trunc(23.3));

// // will round to the nearest integer
// console.log(Math.round(23.9));

// // round up
// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// // round down
// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.3)); // 23

// // negative numbers
// console.log(Math.trunc(-23.3));

// // floor works in all situations - wether positive or negative numbers
// console.log(Math.floor(-23.3));

// // Rounding decimals

// // toFixed will return a String rounded
// console.log((2.7).toFixed(0)); // String 3

// console.log((2.7).toFixed(3)); // String 2.700

// console.log((2.345).toFixed(2)); // String 2.35

// // the + here converts the String back to Number
// // + same as Number method
// console.log(+(2.7).toFixed(2));

///////////////////////////////////////////////// ******
///////////////////////////////////////////////// ******

// THE REMAINDER OPERATOR
// simply return the remainder of a division

// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5 or 5 = 2 * 2 + 1

// console.log(8 % 3); // 2
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2); // 0 there is no remainder
// console.log(6 / 2); // 3

// console.log(7 % 2); // 1
// console.log(7 / 2); // 3.5

// // function check if number is odd or even
// // an even number is any number divisible by 2
// const isEven = n => n % 2 === 0;
// console.log(isEven(8)); // true even
// console.log(isEven(23)); // false odd
// console.log(isEven(514)); // true even

// labelBalance.addEventListener('click', function () {
//   console.log('clicked');
//   // ... spread operator
//   [...document.querySelectorAll('.movements_row')].forEach(function (row, i) {
//     // 0 , 2, 4, 6, 8
//     if (i % 2 === 0) row.style.backgroundColor = 'red';

//     // 0, 3, 5,
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

///////////////////////////////////////////////// ******
///////////////////////////////////////////////// ******

// WORKING WITH BIGINT
// 64 bits - 64 1's or 0's

// console.log(2 ** 53 - 1); // largest number JS can handle/produce

// // produces larger number
// // any integer larger then this is not safe
// console.log(Number.MAX_SAFE_INTEGER);

// // unsafe numbers
// console.log(2 ** 53 + 3);

// // ES 2020 a new primitive was added "BIGINT" = Big integer can store much larger numbers, as large as we want

// // n transforms regular number to BIGINT
// console.log(234234234234234234234234234234234234234n);

// console.log(BigInt(234234234234092834098234098234092834));

// // Operations with BIGINT

// console.log(10000n + 10000n);

// console.log(2230984209384029384029384029384902384n * 289374923874n);

// const huge = 234234929347293874928374n;
// const num = 23;

// // Cannot mix Bigint and other types
// console.log(huge * BigInt(num));

// console.log(20n > 15); // true
// // === does not do type coercion. 20n is a bigint and 20 is regular int
// console.log(20n === 20); // false

// console.log(typeof 20n); // bigint

// // type coercion happens with ==
// console.log(20n == 20); // true

// // coercion occurs here, huge is transformed to string
// console.log(huge + 'is really big!!!');

// // Division
// // cuts off decimal part
// console.log(10n / 3n); // 3n - returns closest bigint
// console.log(10 / 3); // 3.333333

///////////////////////////////////////////////// ******
///////////////////////////////////////////////// ******

// CREATING DATES
// dates and times

// Create a date - 4 ways of creating a date. They all use new Date constructor

// const now = new Date();
// console.log(now);

// // Parsing date
// console.log(new Date('Tue May 25 2021 15:21:28'));

// console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));

// // the month date in JS is 0 based
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(2037, 10, 33));

// console.log(new Date(0));

// // day 3 which has 24 hours, 60 min each hour, 60 sec each minute and 1000 to convert to milliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Dates are special type of object, therefore they have their own methods.

// working with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); // day of the month
// console.log(future.getDay()); // day of the week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// // ISO string follows internation standards
// console.log(future.toISOString());

// console.log(future.getTime()); // how much time has passed since that date

// // 2142274980000 we can take the value from .getTime to get the date format.
// // based on the Milliseconds that have passed.
// console.log(new Date(2142274980000));

// // get current date
// console.log(Date.now());

// // change the year with .setFullYear function
// future.setFullYear(2040);
// console.log(future);

///////////////////////////////////////////////// ******
///////////////////////////////////////////////// ******

// ADDING DATES TO BANKIST APP

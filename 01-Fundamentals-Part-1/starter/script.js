// Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country.

// const country = 'Iran';
// const continent = 'Asia';
// let isIsland = true;
// isIsland = false;
// const language = 'Farsi';

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof isIsland);
// console.log(typeof language);

// console.log(country + continent);

// let name = true;
// console.log(name);
// console.log(typeof name);
// console.log(typeof 23);    

// const now = 2037;

// const ageAkram = now - 1984;
// const agePardis = 2037 - 1988;
// console.log(ageAkram, agePardis);

// console.log(ageAkram * 2, agePardis / 10, 2**3);
// // 2 ** 3 means to the power of 3 = 2 * 2 *2.

// const firstName = 'Akram'
// const lastName = 'Nadri'

// // concatenation String + String
// console.log(firstName + ' ' + lastName);

// console.log(`My full name is ${firstName} ${lastName}`);


// // Assignment operators
// let x = 10 + 5; 
// console.log(x);

// x += 10; // x = x + 10
// console.log(x);

// x *= 4; // x = x * 4
// console.log(x);

// x++; // x = x + 1
// console.log(x);

// x--; // x = x - 1
// console.log(x);

// // Comparison operator

// console.log(ageAkram > agePardis); // >, <, >=, <=

// console.log(agePardis >= 18);
// console.log(agePardis <= 18);

// const isFullAge = agePardis >= 18;

// console.log(now - 1991 > now - 2018);


// Operator precedence - order in which operators are executed
// const now = 2037;
// const ageAkram = now - 1984;
// const agePardis = 2037 - 1988;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 20 - 5);

// let x, y;

// - is executed from left to right
// = is executed from right to left
// x = y = 25 - 10 - 5; // x = y = 10, x = 10.
// console.log(x, y);


// const averageAge = (ageAkram + agePardis)  / 2;
// console.log(averageAge, ageAkram, agePardis);


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀


*/// Test data 1
// const markMass = 78;
// const markHeight = 1.69

// const johnMass = 95;
// const johnHeight = 1.95;

// const markBMI = markMass / (markHeight * markHeight);

// const johnBMI = johnMass / (johnHeight * johnHeight);



// console.log('Marks BMI ' + markBMI);
// console.log('Johns BMI ' + johnBMI);

//   const markHigherBMI = markBMI > johnBMI;
//   console.log(markHigherBMI);



// const firstName = 'Akram';
// const job = 'Programmer';
// const birthYear = 1984;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(jonas);


// Template literal can assemble multiple pieces into one final string

// Using backticks ` ` 
// const akramNew = `I'm ${firstName} a ${year - birthYear} year old ${job}`;

// console.log(akramNew);

// console.log(`this is a normal string output using backticks`);

// console.log(` String with \n\ 
// multiple \n\
// lines`);

// console.log(` String
// multiple
// line`);

// If, Else conditions
// const age = 15;

// the condition is always in the if paranthesis
// if(age >=18){
//     console.log('Is old enough to drive ');

// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Is not old enough, wait another ${yearsLeft} years `);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

// const markMass = 95;
// const markHeight = 1.95

// const johnMass = 78;
// const johnHeight = 1.69;

// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);

// if(markBMI > johnBMI){
//     console.log(`mark BMI ${markBMI} is higher then johns BMI ${johnBMI}`);

// } else {
//     console.log(`johns BMI ${johnBMI} is higher then marks BMI ${markBMI}`);
// }


// Type conversion 
// when you want to convert from one type to another

// const inputYear = '1991';

// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// // NaN = Not a number, actually means invalid number
// console.log(Number('Akram'));
// console.log(typeof NaN);
// console.log(String(23), 23);

// // Type coercion
// // the plus operator will convert number to strings - all the numbers are converted to string
// // JS jas automatic type coercion
// console.log('I am ' + 23 + ' years old');
// // the negative operator convert String to number
// console .log('23' - '10' - 3);

// console.log('23' * '2');

// console.log('23' > '18');

// let n = '1' + 1; // String 11
// n = n-1; // 11 - 1
// console.log(n); // 10

// Truthy and Falsy values
// Falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Akram'));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const money = 0;

// if(money){ // True
//     console.log('has money')
// } else { // False
//     console.log('no money')
// }


// let height = 0; 
// if(height){
//     console.log('height is defined')
// } else {
//     console.log('height is undefined')
// }

// Equality operators

// const age = 18;

// // strict equality operator - if both values are exactly the same 
// // === does not perform type coercion
// if(age === 18) console.log('Yes person is 18 (strict)');
// // == double equal does type coercion
// // does perform type coercion
// if(age == 18) console.log('Yes person is 18(loose)');

// // Number converts string into number
// const favourite = Number (prompt ("whats your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// // always use strict === 
// if(favourite === 23){
//     console.log('23 is an amazing number');
// } else if(favourite === 7){
//     console.log('7 is also a cool number');
// } else if(favourite === 9){
//     console.log('9 is also a cool number');
// } else {
//     console.log('number is not 23 or 7 or 9');
// }

// // !== does not equal - != loose, !== strict
// if( favourite !== 23){
//     console.log('why not 23');
// }

// basic boolean log: And, Or, Not operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// // both conditions must be true
// console.log(hasDriversLicense && hasGoodVision);
// // only one condition needs to be true 
// console.log(hasDriversLicense || hasGoodVision);
// // ! is not true
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Able to drive')
// } else {
//     console.log('Someone else should drive')
// }



// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision && isTired);


// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Able to drive')
// } else {
//     console.log('Someone else should drive')
// }


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.


TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110


TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/


// let dolphins = (96 + 108 + 89) / 3;
// let koalas = (88 + 91 + 110) / 3;

// console.log(`Dolphins score is ${dolphins} and koalas score is ${koalas}` );

// if(dolphins > koalas) {
//     console.log('dolphins score is greater');

// } else if(dolphins < koalas) {
//     console.log('koalas score is greater')

// } else {
//     dolphins === koalas;
//     console.log('DRAW ! scores are the same')
// }

// Bonus
// let dolphins = (97 + 112 + 101) / 3;
// let koalas = (109 + 95 + 106) / 3;

// console.log(`Dolphins score is ${dolphins} and koalas score is ${koalas}` );

// if(dolphins > koalas && dolphins >= 100) {
//     console.log('dolphins score is greater');

// } else if(dolphins < koalas && koalas >= 100) {
//     console.log('koalas score is greater')

// } else if(dolphins === koalas && dolphins >= 100 && koalas >= 100) {
//     console.log('DRAW ! scores are the same')

// } else {
//     console.log('No winners!')
// }



// The Switch Statement

// const day = 'monday';

// switch(day){
//     case 'monday': // day === monday, and if true execute code
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//             break; // without the break the code continues executing

//         case 'tuesday': // === tuesday
//         console.log('Prepare theory videos');
//             break;

//         case 'wednesday':
//         case 'thursday':
//         console.log('Write code examples');
//             break;

//         case 'friday': // === friday
//         console.log('record videos');
//             break;

//         case 'saturday':
//         case 'sunday':
//         console.log('enjoy the weekend!')
//             break;

//         default: // === no valid input
//             console.log('Not a valid day');
// }

// if(day === 'monday'){
//     console.log('Plan course structure');
//     console.log('Go to coding');

// } else if(day === 'tuesday'){
//     console.log('Prepare theory videos');

// } else if (day === 'wednesday' || 'thursday'){
//     console.log('Write code examples');

// }else if(day === 'friday'){
//     console.log('record videos');

// } else if(day === 'saturday' || 'sunday') {
//     console.log('enjoy the weekend!')

// } else {
//     console.log('not a valid day')
// }


// Expression is a piece of code that produces a value
// 3 + 4;
// 1991

// // Statement, bigger piece of code which is executed but does not produce a value
// // full sentences that perform some action
// if (123 > 111){
//     const str = '123 is bigger';
// } 

// Conditional (Ternary) operator

// const age = 23;
// // age >= 18 ? console.log('person is full age'):
// // console.log('person not full age');

// const drink = age >= 18 ? 'is of age' : 'not of age';
// console.log(drink);

// let drink2;

// if(age >= 18) {
//     drink2 = 'is of age'
// } else {
//     drink2 = 'not of age'
// }

// console.log(drink2);


// // here we can use the age condition in template literal
// // ternary operator used for quick decision
// console.log(`I like  ${age >= 18 ? 'water' : 'juice'}`)



////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

// const drink = age >= 18 ? 'is of age' : 'not of age';

const bill = 275;
// const tip = bill/.15;

const tip = bill >= 50 && bill <= 300 ? bill *.15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${tip + bill} `);



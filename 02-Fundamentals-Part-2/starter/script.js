'use strict';

// let hasDriversLicense = false;
// const PassTest = true;

// if(PassTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive');

// strict mode catches errors
// const interface = 'Audio';
// const private = 23;
// const if = 23;


// FUNCTIONS - Is a piece of code we can reuse over and over again. Similar to a variable, but for whole chunks of code. A function can hold one or more lines of code.


// Creating a function
// function logger(){
//     console.log('My name is Akram');
// }

// // Calling / Running / Invoking the function
// logger();


// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);



// function add( number1, number2){
//     const sum = number1 + number2;
//     return sum;
// }

// const addingNumbers = add(1,2);
// console.log(addingNumbers);


// function sub(number1, number2){
//     const sum = number1 - number2;
//     return sum;
// }

// const subtractingNumbers = sub(4,2);
// console.log(subtractingNumbers);


// function multiply(number1, number2, number3){
//     const mult = number1 * number2 * number3;
//     return mult;
// }

// const multiply3 = multiply(1,2,3);
// console.log(multiply3);

// function divide(number1, number2){
//     const divide = number1 / number2;
//     return divide;
// }

// const divide2 = divide(2, 4);
// console.log(divide2);



// function addGreaterNumbers(number1, number2){

// if (number1 >= 10 && number2 <= 20){
//     const add = number1 + number2;
//     return add;
// } else {
//     console.log('numbers must be between 10 and 20')
// }
    
// }

// const addingNumbersIf = addGreaterNumbers(9, 20);
// console.log(addingNumbersIf);


// Function Declaration VS Expression


// Personal preference on which to use - but must know both! 


// Function declaration
// difference is can call before defined in the code
// Calling it before its defined
// const age1 = calcAge1(1984);

// // calling it first then defining it later
// function calcAge1(birthyear){
//     return 2037 - birthyear;
// }

// // Function expression
// // Cannot call before defining - must define first define, initialize
// const calcAge2 = function(birthyear){
//     return 2037 - birthyear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow functions
// dont need curly braces and return happens implicitly, no need to explicitly write the return. Simple one liner functions.
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// } 

// console.log(yearsUntilRetirement(1991, 'Akram'));
// console.log(yearsUntilRetirement(1980, 'Pardis'));



// Functions calling other functions
// Good example of DRY
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces .`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


// const calcAge = function(birthyear) {
//     // birthyear is not related to the other birthyear
//     return 2037 - birthyear;

// }

// const yearsUntilRetirement = function (birthyear, firstName) {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;

// if(retirement > 0){
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;

// } else {
//     console.log(`${firstName} has already retired`);
//     return -1;

// }
// } 

// console.log(yearsUntilRetirement (1991, 'Akram'));
// console.log(yearsUntilRetirement (1950, 'Pardis'));


/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".

4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// } 


// const calcAverage =  (score1, score2, score3) => {
//     const scores = (score1 + score2 + score3) / 3;
//     return scores;
// }   

// Test data 1
// let dolphinScore = (calcAverage(44, 23, 71));
// console.log(`Dolphins score is ${dolphinScore}`);

// let koalaScore = (calcAverage(65, 54, 49));
// console.log(`Koala score is ${koalaScore}`);

// function checkWinner(avgDolphins, avgKoalas ){
    
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(` Dolphins win (${dolphinScore} VS ${koalaScore})`)
//     } else if(avgKoalas >= 2 * avgDolphins){
//         console.log(` Koalas win (${koalaScore} VS ${dolphinScore})`)
//     } else {
//         console.log('No winner');
//     }
    
// }
// // Test data 2
// dolphinScore = calcAverage(85, 54, 41);
// koalaScore = calcAverage(23,34,27);

// checkWinner(dolphinScore, koalaScore);


// Data structures
// Arrays

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // placing elements into an Array
// const friends = ['micheal', 'steven', 'peter'];
// console.log(friends);


// // creating an array with new Array
// // const years = new Array(1991, 1984, 2008, 2020);


// console.log(friends[0]);
// console.log(friends[2]);


// // length is called property
// // gives us the number of elements in the array
// console.log(friends.length);


// // find the last element in the array 
// console.log(friends[friends.length -1]);

// // mutate the array
// // an Array is not a primitive value and so it can be changed
// friends[2] = 'Jay';
// console.log(friends);


// // cannot replace the entire array
// // friends = ['bob', 'frank', 'Alice']


// // can store different types of data
// const firstName = 'Akram';
// const akram = [firstName, 'Nadri', 2037 - 1984 , 'Teacher'
// , friends];

// console.log(akram);
// console.log(akram.length);


// const calcAge = function (birthyear){
//     return 2037 - birthyear;
// }

// const years = [1991, 1984, 2008, 2020, 2022];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), 
//     calcAge(years[years.length - 1])];
    
// console.log(ages);


// Basic array operations (methods)

// const friends = ['micheal', 'steven', 'peter'];

// // Add elements
// const newLength = friends.push('Jay');

// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); //Last
// const popped = friends.pop(); //Last
// console.log(popped);
// console.log(friends);



// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('steven'));
// // bob is not an element in the array
// console.log(friends.indexOf('bob'));


// friends.push(23);

// // includes - checks if element exists in the array and returns true or false
// console.log(friends.includes('steven')); //true
// console.log(friends.includes('bob')); // false
// console.log(friends.includes(23)); // false

// if(friends.includes('steven')){
//     console.log('friend steven does exist')
// }

//////////////////////////////////////////////////////////
// CODING CHALLENGE #2


/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below.

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

const bills = [125, 555, 44];

const calcTip = billValue => billValue >= 50 && billValue <= 300 ? 
    billValue * .15 : billValue * .20;
    
const tips = new Array (calcTip(bills[0]), (calcTip(bills[1])), 
(calcTip(bills[2])));

const totals = new Array ((tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2]));

console.log(bills, tips);
console.log(totals);


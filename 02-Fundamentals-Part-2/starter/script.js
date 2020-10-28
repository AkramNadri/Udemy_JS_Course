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


const calcAge = function(birthyear) {
    // birthyear is not related to the other birthyear
    return 2037 - birthyear;

}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = 2037 - birthyear;
    const retirement = 65 - age;

if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;

} else {
    console.log(`${firstName} has already retired`);
    return -1;

}
} 

console.log(yearsUntilRetirement (1991, 'Akram'));
console.log(yearsUntilRetirement (1950, 'Pardis'));


// CODING CHALLENGE #1 - FUNCTIONS


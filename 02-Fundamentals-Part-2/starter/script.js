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
function logger(){
    console.log('My name is Akram');
}

// Calling / Running / Invoking the function
logger();


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
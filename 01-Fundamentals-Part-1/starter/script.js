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

const markMass = 95;
const markHeight = 1.95

const johnMass = 78;
const johnHeight = 1.69;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI){
    console.log(`mark BMI ${markBMI} is higher then johns BMI ${johnBMI}`);

} else {
    console.log(`johns BMI ${johnBMI} is higher then marks BMI ${markBMI}`);
}

























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


// Coding challenge #1
// Test data 1
const markMass = 78;
const markHeight = 1.69

const johnMass = 95;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);

const johnBMI = johnMass / (johnHeight * johnHeight);



console.log('Marks BMI ' + markBMI);
console.log('Johns BMI ' + johnBMI);

  const markHigherBMI = markBMI > johnBMI;
  console.log(markHigherBMI);
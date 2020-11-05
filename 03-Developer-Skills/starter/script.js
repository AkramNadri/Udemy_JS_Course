// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xerer = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(xerer);

// // TODO

// 4 STEPS TO SOLVE ANY PROBLEM

/*
PROJECT MANAGER. "WE NEED A FUNCTION THAT REVERSES WHATEVER 
WE PASS INTO IT"
*/

/*********************************** 
1. MAKE SURE YOU %100 UNDERSTAND THE PROBLEM. ASK THE RIGHT QUESTIONS TO GET A CLEAR PICTURE OF THE PROBLEM.
***********************************/

/*
--  WHAT DOES 'WHATEVER' MEAN ? ONLY STRINGS, NUMBERS AND 
    ARRAYS MAKE SENSE TO REVERSE.

--  WHAT TO DO IF SOMETHING ELSE IS PASSED IN ?

--  WHAT SHOULD BE RETURNED ?

--  HOW TO RECOGNIZE WHETHER THE ARGUMENT IS A NUMBER, STRING
    OR ARRAY.

--  HOW TO REVERSE A NUMBER, STRING AND ARRAY ?
*/

/*
2. DIVIDE AND CONQUER: BREAK A BIG PROBLEM INTO SMALLER
SUB-PROBLEMS.
*/

/*
--  CHECK IF ARGUMENT IS A NUMBER, STRING OR ARRAY

--  IMPLEMENT REVERSE A NUMBER

--  IMPLEMENT REVERSE AN ARRAY

--  IMPLEMENT REVERSE A STRING

--  RETURN REVERSED VALUE
*/

/*
3. DONT BE AFRAID TO DO AS MUCH RESEARCH AS YOU HAVE TO 
*/

/*
--  HOW TO CHECK IF A VALUE IS A NUMBER, STRING OR ARRAY
    IN JAVASCRIPT ?

--  HOW TO REVERSE A NUMBER, STRING OR ARRAY IN JAVASCRIPT ?
*/

/*
4. FOR BIGGER PROBLEMS, WRITE PSEUDO-CODE BEFORE WRITING THE ACTUAL CODE
*/

/*

write speudo-code so that you can understand the problem


function reverse(value)
    if value !string || !number || !array
    return value

    if value type == string
    reverse string

    if value type == number
    reverse number

    if value type == array
    reverse array

    return reversed value
*/

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem.

// -- what is temperature amplitude ? Answer: difference between highest and lowest temp.

// -- how to compute the max and min temperatures ?

// -- what a sensor error  ? and do what ?

// 2) Breaking up into sub-problems.

// -- how to ignore errors ?
// -- find max value in temperature array
// -- find minimum value in temp array
// -- subtract min from max(amplitude) and return it

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     // loops through array and ignores value that is not number
//     if (typeof currentTemp !== 'number') continue;

//     // loops through array comparing numbers and sets max
//     if (currentTemp > max) max = currentTemp;

//     // loops through array comparing numbers and sets min
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     // loops through array and ignores value that is not number
//     if (typeof currentTemp !== 'number') continue;

//     // loops through array comparing numbers and sets max
//     if (currentTemp > max) max = currentTemp;

//     // loops through array comparing numbers and sets min
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// calcTempAmplitude([3, 7, 4, 1, 8]);
// // max = 3
// // max = 7

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

// console.log(amplitudeNew);

// PROBLEM 2:
// Function should now receive two arrays of temperatures.

// 1) Understanding the problem
// -- With 2 arrays, should we implement the functionality twice ? NO!. Just merge 2 arrays into one.

// 2) Breaking up into sub-problems
// -- merge two arrays

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// DEBUGGING IN CONSOLE

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',

//     // C) FIX
//     value: Number(prompt('Degrees Celcius:')),
//   };

//   console.log(measurement);

//   // B) Find the bug
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify the bug
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     // loops through array and ignores value that is not number
//     if (typeof currentTemp !== 'number') continue;

//     debugger;
//     // loops through array comparing numbers and sets max
//     if (currentTemp > max) max = currentTemp;

//     // loops through array comparing numbers and sets min
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// // A) Identify bug
// console.log(amplitudeBug);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// let testData1 = [17, 21, 23];
// let testData2 = [12, 5, -5, 0, 4];

// // console.log(
// //   `... ${testData1[0]} in 1 days ... ${testData1[1]} in 2 days ... ${testData1[2]} in 3 days ... `
// // );

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `...${arr[i]}ºC in ${i + 1} days`;
//   }
//   console.log(str);
// };

// printForecast(testData2);

// converting Array into String
// let age = [12, 13, 14, 15, 16];

// const ageCalc = ages => {
//   let newAge = '';

//   for (let i = 0; i < ages.length; i++) {
//     newAge += `I will be ${ages[i]} in ${i + 1} year \n `;
//   }
//   console.log(newAge);
// };

// ageCalc(age);

// -- Array transformed to string, seperated by ...
// -- what is the X days ? current index + 1

// -- transform array into string
// -- transform each element to string with ºC
// -- string needs to contain day (index + 1)
// -- add ... between elements

'use strict';

// function/local scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // function/local scope within calcAge function
  // has access to variables in calcAge function
  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  return age;
}

// global scope
const firstName = 'Akram';
calcAge(1984);

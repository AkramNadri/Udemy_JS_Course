'use strict';

// function/local scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // function/local scope within calcAge function
  // has access to variables in calcAge function
  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    // const and let are blocked scoped, they are only available within the function or block
    if (birthYear >= 1981 && birthYear <= 1996) {
      // var type can be access outside the function/block scope
      var millenial = true;
      const firstName = 'Steven';
      const str = `you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }

    console.log(output);
    // var millenial is accesible outside the function or block
    console.log(millenial);
    // console.log(add(2, 3));
  }

  printAge();

  return age;
}

// global scope
const firstName = 'Akram';
calcAge(1984);

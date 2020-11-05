'use strict';

console.log(document.querySelector('.message').textContent);

// setting text into .massage class
document.querySelector('.message').textContent = 'Correct Number!👌';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// inputting number 23 into .guess class
document.querySelector('.guess').value = 23;
// displaying value of .guess class
console.log(document.querySelector('.guess').value);

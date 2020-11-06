'use strict';

// console.log(document.querySelector('.message').textContent);

// // setting text into .massage class
// document.querySelector('.message').textContent = 'Correct Number!👌';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // inputting number 23 into .guess class
// document.querySelector('.guess').value = 23;
// // displaying value of .guess class
// console.log(document.querySelector('.guess').value);

// Event handler

// . is a class
// # is id
//

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!👌';
    ///////////////////
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! 👆🏻 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose! ❌';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! 👇🏻';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose! ❌';
    }
  }
});

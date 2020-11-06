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

// Event listener when "Check!" button is clicked.
// function const guess can be used as a value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // if no guess is input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    // if guess equals secret number - user wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!👌';
    // If guess is greater then the secret number
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High! 👆🏻 ';
      score--;
      document.querySelector('.score').textContent = score;
      // If player score reaches zero, player loses
    } else {
      document.querySelector('.message').textContent = 'You Lose! ❌';
    }
    // If guess is less then the secret number
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low! 👇🏻';
      score--;
      document.querySelector('.score').textContent = score;
      // If player score reaches zero, player loses
    } else {
      document.querySelector('.message').textContent = 'You Lose! ❌';
    }
  }
});

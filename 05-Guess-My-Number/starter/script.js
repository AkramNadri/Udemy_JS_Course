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

// generate a random number between 1 & 20 using Math.random function
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// player start with a score of 20
let score = 20;

// random generated secret number is then placed into the .number class
document.querySelector('.number').textContent = secretNumber;

// Event listener when "Check!" button is clicked.
// function const guess can be used as a value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // if no guess is input
  if (!guess) {
    // No number message is placed in the .message class with .textContent
    document.querySelector('.message').textContent = 'No number! 🤔';
    // if guess equals secret number - user wins
  } else if (guess === secretNumber) {
    // when players guess is correct, set current score to highscore
    document.querySelector('.highscore').textContent = score;

    document.querySelector('.message').textContent = 'Correct Number!👌';
    // If guess is greater then the secret number
  } else if (guess > secretNumber) {
    if (score > 0) {
      // when guess is greater then secret number
      document.querySelector('.message').textContent = 'Too High! 👆🏻 ';
      // decrement score each time player guesses incorrectly
      score--;
      // .score class is then updated with new score
      document.querySelector('.score').textContent = score;
      // If player score reaches zero, player loses
    } else {
      // if player score reaches zero, player loses
      document.querySelector('.message').textContent = 'You Lose! ❌';
    }
    // If guess is less then the secret number
  } else if (guess < secretNumber) {
    if (score > 0) {
      // when guess number is lower then secret number
      document.querySelector('.message').textContent = 'Too Low! 👇🏻';
      // decrement score each time player guesses incorrectly
      score--;
      // .score class is then updated with the new score
      document.querySelector('.score').textContent = score;
      // If player score reaches zero, player loses
    } else {
      document.querySelector('.message').textContent = 'You Lose! ❌';
    }
  }
});

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
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// player start with a score of 20
let score = 20;

// highScore starts at 20
let highScore = 20;

// function to display messages to the .message class
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event listener for "Again!" button. Resets score, secret number, message and input value.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // message class is set back to default
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // score value is reset to 20
  document.querySelector('.score').textContent = score;

  // input guess value is reset to empty string
  document.querySelector('.guess').value = '';

  // guess number box is reset to ?
  document.querySelector('.number').textContent = '?';

  // number class box width reset to 15
  document.querySelector('.number').style.width = '15rem';

  // number class background color is reset to white #eee
  document.querySelector('.number').style.backgroundColor = '#eee';
});

// Event listener when "Check!" button is clicked.
// function const guess can be used as a value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // if no guess is input
  if (!guess) {
    // No number message is placed in the .message class with .textContent
    // document.querySelector('.message').textContent = 'No number! 🤔';
    displayMessage('No number! 🤔');

    // if guess equals secret number - user wins
  } else if (guess === secretNumber) {
    // when players guess is correct, set current score to highscore
    document.querySelector('.highscore').textContent = score;

    // when player guess is correct
    // document.querySelector('.message').textContent = 'Correct Number!👌';
    displayMessage('Correct Number!👌');

    // background of .number class change to green when guess is correct
    document.querySelector('.number').style.backgroundColor = '#60b347';

    // .number class increase width when guess is correct
    document.querySelector('.number').style.width = '30rem';

    // random generated secret number is then placed into the .number class when guess is correct
    document.querySelector('.number').textContent = secretNumber;

    // if current player score is greater then highscore, set current score to highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // If guess does not equal secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Ternary operator to check if guess is greater then secret number
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High! 👆🏻' : 'Too Low! 👇🏻';
      displayMessage(guess > secretNumber ? 'Too High! 👆🏻' : 'Too Low! 👇🏻');

      // decrement score each time player guesses incorrectly
      score--;

      // .score class is then updated with new score
      document.querySelector('.score').textContent = score;
    } else {
      // if player score reaches zero, player loses
      // document.querySelector('.message').textContent = 'You Lose! ❌';
      displayMessage('You Lose! ❌');
      document.querySelector('.score').textContent = 0;
    }
  }
  // If guess is less then the secret number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     // when guess number is lower then secret number
  //     document.querySelector('.message').textContent = 'Too Low! 👇🏻';
  //     // decrement score each time player guesses incorrectly
  //     score--;
  //     // .score class is then updated with the new score
  //     document.querySelector('.score').textContent = score;
  //     // If player score reaches zero, player loses
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose! ❌';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

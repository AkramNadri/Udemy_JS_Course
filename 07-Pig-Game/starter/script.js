'use strict';

// selects score--0 element and stores into score0 variable
const score0Element = document.querySelector('#score--0');

// select score1 element and stores into score1 variable
// works the same as querySelector, a bit faster
const score1Element = document.getElementById('score--1');

// query select current--0 element which is player 1 current score
const current0Element = document.getElementById('current--0');

// query selects current--1 element which is player 2 current score
const current1Element = document.getElementById('current--1');

// Select dice element and apply .hidden style to dice element
const diceElement = document.querySelector('.dice');

// New game
const btnNew = document.querySelector('.btn--new');

// Roll dice
const btnRoll = document.querySelector('.btn--roll');

// Hold
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// starting scores
score0Element.textContent = 0;
score1Element.textContent = 0;

// applying .hidden class to dice element
diceElement.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // check for rolled 1, if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore; // change later
  } else {
  }
});

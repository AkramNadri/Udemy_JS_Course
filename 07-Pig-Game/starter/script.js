'use strict';

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
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
// Hold button
const btnHold = document.querySelector('.btn--hold');

// declaring variables as global variables so they can be used inside functions
let scores, currentScore, activePlayer, playing;

// Starting condition ///////////////////////////////////
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
};
init();

// switch player function to switch between players /////////
const switchPlayer = function () {
  // resets the #current-- id to 0 for current active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Ternary operator to switch between #current-- id
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggles class .player--active on/off
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// applying .hidden class to dice element
diceElement.classList.add('hidden');

// Rolling dice functionality ///////////////////////////////
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // display dice image
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // check for rolled 1, if true, switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      // selects the #current-- id and places current score into the text content
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // current0Element.textContent = currentScore; // change later
    } else {
      switchPlayer();
    }
  }
});

// Hold score functionality /////////////////////////////////
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player score
    scores[activePlayer] += currentScore;
    // score[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if players score is >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceElement.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// New Game button to reset game //////////////////////////
btnNew.addEventListener('click', init);

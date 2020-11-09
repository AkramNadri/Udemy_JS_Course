'use strict';

// selects score--0 element and stores into score0 variable
const score0Element = document.querySelector('#score--0');

// select score1 element and stores into score1 variable
// works the same as querySelector, a bit faster
const score1Element = document.getElementById('score--1');

// Select dice element and apply .hidden style to dice element
const diceElemet = document.querySelector('.dice');

// starting scores
score0Element.textContent = 0;
score1Element.textContent = 0;

// applying .hidden class to dice element
diceElemet.classList.add('hidden');

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Same as above, except we use forEach to iterate through all instances of btnsOpenModal.
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////****///////////////////// *******************

// SELECTING, CREATING AND DELETING ELEMENTS

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Select single element
// the . 'period' before the name header indicates that this is a class
const header = document.querySelector('.header');
// Select all occurances of element
document.querySelectorAll('.section');

// store this selection in a variable
const allSections = document.querySelectorAll('.section');

console.log(allSections);

// getElementById - will find specified Id
// since it is an element we do not require the . 'period'
document.getElementById('section--1');

// Find all the element with the name of button
// Will return HTMLCollection list
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// We dont need the . period, will return all classes with btn
console.log(document.getElementsByClassName('btn'));

// Creating and Inserting elements

// Creates a DOM element
const message = document.createElement('div');
// class cookie-message exists in css file, we assign the css style to message element
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
// we use innerHTML to input text into message element
// create button to close the element
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// prepend message to header, will display message element above header element.
// prepend adds the element as the first child
// header.prepend(message);
// append last child
header.append(message);

// cloneNode multiple copies of the same element
// true means all the child elements will also be copied
// header.append(message.cloneNode(true));

// before header element
header.before(message);
// after header element
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // new way of removing a node
    message.remove();
    // previous way of removing a node
    // message.parentElement.removeChild(message);
  });

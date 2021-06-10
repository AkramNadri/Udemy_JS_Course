'use strict';

// . is used for 'CLASS': class="btn--text btn--scroll-to
const buttonScrollTo = document.querySelector('.btn--scroll-to');
// # is used for 'ID': id="section--1
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// Modal window

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
//////////////****///////////////////// *******************

// Button scroll

buttonScrollTo.addEventListener('click', function (e) {
  // get coords of the section we want to scroll to
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // relative to the viewpoint
  console.log(e.target.getBoundingClientRect());

  // current scroll position
  // current position relative to the top of the page
  // X = horizontal scroll
  // Y = vertical scroll
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // Read the height and the width of the viewport
  // will change depending on size of current window
  // We use coords to tell JS where to scroll to
  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   // current position + current scroll
  //   s1coords.left + window.pageXOffset,
  //   // current position + current scroll
  //   s1coords.top + window.pageYOffset
  // );

  // oldschool way
  // passing an object
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way
  // Only works with modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });

  // section1.scrollBy({
  //   behavior: 'smooth',
  // });
  // section1.scrollTo({
  //   behavior: 'smooth',
  // });
});

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// PAGE NAVIGATION

// This method is inneficient if we had for example 10 000 elements because we are adding the callback function to each of the elements, we are essentially creating a callback function for each element, and if we had more then 10k elements that would hinder performance. This is where event propagation comes in handy by creating 1 event which bubbles up to all parent elements instead of creating an event for each element.

// ** /
// Solution is to place the event on nav__links element, then when the user clicks one of the links the event is generated then bubbles up, then we catch the event in the common parent element. We can tell where the event originates from by using event.target
// ** /
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     // all elements with the attribue of href will be selected
//     const id = this.getAttribute('href');
//     console.log(id);

//     // we use the id variable that has all the href and apply scrollIntoView to them
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
// 1. add event listener to common parent element
// 2. determine what element originated the event(so that we can work with that element which the event was created)

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// document.querySelector('.nav__link').addEventListener('click', function (e) {

// }

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// LECTURES

// SELECTING, CREATING AND DELETING ELEMENTS

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // Select single element
// // the . 'period' before the name header indicates that this is a class
// const header = document.querySelector('.header');
// // Select all occurances of element
// document.querySelectorAll('.section');

// // store this selection in a variable
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// // getElementById - will find specified Id
// // since it is an element we do not require the . 'period'
// document.getElementById('section--1');

// // Find all the element with the name of button
// // Will return HTMLCollection list
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// // We dont need the . period, will return all classes with btn
// console.log(document.getElementsByClassName('btn'));

// // Creating and Inserting elements

// // Creates a DOM element
// const message = document.createElement('div');
// // class cookie-message exists in css file, we assign the css style to message element
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics';
// // we use innerHTML to input text into message element
// // create button to close the element
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // prepend message to header, will display message element above header element.
// // prepend adds the element as the first child
// // header.prepend(message);
// // append last child
// header.append(message);

// // cloneNode multiple copies of the same element
// // true means all the child elements will also be copied
// // header.append(message.cloneNode(true));

// // before header element
// header.before(message);
// // after header element
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // new way of removing a node
//     message.remove();
//     // previous way of removing a node
//     // message.parentElement.removeChild(message);
//   });

//////////////****///////////////////// *******************

// Styles
// to set a style on element, we get element . style then . the property name
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height); // nothing/hidden
// console.log(message.style.backgroundColor);

// // this contains all of the properties with all of the values assigned to message element
// // console.log(getComputedStyle(message));
// // getComputedStyle will retrieve info from element
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // increase height on element
// // result of this is a string, here were trying to add number to a string which will not work. Must use Number.parseFloat function to convert string to number.
// // How to parse number out of a string
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // CSS custom properties
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className); // nav__logo

// // adding alt to logo class
// logo.alt = 'Beautiful minimalist logo';

// // Non standard
// // Here we add designer class to logo
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Akram

// // new attribute created
// logo.setAttribute('company', 'Bankist');

// console.log(logo.getAttribute('src')); // Relative version
// console.log(logo.src); // Absolute version

// // get absolute path
// const link = document.querySelector('.twitter-link');
// console.log(link.href); // absolute
// console.log(link.getAttribute('href')); // absolute

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// IMPLEMENTING SMOOTH SCROLLING

// const buttonScrollTo = document.querySelector('.btn--scroll-to');

// // # is used for ID: id="section--1
// const section1 = document.querySelector('#section--1');

// buttonScrollTo.addEventListener('click', function (e) {
//   // get coords of the section we want to scroll to
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   // relative to the viewpoint
//   console.log(e.target.getBoundingClientRect());

//   // current scroll position
//   // current position relative to the top of the page
//   // X = horizontal scroll
//   // Y = vertical scroll
//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   // Read the height and the width of the viewport
//   // will change depending on size of current window
//   // We use coords to tell JS where to scroll to
//   console.log(
//     'Height/Width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // Scrolling
//   // window.scrollTo(
//   //   // current position + current scroll
//   //   s1coords.left + window.pageXOffset,
//   //   // current position + current scroll
//   //   s1coords.top + window.pageYOffset
//   // );

//   // oldschool way
//   // passing an object
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // Modern way
//   // Only works with modern browsers
//   section1.scrollIntoView({ behavior: 'smooth' });

//   // section1.scrollBy({
//   //   behavior: 'smooth',
//   // });
//   // section1.scrollTo({
//   //   behavior: 'smooth',
//   // });
// });

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// TYPES OF EVENT AND EVENT HANDLERS
// Anything that happens in our webpage generates an event
// Happens when user clicks

// const h1 = document.querySelector('h1');

// New way of listening for mouse events
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great you are reading the header');
// });

// Old way of listening for mouse events
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great you are reading the header');
// };

// We can remove an eventHandler we dont need anymore

// const alertH1 = function (e) {
//   alert('addEventListener: Great you are reading the header');
//   // removes the eventListener after listening to it once.
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// we pass the function above to event listener
// h1.addEventListener('mouseenter', alertH1);

// timeOut will execute the removeEventListener after 3 seconds
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

//////////////****///////////////////// *******************

// EVENT PROPAGATION: BUBBLING AND CAPTURING
// 187.

//////////////****///////////////////// *******************

// EVENT PROPAGATION IN PRACTICE
// Attaching event handlers to navigation link and also all of its parent elements. When clicked will assign color to all the elements when bubbling.

// rgb(255, 255, 255)
// Formula to generate a random integer
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// // console.log(randomInt(2, 7));

// // calls randomInt function, and generate numbers between 0-255 as argument passed through to randomInt
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// // nav__link is the child element
// // example of event propagation, bubbling up when this event is clicked, it will bubble up to the parent elements that contains the event as well.
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   // In an event handler the 'this' keyword points always to the element on which the eventListener is attached.

//   this.style.backgroundColor = randomColor();

//   // E.TARGET = where the event originated(where the click happened). E.CURRENTTARGET is where the event handler is attached
//   console.log('LINK', e.target, e.currentTarget);

//   // currentTarget is exactly the same as the this keyword, this keyword is also pointing to the element on which the event listener is attached to
//   console.log(e.currentTarget === this);

//   // Stop propagation - stops the event from bubbling upwards to parents.
//   // Stops the event from traveling upwards to parent elements
//   // e.stopPropagation();
// });

// // nav__links is the parent of nav__link
// // bubbling only occurs upwards, does not go downwards(doesnt effect child elements, only parents)
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// // nav is the parent of nav__links
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);

//   // use capture parameter.
// });

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION
// implement smooth scolling to nav links

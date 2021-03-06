'use strict';

// . is used for 'CLASS': class="btn--text btn--scroll-to
const buttonScrollTo = document.querySelector('.btn--scroll-to');
// # is used for 'ID': id="section--1
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// nav
const nav = document.querySelector('.nav');

// tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');

// All because we have 3
const tabsContent = document.querySelectorAll('.operations__content');

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

// TABBED COMPONENT

// This method will attach an event listener too all the tabs
// Not efficient because what if we had 200+ tabs
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// Use event delegation instead

// 1. attach event handler on the common parent handler on all the elements we want
// The common parent for operation tab buttons is operations__tab--container(tabsContainer)

tabsContainer.addEventListener('click', function (e) {
  // matching strategy
  // We use 'closest()' here to select the button even if we click on the span in the button. Closest will find the parent with the specified class name as passed in argument(); Since the span is child element of btn, btn will be found using this closest method.
  const clicked = e.target.closest('.operations__tab');

  // Gaurd clause
  // if statement will return early if some condition is matched
  // if clicked does not exist, if statement will return, else if clicked does exist will execute code below
  if (!clicked) return;

  // Remove active classes
  // We are clearing the class 'operations__tab--active' on all buttons and only adding this class to the buttons that are clicked
  // Removing and adding classes to manipulate the page
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Clear tabs content
  // Clearing the content element
  // Removing and adding classes to manipulate the page
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // will add the css class 'operations__tab--active' to the clicked button class. Multiple classes can be assigned on element(and element can have many classes)
  clicked.classList.add('operations__tab--active');

  // Active content area

  // will display the dataset for clicked
  // console.log(clicked.dataset.tab);

  // add 'operations__content--active' to the current button that is clicked, template literal to find which button was clicked then apply add method to that button
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// Menu fade animation

// event propagation here - we select the common parent element which is .nav
// const nav = document.querySelector('.nav');

// Create a function to handle the mouseover and mouseout
// since we use the bind method to call this function we can only pass 1 argument, We dont need opacity argument anymore
const handleOver = function (e, __opacity) {
  // this keyword is equal to currentTarget
  // console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      // Since we used the bind method to call this function, we use the this keyword
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Solution 1
// we can use the bind method
// Bind method will point the this keyword to the specified function, in this case the eventListener will be bind to handleOver function
// Passing "argument" into handler
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));

// Solution 2
// Call handleOver funntion
// e is the event that will get passed to handleOver function and 0.5 is the opacity argument
// nav.addEventListener('mouseover', function (e) {
//   handleOver(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleOver(e, 1);
// });

// Code below has been refactored into function above using DRY technique

// nav.addEventListener('mouseover', function (e) {
// match element
// check if the button clicked contains 'nav__link' class
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   // to find siblings we go up to parent(.nav) by using closest then we use querySelector to specify the class shared by all the siblings which is .nav__link
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   // img is for any image that has the img tag
//   const logo = link.closest('.nav').querySelector('img');
//   siblings.forEach(el => {
//     if (el !== link) el.style.opacity = 0.5;
//   });
//   logo.style.opacity = 0.5;
// }
// });

// nav.addEventListener('mouseout', function (e) {
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');
//   siblings.forEach(el => {
//     if (el !== link) el.style.opacity = 1;
//   });
//   logo.style.opacity = 1;
// }
// });

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// // using scroll event listener is bad for performance because the event will be triggered everytime scroll occurs.
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Better solution to sticky nav code below

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// Solution 2 for sticky navigation

// A BETTER WAY: THE INTERSECTION OBSERVER API
// What is the intersection oberver API ? - allows our code to observe changes to the way a certain target element intersects another element or the way it intersects the viewport.

// entries is an array of the threshold entries
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   // if section1 target intersects the viewport at 0.10% then obsCallback function will be called

//   // root is the viewport - viewport is your entire screen, so once the target reaches approx. the threshold that has been set, at the point the viewport has intersected with the observed target
//   root: null,

//   // the event will trigger when this threshold is reached
//   // threshold set to %10, so once the target element is atleast %10 visible on our viewport, event will trigger.
//   // 0 means the trigger will immediately happen when target comes into view or leaves view.
//   // 1 means the threshold is met once %100 of the target is visible on the viewport
//   threshold: [0, 0.2],
// };

// // we pass 2 arguments obsCallback is the function that will be called when the options/configurations in obsOptions are met.
// const observer = new IntersectionObserver(obsCallback, obsOptions);

// // section1 is our target
// observer.observe(section1);

// We will observe the header element
const header = document.querySelector('.header');

// The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
// nav is 384 width x 90 height, we use
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  // isIntersecting is a property of IntersectionObserver which returns a boolean true or false if the element is intersecting
  if (entry.isIntersecting === true) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
};

// we can create the options inside this callback function
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // when %0 of the header is visible or when the target is completely out of view, then we want something to happen
  threshold: 0,

  // rootMargin will trigger the event when the target is 90px away
  // hardcoding this 90px is not a good idea because the screens are dynamic and always changing, so we need to set this as a dynamic number which will change depending on user or device or viewport.
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// REVEALING ELEMENTS ON SCROLL

// Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  // Gaurd Claus - if its not intersecting then return right away, but if it is intersecting then execute code below
  if (!entry.isIntersecting) return;
  // Find which target is currently in viewpoint and apply class to it
  entry.target.classList.remove('section--hidden');

  // once we are done observing the target we no longer need to observe them so we apply unobserve function to the targets that are being observed.
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // console.log(section);
});

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// LAZY LOADING IMAGES

// this query will only select img elements with data-src property in the HTML
const imgTargets = document.querySelectorAll('img[data-src]');
const loading = function (entries, observer) {
  const [entry] = entries;

  console.log(entry);

  if (!entry.isIntersecting) return;

  // replace the lazy image with the real image
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loading, {
  root: null, //  = viewport
  threshold: 0,
  rootMargin: '-100px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// BUILDING SLIDER COMPONENT

// PLACE ALL SLIDER CODE INTO 1 FUNCTION

const slider = function(){
const slides = document.querySelectorAll('.slide')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')
const maxSlide = slides.length
let currentSlide = 0;

// FUNCTIONS --
const createDots = function(){

  // forEach iterates over slides and creates a button for each slide. i is the index per slide.
slides.forEach(function(_, i){
  
dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)

})
};

createDots();

// which slide is the currently the active one and active dot
// were passing the number index of slide through this slide argument
const activeDot = function(slide){

  // removing the class dots__dot--active from all dots
document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

  // how do we know the one dot thats activated ? 
// we use data attribute
// were selecting the active dot by passing the class and dataset to equal slide value which in this case is 1, 2 or 3. since there are only 3 slides. Then we add the class dots__dot--active to the currently selected dot.
document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')

};

// activeDot(0);

// first slide should be at 0%, 2nd %100, %200, %300
// the width of each of these images is %100.
const goToSlide = function(slide){

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
}

// Calling function with 0 argument passed, 0 starting position of first slide
goToSlide(0);

// Go to next slide
const nextSlide = function(){
if(currentSlide === maxSlide - 1){
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide)
  activeDot(currentSlide)
}

// Go to previous slide
const previousSlide = function(){
if(currentSlide === 0){
  currentSlide = maxSlide - 1;
} else {
  currentSlide--;
}
 goToSlide(currentSlide)
 activeDot(currentSlide)
}



// EVENT HANDLERS
// next slide to the right, simply change the percentage on translateX
btnRight.addEventListener('click', nextSlide)
  // DRY - new function since this if statement is present in both left and right buttons
  // if(currentSlide === maxSlide - 1){
  //   currentSlide =0;
  // } else {
  //   currentSlide++;
  // }

  // DRY - replaced by function goToSlide
//   // take the current and subtract current slide, 
// slides.forEach(
//   (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`))
//// -------------------------------------

// currentSlide = 1

btnLeft.addEventListener('click', previousSlide);

//   if(currentSlide === maxSlide - 1){
//     currentSlide =0;
//   } else {
//     currentSlide++;
//   }

//   // take the current and subtract current slide, 
// // slides.forEach(
// //   (s, i) => (s.style.transform = `translateX(${100 * (i + currentSlide)}%)`))

// })

document.addEventListener('keydown', function(e){
// same as below
if(e.key === 'ArrowLeft') previousSlide();
// short circuit
e.key === 'ArrowRight' && nextSlide();
})

// Event delegation
dotContainer.addEventListener('click', function(e){
if(e.target.classList.contains('dots__dot')){

  // this target has a dataset with slide
  const slide = e.target.dataset.slide;

  // same as above, curly braces here means the element is in the dataset. Html data-slide.
  // const {slide} = e.target.dataset;
  goToSlide(slide)
  activeDot(slide)
}
})
}
slider();


// const init = function(){
//   goToSlide();
//   createDots();

//   activeDot(0);
// }

// init();

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// 

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
//////////////****///////////////////// *******************
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

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// DOM TRAVERSING

// const h1 = document.querySelector('h1');

// // going downwards: child
// // this will go down the DOM tree and select the .highlight class elements which are child elements of h1.
// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);

// // html collection children inside h1
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards - selecting parents
// // selects direct parent
// console.log(h1.parentNode);

// console.log(h1.parentElement);

// // selects closest parent - opposite of querySelector -
// // finds parents no matter how far up the DOM tree
// h1.closest('.header').style.background = 'pearl';

// h1.closest('.header').style.background = 'maroon';

// // Going sideways: Siblings
// // Select previous or the next one

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // we go up to the parent first, then find all the children of that parent
// console.log(h1.parentElement.children);

// // we use spread operator to first select parent of h1 then all the children from that parent.
// [...h1.parentElement.children].forEach(function (e) {
//   if (e !== h1) e.style.transform = 'scale(0.5)';
// });

//////////////****///////////////////// *******************
//////////////****///////////////////// *******************

// LIFECYCLE DOM EVENTS
// DOM content loaded - once the html has been completely parsed and converted to DOM tree. All scripts must be downloaded and executed before DOM content loaded event can happen.

// We can listen to that event of DOM content loaded
document.addEventListener('DOMContentLoaded', function(e){

  console.log('HTML parsed and DOM tree built!');


})

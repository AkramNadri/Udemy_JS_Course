'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to be called on btnCloseModal to add .hidden class on modal & overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// function to be called on btnsOpenModal to remove .hidden class on modal & overlay
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// eventListener to close modal & overlay with .close-modal class
btnCloseModal.addEventListener('click', closeModal);

// eventListener to close modal & overlap when clicked off modal
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden'));
  closeModal();
});

'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

// USING THE GEOLOCATION API

// getCurrentPosition takes 2 callback functions, the first one is the callback function called on success, whenever the browser successfully gets the coordinates of the current position of the user. The second is the error callback, happens when an error occurs while trying to get users current location.

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    // get current position function
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },

    // error function
    function () {
      alert('Could not get your position');
    }
  );

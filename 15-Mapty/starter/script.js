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

let map, mapEvent;

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

      const coords = [latitude, longitude];

      // map object is created by L.map which is from the leaflet library. map object will have access to methods and properties from leaflet library.
      // 13 indicates zoom amount during page load
      map = L.map('map').setView(coords, 13);

      // DISPLAYING A MAP USING LEAFLET LIBRARY

      // map is created from small tiles, these tiles come from this URL. openstreetmap.
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      // DISPLAYING A MAP MARKER
      // map object created with leaflet library, has special methods and properties.
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );

// --------------------------------------------------------
// --------------------------------------------------------

// RENDERING WORKOUT INPUT FORM

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';
  // Display marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  // marker creates the marker, and addTo adds the marker to the map.
  // bindPopup creates a popup and binds it to marker.
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Hi')
    .openPopup();
});

// --------------------------------------------------------
// --------------------------------------------------------

// Type can change from Running to Cycling
inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

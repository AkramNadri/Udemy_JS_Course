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

// let map, mapEvent;

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// MANAGING WORKOUT DATA: CREATING CLASSES

// Parent class ~~~~~
class Workout {
  date = new Date();
  // create an id using some library
  // id is a unique identifier we attach to an object
  id = (Date.now() + '').slice(-14);

  constructor(coordinates, distance, duration) {
    this.coordinates = coordinates; // array of [lat, lng]
    this.distance = distance; // km
    this.duration = duration; // in min
  }
}

// Child classes
class Running extends Workout {
  constructor(coordinates, distance, duration, cadence) {
    // super points to the parent class constructor
    super(coordinates, distance, duration);
    this.cadence = cadence;
    // Calling a method inside a constructor
    // we use the constructor here to immediately calculate the pace;
    this.calcPace();
  }

  // Create a method for calculating pace
  calcPace() {
    // pace is defined min over km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  constructor(coordinates, distance, duration, elevationGain) {
    // super points to the parent class constructor
    super(coordinates, distance, duration);
    this.elevation = elevationGain;
    // Calling calcSpeed in constructor because as the page loads constructors are first to be run
    this.calcSpeed();
  }

  calcSpeed() {
    // km / h
    // duration is in hours, we divide by 60 to get minutes
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const running1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(running1, cycling1);
// --------------------------------------------------------
// --------------------------------------------------------

// PROJECT ARCHITECTURE

class App {
  // Define map and mapEvent as properties of the object.
  // private instance properties.
  // properties that are gonna be present in all instances created through this class.
  #map;
  #mapEvent;

  constructor() {
    // Since we are creating an object using this class, the constructor will be immediately called as the page loads, so we can simply get the position in the constructor. Load page will trigger the constructor, which will then trigger _getPosition() as soon as we recieve the position the _loadMap method is called.
    this._getPosition();

    // Calling _newWorkout method
    // this keyword inside the _newWorkout will point to form, unless we manually bind _newWorkout
    // in this case we want _newWorkout to point to the app object, which is what the this keyword is pointing to so we bind the this keyword which is pointing to the app object to _newWorkout
    form.addEventListener('submit', this._newWorkout.bind(this));

    // Calling _toggleElevationField
    inputType.addEventListener('change', this._toggleElevationField);
  }

  // getCurrentPosition will retrieve the current position from navigator, we use the this._loadMap to send the current location to _loadMap argument.
  _getPosition() {
    if (navigator.geolocation)
      // .bind will bind the this keyword to _loadMap.
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Location not found');
        }
      );
  }

  // _loadMap method is called as soon as we recieve the position from _getPosition() method.
  //
  _loadMap(position) {
    // get current position function
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    // map object is created by L.map which is from the leaflet library. map object will have access to methods and properties from leaflet library.
    // 13 indicates zoom amount during page load
    console.log(this);
    this.#map = L.map('map').setView(coords, 13);

    // DISPLAYING A MAP USING LEAFLET LIBRARY

    // map is created from small tiles, these tiles come from this URL. openstreetmap.
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // L.marker(coords)
    //   .addTo(map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();

    // DISPLAYING A MAP MARKER
    // map object created with leaflet library, has special methods and properties.
    // here the this keyword will then be set onto which the eventhandler it is attached which is the 'on' method. Solution is to bind _showForm this to the app object.
    // .bind(this) points to the app object.
    this.#map.on('click', this._showForm.bind(this));
    console.log(this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // Clear fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    // Display marker

    const { lat, lng } = this.#mapEvent.latlng;
    // marker creates the marker, and addTo adds the marker to the map.
    // bindPopup creates a popup and binds it to marker.
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

// Creating a new object using App class.
// This object is immediately created as page loads.
const app = new App();

// --------------------------------------------------------
// --------------------------------------------------------

// USING THE GEOLOCATION API

// getCurrentPosition takes 2 callback functions, the first one is the callback function called on success, whenever the browser successfully gets the coordinates of the current position of the user. The second is the error callback, happens when an error occurs while trying to get users current location.

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     // get current position function
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

//       const coords = [latitude, longitude];

//       // map object is created by L.map which is from the leaflet library. map object will have access to methods and properties from leaflet library.
//       // 13 indicates zoom amount during page load
//       map = L.map('map').setView(coords, 13);

//       // DISPLAYING A MAP USING LEAFLET LIBRARY

//       // map is created from small tiles, these tiles come from this URL. openstreetmap.
//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       L.marker(coords)
//         .addTo(map)
//         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//         .openPopup();

//       // DISPLAYING A MAP MARKER
//       // map object created with leaflet library, has special methods and properties.
//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert('Could not get your position');
//     }
//   );

// --------------------------------------------------------
// --------------------------------------------------------

// RENDERING WORKOUT INPUT FORM

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // Clear fields
//   inputDistance.value =
//     inputDuration.value =
//     inputCadence.value =
//     inputElevation.value =
//       '';
//   // Display marker
//   console.log(mapEvent);
//   const { lat, lng } = mapEvent.latlng;
//   // marker creates the marker, and addTo adds the marker to the map.
//   // bindPopup creates a popup and binds it to marker.
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('Hi')
//     .openPopup();
// });

// --------------------------------------------------------
// --------------------------------------------------------

// Type can change from Running to Cycling
// inputType.addEventListener('change', function () {
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });

// --------------------------------------------------------
// --------------------------------------------------------
// PROJECT ARCHITECTURE

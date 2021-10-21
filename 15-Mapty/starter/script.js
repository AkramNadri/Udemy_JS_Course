'use strict';

// // prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
  // Fields ~~~~
  date = new Date();
  // create an id using some library
  // id is a unique identifier we attach to an object
  id = (Date.now() + '').slice(-14);

  constructor(coordinates, distance, duration) {
    this.coordinates = coordinates; // array of [lat, lng]
    this.distance = distance; // km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}
    ${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    }${this.date.getDate()}`;
  }
}

// Child classes
class Running extends Workout {
  // fields
  type = 'running';

  constructor(coordinates, distance, duration, cadence) {
    // super points to the parent class constructor
    super(coordinates, distance, duration);
    this.cadence = cadence;
    // Calling a method inside a constructor
    // we use the constructor here to immediately calculate the pace;
    this.calcPace();

    // _setDesciption must be placed here because each class contains its own type: example class Running contains type "running"
    this._setDescription();
  }

  // Create a method for calculating pace
  calcPace() {
    // pace is defined min over km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  // fields
  type = 'cycling';

  constructor(coordinates, distance, duration, elevationGain) {
    // super points to the parent class constructor
    super(coordinates, distance, duration);
    this.elevationGain = elevationGain;
    // Calling calcSpeed in constructor because as the page loads constructors are first to be run
    this.calcSpeed();

    // _setDesciption must be placed here because each class contains its own type: example class Cycling contains type "cycling"
    this._setDescription();
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
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // get users position
    // Since we are creating an object using this class, the constructor will be immediately called as the page loads, so we can simply get the position in the constructor. Load page will trigger the constructor, which will then trigger _getPosition() as soon as we recieve the position the _loadMap method is called.
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    // Calling _newWorkout method
    // this keyword inside the _newWorkout will point to form, unless we manually bind _newWorkout
    // in this case we want _newWorkout to point to the app object, which is what the this keyword is pointing to so we bind the this keyword which is pointing to the app object to _newWorkout
    form.addEventListener('submit', this._newWorkout.bind(this));

    // Calling _toggleElevationField
    inputType.addEventListener('change', this._toggleElevationField);

    // we use bind here to bind the method to this
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
    const coords = [latitude, longitude];

    // map object is created by L.map which is from the leaflet library. map object will have access to methods and properties from leaflet library.
    // 13 indicates zoom amount during page load

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

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

    // here we render workouts that are saved in localStorage to map. This must be placed here because it is executed after the map has been loaded. Cannot load markers and map at the same time
    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  // clear form of all inputs and hides form
  _hideForm() {
    // clear inputs from fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // removing style from form
    form.style.display = 'none';
    // adding hidden back onto form
    form.classList.add('hidden');
    // call a certain callback function after a certain time
    // after 1 sec reapply grid style to form
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
  _newWorkout(e) {
    // Helper function
    // Arrow function which can take an arbitrary number of inputs
    // Loop over the array and check if the number is finite or not, the every method will only return true if all values in the array are true. If one of the values is false then the every method will return false.
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    // Helper function - loops through array and checks if all values are > then zero.
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Get data from form
    const type = inputType.value;

    // inputDistance comes as a string, to convert the value to a number we place a + in front
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // get lat and long from mapEvent.
    const { lat, lng } = this.#mapEvent.latlng;

    let workout;

    // ~~~~~~~~~~~~~~~~~~~~~~~~~

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      // Gaurd clause - check for the opposite of what we are interested in, if that opposite is true we return the function immediately.
      // we are checking if distance is not a number
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        // here we are calling validInputs method but inverting it with !validInputs to check if these values are numbers.
        // whenever this method is not true, then we go down to return an alert.
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        // here we are calling validInputs method but inverting it with !validInputs to check if these values are numbers.
        // whenever this method is not true, then we go down to return an alert.
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    // pushing workout into private #workouts array.
    this.#workouts.push(workout);
    console.log(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coordinates)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  // this html will be injected to page
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}"data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
</div>`;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>
  `;

    if (workout.type === 'cycling')
      html += `
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
</div>
</li>`;

    // injecting above html to form using insertAdjacentHTML which will insert the html as a sibling element.
    // afterend - add the new element as a sibling element at the end of the form.
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    // The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string.
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    // gaurd clause
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    console.log(workout);

    // leaflet method setView takes 2 arguments, coordinate and zoom level, lastly pass an object
    this.#map.setView(workout.coordinates, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    // localStorage is an API that the browser provides
    // localStorage is a key/value storage
    // first argument is key and second is value
    // JSON.stringify can convert any object to a string
    // localStorage is blocking. Also should not use for large amount of data will slow down application
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  // _getLocalStorage is being called in App constructor so this method will be called when application start up
  // IMPORTANT: objects coming from localStorage will not inherit the prototype. Since we converted the object to string and back to object we lose its prototype chain.
  _getLocalStorage() {
    // retrieving localStorage into const data, the data is currently a string so we will use JSON.parse to convert the string data into an object.
    const data = JSON.parse(localStorage.getItem('workouts'));

    // gaurd clause, if there is no data simply return.
    if (!data) return;

    // we are storing data into #workout list.
    this.#workouts = data;

    // forEach does not create a new array,
    this.#workouts.forEach(work => this._renderWorkout(work));
  }

  reset() {
    // will remove all items from localStorage
    localStorage.removeItem('workouts');
    location.reload();
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

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
///////////////////////////////////////

// updating function to get country and neighbouring country data
// const getCountry = function (country) {
//   const request = new XMLHttpRequest();

//   // Initializes a request.
//   // The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   // here we send the request, and this request fetches the data in the backgroundß
//   request.send();

//   // once send is done it will emit the load event, using the eventListener we are waiting for that event as soon as the data arrives this callback function will be called
//   request.addEventListener('load', function () {
//     // the data we received from above request comes in the form of JSON. Need to convert JSON to JS object
//     // adding [] to data will destructure the object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}/million people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//     <p class="country__row"><span>💰</span>${data.currencies}</p>
//   </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// // sometimes the countries will not load in order because it depends on which data is retrieved first
// getCountryData('portugal');
// getCountryData('canada');
// getCountryData('america');

// How the web works
// TCP/IP connection, 3 way handshake, how data travels across the internet, multiple packets are sent across the internet and TCP rearranges the packets back into its original form/respone.

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// Welcome to callback Heck

const renderCountry = function (data, className = '') {
  //
  const html = `
  <article class=${className}>
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}/million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages}</p>
    <p class="country__row"><span>💰</span>${data.currencies}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

// One callback function inside another callback function
// below is an example of callback heck, because what if we needed data on many countries, we would have to put another callback function. This leads to many callback functions within other callback functions and we can only receive data on the other callbacks when the first callback is completed.

// CALLBACK HELL IS WHEN WE HAVE ALOT OF NESTED CALLBACKS IN ORDER TO EXECUTE ASYNCHRONUS TASKS IN SEQUENCE.

// CALLBACK HELL is bad because it makes our code look very messy, but even more important is it makes our code hard to understand and reason about.

// We can escape callback heck by using "Promises".

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();

//   // Initializes a request.
//   // The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   // here we send the request, and this request fetches the data in the backgroundß
//   request.send();

//   // once send is done it will emit the load event, using the eventListener we are waiting for that event as soon as the data arrives this callback function will be called
//   request.addEventListener('load', function () {
//     // the data we received from above request comes in the form of JSON. Need to convert JSON to JS object
//     // adding [] to data will destructure the object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     // calling method and passing data as argument
//     renderCountry(data);

//     // get neighbour country (2)
//     // since the data we get back can contain multiple borders and not just 1 we need to destructure neighbour
//     const [neighbour] = data.borders;

//     // if there is a country with no neighbour, gaurd clause
//     if (!neighbour) return;

//     // AJAX call country 2
//     // Firing off the second AJAX
//     // this request will always be fired after the first request. Since above is eventListener load comes first, this event will be executed right after.
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       //

//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('canada');

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// Promises and the fetch API
// Modern way of making AJAX calls by using "fetch" API.

// Old way of making AJAX call ~~~~~~~~~~
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// New way ~~~~~
// example of a promise, fetch method will recieve data from the URL provided and will store that data into request varibale.
// Promise: A containter for a future value.
// We no longer need to rely on events and callbacks passed into the asynchronous functions to handle asynchronous results.
// instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
// Steps of promise
// 1. Pending - before the future value is available
// 2. Settled - Asynchronous task has finished
// 3. Either 'Fullfilled' which means the value was recieved and is now available  OR 'Rejected' an error has happened.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Build Promise THAN Consume Promise.
// When we already have a promise

// const request = fetch('https://restcountries.com/v3.1/name/canada');

// console.log(request);

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// CONSUMING PROMISES

// On all promises we can call the 'then' method
// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // The data received back in response is located in the body.
//       // this becomes a new promise
//       // to read the data we received from response we call the json method on it
//       return response.json();
//     }) // 2nd promise is called after we receive data from the first promise, this then will retrieve data from the previous promise.
//     .then(function (data) {
//       console.log(data);
//       // finally we render the country, 0 is the index where the data is contained
//       renderCountry(data[0]);
//     });
// };

// getCountryData('canada');

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// CHAINING PROMISES
// updated using arrow function
// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(respone => respone.json())
//     .then(data => {
//       renderCountry(data[0]);
//     });
// };
// getCountryData('canada');

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // the subsequent 'then' retreives it data from the previous promise, this is how we can chain promises.
    .then(response => response.json())
    // .then(country1Data => console.log(country1Data))
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) return;

      // Country 2 - chaining promise
      // By returning this promise, then the fullfilled value of the next 'then' method will be the fullfilled value of the previous promise.
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

      // the next then takes data from the previous promise
      // here we are dealing with the fullfilled value from of a fetch promise, so that is a response
    })
    // Always return the promise, then use it with the next 'then'.
    .then(responses => responses.json())
    .then(country2Data => console.log(country2Data[0]))
    .then(data => renderCountry(data[0]));
};
getCountryData('canada');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HANDLING REJECTED PROMISES
// A promise in which a error happens in a rejected promise

//
// example rejected promise

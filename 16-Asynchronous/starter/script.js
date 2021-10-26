'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  // Initializes a request.
  // The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // here we send the request, and this request fetches the data in the backgroundß
  request.send();

  // once send is done it will emit the load event, using the eventListener we are waiting for that event as soon as the data arrives this callback function will be called
  request.addEventListener('load', function () {
    // the data we received from above request comes in the form of JSON. Need to convert JSON to JS object
    // adding [] to data will destructure the object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}/million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
    <p class="country__row"><span>💰</span>${data.currencies}</p>
  </div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
  });
};

// sometimes the countries will not load in order because it depends on which data is retrieved first
getCountryData('portugal');
getCountryData('canada');
getCountryData('america');

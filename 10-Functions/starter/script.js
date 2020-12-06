'use strict';

// Default parameters

const bookings = [];

// ES6 we can set the default values inside the paramaters.
// default values can contain any expression.
// we can use the values of the other parameters that were set BEFORE it.
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // old way setting default parameter
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);


// we cannot skip a parameter in an argument
createBooking('LH123', , 100);


// set the parameter to undefine to skip
// undefine here will return the default value set in the parameter
createBooking('LH123', undefined , 100);

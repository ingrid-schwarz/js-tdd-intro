// capitalizeFirstLetter.js

const assert = require('assert');


// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetter(input) {

  let string = input.split("");
  let output = "";

  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      output += string[i].toUpperCase();

    } else {

      output += string[i];

    }

  }

  return output;

}

// Check that capitalizeFirst is a function

assert.strictEqual(typeof capitalizeFirstLetter, 'function');


// Check that capitalizeFirst accepts one argument

assert.strictEqual(capitalizeFirstLetter.length, 1);


// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(capitalizeFirstLetter('javaScript'), 'JavaScript');


// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirstLetter('z'), 'Z');


// Check that it works for an empty string

assert.strictEqual(capitalizeFirstLetter(''), ''); 

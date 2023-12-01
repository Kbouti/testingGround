// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

// ***************************************************************************************
// Promise exercise:
// https://www.youtube.com/watch?v=DHvZLI7Db8E

const p = new Promise((resolve, reject) => {
  const a = 1 + 1;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

// p.then((message) => {
//   console.log(`this is in the "then": ${message}`);
// }).catch((message) => {
//   console.log(`this is in the "catch": ${message}`);
// });

// promise articles:
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// ************************************************************************************************************
// Recursion practice:

function sumTo(x) {
  let n = 0;
  for (let i = 0; i <= x; i++) {
    n += i;
  }
  console.log(n);
  return n;
}

function recursionSum(x) {
  if (x == 1) {
    return 1;
  }
  return x + recursionSum(x - 1);
}

// function sumRange(n, total = 0) {
//   if (n <= 0) {
//     return total;
//   }
//   return sumRange(n - 1, total + n)
// }

function factorial1(n) {
  if (n == 1) return 1;
  return n * factorial1(n - 1);
}
// This is saying:
// If n == 1, return 1.
// If it's not one, return n times the factorial of n minus 1

// ****************************************************************************************************************************
// 1. Write a recursive function that sums the numbers from 1 to n
function sumRange(n) {
  if (n <= 1) return 1;
  return n + sumRange(n - 1);
}

// ****************************************************************************************************************************
// 2. Write a function that takes a base and an exponent, returns the base to the power of the exponent
function power(x, y) {
  if (y == 0) {
    return 1;
  }
  if (y == 1) {
    return x;
  }
  return x * power(x, y - 1);
}
// ^^This works, but the second if statement isn't needed
// This is the proper, given solution:
function powerCorrect(x, y) {
  if (y == 0) {
    return 1;
  }
  return x * power(x, y - 1);
}

// 3. Write a function that returns the factorial of a number
function factorial(x) {
  if (x == 1) {
    return 1;
  }
  return x * factorial(x - 1);
}
// Awesome!

// ****************************************************************************************************************************
// 4. Write a function called "all" which accepts an array and a callback and returns true if every value in the array returns true when passed as a parameter to the callback function
function all(array, callback) {
  if (array.length == 0) {
    return true;
  }
  const status = callback(array[0]);
  if (status == true) {
    array.shift();
    return all(array, callback);
  }
  return false;
}

// If there's nothing in the array, return true
// else, take the first item in the array and try it in the callback.
// if that returns false, return false
// If that returns true, remove that element from the array and run the new array through the callback

// I think this works!!  The code above is my solution, and matches with the given solution.

function isLessThanSeven(number) {
  if (number < 7) {
    return true;
  }
  return false;
}
const result = all([1, 2, 3, 3, 9], isLessThanSeven);
// console.log(result);

// ****************************************************************************************************************************
// 5. Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(array) {
  if (array.length == 1) {
    return array[0];
  }
  const first = array[0];
  array.shift();
  return first * productOfArray(array);
}

// If there's only one number in the array, return it
// If there's more than one number:
// Save the first number as a new variable
// Take the first number out of the array
// Multiply the first number by the product of the rest and return the result
// My code (above) works just fine, theirs is written slightly different but does the same thing.
// I have to remember that shift returns the first element, but changes the original array. That's how they make it work without storing the new variable - they extract the first number and multiply it by the product of the new array in one step:

function theirProductFromArray(array) {
  if (array.length === 0) return 1;
  return array.shift() * theirProductFromArray(array);
}

// ****************************************************************************************************************************
// Write a function called "contains" that searches for a value in a nested object. It returns true if the object contains that value.
// I had trouble with this one - my solution passes the test the problem gave, but I couldn't get it to work with the nested object I made. I'll include my function , their function, my testObject, and their testObject:
//

// My function: 
function contains(object, value) {
  const objectValues = Object.values(object);
  for (let i = 0; i < objectValues.length; i++) {
    if (typeof objectValues[i] === "object") {
      return contains(objectValues[i], value);
    }
    if (objectValues[i] === value){
      return true
    }
  } 
  return false
}

// Their function: 
function theirContains(obj, value){
  for(let key in obj){
    console.log(key)
    console.log(obj[key])
    if (typeof obj[key] === `object`){
    return theirContains(obj[key], value);
    }
    if (obj[key] === value){
      return true;
    }
  }
  return false;
}

//My test object:
const testObject = {
  name: "Kevin",
  vehicles: {
    cars: {
      suv: "forester",
    },
    bikes: {
      enduro: "slash",
      gravel: "checkpoint",
      hardtail: "growler",
      ebike: {
        commuter: "crossrip",
      },
    },
  },
};

// Their test object:
let nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

console.log(contains(testObject, `forester`))
console.log(contains(nestedObject, 44))
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

p.then((message) => {
  console.log(`this is in the "then": ${message}`);
}).catch((message) => {
  console.log(`this is in the "catch": ${message}`);
});

// promise articles:
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch2.md
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md
// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

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

function sumRange(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRange(n - 1, total + n)
}

function factorial(n){
  if (n == 1)
  return 1;
else
return n * factorial(n - 1);
}

// This is saying:
// If n == 1, return 1. 
// If it's not one, return n times the factorial of n minus 1
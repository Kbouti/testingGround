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
// 6. Write a function called "contains" that searches for a value in a nested object. It returns true if the object contains that value.
// I had trouble with this one - my solution passes the test the problem gave, but I couldn't get it to work with the nested object I made. I'll include my function , their function, my testObject, and their testObject:
//

// My function:
function contains(object, value) {
  const objectValues = Object.values(object);
  for (let i = 0; i < objectValues.length; i++) {
    if (typeof objectValues[i] === "object") {
      return contains(objectValues[i], value);
    }
    if (objectValues[i] === value) {
      return true;
    }
  }
  return false;
}

// Their function:
function theirContains(obj, value) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      return theirContains(obj[key], value);
    }
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

// My test object:
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
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log(`1${contains(testObject, "forester")}`); // Mine works to find forester
console.log(`2${contains(testObject, "foresterg")}`); // Returns false for something that doesn't exist
console.log(`3${contains(testObject, "slash")}`); // Can't find slash for some reason. Why is this false?
console.log(`4${contains(nestedObject, 44)}`); // Mine works on their object
console.log(`5${theirContains(nestedObject, 44)}`); // Theirs works on theirs too
console.log(`6${theirContains(testObject, "slash")}`); // Why is this false?? If their function works this should be true

// My function passes the same tests theirs does - so maybe time to move on.

// ****************************************************************************************************************************
// 7. Given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array) {
  let count = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      count += totalIntegers(element);
    }
    if (typeof element === "number") {
      count++;
    }
  }
  return count;
}
const testArray = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];

// It works! here's their function just for giggles:

function theirTotalIntegers(array) {
  if (array.length === 0) return 0;
  let total = 0;
  const first = array.shift();
  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}

console.log(totalIntegers(testArray));
console.log(theirTotalIntegers(testArray));

// ****************************************************************************************************************************
// 8. Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumSquares(array[i]);
    } else {
      sum += array[i] * array[i];
    }
  }
  return sum;
}

const testArray1 = [1, 2, 3];
const testArray2 = [[1, 2], 3];
const testArray3 = [[[[[[[[1, 2], 3]]]]]]];
const testArray4 = [10, [[10], 10], [10]];

// console.log(sumSquares(testArray1));
// console.log(sumSquares(testArray2));
// console.log(sumSquares(testArray3));
console.log(sumSquares(testArray4));

// ****************************************************************************************************************************
// 9. The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicate(times, number) {
  if (times <= 0) {
    console.log("times value is less than or equal to zero, returning zero");
    return 0;
  }
  const array = [];
  for (let i = 0; i < times; i++) {
    array.push(number);
  }
  return array;
}
// This doesn't actually use recursion, but it solves the problem...

function myReplicate(times, number) {
  let array = [];
  if (times < 1) {
    return array;
  }
  array.push(number);
  times -= 1;
  array = array.concat(myReplicate(times, number));
  return array;
}
// BOOM! I struggled on this because I couldn't think to concat the arrays. I was creating a new array each time and returning it, concat adds the new array to the old one.
console.log(myReplicate(3, 5));
console.log(myReplicate(12, 575));

// Here's their solutioin:
function theirReplicate(times, number) {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
}

// ******************************************************************************************************************
// fibonacci assignment:

function fibs(number) {
  const array = [0, 1];
  if (number === 0) {
    return [];
  }
  if (number === 1) {
    return [0];
  }
  for (let i = 0; i < number - 2; i++) {
    const secondLast = array[array.length - 2];
    const last = array[array.length - 1];
    const newNumber = secondLast + last;
    array.push(newNumber);
  }
  return array;
}
console.log(fibs(4));
console.log(fibs(8));
console.log(fibs(5));

function fibsRec(array, number) {
  const { length } = array;
  console.log(`length: ${length}`);
  if (length === number) {
    return array;
  }
  const x = array[length - 1];
  const y = array[length - 2];
  const z = x + y;
  array.push(z);
  return fibsRec(array, number);
}

console.log(fibsRec([0, 1], 2));
console.log(fibsRec([0, 1], 3));
console.log(fibsRec([0, 1], 4));
console.log(fibsRec([0, 1], 8));

function fibsRec2(number) {
  if (number === 0) {
    return [];
  }
  if (number === 1) {
    return [0];
  }
  if (number === 2) {
    return [0, 1];
  }
  const array = fibsRec2(number - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log(fibsRec2(2));
console.log(fibsRec2(3));
console.log(fibsRec2(8));

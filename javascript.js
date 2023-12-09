/* eslint-disable prefer-const */
// ******************************************************************************************************************
// Merge Sort:
// Build a function mergeSort that takes in an array and returns a sorted array, using recursive merge sort methodology.
// function mergeSort(array) {
//   const arrayLength = array.length;
//   if (arrayLength === 1) return array[0];
//   if (arrayLength > 1) {
//     let arrayHalf;
//     if (arrayLength % 2 !== 0) {
//       arrayHalf = arrayLength / 2 + 0.5;
//       console.log(`odd length array half: ${arrayHalf}`);
//     } else {
//       arrayHalf = arrayLength / 2;
//       console.log(`even length array half: ${arrayHalf}`);
//     }

//     let arrayA = [];
//     arrayA = array.slice(0, arrayHalf);
//     console.log(arrayA);

//     let arrayB = [];
//     arrayB = array.slice(arrayHalf);
//     console.log(arrayB);

//     console.log(`arrayA = ${arrayA}`);
//     console.log(`arrayB = ${arrayB}`);

//     console.log(arrayA.length);

//     if (arrayA.length > 2) {
//       console.log("arrayA length is greater than 2, calling mergeSort again");
//       arrayA = mergeSort(arrayA);
//       arrayB = mergeSort(arrayB);
//     }
//     if (arrayA.length === 2) {
//       if (arrayA[0] < arrayA[1]) {
//         return arrayA;
//       }
//       if (arrayA[0] > arrayA[1]) {
//         arrayA = [arrayA[1], arrayA[0]];
//         console.log(`arrayA: ${arrayA}`);
//       }
//     }
//     if (arrayB.length === 2) {
//       if (arrayB[0] < arrayB[1]) {
//         return arrayB;
//       }
//       if (arrayB[0] > arrayB[1]) {
//         arrayB = [arrayB[1], arrayB[0]];
//         console.log(`arrayB: ${arrayB}`);
//       }
//     }

//     console.log("We should have two 2-long sorted arrays now");

//     // const newA = mergeSort(arrayA);
//     // const newB = mergeSort(arrayB);

//     // now we have to merge these two arrays.
//   }
// }

// pseudocode:
// If the array is longer than 1, split the array in half
// Apply the sort function to both halves of the original array
// Merge those two sorted arrays into one
// Return that new array

const mergeTestArray = [1, 4, 8, 15];
const mergeTestArray2 = [3, 9, 12];
// console.log(mergeSort(mergeTestArray2));

function merge(array1, array2) {
  const array3 = [];
  console.log(`array1 length: ${array1.length}`);

  // Our current function checks which number is greater, but doesn't have logic to handle if they're the same.

  if (array1.length > array2.length) {
    console.log("array1 is longer");
    console.log(array1[0]);
    console.log(array2[0]);
    for (let i = 0; i < array1.length * 3; i++) {
      if (array1[0] < array2[0]) {
        console.log(
          `array1: ${array1}  --array2: ${array2}  --array3: ${array3}`,
        );
        console.log(
          `element in array1 is lower. removing ${array1[0]} and pushing it to array3`,
        );

        array3.push(array1[0]);
        array1 = array1.splice(1);
        // We aren't successfully altering the original array like we think we are.

        console.log(
          `array1: ${array1}  --array2: ${array2}  --array3: ${array3}`,
        );
      } else if (array1[0] > array2[0]) {
        console.log(
          `array1: ${array1}  --array2: ${array2}  --array3: ${array3}`,
        );
        console.log(
          `element in array2 is lower. removing ${array2[0]} and pushing it to array3`,
        );

        array3.push(array2[0]);
        array2 = array2.splice(1);

        console.log(
          `array1: ${array1}  --array2: ${array2}  --array3: ${array3}`,
        );
      }
    }
  }
}

// merge(mergeTestArray, mergeTestArray2);

const spliceArray = [1, 2, 3, 4, 5];
// console.log(spliceArray.splice(1))
// console.log(spliceArray)

// ********************************************************************************************************v
// Starting over with a sort function:

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const { length } = array;
  console.log(`length: ${length}`);

  let halfLength = length / 2;
  if (halfLength % 2 !== 1) {
    halfLength += 0.5;
  }

  const halfArray1 = array.slice(0, halfLength);
  const halfArray2 = array.slice(halfLength);

  console.log(halfArray1);
  console.log(halfArray2);

  let sortedHalf1 = mergeSort(halfArray1);
  let sortedHalf2 = mergeSort(halfArray2);

  let storageArray = [];
  console.log(`storageArray: ${storageArray}`);
  console.log(`sortedHalf1: ${sortedHalf1}`);
  console.log(`sortedHalf2: ${sortedHalf2}`);

  for (let i = 0; i < length; i++) {
    console.log(`sortedHalf1[0]: ${sortedHalf1[0]}`);
    console.log(`sortedHalf2[0]: ${sortedHalf2[0]}`);
    if (sortedHalf1[0] < sortedHalf2[0]) {
      console.log(`storageArray: ${storageArray}`);
      storageArray.push(sortedHalf1[0]);
      console.log(`storageArray: ${storageArray}`);
      // ***********************************************************************************************
      console.log(`sortedHalf1: ${sortedHalf1}`);
      sortedHalf1 = sortedHalf1.splice(1, 1);
      console.log(`sortedHalf1: ${sortedHalf1}`);
      // The problem is here, with our splice call. It's still not functioning as desired.
      // ***********************************************************************************************
    } else if (sortedHalf1[0] > sortedHalf2[0]) {
      console.log(`storageArray: ${storageArray}`);
      storageArray.push(sortedHalf2[0]);
      console.log(`storageArray: ${storageArray}`);
      // ***********************************************************************************************
      console.log(`sortedHalf1: ${sortedHalf1}`);
      sortedHalf2 = sortedHalf2.splice(1, 1);
      console.log(`sortedHalf1: ${sortedHalf1}`);
      // (will also need to be fixed here)
      // ***********************************************************************************************
    } else if (sortedHalf1[0] === undefined) {
      console.log("caught undefined");
      storageArray.push(sortedHalf2[0]);
      console.log(`storageArray: ${storageArray}`);
    } else if (sortedHalf2[0] === undefined) {
      console.log("caught undefined");
      storageArray.push(sortedHalf1[0]);
      console.log(`storageArray: ${storageArray}`);
    }
  }

  return storageArray;
}

// console.log(mergeSort([1]));
// console.log(mergeSort([4, 2]));
// console.log(mergeSort([2, 1, 4, 3]));
// console.log(mergeSort([6, 3, 2, 4, 5, 1]));

console.log(mergeSort([6, 3, 2, 8, 7, 4, 5, 1]));
// Returns [1, 2, 3, 4, 4, 4, 4]
// Seems like the problem occurs the second time "caught undefined" occurs. I think our caught undefined function needs to modify the array after it takes an element and pushes to storageArray. 

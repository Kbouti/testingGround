// ******************************************************************************************************************
// Merge Sort:
// Build a function mergeSort that takes in an array and returns a sorted array, using recursive merge sort methodology.
console.log("************************");
function mergeSort(array) {
  const arrayLength = array.length;
  if (array.length === 1) return array[0];
  if (arrayLength > 1) {
    let arrayHalf;
    if (arrayLength % 2 !== 0) {
      arrayHalf = arrayLength / 2 - 0.5;
      console.log(`odd length array half: ${arrayHalf}`);
    } else {
      arrayHalf = arrayLength / 2;
      console.log(`even length array half: ${arrayHalf}`);
    }

    const arrayA = [];
    arrayA.push(array.slice(0, arrayHalf));

    const arrayB = [];
    arrayB.push(array.slice(arrayHalf));

    console.log(`arrayA = ${arrayA}`);
    console.log(`arrayB = ${arrayB}`);

    const newA = mergeSort(arrayA);
    const newB = mergeSort(arrayB);

    // now we have to merge these two arrays.

    const arrayC = [];
    console.log(`Established arrayC: ${arrayC}`);

    for (let a = 0; a < newA.length; a++) {
      console.log("for loop initiated");
      console.log(`comparing ${newA[a]} < ${newB[0]}`);

      // Ok, the problem is that once it's gone through arrayA, it keeps trying to compare to the next index of arrayA which is undefined, so it just adds the next from B, and the next, and the next. Without sorting the remaining B's.
      // Also, 5 is getting left out because it loses it's comparison round, then doesn't get checked again.
      // We've successfully split the array in two. Our issue is with the merging function Nooooo, we gotta sort both of these first. Then merge. 

      if (newA[a] < newB[0]) {
        console.log(`element in array A is lower, adding ${newA[a]} to arrayC`);
        arrayC.push(newA[a]);
        console.log(`arrayC: ${arrayC}`);
      } else {
        console.log(`Element in B is lower, adding ${newB[0]} to arrayC`);
        arrayC.push(newB.shift());

        newB.push(newA[a])
        console.log(`arrayC: ${arrayC}`);
      }
    }


    console.log(newA);
    console.log(newB);
    console.log(arrayC);

    return arrayC;
  }
}

// pseudocode:
// If the array is longer than 1, split the array in half
// Apply the sort function to both halves of the original array
// Merge those two sorted arrays into one
// Return that new array

const mergeTestArray = [5, 2, 3, 1, 6, 4, 7];
const mergeTestArray2 = [5, 2];
console.log(mergeSort(mergeTestArray));

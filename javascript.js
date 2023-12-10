/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let halfLength = array.length / 2;
  if (halfLength % 2 !== 1) {
    halfLength += 0.5;
  }
  const halfArray1 = array.slice(0, halfLength);
  const halfArray2 = array.slice(halfLength);
  let sortedHalf1 = mergeSort(halfArray1);
  let sortedHalf2 = mergeSort(halfArray2);
  let storageArray = [];
  for (let i = 0; i < array.length; i++) {
    if (sortedHalf1[0] < sortedHalf2[0]) {
      storageArray.push(sortedHalf1[0]);
      sortedHalf1 = sortedHalf1.splice(1);
    } else if (sortedHalf1[0] > sortedHalf2[0]) {
      storageArray.push(sortedHalf2[0]);
      sortedHalf2 = sortedHalf2.splice(1);
    } else if (sortedHalf1[0] === undefined) {
      storageArray.push(sortedHalf2[0]);
      sortedHalf2 = sortedHalf2.splice(1);
    } else if (sortedHalf2[0] === undefined) {
      storageArray.push(sortedHalf1[0]);
      sortedHalf1 = sortedHalf1.splice(1);
    } else if (sortedHalf1[0] == sortedHalf2[0]){
      storageArray.push(sortedHalf1[0]);
      sortedHalf1 = sortedHalf1.splice(1);
    }
  }
  return storageArray;
}

// console.log(mergeSort([1]));
// console.log(mergeSort([4, 2]));
// console.log(mergeSort([2, 1, 4, 3]));
// console.log(mergeSort([6, 3, 2, 4, 5, 1]));
console.log(mergeSort([6, 3, 2, 8, 7, 4, 5, 1]));

console.log(mergeSort([6, 3, 2, 8, 7, 4, 5, 1, 2, 5]));
console.log(mergeSort([6, 13, 62, 8, 47, 4, 5, 100, 54, 456, 78, 35, 44]));


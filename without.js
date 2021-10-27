const passedLog = "[First Array] === [Second Array]"
const failedLog = "[First Array] !=== [Second Array]"

/**
 * eqArrays impelementation for future use
 * Not sure why this is here yet
 */
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  };
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
/**
 * assertArrayEqual function impelementation
*/
const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return console.log(`🛑 Assertion Failed: ${failedLog}`);
  };
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return console.log(`🛑 Assertion Failed: ${failedLog}`);
    }
  };
  return console.log(`✅ Assertion Passed: ${passedLog}`);
};

const without = function(array, toRemove) {
  // Create an array to store the non-matching elements
  let newArray = [];
  // Go through the elements of each array and compare them.
  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      // If the elements don't match push them to the new array
      newArray.push(array[i]);
      //console.log(newArray);
    }
  };
  // console.log(newArray);
  return newArray;
};
const words = [1, 2, 3];
assertArraysEqual(without(words, [2]), [1, 3]);
assertArraysEqual(words, [1, 2, 3]);
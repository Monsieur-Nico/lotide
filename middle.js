// eqArrays IMPLEMENTATION
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

const passedLog = "[First Array] === [Second Array]"
const failedLog = "[First Array] !=== [Second Array]"

// assertArraysEqual IMPLEMENTATION
const assertArraysEqual = function (firstArray, secondArray) {
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

const middle = function (array) {
  /**
   * if array has only 1 or 2 elements => return []
   * if array.length is odd elements => middle elements
   * if array.length is even elements => middle elements (2 elements)
   */

  let emptyArray = [];
  // If array has 2 or less elements
  if (array.length <= 2) {
    return emptyArray;

    // if array.length is even
  } else if (array.length % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
      let middleElements = array[(array.length / 2) - 1];
      let middleElements2 = array[(array.length / 2)];
      emptyArray.push(middleElements, middleElements2);
      return emptyArray;
    }

    // if array.length is odd
  } else {
      let middleElement = Math.round(array[((array.length - 1) / 2)]);
      emptyArray.push(middleElement);
      return emptyArray;
    }
};
middle([1, 2, 3, 4, 5]);
eqArrays([1, 2, 3], [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
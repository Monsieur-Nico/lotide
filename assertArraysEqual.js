const passedLog = "[First Array] === [Second Array]"
const failedLog = "[First Array] !=== [Second Array]"

// FUNCTION IMPLEMENTATION
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
assertArraysEqual([1, 2, 3], [1, 2, 3]);
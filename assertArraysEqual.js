const passedLog = "[First Array] === [Second Array]"
const failedLog = "[First Array] !=== [Second Array]"

// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return `🛑 Assertion Failed: ${failedLog}`;
  };
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return `🛑 Assertion Failed: ${failedLog}`;
    }
  };
  return `✅ Assertion Passed: ${passedLog}`;
};
console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
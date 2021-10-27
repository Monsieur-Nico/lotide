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

const eqArrays = function(array1, array2) {
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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.replace(' ', '');

  for(let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};
console.log(letterPositions("Hello"));

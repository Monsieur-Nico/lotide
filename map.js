
const words = ["ground", "control", "to", "major", "tom"];

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (firstArray, secondArray) {
  const passedLog = `[[${firstArray}] Array] === [[${secondArray}] Array]`
  const failedLog = `[[${firstArray}] Array] !== [[${secondArray}] Array]`

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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const test1 = ['g', 'c', 't', 'm', 't'];
const test2 = ['g', '2', 't', 'm', 't'];
const test3 = ['g', 'c', 'g', 'm', 't'];

const results1 = map(words, word => word[0]);
assertArraysEqual((results1), test1);
assertArraysEqual((results1), test2);
assertArraysEqual((results1), test3);
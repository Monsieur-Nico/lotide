const eqArrays = require('./eqArray');

const assertArraysEqual = function(actual, expected) {
  const passedLog = `[${actual}] === [${expected}]`;
  const failedLog = `[${actual}] !== [${expected}]`;

  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${passedLog}`);
  } else {
    console.log(`🛑 Assertion Failed: ${failedLog}`);
  }
};

module.exports = assertArraysEqual;
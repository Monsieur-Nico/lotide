const passedLog = "[actual] === [expected]"
const failedLog = "[actual] !=== [expected]"

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${passedLog}`);
  } else {
    console.log(`🛑 Assertion Failed: ${failedLog}`);
  }
};

const countLetters = function(someString) {
  const result = {};
  someString = someString.replace(' ', '');

  for (const letter of someString) {
    if (!result[letter])
      result[letter] = 1;
    else
      result[letter]++;
  }

  return result;
};

//Test code
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);
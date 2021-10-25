const passedLog = "[actual] === [expected]"
const failedLog = "[actual] !=== [expected]"

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${passedLog}`);
  } else {
    console.log(`🛑 Assertion Failed: ${failedLog}`);
  }
};

function head (array) {
  const goal = array.shift();
  return goal;
};

assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");
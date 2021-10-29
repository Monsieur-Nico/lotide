
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const passedLog = `[${actual}] === [${expected}]`;
  const failedLog = `[${actual}] !=== [${expected}]`;

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${passedLog}`);
  } else {
    console.log(`🛑 Assertion Failed: ${failedLog}`);
  }
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
//assertEqual(1, "1");
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

const findKeyByValue = function (object, targetValue) {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === targetValue) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
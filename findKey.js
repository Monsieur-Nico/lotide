const assertEqual = (actual, expected) => {
  const passedLog = `[${actual}] === [${expected}]`;
  const failedLog = `[${actual}] !=== [${expected}]`;

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${passedLog}`);
  } else {
    console.log(`🛑 Assertion Failed: ${failedLog}`);
  }
};

const findKey = (object, callback) => {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');
const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  const testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };
  it('should return \"noma\" for is the property value is 2', () => {
    assert.strictEqual(findKey(testObject, x => x.stars === 2), 'noma');
  });
  it('should return \"Akaleri\" for is the property value is 3', () => {
    assert.strictEqual(findKey(testObject, x => x.stars === 3), 'Akaleri');
  });

});
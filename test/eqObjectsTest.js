const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it(`should compare {cd} and {dc} and return true`, () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it(`should compare {cd} and {cd2} and return false`, () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});
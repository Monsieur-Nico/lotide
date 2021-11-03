const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  const result1 = countLetters("lighthouse in the house");

  it("should return 1 for \"L\"s in \"lighthouse in the house\"", () => {
    assert.strictEqual(result1["l"], 1);
  });
  it("should return 2 for \"I\"s in \"lighthouse in the house\"", () => {
    assert.strictEqual(result1["i"], 2); 
  });
  it("should return 3 for \"E\"s in \"lighthouse in the house\"", () => {
    assert.strictEqual(result1["e"], 3); 
  });
});
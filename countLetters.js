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

module.exports = countLetters;
// const result1 = countLetters("lighthouse in the house");
// assertEqual(result1["l"], 1);
// assertEqual(result1["i"], 2);
// assertEqual(result1["e"], 3);
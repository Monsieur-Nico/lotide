const countLetters = function(someString) {
  const result = {};
  noSpaces = someString.replace(' ', '');

  for (const letter of noSpaces) {
    if (!result[letter])
      result[letter] = 1;
    else
      result[letter]++;
  }

  return result;
};

module.exports = countLetters;
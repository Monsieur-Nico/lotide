const without = function(array, toRemove) {
  // Create an array to store the non-matching elements
  let newArray = [];
  // Go through the elements of each array and compare them.
  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      // If the elements don't match push them to the new array
      newArray.push(array[i]);
    };
  };
  return newArray;
};

module.exports = without;
// const words = [1, 2, 3];
// assertArraysEqual(without(words, [2]), [1, 3]);
// assertArraysEqual(words, [1, 2, 3]);
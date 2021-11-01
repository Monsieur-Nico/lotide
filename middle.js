const middle = function (array) {
  /**
   * if array has only 1 or 2 elements => return []
   * if array.length is odd elements => middle elements
   * if array.length is even elements => middle elements (2 elements)
   */
  let emptyArray = [];
  // If array has 2 or less elements
  if (array.length <= 2) {
    return emptyArray;
    // if array.length is even
  } else if (array.length % 2 === 0) {
    for (let i = 0; i < array.length; i++) {
      let middleElements = array[(array.length / 2) - 1];
      let middleElements2 = array[(array.length / 2)];
      emptyArray.push(middleElements, middleElements2);
      return emptyArray;
    }
    // if array.length is odd
  } else {
      let middleElement = Math.round(array[((array.length - 1) / 2)]);
      emptyArray.push(middleElement);
      return emptyArray;
    }
};

module.exports = middle;
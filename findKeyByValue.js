const findKeyByValue = function (object, targetValue) {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === targetValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
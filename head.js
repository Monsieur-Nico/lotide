const assertEqual = require('./assertEqual');

function head(array) {
  if (!array.length) {
    return "Empty array";
  } else {
    return array.shift();
  }
};

module.exports = head;
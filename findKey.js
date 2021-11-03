const findKey = (object, callback) => {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
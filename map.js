const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  };
  return results;
};

module.exports = map;
// const test1 = ['g', 'c', 't', 'm', 't'];
// const test2 = ['g', '2', 't', 'm', 't'];
// const test3 = ['g', 'c', 'g', 'm', 't'];

// const results1 = map(words, word => word[0]);
// assertArraysEqual((results1), test1);
// assertArraysEqual((results1), test2);
// assertArraysEqual((results1), test3);
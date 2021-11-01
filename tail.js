function tail(array) {
  const tailedArray = array;
  tailedArray.shift();
  
  return tailedArray;
};

module.exports = tail;
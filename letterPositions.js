const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.replace(' ', '');

  for(let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
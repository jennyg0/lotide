const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (const letter in sentence) {
    let current = sentence[letter];
    if (current === ' ') {
      continue;
    } else if(results.hasOwnProperty(current)) {
      results[current].push(parseInt(letter))
    } else {
      results[current] = [parseInt(letter)];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;
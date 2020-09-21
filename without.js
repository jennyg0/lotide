const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++){
    let current = source[i];
    if (!itemsToRemove.includes(current)) {
      output.push(current);
    }
  }
  return output;
};


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
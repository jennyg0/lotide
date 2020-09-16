const assertArraysEqual = function(array1, array2) {
  let isEqual = true;
  //check to see if the arrays are the same length
  if (array1.length !== array2.length) {
    isEqual = false;
  }
  //check to see if the arrays have the same values at each index
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isEqual = false;
    }
  } 
  if (isEqual) {
    console.log('✅✅✅ Assertion Passed: The arrays are equal');
  } else {
    console.log('🛑🛑🛑Assertion Failed: The arrays are not equal');
  }
};

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
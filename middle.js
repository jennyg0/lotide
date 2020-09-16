const assertArraysEqual = function(actual, expected) {
  let isEqual = true;
  //check to see if the arrays are the same length
  if (actual.length !== expected.length) {
    isEqual = false;
  }
  //check to see if the arrays have the same values at each index
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      isEqual = false;
    }
  } 
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};


const middle = function(array) {
  let output = [];
  let midIndex = array.length / 2;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      output = [midIndex, midIndex + 1];
    } else {
      output = [Math.ceil(midIndex)];
    }
  } return output;
}

assertArraysEqual(middle([1]), [])// => []
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4])
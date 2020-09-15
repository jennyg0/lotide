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

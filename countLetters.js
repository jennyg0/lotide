const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(input) {
  let result = {};
  let noSpaces = input.split(' ').join('')
  console.log(noSpaces)
  for (const letter in noSpaces) {
    let current = noSpaces[letter];
    if (result.hasOwnProperty(current)) {
      result[current] += 1;
    } else {
      result[current] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"))
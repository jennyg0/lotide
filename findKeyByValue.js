const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  let result;
  for (const key in obj){
    if (value === obj[key]) {
      result = key;
    }
  } return result;
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
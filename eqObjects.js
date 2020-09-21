const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  } 
  for (const key of object1Keys) {
    if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      return (eqArrays(object1[key],object2[key]));
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } 
  return true;
};

module.exports = eqObjects;






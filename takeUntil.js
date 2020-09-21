const takeUntil = function(array, callback) {
  //run through array until it reaches the callback
  const output = [];
  for (let item of array) {
    //if callback not true, push item to output array
    if (!callback(item)) {
      output.push(item);
    //if callback false, break out of the loop
    } else {
      break;
    }
  } 
  return output
};

module.exports = takeUntil;

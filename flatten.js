const flatten = function(arr) {
  const output = [];
  for (let num of arr) {
    if (Array.isArray(num)) {
      //use spread operator... to grab all elements in the array, otherwise will still be nested array and won't output properly
      output.push(...flatten(num));
    } else {
      output.push(num);
    }
  }
  return output;
};

module.exports = flatten;
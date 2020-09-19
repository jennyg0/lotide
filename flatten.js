const flatten = function(arr) {
  const output = [];
  for (let num of arr) {
    if (Array.isArray(num)) {
      output.push(...flatten(num));
    } else {
      output.push(num);
    }
  }
  return output;
};
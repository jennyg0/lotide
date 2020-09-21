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

module.exports = middle;
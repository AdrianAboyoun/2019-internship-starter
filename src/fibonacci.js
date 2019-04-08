function getSequence(n) {
  var arr = [1, 1]; //seed array with two initial values
  var i;
  for (i = 0; i < n - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]); //generate sequence from seeds to desired value
  }
  return arr;
}

module.exports = {
  getSequence
};

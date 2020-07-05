function permute(permutation) {
  var arrayLength = permutation.length,
    result = [permutation.slice()],
    copyArray = new Array(arrayLength).fill(0),
    index = 1,
    indexRef,
    permuteRef;

  while (index < arrayLength) {
    if (!permutation[index] && permutation[index] !== 0) {
      return "no value provided in the input array";
    }
    if (copyArray[index] < index) {
      indexRef = index % 2 && copyArray[index];
      permuteRef = permutation[index];
      permutation[index] = permutation[indexRef];
      permutation[indexRef] = permuteRef;
      ++copyArray[index];
      index = 1;
      result.push(permutation.slice());
    } else {
      copyArray[index] = 0;
      ++index;
    }
  }
  return result;
}

module.exports = permute;

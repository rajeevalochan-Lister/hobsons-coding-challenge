function permute(permutation) {
  var arrayLength = permutation.length,
    result = [permutation.slice()],
    copyArray = new Array(arrayLength).fill(0),
    index = 1,
    indexRef,
    permuteRef;

  while (index < arrayLength) {
    if (!permutation[index] && permutation[index] !== 0) {
      return "Invalid input";
    }
    if (copyArray[index] < index) {
      indexRef = index % 2 && copyArray[index];
      [permutation[index], permutation[indexRef]] = [
        permutation[indexRef],
        permutation[index],
      ];
      ++copyArray[index];
      index = 1;
      result.push(permutation.slice());
    } else {
      copyArray[index] = 0;
      ++index;
    }
  }
  return checkDuplicatePermutaion(result);
}

//Remove Duplicate permutation from the arrayList
function checkDuplicatePermutaion(arrayInput = []) {
  let hashObject = {};
  let result = [];
  const inputLength = arrayInput.length;

  for (let i = 0; i < inputLength; i++) {
    let hashKey = arrayInput[i].join("/");
    if (!hashObject[hashKey]) {
      result.push(arrayInput[i]);
      hashObject[hashKey] = true;
    }
  }
  return result;
}

module.exports = permute;

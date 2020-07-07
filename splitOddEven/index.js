//Split odd ,even numbers and pushed into separate array list.
function oddEvenSplit(inputArray = []) {
  const evenArr = [];
  const oddArr = [];
  const inputLength = inputArray.length;
  for (let i = 0; i < inputLength; i++) {
    //checks for null/undefined
    if (!inputArray[i] && inputArray[i] !== 0) {
      return "Invalid input";
    }

    if (inputArray[i] % 2 === 0) {
      evenArr.push(inputArray[i]);
    } else {
      oddArr.push(inputArray[i]);
    }
  }
  return [...sort(oddArr), ...sort(evenArr)];
}

/**
 * function to sort numbers from the given array
 * @param {array} array
 */
function sort(array = []) {
  var isDone = false;
  while (!isDone) {
    isDone = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        isDone = false;
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  }
  return array;
}

/**
 * Split even/odd number and return an array of sorted odd-even number
 * @param {[]]} input
 */
function splitOddEven(input = []) {
  if (!Array.isArray(input) && !input.length) {
    return [];
  }
  return oddEvenSplit(input);
}

module.exports = splitOddEven;

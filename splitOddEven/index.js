function splitEven(input = []) {
  return input.filter((val) => val % 2 === 0);
}

function splitOdd(input = []) {
  return input.filter((val) => val % 2 !== 0);
}

function sort(array = []) {
  var isDone = false;
  while (!isDone) {
    isDone = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        isDone = false;
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  }

  return array;
}

function splitOddEven(input = []) {
  if (!Array.isArray(input) && !input.length) {
    return [];
  }

  const sortOdd = sort(splitOdd(input));
  const sortEven = sort(splitEven(input));
  if (!sortOdd || !sortEven) {
    return [];
  }

  return [...sortOdd, ...sortEven];
}

module.exports = splitOddEven;

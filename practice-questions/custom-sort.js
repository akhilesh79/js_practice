function customSort(arr) {
  const stringArray = [];
  const numberArray = [];

  for (let input of arr) {
    if (typeof input === 'string') {
      stringArray.push(input);
    } else if (typeof input === 'number') {
      numberArray.push(input);
    }
  }

  // characters first, then numbers
  return [...sortLogic(stringArray), ...sortLogic(numberArray)];
}

function sortLogic(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] > inputArray[j]) {
        let temp = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = temp;
      }
    }
  }
  return inputArray;
}

const input = ['g', 's', 5, 2, 'c', 'e', 6, 1, 'a'];
customSort(input);

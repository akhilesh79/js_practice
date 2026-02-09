function formLargestNumber(arr) {
  //write your implementation here
  if (arr.every((a) => a == 0)) {
    return '0';
  }

  const convertAsStringEachItems = arr.map((a) => {
    return a.toString();
  });

  // sort string in descending order
  for (let i = 0; i < convertAsStringEachItems.length; i++) {
    for (let j = i + 1; j < convertAsStringEachItems.length; j++) {
      if (
        convertAsStringEachItems[i] + convertAsStringEachItems[j] <
        convertAsStringEachItems[j] + convertAsStringEachItems[i]
      ) {
        let temp = convertAsStringEachItems[i];
        convertAsStringEachItems[i] = convertAsStringEachItems[j];
        convertAsStringEachItems[j] = temp;
      }
    }
  }

  return convertAsStringEachItems.join('');
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);

formLargestNumber([3, 30, 34, 5, 9]);
// "9534330"

formLargestNumber([54, 546, 548, 60]);
// "6054854654"

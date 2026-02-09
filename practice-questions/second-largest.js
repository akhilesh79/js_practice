const arr = [1, 2, 4, 5, 6, 12, 10, 12];

const secondLargestNumber = function (arr) {
  let firstL = -Infinity;
  let secondL = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstL) {
      secondL = firstL;
      firstL = arr[i];
    } else if (arr[i] > secondL && arr[i] != firstL) {
      secondL = arr[i];
    }
  }

  console.log(firstL, secondL);
};

const output = arr.reduce(
  (acc, curr) => {
    if (curr > acc.firstL) {
      acc.secondL = acc.firstL;
      acc.firstL = curr;
    } else if (curr > acc.secondL && curr != acc.firstL) {
      acc.secondL = curr;
    }

    return acc;
  },
  { firstL: -Infinity, secondL: -Infinity },
);

secondLargestNumber(arr);
console.log(output);

function findMissingNumber(nums) {
  const arrLength = nums.length;
  const sumOfAllNaturalNumber = (arrLength * (arrLength + 1)) / 2;

  const sum = nums.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);

  return sumOfAllNaturalNumber - sum;
}

//For the purpose of user debugging.
findMissingNumber([3, 0, 1]);

module.exports = findMissingNumber;

// findMissingNumber([3, 0, 1]);           // 2
// findMissingNumber([0, 1]);              // 2
// findMissingNumber([9,6,4,2,3,5,7,0,1]);  // 8
// findMissingNumber([0]);                 // 1

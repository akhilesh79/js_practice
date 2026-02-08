function makeCounter(initialValue = 0) {
  let counter = initialValue;
  return {
    increment: function () {
      counter++;
      return counter;
    },
    decrement: function () {
      counter--;
      return counter;
    },
    reset: function () {
      counter = initialValue;
      return counter;
    },
    current: function () {
      return counter;
    },
  };
}

const counter = makeCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset()); // 5
console.log(counter.increment()); // 6

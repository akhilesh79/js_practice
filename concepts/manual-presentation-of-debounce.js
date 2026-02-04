let count = 0;
const getData = () => {
  console.log('rendering data...', count++);
};

const doSomeMagic = (fn, d) => {
  let timer;
  return () => {
    console.log('doing some magic...', this);
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context);
    }, d);
  };
};

const betterFUnction = doSomeMagic(getData, 300);

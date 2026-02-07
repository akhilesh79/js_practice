/* Polyfills ---------------*/

// 1. poyfills for call.

const obj = {
  firstName: 'Akhilesh',
  lastName: 'Mishra',
  fullName: function (state, country, info) {
    console.log(this.firstName + ' ' + this.lastName + ' is from ' + state + ', ' + country + ', ' + info);
  },
};

const obj2 = {
  firstName: 'Ravi',
  lastName: 'Mishra',
};

// will borrow the full Name function from obj for obj2
obj.fullName.call(obj2, 'Ayodhya', 'India', 'Exta Info');

Function.prototype.myCall = function (...args) {
  if (typeof this != 'function') {
    console.log(this + 'is not a function');
  }
  const params = args.slice(1);
  args[0].fn = this;
  args[0].fn(...params);
};

obj.fullName.myCall(obj2, 'Ayodhya', 'India', 'Exta Info');

// 2. polyfill for apply
//  same as call , its just accept array instead arguments

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this != 'function') {
    console.log(this + 'is not a function');
  }
  context.fn = this;
  const params = args;
  if (!Array.isArray(params)) {
    console.log('arguments passed is not an array');
  }
  context.fn(...params);
};

obj.fullName.myApply(obj2, ['ayodhya', 'india', 'Exta Info']);

// 3. polyfills of bind
// its actually make a copy of function and returns, so that we can use it later on that object
const fullNameBindOnObj2 = obj.fullName.bind(obj2, 'Ayodhya', 'India');
fullNameBindOnObj2('Exta Info');

Function.prototype.myBind = function (...args) {
  if (typeof this != 'function') {
    console.log(this + 'is not a function');
  }
  const fullNameFn = this;
  return (args2) => {
    const context = args[0];
    const params = args.slice(1);
    fullNameFn.apply(context, [...params, ...args2]);
  };
};

const fullNameMyBindOnObj2 = obj.fullName.bind(obj2, 'Ayodhya', 'India');
fullNameMyBindOnObj2(['Exta Info']);

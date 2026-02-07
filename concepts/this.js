/* Understanding of this 
1. In global space, this object referes to a global object. Which in browsers global object is window object, in NodezJS its global likewise its depends on javascript runtime environment.
2. Inside a function , this object value will be undefined 
       - Strict mode: this will be undefined
       - Non strict mode: this will refers to global object - because of "this substitution", it replaces the value with global object if value is null or undefined.
3. This value also depends upon how the function is called
       - If the function is called as a method of an object, this will refer to the object itself.
       - If the function is called as a standalone function, this will refer to the global object (in non-strict mode) or will be undefined (in strict mode).
       - If the function is called using call(), apply(), or bind(), this will refer to the object passed as the first argument to these methods.
4. Arrow function do not have thier own this value, Instead they inherit this value from the enclosinng lexical context.
*/

// Examples

// Example 1: Global context
console.log(this); // In browser, this will refer to the window object

// Example 2: Function context
function regularFunction() {
  console.log(this); // In non-strict mode, this will refer to the global object; in strict mode, it will be undefined
}

// Example 3: Method context
const obj = {
  name: 'Akhilesh',
  regularFunction: function () {
    console.log(this); // This will refer to the obj object
  },
};

// Example 4: Arrow function context
const arrowFunction = () => {
  console.log(this); // This will refer to the enclosing lexical context, which is the global object in this case
};

// Example 5: Using call, apply, and bind
function greet(district, state) {
  console.log(`Hello, ${this.name} from ${district}, ${state}`);
}

greet.call(obj, 'Mumbai', 'Maharashtra'); // This will output: Hello, Akhilesh from Mumbai, Maharashtra
greet.apply(obj, ['Pune', 'Maharashtra']); // This will output: Hello, Akhilesh from Pune, Maharashtra

const boundGreet = greet.bind(obj, 'Nagpur', 'Maharashtra');
boundGreet(); // This will output: Hello, Akhilesh from Nagpur, Maharashtra

// Example 6: This in event handlers
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', function () {
  console.log(this); // This will refer to the button element that was clicked
});

// Example 7: arrow function object method
const obj2 = {
  firstName: 'Akhilesh',
  lastName: 'Mishra',
  fullName: () => {
    console.log(this); // This will refer to the global object, not obj2, because arrow functions do not have their own this
  },
  fullNameRegular: function () {
    const innerArrowFunction = () => {
      console.log(this.firstName + ' ' + this.lastName); // This will refer to obj2, because the arrow function inherits this from the enclosing regular function
    };
    innerArrowFunction();
  },
};

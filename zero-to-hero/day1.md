1. What happens inside the JavaScript engine when a file is executed?
   Explain:
   Compilation phase
   Execution phase
   Memory creation phase

## Whenever a file start getting executed in js engine, first a global execution context is getting created and comes into call stack

in that also there were 2 phase memory creation phase where memory is getting assigned to each variable and functions, then code exection
phase where line by line code is getting executed.
JS Engine first parse the code in tokens and then into AST ( abstract syntax tree)
Then compilation start, its a JIT ( just in-time compilation), means interpreter start execution, in the same the next execution code compiler takes optimised it, convert into Machine level code and then gives them to execute . this way the fast and optimise execution will happen.

2. What is Execution Context?

## Execution Context is created for each function in js. its like container where function variable and inner function got memory first and then execution will get started line by line.

3. What is the difference between:
   Global Execution Context
   Function Execution Context

## Global exection context is the first which will come into call start once js file loaded for exection , in that file whenever we invoke any function, a function execution context is

created.
this object pointer pointing to gobal window object, in function this object will be undefined in strict mode.

4. What is Lexical Environment?
   How is it related to scope chain?

## Lexical envrionment is local memory of a function in which we are in plus the reference of its parent local memory. its related to scope chain, because chain of lexical envrioment is

called as scope chain. and scope we know is like accessibility of variable and function within code is what scope is, means first js try to check if this variable inside the local memory or not, if not then with the help of reference to its parent local memory it will check and try to find out value in parent execution contexts.

5. What will be the output and why?
   var x = 10;

function test() {
console.log(x);
var x = 20;
}

test();

## value of x would be undefined , due to shadowing in js, function shadows the outer var x value inside the function.

6. What will be the output?
   let a = 5;

function outer() {
let a = 10;
function inner() {
console.log(a);
}
inner();
}

outer();

## output would be 10 in this, due to closure been formed.

7. What is the difference between:
   Primitive types
   Reference types
   Explain memory behavior.

## Primitive types are interger , string , boolean and non-primitive or reference types are array and object in js.

8. What is Call Stack?
   What happens during recursion?

## Call stack in present inside js engine where js code is getting executed. during recursion same function called with diff agrument will create function execution context getting pushed

into call stack till the exit point , and then top level exection will be executed and return the result of its to below exection context and poped off from call stack . this all recursive function will be executed.

9. What is Hoisting really?

## Hositing is js is phenomenon by which variable and function got the memory even before single line of code is getting executed, so if we try to access it even before declaration , it wont throw error nstead will the run the code.

10. What is Temporal Dead Zone?

## This is basically for let and const variables where these been hoisted in seperate memory not in gobal space , os we cant access them before its being initialised with value. so the time period starting it been hoisted till initialised , its temporal dead zone. if if we try to access it will throw us reference error.

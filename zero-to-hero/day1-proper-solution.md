# 1️⃣ What Happens When JS File Executes?

When a JavaScript file runs, the JS engine performs the following steps:

---

## 🔹 Step 1: Parsing

- Code → Tokens (Lexical Analysis)
- Tokens → AST (Abstract Syntax Tree)
- Syntax errors are detected here

---

## 🔹 Step 2: Compilation (JIT – Just In Time)

Modern engines like V8 use:

- **Interpreter (Ignition)** → Generates bytecode and starts execution
- **Compiler (TurboFan)** → Optimizes hot code into machine code

Flow:

```
Source Code → AST → Bytecode → Optimized Machine Code
```

## ++

## 🔹 Step 3: Execution Context Creation

Whenever JS runs, it creates:

- Global Execution Context (GEC)
- Function Execution Context (FEC) (for each function call)

Each Execution Context has two phases:

---

### 🟢 Phase 1: Memory Creation Phase

Memory is allocated for:

- `var` → initialized with `undefined`
- `let` & `const` → created but uninitialized (TDZ)
- Function declarations → full function stored in memory

Example:

```js
var a = 10;

function test() {}
```

Memory phase:

```
a → undefined
test → function definition
```

---

### 🟢 Phase 2: Execution Phase

Code executes line by line:

```
a = 10
```

---

# 2️⃣ Execution Context (Deep Structure)

Execution Context is an environment where JS code is evaluated.

It contains:

1. Variable Environment
2. Lexical Environment
3. `this` binding

---

## 🔹 Types of Execution Context

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

---

# 3️⃣ Global vs Function Execution Context

| Global EC                 | Function EC                        |
| ------------------------- | ---------------------------------- |
| Created first             | Created on function call           |
| `this` → window (browser) | Depends on how function is called  |
| Exists until program ends | Destroyed after function completes |

In Node.js:

- Top-level `this` → `{}` (module.exports)

---

# 4️⃣ Lexical Environment (Very Important)

Lexical Environment consists of:

1. Environment Record (variables & functions)
2. Reference to outer lexical environment

Example:

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }
}
```

Inner function has:

- Its own environment
- Reference to outer’s environment

This chain is called:

```
Scope Chain
```

---

# 5️⃣ Variable Shadowing

Example:

```js
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}
```

Memory phase inside `test()`:

```
x → undefined
```

So output:

```
undefined
```

This happens due to **hoisting inside function scope**, not just shadowing.

---

# 6️⃣ Lexical Scope Example

```js
let a = 5;

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
```

Output:

```
10
```

Reason:

- JS resolves variable from nearest lexical scope

---

# 7️⃣ Primitive vs Reference Types

## 🔹 Primitive Types

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Characteristics:

- Stored in Stack
- Passed by value
- Immutable

---

## 🔹 Reference Types

- Object
- Array
- Function
- Date, Map, Set etc.

Characteristics:

- Stored in Heap
- Stack stores reference pointer
- Passed by reference (technically pass-by-sharing)

Example:

```js
let obj1 = { name: 'JS' };
let obj2 = obj1;

obj2.name = 'Node';
console.log(obj1.name); // Node
```

Both point to same heap location.

---

# 8️⃣ Call Stack

Call Stack is a LIFO (Last In First Out) structure.

- Stores execution contexts
- When function called → pushed
- When function returns → popped

---

## 🔹 Recursion Behavior

Each recursive call:

- Creates new execution context
- Pushes into stack

If no base condition:
→ Stack Overflow Error

---

# 9️⃣ Hoisting (Internal Explanation)

Hoisting is NOT moving code.

It happens because:

During Memory Creation Phase:

- Variables and functions are registered in environment record before execution.

Behavior:

| Keyword  | Memory Phase             |
| -------- | ------------------------ |
| var      | initialized as undefined |
| let      | uninitialized            |
| const    | uninitialized            |
| function | fully stored             |

---

# 🔟 Temporal Dead Zone (TDZ)

TDZ is the time between:

```
Variable creation → Variable initialization
```

Example:

```js
console.log(a);
let a = 5;
```

Why error?

Because:

- `a` exists in lexical environment
- But is uninitialized
- Accessing it throws ReferenceError

TDZ exists to:

- Prevent unsafe access
- Encourage predictable behavior

---

# 🧠 Mental Model Summary

When JS runs:

1. Parse → AST
2. Create Global Execution Context
3. Memory Phase
4. Execution Phase
5. Function calls create new execution contexts
6. Scope chain resolves variables
7. Call stack manages execution order

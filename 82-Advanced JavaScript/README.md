# Advanced JavaScript

## Immediately Invoked Function Expressions (IIFE)
`Definition:` An IIFE is a function that runs as soon as it is defined. It helps to create a local scope for variables and avoid polluting the global namespace.

`Syntax:`

```js
(function() {
    console.log('This function runs immediately!');
})();

(() => {
    console.log('This arrow function also runs immediately!');
})();
```

`Use Cases:` Encapsulating code to create a private scope, avoiding global variable conflicts, and initializing variables or running setup code immediately.

## Destructuring
`Definition:` Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

### Array Destructuring:

```js
const array = [1, 2, 3];
const [first, second, third] = array;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

// Skipping values
const [a, , c] = array;
console.log(a); // 1
console.log(c); // 3
```

### Object Destructuring:

```js
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 30

// Renaming variables
const { name: fullName, age: yearsOld } = person;
console.log(fullName); // John
console.log(yearsOld); // 30

// Default values
const { name: n = 'Anonymous', city = 'Unknown' } = person;
console.log(n); // John
console.log(city); // Unknown
```

## Spread Syntax
`Definition:` The spread syntax (...) allows an iterable such as an array or object to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) or key-value pairs (for object literals) are expected.

### Array Spread:

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

### Object Spread:

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

### Function Arguments:

```js
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

## Scopes in JavaScript
### Global Scope:
Variables declared outside any function have global scope and are accessible from anywhere in the code.

```js
var globalVar = 'I am global';
console.log(globalVar); // I am global
```

### Local Scope:
Variables declared within a function have local scope and are only accessible within that function.

```js
function localScope() {
    var localVar = 'I am local';
    console.log(localVar); // I am local
}
localScope();
// console.log(localVar); // Error: localVar is not defined
```

### Block Scope:
Variables declared with let or const within a block (e.g., inside a loop or if statement) are only accessible within that block.

```js
if (true) {
    let blockVar = 'I am block scoped';
    console.log(blockVar); // I am block scoped
}
// console.log(blockVar); // Error: blockVar is not defined
```

## Hoisting
`Definition:` Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. Only declarations are hoisted, not initializations.

### Variable Hoisting:

```js
console.log(hoistedVar); // undefined
var hoistedVar = 'This variable is hoisted';
// Equivalent to:
var hoistedVar;
console.log(hoistedVar); // undefined
hoistedVar = 'This variable is hoisted';
```

### Function Hoisting:

```js
hoistedFunction(); // This function is hoisted

function hoistedFunction() {
    console.log('This function is hoisted');
}

// Function expressions are not hoisted:
try {
    notHoistedFunction(); // Error: notHoistedFunction is not a function
} catch (e) {
    console.log(e.message);
}

var notHoistedFunction = function() {
    console.log('This function is not hoisted');
};
```

Understanding these advanced JavaScript concepts will help you write more efficient, readable, and maintainable code. They are essential tools in a modern JavaScript developer's toolkit.

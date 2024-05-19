# JavaScript Functions

Functions in JavaScript are fundamental building blocks that allow you to encapsulate code into reusable blocks. They can be defined in several ways and can take parameters, return values, and have different scopes.

## Defining Functions
### Function Declaration
A function declaration defines a named function.

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

You can call this function by its name:

```js
console.log(greet('Alice')); // Output: Hello, Alice!
```

### Function Expression
A function expression defines a function inside an expression. It can be anonymous or named.

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Output: Hello, Bob!
```

### Arrow Function
Arrow functions provide a shorter syntax and do not have their own this context.

```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

// If there's a single statement, you can omit the braces and return keyword
const greet = name => `Hello, ${name}!`;

console.log(greet('Charlie')); // Output: Hello, Charlie!
```

## Function Parameters
Functions can take parameters, which are variables listed as part of the function definition.

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

### Default Parameters
You can assign default values to parameters.

```js
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
```

### Return Values
Functions can return values using the return statement.

```js
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);
console.log(result); // Output: 20
```

## Function Scope
Functions can access variables defined in their own scope, their parent scope, and the global scope, but they cannot access variables inside other functions (unless those functions are nested).

```js
let globalVar = 'I am global';

function outer() {
  let outerVar = 'I am outer';

  function inner() {
    let innerVar = 'I am inner';
    console.log(globalVar); // I am global
    console.log(outerVar);  // I am outer
  }

  inner();
  // console.log(innerVar); // Error: innerVar is not defined
}

outer();
```

## Higher-Order Functions
Functions that accept other functions as arguments or return functions are called higher-order functions.

Example: Function as an Argument

```js
function greet(name) {
  return `Hello, ${name}!`;
}

function sayGreeting(greetFunction, name) {
  console.log(greetFunction(name));
}

sayGreeting(greet, 'Dave'); // Output: Hello, Dave!
```

Example: Function Returning Another Function

```js
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const greetHello = createGreeter('Hello');
console.log(greetHello('Eve')); // Output: Hello, Eve!
```

## IIFE (Immediately Invoked Function Expression)
An IIFE is a function that runs as soon as it is defined.

```js
(function() {
  console.log('This function runs immediately!');
})();
```

## Recursion
Functions can call themselves, which is known as recursion. This is useful for tasks that can be divided into similar subtasks.

```js
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

## Conclusion
Functions in JavaScript are versatile and powerful. Understanding how to define, use, and manage them is crucial for writing efficient and maintainable code. Whether you're using traditional function declarations, expressions, or the more concise arrow functions, mastering JavaScript functions will significantly enhance your programming skills.

# JavaScript Variables, Data Types & Objects 

## JavaScript Variables
In JavaScript, variables are used to store data values. Variables can be declared using the `var`, `let`, or `const` keywords.

### Declaration and Initialization
`var:` Function-scoped or globally-scoped, can be re-declared and updated.

```js
var x = 5;
var x = 10; // Re-declaration is allowed
x = 15; // Update is allowed
```

`let:` Block-scoped, cannot be re-declared in the same scope, but can be updated.

```js
let y = 5;
// let y = 10; // SyntaxError: Identifier 'y' has already been declared
y = 10; // Update is allowed
```

`const:` Block-scoped, cannot be re-declared or updated.

```js
const z = 5;
// z = 10; // TypeError: Assignment to constant variable.
```

## JavaScript Data Types
JavaScript has several data types which can be categorized into primitive and non-primitive types.

### Primitive Data Types
`Number:` Represents both integer and floating-point numbers.

```js
let num = 42;
let floatNum = 3.14;
```

`String:` Represents textual data.

```js
let str = "Hello, World!";
```

`Boolean:` Represents logical values: true or false

```js
let isTrue = true;
```

`Null:` Represents the intentional absence of any object value.

```js
let emptyValue = null;
```

`Undefined:` Represents a variable that has been declared but not assigned a value.

```js
let notAssigned;
```

`Symbol:` Represents a unique and immutable value, often used as object keys.

```js
let sym = Symbol('unique');
```

`BigInt:` Represents integers with arbitrary precision.

```js
let bigInt = 1234567890123456789012345678901234567890n;
```

### Non-Primitive Data Types

`Object:` A collection of key-value pairs.

```js
let person = {
    name: "John",
    age: 30
};
```

`Array:` A list-like structure used to store multiple values.

```js
let numbers = [1, 2, 3, 4, 5];
```

## JavaScript Objects
Objects are central to JavaScript and are used to store collections of data and more complex entities.

### Creating an Object
Objects can be created using object literals, the Object constructor, or class syntax.

`Object Literal:`

```js
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
```

`Object Constructor:`

```js
let car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
```

`Class Syntax:`

```js
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let car = new Car("Toyota", "Corolla", 2020);
```

### Accessing Object Properties
Properties can be accessed using dot notation or bracket notation.

`Dot Notation:`

```js
console.log(car.make); // Output: Toyota
```

`Bracket Notation:`

```js
console.log(car["model"]); // Output: Corolla
```

### Methods in Objects
Objects can have methods, which are functions that are properties of the object.

```js
let person = {
    name: "John",
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // Output: Hello, my name is John
```

### Summary
JavaScript variables, data types, and objects form the foundation of the language. Understanding how to declare and use variables, recognize different data types, and manipulate objects is crucial for effective JavaScript programming.


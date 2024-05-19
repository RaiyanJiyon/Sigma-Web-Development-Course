# JavaScript Loops

JavaScript loops are used to perform repeated tasks based on a condition. Conditions typically return true or false, allowing the loop to run until the condition becomes false. There are several types of loops in JavaScript:

**1. for Loop**
The for loop is commonly used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- Initialization: let i = 0 sets the starting value of i.
- Condition: i < 5 checks if the loop should continue running.
- Increment/Decrement: i++ updates the value of i after each iteration.

**2. while Loop**
The while loop is used when the number of iterations is not known in advance. It runs as long as the specified condition is true.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**3. do...while Loop**
The do...while loop is similar to the while loop, but it guarantees that the code inside the loop is executed at least once.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

**4. for...in Loop**
The for...in loop is used to iterate over the properties of an object.

```js
const person = { name: 'Alice', age: 25, city: 'New York' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

**5. for...of Loop**
The for...of loop is used to iterate over iterable objects (arrays, strings, maps, sets, etc.).

```js
const arr = [10, 20, 30, 40];
for (let value of arr) {
  console.log(value);
}
```

**Loop Control Statements**
`break`
The break statement is used to exit a loop prematurely.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

`continue`
The continue statement skips the current iteration and proceeds to the next iteration of the loop.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

#### Examples
Using a for loop to iterate over an array:

```js
const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Using a while loop to decrement a number:

```js
let num = 5;
while (num > 0) {
  console.log(num);
  num--;
}
```

Using a do...while loop to execute code at least once:

```js
let x = 0;
do {
  console.log('This will print at least once');
  x++;
} while (x < 0);
```

Using for...in to iterate over object properties:

```js
const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}
```

Using for...of to iterate over elements of an iterable:

```js
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
```

### Conclusion
Loops in JavaScript are powerful constructs that help in executing repetitive tasks efficiently. By understanding and utilizing different types of loops and control statements, you can handle various iterative scenarios in your applications.
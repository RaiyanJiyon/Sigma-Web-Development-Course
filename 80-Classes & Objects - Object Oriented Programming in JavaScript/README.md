# Classes & Objects - Object Oriented Programming in JavaScript

Object-Oriented Programming (OOP) in JavaScript allows you to create classes and objects to model real-world entities and relationships. Here is a comprehensive overview of classes and objects in JavaScript:

## Classes in JavaScript
A class is a blueprint for creating objects. It defines properties and methods that the created objects will have. JavaScript introduced the class syntax in ECMAScript 6 (ES6).

### Defining a Class
You define a class using the `class` keyword:

```js
class Person {
    // The constructor method is called when a new object is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // A method of the class
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
```

Creating an Object
An object is an instance of a class. You create an object using the `new` keyword:

```js
const person1 = new Person('Raiyan', 24);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

## Properties and Methods
- Properties are variables that hold data specific to the object.
- Methods are functions that define behaviors of the object.

```js
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.displayInfo(); // Output: Car: Toyota Corolla, Year: 2020
```

## Inheritance
Inheritance allows one class to extend another, inheriting its properties and methods. The extends keyword is used for this purpose.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the constructor of the parent class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex barks.
```

## Encapsulation
Encapsulation is the concept of restricting access to certain details of an object and only exposing what is necessary. This is typically done using methods to access and update the properties.

```js
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance; // Using underscore to indicate private property
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposit successful. New balance: ${this._balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawal successful. New balance: ${this._balance}`);
        } else {
            console.log('Withdrawal amount exceeds balance.');
        }
    }

    get balance() {
        return this._balance;
    }
}

const account = new BankAccount('John Doe', 1000);
account.deposit(500);  // Output: Deposit successful. New balance: 1500
account.withdraw(300); // Output: Withdrawal successful. New balance: 1200
console.log(account.balance); // Output: 1200
```

## Polymorphism
Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. This is useful for writing more generic and reusable code.

```js
class Bird {
    fly() {
        console.log('The bird is flying.');
    }
}

class Sparrow extends Bird {
    fly() {
        console.log('The sparrow is flying.');
    }
}

class Eagle extends Bird {
    fly() {
        console.log('The eagle is soaring.');
    }
}

const birds = [new Sparrow(), new Eagle()];

birds.forEach(bird => {
    bird.fly();
});
// Output:
// The sparrow is flying.
// The eagle is soaring.
```

## Conclusion
Classes and objects in JavaScript provide a powerful way to structure your code using the principles of OOP. By utilizing features like inheritance, encapsulation, and polymorphism, you can create modular, reusable, and maintainable code. Understanding and applying these concepts effectively is key to mastering JavaScript development.
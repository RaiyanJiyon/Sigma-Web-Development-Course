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

const person1 = new Person('Raiyan', 24);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

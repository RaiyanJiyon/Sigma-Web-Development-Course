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

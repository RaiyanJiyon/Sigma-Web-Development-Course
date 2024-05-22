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

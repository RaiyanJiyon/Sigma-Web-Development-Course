// for loop example
const fruits = ['banana', 'mangoo', 'apple']

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// while loop example
num = 5;

while (num > 0) {
    console.log(num);
    num--;
}

// do...while loop example
let x = 0;
do {
    console.log("This will print at least once")
    x++;
} while (x < 0);


// for...in loop example
const car = {
    'brand': 'Toyata',
    'model': 'Corolla',
    year: 2020
};

for (let prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}

// for...of loop example
const colors = ['red', 'green', 'white']

for (let color of colors) {
    console.log(color);
}
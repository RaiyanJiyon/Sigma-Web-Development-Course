let fruits = ['apple', 'banana', 'cherry'];

let vegetables = new Array('carrot', 'broccoli', 'asparagus');


console.log(fruits[0]);

fruits[1] = 'blueberry';
console.log(fruits);

console.log(fruits.length);

fruits.push('date');
console.log(fruits);

fruits.pop('date');
console.log(fruits);

fruits.unshift('date');
console.log(fruits);

fruits.shift('date');
console.log(fruits);

let moreFruits = fruits.concat(['elderberry', 'fig']);

console.log(moreFruits);

let someFruits = fruits.slice(1, 3);
console.log(someFruits);

fruits.splice(1, 1, 'blackberry');
console.log(fruits);

console.log(fruits.indexOf('cherry'));

console.log(fruits.includes('cherry'));

fruits.forEach(function(fruit) {
    console.log(fruit)
});


let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(upperFruits);


let longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});

console.log(longNamedFruits);


let totalLength = fruits.reduce(function(accumulator, fruit) {
    return accumulator + fruit.length;
}, 0);
console.log(totalLength)


let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[0][1]);
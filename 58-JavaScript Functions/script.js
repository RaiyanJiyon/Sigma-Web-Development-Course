// function greet(name) {
//     return `hello, ${name}`
// }

// console.log(greet("Raiyan Jiyon"))


const greet = (name) => {
    return `hello ${name}!`
};

console.log(greet('Charlie'));

function add(a, b, c = 30) {
    return a + b + c;
}

result = add(10, 20)
console.log(result)
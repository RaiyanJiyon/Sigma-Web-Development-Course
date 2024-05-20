// Using for loops
function factorialUsingForLoop(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

try {
    console.log(factorialUsingForLoop(0)); // 1
    console.log(factorialUsingForLoop(1)); // 1
    console.log(factorialUsingForLoop(5)); // 120
} catch (error) {
    console.error(error.message);
}


// Using reduce
function factorialUsingReduce(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}

try {
    console.log(factorialUsingReduce(0)); // 1
    console.log(factorialUsingReduce(1)); // 1
    console.log(factorialUsingReduce(5)); // 120
} catch (error) {
    console.error(error.message);
}

function sumUntilNegative(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) {
            break; // Exit the loop if a negative number is encountered
        }
        sum += num; // Add the number to the sum
    }
    return sum;
}

// Example usage
let numbers = [1, 2, 3, 4, -1, 5, 6];
let result = sumUntilNegative(numbers);
console.log(result); // Output: 10 (1 + 2 + 3 + 4)

function countVowels(str) {
    // Define a string of vowels for easy checking
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
let exampleString = "Hello World!";
let vowelCount = countVowels(exampleString);
console.log(`Number of vowels in "${exampleString}":`, vowelCount); // Output: 3

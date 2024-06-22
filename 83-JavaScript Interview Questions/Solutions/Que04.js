function validatePassword(password) {
    // Regular expressions to check each criteria
    const lengthCheck = /.{8,}/;
    const uppercaseCheck = /[A-Z]/;
    const lowercaseCheck = /[a-z]/;
    const digitCheck = /[0-9]/;

    // Check each criteria
    const isLongEnough = lengthCheck.test(password);
    const hasUppercase = uppercaseCheck.test(password);
    const hasLowercase = lowercaseCheck.test(password);
    const hasDigit = digitCheck.test(password);

    // Log intermediate results for debugging
    console.log("Length Check (>= 8):", isLongEnough);
    console.log("Uppercase Check (A-Z):", hasUppercase);
    console.log("Lowercase Check (a-z):", hasLowercase);
    console.log("Digit Check (0-9):", hasDigit);

    // Return true if all criteria are met, otherwise false
    return isLongEnough && hasUppercase && hasLowercase && hasDigit;
}

// Example usage
const passwords = [
    "Password123", // valid
    "password123", // missing uppercase
    "PASSWORD123", // missing lowercase
    "Password",    // missing digit
    "Pass123",     // too short
];

passwords.forEach(pw => {
    console.log(`Password "${pw}" is valid:`, validatePassword(pw));
});

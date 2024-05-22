function validInput(input) {
    if (!input) {
        throw new Error('Invalid input provided');
    }
    return input; // Return the valid input
}

try {
    let result = validInput("Hello");
    console.log(result); // This will log "Hello"
} catch (error) {
    console.error(error.message);
}

function someFunctionThatMightFail(a, b) {
    let result = parseInt(a) + parseInt(b);
    return result
}

try {
    let result = someFunctionThatMightFail(10, ab);
    console.log("Result: ",result)
} catch (error) {
    console.error("An error occurred: ", error.message);
}
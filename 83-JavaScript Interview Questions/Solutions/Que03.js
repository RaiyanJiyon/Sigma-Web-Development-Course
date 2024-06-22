function mirrorString(str) {
    // Reverse the original string
    let reversedStr = str.split('').reverse().join('');
    
    // Append the reversed string to the original string
    let mirroredStr = str + reversedStr;
    
    return mirroredStr;
}

// Example usage
let originalString = "hello";
let mirroredString = mirrorString(originalString);

console.log(mirroredString);  // Output: "helloolleh"

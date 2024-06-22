function doubleTrouble(arr1, arr2) {
    // Helper function to double the elements while avoiding consecutive duplicates
    function processArray(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            // Check if the current element is the same as the previous one
            if (i > 0 && arr[i] === arr[i - 1]) {
                result.push(arr[i]); // Just add it without doubling
            } else {
                result.push(arr[i] * 2); // Double the element
            }
        }
        return result;
    }
    
    // Process both arrays
    let doubledArr1 = processArray(arr1);
    let doubledArr2 = processArray(arr2);
    
    console.log('Doubled arr1:', doubledArr1);
    console.log('Doubled arr2:', doubledArr2);
    
    return { doubledArr1, doubledArr2 };
}

let arr1 = [1, 2, 2, 3, 4, 5, 5, 6];
let arr2 = [4, 5, 6, 6, 7, 8, 9, 9];

let result = doubleTrouble(arr1, arr2);

console.log('Result:', result);

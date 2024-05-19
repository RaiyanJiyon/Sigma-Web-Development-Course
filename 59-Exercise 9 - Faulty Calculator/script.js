const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Which operation do you want to perform?\n(+)\n(-)\n(x)\n(/) ");

rl.question('', (userOperation) => {
    rl.question('Enter First Number: ', (num1) => {
        rl.question('Enter Second Number: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            // Function to determine if we should use the faulty operation
            function shouldFault() {
                return Math.random() < 0.1; // 10% chance to perform the wrong operation
            }

            if (userOperation == "+") {
                if (shouldFault()) {
                    result = num1 - num2;
                    console.log("Faulty operation: Used - instead of +");
                } else {
                    result = num1 + num2;
                }
            } else if (userOperation == "-") {
                if (shouldFault()) {
                    result = num1 / num2;
                    console.log("Faulty operation: Used / instead of -");
                } else {
                    result = num1 - num2;
                }
            } else if (userOperation == "x") {
                if (shouldFault()) {
                    result = num1 + num2;
                    console.log("Faulty operation: Used + instead of x");
                } else {
                    result = num1 * num2;
                }
            } else if (userOperation == "/") {
                if (shouldFault()) {
                    result = Math.pow(num1, num2); // num1 raised to the power of num2
                    console.log("Faulty operation: Used ** instead of /");
                } else {
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        console.log("Error: Division by zero is not allowed.");
                        result = undefined;
                    }
                }
            } else {
                console.log("Invalid operation selected.");
                result = undefined;
            }

            if (result !== undefined) {
                console.log("The result is: " + result);
            }

            rl.close();
        });
    });
});

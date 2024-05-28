const messages = [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."
];

const output = document.getElementById("output");
const dots = document.getElementById("dots");

function simulateHacking() {
    let index = 0;

    function displayNextMessage() {
        if (index < messages.length) {
            output.textContent = messages[index];
            index++;
            setTimeout(displayNextMessage, Math.floor(Math.random() * 7000) + 1000);
        }
    }

    displayNextMessage();
}

simulateHacking();

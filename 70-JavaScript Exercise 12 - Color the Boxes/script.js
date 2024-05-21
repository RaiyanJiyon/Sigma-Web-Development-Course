// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Select all elements with the class 'box'
document.querySelectorAll('.box').forEach((box) => {
    // Apply random background color
    box.style.backgroundColor = getRandomColor();
    // Apply random text color
    box.style.color = getRandomColor();
});

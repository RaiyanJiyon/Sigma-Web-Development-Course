let parentElement = document.getElementById('parent');

// Accessing children
let firstChild = parentElement.firstElementChild;
let lastChild = parentElement.lastElementChild;
console.log(firstChild.textContent); // Output: Child 1
console.log(lastChild.textContent);  // Output: Child 3

// Accessing siblings
let secondChild = firstChild.nextElementSibling;
console.log(secondChild.textContent); // Output: Child 2

// Modifying content
lastChild.textContent = 'Updated Child 3';
console.log(lastChild.textContent); // Output: Updated Child 3


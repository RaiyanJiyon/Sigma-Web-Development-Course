// Select by ID
let container = document.getElementById('container');
console.log(container);

// Select by class name
let paragraphs = document.getElementsByClassName('text');
console.log(paragraphs);

// Select by tag name
let allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

// Select by CSS selector (first match)
let firstHighlight = document.querySelector('.highlight');
console.log(firstHighlight);

// Select by CSS selector (all matches)
let allHighlights = document.querySelectorAll('.highlight');
console.log(allHighlights);

// Manipulate selected elements
container.style.border = '2px solid blue';
paragraphs[0].textContent = 'Updated Paragraph 1';
firstHighlight.style.color = 'red';
allParagraphs[2].style.fontWeight = 'bold';
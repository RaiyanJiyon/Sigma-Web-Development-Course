let parentElement = document.getElementById('parent');
let referenceChild = document.getElementById('referenceChild');

document.getElementById('addElement').addEventListener('click', function () {
    let newElement = document.createElement('div');
    newElement.textContent = 'This is a new Element';
    parentElement.insertBefore(newElement, referenceChild);
});

document.getElementById('removeElement').addEventListener('click', function () {
    if (parentElement.contains(referenceChild)) {
        parentElement.removeChild(referenceChild);
    }
});
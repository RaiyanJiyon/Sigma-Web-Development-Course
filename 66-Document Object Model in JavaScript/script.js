console.log(document);

let element = document.getElementById('myElement');

let elements = document.getElementsByClassName('myClass');

let element1 = document.getElementsByTagName('div');

let element2 = document.querySelector('.myClass');

let element3 = document.querySelectorAll('p');

element.textContent = 'New Text';

element.innerHTML = '<strong>New Content</strong>';


element.classList.add('newClass');
element.classList.remove('oldClass');

# JavaScript - Selecting by Ids, Classes, and More

In JavaScript, selecting elements from the DOM is a fundamental task that allows you to manipulate and interact with web pages. You can select elements by their ID, class, tag name, and more using various methods provided by the document object.

## Selecting Elements by ID
To select an element by its ID, you can use the `getElementById` method. This method returns the first element with the specified ID.

```js
let element = document.getElementById('myElementId');
console.log(element);
```

## Selecting Elements by Class Name
To select elements by their class name, you can use the `getElementsByClassName` method. This method returns a live HTMLCollection of all elements with the specified class name.

```js
let elements = document.getElementsByClassName('myClassName');
console.log(elements);
```

## Selecting Elements by Tag Name
To select elements by their tag name, you can use the `getElementsByTagName` method. This method returns a live HTMLCollection of all elements with the specified tag name.

```js
let elements = document.getElementsByTagName('div');
console.log(elements);
```

## Selecting Elements by CSS Selectors
To select elements using CSS selectors, you can use the `querySelector` and `querySelectorAll` methods.

- <b>querySelector:</b> Returns the first element that matches the specified CSS selector.

  ```js
  let element = document.querySelector('.myClass');
  console.log(element);
  ```

- <b?>querySelectorAll:</b> Returns a NodeList of all elements that match the specified CSS selector.

  ```js
  let elements = document.querySelectorAll('.myClass');
  console.log(elements);
  ```

### Example: Selecting and Manipulating Elements
Here's an example that demonstrates how to select elements using different methods and manipulate them:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Selection Example</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
  <div id="container">
    <p class="text">Paragraph 1</p>
    <p class="text highlight">Paragraph 2</p>
    <p>Paragraph 3</p>
  </div>

  <script>
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
  </script>
</body>
</html>
```

### Summary
- `getElementById:` Selects a single element by its ID.
- `getElementsByClassName:` Selects multiple elements by their class name.
- `getElementsByTagName:` Selects multiple elements by their tag name.
- `querySelector:` Selects the first element that matches a CSS selector.
- `querySelectorAll:` Selects all elements that match a CSS selector.

Using these methods, you can effectively select and manipulate elements within the DOM to create dynamic and interactive web pages.








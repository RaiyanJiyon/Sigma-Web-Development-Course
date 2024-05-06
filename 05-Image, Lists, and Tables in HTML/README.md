# Image, Lists, and Tables in HTML

Let's go through how to incorporate images, lists, and tables in HTML:

**Images (`<img>`):**
- Images are added to HTML using the `<img>` tag.
- The src attribute specifies the URL of the image file.
- You can also provide alternative text using the alt attribute, which is important for accessibility.
- Example:

```html
<img src="image.jpg" alt="Description of the image">
```

**Lists (Ordered <`ol`> and Unordered <`ul`>):**
- Lists are used to group related items together.
- There are two main types of lists: ordered (numbered) and unordered (bulleted).
- Items in a list are defined using the <`li`> (list item) tag.
- Example of an unordered list:

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

- Example of an ordered list:

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

**Tables (`<table>`):**
- Tables are used to display data in rows and columns.
- Tables consist of three main components: <`table`> (the table itself), <`tr`> (table row), and <`td`> (table data/cell).
- You can also use <`th`> (table header cell) to define header cells in the first row of the table.
- Example:

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Location</th>
    </tr>
    <tr>
        <td>John</td>
        <td>30</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>25</td>
        <td>London</td>
    </tr>
</table>
```

Putting it all together, here's an example that incorporates images, lists, and a table:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image, Lists, and Table</title>
</head>
<body>
    <h1>HTML Basics</h1>

    <h2>Image</h2>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">

    <h2>Lists</h2>
    <h3>Unordered List</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h3>Ordered List</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <h2>Table</h2>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>John</td>
            <td>30</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>25</td>
            <td>London</td>
        </tr>
    </table>
</body>
</html>
```

This example showcases how to integrate images, lists, and tables into an HTML document.
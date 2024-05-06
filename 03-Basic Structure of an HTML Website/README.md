# Basic Structure of an HTML Website

The basic structure of an HTML website typically consists of several key components. Here's a breakdown of each component:

**Document Type Declaration (DOCTYPE):**
The `<!DOCTYPE html>` declaration is used to specify the document type and version of HTML being used. It tells the web browser which version of HTML the page is written in.

**HTML Element:**
The `<html>` element is the root element of an HTML document. All other elements are nested inside this element.

**Head Section:**
The `<head>` section contains meta-information about the document, such as the page title, character encoding, stylesheets, scripts, and other metadata.
Common elements within the `<head>` section include:
- `<meta>`: Defines metadata about the HTML document, such as character encoding and viewport settings.
- `<title>`: Sets the title of the webpage, which appears in the browser's title bar or tab.
- `<link>`: Specifies external resources, such as stylesheets (CSS) or web fonts.
- `<script>`: Includes JavaScript code or references to external JavaScript files.
- Other metadata elements like `<style>`, `<base>`, etc.

**Body Section:**
The `<body>` section contains the main content of the webpage, including text, images, links, forms, and other elements.
This is where you structure the visible part of your website that users interact with.
Common elements within the `<body>` section include:
- Text elements like headings (`<h1>`, `<h2>`, etc.), paragraphs (`<p>`), lists (`<ul>`, `<ol>`, `<li>`), etc.
- Structural elements like `<div>` and `<span>` for grouping and styling content.
- Media elements like images (`<img>`), audio (`<audio>`), and video (`<video>`).
- Hyperlinks (`<a>`) for linking to other web pages or resources.
- Form elements (`<form>`, `<input>`, `<button>`, etc.) for user input and interaction.

Here's an example of the basic structure of an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Your Website</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <main>
        <article>
            <h2>About Us</h2>
            <p>This is the main content of your webpage.</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

This structure provides a foundation for building web pages. You can customize and expand upon it to create complex and interactive websites.







# Inline, Internal & External CSS

Inline CSS, internal CSS, and external CSS are different methods for applying styles to HTML documents. Each method has its advantages and use cases. Here's an explanation of each:

## Inline CSS:
- Inline CSS is applied directly to individual HTML elements using the style attribute.
- Styles specified inline override any styles defined in external or internal CSS.
- Example:

```html
<p style="color: blue; font-size: 16px;">This is a paragraph with inline styles.</p>
```

- Inline CSS is useful for applying quick, one-off styles to specific elements. 
However, it can lead to code duplication and reduced maintainability, especially for large-scale projects.

## Internal CSS:
- Internal CSS is defined within the `<style>` element in the `<head>` section of an HTML document.
- Styles defined internally apply to the entire document or specific sections as specified by the selectors.
- Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This is a paragraph with internal styles.</p>
</body>
</html>
```

- Internal CSS is useful for applying styles consistently across multiple elements within a document. It offers better maintainability than inline CSS but may still lead to code duplication if used excessively.

## External CSS:
- External CSS is defined in a separate CSS file and linked to the HTML document using the `<link>` element.
- Styles defined externally can be reused across multiple HTML documents, promoting code reusability and maintainability.
- Example:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph with external styles.</p>
</body>
</html>
```

```css
/* styles.css */
p {
    color: blue;
    font-size: 16px;
}
```

- External CSS is ideal for large-scale projects with multiple HTML pages. It promotes maintainability, improves performance by separating content from presentation, and allows for easier collaboration among developers.

Each method of applying CSS has its place in web development, and the choice depends on factors such as project size, complexity, maintainability, and performance requirements.
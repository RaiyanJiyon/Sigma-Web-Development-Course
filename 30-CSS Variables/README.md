# CSS Variables

CSS Variables, also known as Custom Properties, are entities defined by CSS authors that contain specific values to be reused throughout a document. They are similar to variables in programming languages, allowing you to store information that you can later reference and change dynamically.

Here's a basic example of defining and using CSS variables:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.element {
  color: var(--primary-color);
  background-color: var(--secondary-color);
}
```

In this example:

`:root` is a pseudo-class that selects the root element of the document, usually `<html>`. Defining variables here makes them available globally throughout the document.
`--primary-color` and `--secondary-color` are CSS variables defined with `--` prefix.
`var()` function is used to reference the value of a CSS variable. It accepts the name of the variable as an argument.
CSS Variables offer several advantages:

- **Reusability:** You can define a value once and reuse it multiple times, making your CSS more maintainable.
- **Dynamic Changes:** CSS variables can be updated dynamically using JavaScript, allowing you to change styles on the fly without modifying CSS files directly.
- **Scoped Variables:** You can define variables in specific scopes, like inside a selector or a media query, allowing for more granular control.

Overall, CSS Variables provide a powerful mechanism for managing and manipulating styles in web development.

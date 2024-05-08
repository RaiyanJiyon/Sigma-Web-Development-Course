# CSS Display Property

The CSS `display` property is used to specify the type of box used for an HTML element. It controls how an element is rendered in the layout of the webpage. Here are some common values of the `display` property and their meanings:

## block:

- The element generates a block-level box.
- It takes up the full width available and starts on a new line.
- Examples: `<div>`, `<p>`, `<h1>`-`<h6>`, `<li>`, `<section>`, `<footer>`, etc.

## inline:

- The element generates an inline-level box.
- It does not start on a new line and only takes up as much width as necessary.
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, etc.

## inline-block:

- The element generates an inline-level box that behaves like a block-level box.
- It does not start on a new line but can have width, height, margins, and padding applied.
- Examples: Elements set to `display: inline-block;` behave like inline elements but can have block-like properties.

## none:

- The element is removed from the document flow and does not generate any box.
- It is not rendered on the page, effectively hiding it.
- Example: Used for elements that should not be displayed, such as for toggling visibility with JavaScript.

## flex:

- The element generates a flex container box.
- It enables a flex context for its direct children, allowing for flexible layouts.
- Example: Used to create flexible and responsive layouts using Flexbox.

## grid:

- The element generates a grid container box.
- It enables a grid context for its direct children, allowing for complex grid layouts.
- Example: Used to create grid-based layouts using CSS Grid.

## table:

- The element generates a table display box.
- It behaves like a table element, enabling the use of table-related properties like table-row, table-cell, etc.
- Example: Used to create table-like layouts without using actual `<table>` elements.

These are some of the common values of the `display` property in CSS. Choosing the appropriate display value for an element depends on its role and desired layout behavior within the webpage.

# CSS Selectors MasterClass

CSS selectors are powerful tools for targeting specific HTML elements to apply styles. Understanding and mastering CSS selectors is essential for effective styling of web pages. Here's a masterclass covering various CSS selectors:

- Universal Selector (*):
  - Selects all elements on the page.
  - Example: `* { margin: 0; padding: 0; }`

- Element Selector:
  - Selects all elements of a specific type.
  - Example: `p { color: blue; }`

- Class Selector (.class):
  - Selects all elements with a specific class attribute.
  - Example: `.highlight { background-color: yellow; }`

- ID Selector (#id):
  - Selects a single element with a specific ID attribute.
  - Example: `#header { font-size: 24px; }`

- Attribute Selector:
  - Selects elements based on their attributes.
  - Example:
    - `[type="text"]` selects all input elements with `type="text"`.
    - `[href^="https"]` selects all elements with an `href` attribute starting with "https".

- Descendant Selector (Whitespace):
  - Selects an element that is a descendant of another element.
  - Example: `div p { font-style: italic; }` selects all `p` elements inside `div` elements.

- Child Selector (>):
  - Selects an element that is a direct child of another element.
  - Example: `ul > li { list-style-type: square; }` selects `li` elements that are direct children of `ul` elements.

- Adjacent Sibling Selector (+):
  - Selects an element that is immediately preceded by a specified sibling element.
  - Example: `h2 + p { font-weight: bold; }` selects `p` elements that are immediately preceded by `h2` elements.

- General Sibling Selector (~):
  - Selects all sibling elements that follow a specified element.
  - Example: `h2 ~ p { color: green; }` selects all `p` elements that follow `h2` elements.

- Pseudo-classes:
  - Selects elements based on their state or position.
  - Examples:
    - `:hover` selects elements when the mouse hovers over them.
    - `:nth-child()` selects elements based on their position in the parent.
    - `:focus` selects elements when they receive focus.

- Pseudo-elements:
  - Selects specific parts of an element.
  - Examples:
    - `::before` inserts content before the content of an element.
    - `::after` inserts content after the content of an element.

Understanding these CSS selectors allows you to target and style HTML elements precisely, giving you full control over the appearance of your web pages.

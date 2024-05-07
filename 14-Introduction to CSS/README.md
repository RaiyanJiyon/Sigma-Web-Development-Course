# Introduction to CSS

CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It controls the layout, formatting, and appearance of web pages, allowing developers to style HTML elements to create visually appealing and consistent designs. Here's an introduction to CSS:

**Separation of Content and Presentation:**
- CSS allows the separation of content (HTML) from presentation (styling).
- This separation enhances maintainability and flexibility, as changes to the presentation can be made without altering the underlying content.

**Selectors and Declarations:**
- CSS uses selectors to target HTML elements and declarations to define styling properties.
- Selectors specify which elements the style rules apply to, while declarations define how those elements should be styled.
- Example

```css
/* Selector */
h1 {
    /* Declaration */
    color: blue;
    font-size: 24px;
}
```

**Property-Value Pairs:**
- CSS properties define specific aspects of an element's presentation, such as color, font size, margin, padding, etc.
- Values specify the settings for the properties.
- Example:

```css
/* Property: Value */
color: blue;
font-size: 24px;
```

**Cascade and Specificity:**
- CSS follows the cascade, which determines the order of precedence when multiple style rules apply to the same element.
- Specificity refers to the hierarchy of selectors used to determine which styles apply to an element.
- Inline styles, embedded styles (within <style> tags), and external stylesheets have different levels of specificity.

**Box Model:**
- The box model describes the layout of elements on a webpage.
- Each HTML element is treated as a rectangular box with properties like width, height, padding, border, and margin.
- Understanding the box model is essential for controlling spacing and layout in CSS.

**Responsive Design:**
- CSS enables responsive design, allowing web pages to adapt to different screen sizes and devices.
- Media queries are used to apply different styles based on factors such as screen width, orientation, and resolution.

**CSS Frameworks:**
- CSS frameworks like Bootstrap, Foundation, and Bulma provide pre-designed styles and components to streamline the development process.
- They offer reusable CSS classes and components for creating responsive layouts, navigation menus, forms, and more.

CSS is a powerful tool for web development, offering extensive capabilities for styling and layout. With CSS, developers can create visually appealing, responsive, and user-friendly websites.

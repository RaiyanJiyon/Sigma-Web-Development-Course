# CSS Box Model - Margin, Padding & Borders

The CSS box model describes the layout of elements in a web page by considering each element as a rectangular box. This box consists of four areas: content, padding, border, and margin. Understanding the box model is essential for controlling the spacing and layout of elements on a webpage. Here's an overview of margin, padding, and borders in the CSS box model:

## Margin:
- Margins are the space outside the border of an element.
- They create space between the element's border and adjacent elements.
- Margins can be set using properties like margin-top, margin-right, margin-bottom, and margin-left.
- Margin values can be specified in various units like pixels, percentages, ems, etc.
- Example:

```css
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}
```

## Padding:
- Padding is the space between the content of an element and its border.
- It creates space inside the element's border.
- Padding can be set using properties like padding-top, padding-right, padding-bottom, and padding-left.
- Padding values can be specified in the same units as margins.
- Example:

```css
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}
```

## Borders:
- Borders surround the padding and content of an element.
- They can have different styles (solid, dashed, dotted, etc.), widths, and colors.
- Border properties include border-style, border-width, and border-color.
- Borders can be set on individual sides using properties like border-top, border-right, border-bottom, and border-left.
- Example:

```css
div {
    border: 1px solid black; /* shorthand property */
    border-top: 2px dashed blue;
    border-bottom-width: 3px;
    border-left-color: red;
}
```

By adjusting margins, padding, and borders, you can control the spacing and appearance of elements on your webpage. Understanding how these properties interact within the CSS box model is crucial for creating well-designed layouts.
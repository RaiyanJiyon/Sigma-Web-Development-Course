# CSS Shadows and Outlines

CSS provides properties to create shadows and outlines around elements, enhancing their visual appearance and creating depth. Here's an overview of CSS properties for shadows and outlines:

## Box Shadow:
- The box-shadow property creates a shadow effect around the border of an element's box.
- It takes values for horizontal and vertical offsets, blur radius, spread radius, and color.
- Example:

```css
.box {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
```

## Text Shadow:
- The text-shadow property creates a shadow effect behind text.
- It takes values for horizontal and vertical offsets, blur radius, and color.
- Example:

```css
.text {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
```

## Outline:
- The outline property draws a line around the border of an element, outside the border edge.
- It is often used to highlight elements without affecting their layout.
- Example:

```css
.element {
    outline: 2px solid red;
}
```

## Outline Offset:
- The outline-offset property sets the space between an outline and the edge of an element.
- It helps in controlling the distance between the outline and the element.
- Example:

```css
.element {
    outline: 2px solid red;
    outline-offset: 5px;
}
```

## Outline Color:
- The outline-color property sets the color of an outline.
- It allows customizing the color of the outline independently.
- Example:

```css
.element {
    outline: 2px solid;
    outline-color: blue;
}
```

These properties allow you to add visual effects like shadows and outlines to elements, improving their appearance and making them stand out on the page. Experimenting with different values and combinations can help achieve the desired visual effects for your design.

# Styling Lists using CSS

Styling lists using CSS allows you to customize their appearance, such as changing the bullet style, adding spacing between list items, and changing the text alignment. Here's how you can style lists using CSS:

## Changing Bullet Style:
- Use the list-style-type property to change the style of bullets in unordered lists (`<ul>`).
- Use values like disc, circle, square, or none to change the bullet style.
- Example:

```css
ul {
    list-style-type: circle;
}
```

## Adding Spacing:
- Use properties like margin or padding to add spacing between list items.
- Example:

```css
ul {
    margin: 0;
    padding: 10px;
}
li {
    margin-bottom: 5px;
}
```

## Changing Text Alignment:
- Use the text-align property to change the alignment of text within list items.
- Example:

```css
ul {
    text-align: center;
}
```

## Customizing List Item Marker:
- Use the list-style-image property to use an image as the bullet marker.
- Example:

```css
ul {
    list-style-image: url('bullet.png');
}
```

## Removing Default List Styles:
- Use the list-style property to remove default list styles.
- Example:

```css
ul {
    list-style: none;
}
```

## Nesting Lists:
- Apply styles to nested lists by targeting their parent `<ul>` or `<ol>` elements and using descendant selectors.
- Example:

```css
.parent-ul li {
    color: blue;
}
.parent-ul .child-ul li {
    color: red;
}
```

By applying these CSS styles, you can create visually appealing and customized lists that match the design of your website. Experiment with different styles to achieve the desired look and feel.

# CSS Flexbox - Ultimate MasterClass

CSS Flexbox is a powerful layout model that allows you to design flexible and responsive layouts more easily than traditional methods. With Flexbox, you can control the alignment, distribution, and order of elements within a container along a single axis or across both axes.

## Basic Concepts:

### Flex Container:

- To create a flex container, you set the `display` property of the container's 
parent element to `flex` or `inline-flex`.
- Any direct child elements of the flex container become flex items.

Example:

```css
.flex-container {
  display: flex;
  /* or display: inline-flex; */
}
```

### Flex Items:
- Flex items are the immediate children of a flex container.
- By default, flex items will try to fit in a single row (if the container is horizontal) or a single column (if the container is vertical).

Example:

```css
.flex-item {
  /* Styles for flex items */
}
```

## Properties:

### Flex Container Properties:
- `flex-direction`: Defines the main axis of the flex container and the direction in which flex items are laid out.
- `justify-content`: Aligns flex items along the main axis of the flex container.
- `align-items`: Aligns flex items along the cross axis of the flex container.
- `align-content`: Aligns flex lines (when wrapping is enabled) along the cross axis of the flex container.
- `flex-wrap`: Specifies whether flex items are forced onto a single line or can wrap onto multiple lines.

### Flex Item Properties:
- `flex-grow`: Specifies how much a flex item will grow relative to other flex items within the same flex container.
- `flex-shrink`: Specifies how much a flex item will shrink relative to other flex items within the same flex container.
- `flex-basis`: Specifies the initial size of a flex item before it's placed into a flex container.
- `order`: Specifies the order in which a flex item appears within the flex container.
- `align-self`: Overrides the `align-items` property for a single flex item.

Example:

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex: 1; /* Flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
}
```

In this example, the flex container creates a horizontal row with three flex items. The `justify-content: space-between` property distributes the items evenly along the main axis with space between them, and `align-items: center` aligns the items vertically in the center along the cross axis.

Flexbox provides a more efficient and intuitive way to create complex layouts compared to older layout methods like floats and positioning. It's particularly useful for building responsive designs that adapt to different screen sizes and device orientations.
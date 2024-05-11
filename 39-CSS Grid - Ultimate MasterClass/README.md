# CSS Grid - Ultimate MasterClass

CSS Grid Layout is a two-dimensional layout system that allows you to create complex grid-based layouts with ease. With CSS Grid, you can define rows and columns, and then place elements into specific cells of the grid, providing a high level of control over the layout of your webpage.

## Basic Concepts:
### Grid Container:
- To create a grid container, you set the display property of the container's parent element to grid.

Example:

```css
.grid-container {
  display: grid;
}
```

### Grid Items:
- Grid items are the immediate children of a grid container.
- They are placed into specific cells of the grid using grid placement properties.

Example:

```css
.grid-item {
  /* Styles for grid items */
}
```

## Properties:

### Grid Container Properties:
- `grid-template-rows`: Defines the height of each row in the grid.
- `grid-template-columns`: Defines the width of each column in the grid.
- `grid-template-areas`: Defines named grid areas that can be referenced when placing grid items.
- `grid-gap` (or `grid-row-gap`, `grid-column-gap`): Specifies the size of the gap between rows and/or columns.
- `justify-items`: Aligns grid items along the inline (row) axis within their grid cells.
- `align-items`: Aligns grid items along the block (column) axis within their grid cells.
- `justify-content`: Aligns the grid along the inline (row) axis.
- `align-content`: Aligns the grid along the block (column) axis.

### Grid Item Properties:
- `grid-row-start`, `grid-row-end`, `grid-column-start`, `grid-column-end`: Specifies the start and end lines for grid items, determining their placement within the grid.
- `grid-row`, `grid-column`: Shorthand properties for specifying both the start and end lines for grid items.
- `grid-area`: Specifies a grid item's location and span in the grid using named grid areas defined in the grid container.

Example:

```html
<div class="grid-container">
  <div class="grid-item item1">Item 1</div>
  <div class="grid-item item2">Item 2</div>
  <div class="grid-item item3">Item 3</div>
  <div class="grid-item item4">Item 4</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  grid-gap: 10px; /* Gap between grid items */
}

.grid-item {
  padding: 20px;
  border: 1px solid #ccc;
}

.item1 {
  grid-column: 1 / 3; /* Spanning from column 1 to column 3 */
}

.item2 {
  grid-row: 2; /* Placed in the second row */
}

.item3 {
  grid-column: 3; /* Placed in the third column */
  grid-row: 2; /* Placed in the second row */
}

.item4 {
  grid-column: 1; /* Placed in the first column */
  grid-row: 3; /* Placed in the third row */
}
```

In this example, we create a grid container with three columns of equal width and a gap of 10px between grid items. Each grid item is then placed into specific cells of the grid using the `grid-column` and `grid-row` properties.

CSS Grid Layout provides a powerful and flexible way to create sophisticated layouts with precise control over the placement and alignment of elements. It's especially useful for building responsive designs that adapt to different screen sizes and device orientations.
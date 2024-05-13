# CSS Filters

CSS filters are a set of visual effects that can be applied to HTML elements using CSS. They allow you to adjust the appearance of elements by modifying their colors, blurring them, adjusting their brightness, and more. Filters are commonly used for creating visual effects, adjusting images, or enhancing user interface elements.

Basic Syntax:

```css
.element {
  filter: filter-function(value);
}
```

`.element`: The selector for the HTML element(s) to which the filter will be applied.
`filter-function`: The name of the filter function to apply, such as blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate, or sepia.
`value`: The value or parameter to apply to the filter function. This can be a length, percentage, angle, or unitless number, depending on the function.

Example Usage:

```css
.image {
  filter: grayscale(50%);
}
```

In this example, the `.image` element will be displayed with 50% grayscale, making it appear partially desaturated.

### Common Filter Functions:
- `blur()`: Applies a blur effect to the element. The higher the value, the more blurry the element becomes.
- `brightness()`: Adjusts the brightness of the element. Values greater than 1 increase brightness, while values between 0 and 1 decrease brightness.
- `contrast()`: Adjusts the contrast of the element. Values greater than 1 increase contrast, while values between 0 and 1 decrease contrast.
- `grayscale()`: Converts the element to grayscale. Values between 0% and 100% determine the amount of grayscale applied.
- `hue-rotate()`: Rotates the hue of the element's colors. Values represent the degrees of rotation (e.g., 90deg).
- `invert()`: Inverts the colors of the element. Values between 0% and 100% determine the amount of inversion.
- `opacity()`: Adjusts the opacity of the element. Values between 0 and 1 determine the opacity level.
- `saturate()`: Adjusts the saturation of the element's colors. Values greater than 1 increase saturation, while values between 0 and 1 decrease saturation.
- `sepia()`: Applies a sepia tone to the element. Values between 0% and 100% determine the amount of sepia applied.

Example:

```css
.box {
  width: 200px;
  height: 200px;
  background-color: #3498db;
  filter: brightness(150%) contrast(200%);
}
```

In this example, the `.box` element will have increased brightness and contrast, making its colors appear more vibrant and intense.

### Browser Support:
CSS filters are widely supported in modern web browsers, including Chrome, Firefox, Safari, and Edge. However, some older browsers may not support all filter functions or may require vendor prefixes for certain functions. It's essential to test your designs across different browsers to ensure compatibility.
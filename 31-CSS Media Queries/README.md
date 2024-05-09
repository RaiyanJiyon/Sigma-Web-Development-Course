# CSS Media Queries

CSS Media Queries allow you to apply different styles to a webpage based on the characteristics of the device or viewport, such as screen width, height, orientation, or resolution. They enable you to create responsive designs that adapt to different devices and screen sizes. Here's a basic example demonstrating the use of media queries:

```css
/* Styles for screens smaller than 600px */
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }

  .content {
    padding: 5px;
  }
}

/* Styles for screens between 600px and 900px */
@media (min-width: 600px) and (max-width: 900px) {
  body {
    font-size: 16px;
  }

  .content {
    padding: 10px;
  }
}

/* Styles for screens larger than 900px */
@media (min-width: 900px) {
  body {
    font-size: 18px;
  }

  .content {
    padding: 20px;
  }
}
```

In this example:

- `@media` is the rule that initiates a media query block.
- `(max-width: 600px)` and `(min-width: 600px)` and `(max-width: 900px)` are examples of media query expressions. They define conditions based on the width of the viewport.
- Within each media query block, CSS rules are defined to style elements differently based on the conditions specified.
- You can also use media queries to target other aspects of the device, such as orientation (landscape or portrait), resolution (min-resolution or max-resolution), and more.

Media queries are essential for creating responsive web designs that look good and function well across various devices, from large desktop monitors to small smartphones. They help ensure that your content remains accessible and readable regardless of the device's screen size.

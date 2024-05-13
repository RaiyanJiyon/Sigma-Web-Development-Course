# 49-CSS Object-fit and Object-cover

## object-fit and object-cover

object-fit and object-cover are CSS properties used to control how an image or video content is resized and fitted within its container.

### object-fit Property:
The `object-fit` property specifies how the content of an element should be resized to fit its container. It's particularly useful when dealing with replaced elements such as images and videos.

### Values:
- `fill`: The content is stretched to fill the container, potentially distorting its aspect ratio.
- `contain`: The content is scaled to maintain its aspect ratio while fitting within the container. The entire content is visible, but there may be empty space.
- `cover`: The content is scaled to maintain its aspect ratio while covering the entire container. This may result in some content being clipped if it exceeds the container's dimensions.
- `none`: The content is not resized to fit the container, maintaining its original size.
- `scale-down`: The content is scaled down to fit within the container, while preserving its aspect ratio. If the content is smaller than the container, it behaves like contain; otherwise, it behaves like none.

### object-cover:
`object-cover` is a shorthand for setting `object-fit` to cover. It scales the content to cover the entire container while preserving its aspect ratio. This is commonly used for background images or video covers where you want the entire container to be filled without distortion.

Example - 

```css
.container {
  width: 300px;
  height: 200px;
  overflow: hidden; /* Ensure content doesn't overflow container */
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Or use object-cover shorthand */
}
```

In this example, the `.image` content will be resized and cropped to cover the entire `.container` while maintaining its aspect ratio. Any content that doesn't fit within the container will be clipped.

### Usage:
- `object-fit` and `object-cover` are particularly useful for responsive design, ensuring that images and videos adapt to different container sizes without distortion. 
- They are commonly used in conjunction with CSS grid layouts, flexbox, or other layout techniques to create visually appealing and responsive designs. 
- These properties are well-supported in modern browsers, making them suitable for use in production websites and web applications. 

By using `object-fit` and `object-cover`, you can control how image and video content is displayed within its container, ensuring a consistent and visually pleasing presentation across different screen sizes and devices.

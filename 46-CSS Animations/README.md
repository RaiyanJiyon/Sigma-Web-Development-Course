# CSS Animations


CSS animations allow you to animate the properties of CSS elements over time, creating engaging and interactive effects on webpages. CSS animations are defined using `@keyframes` rule, which specifies the sequence of styles that an element should have during the animation.

Basic Syntax:

```css
@keyframes animationName {
  0% {
    /* Styles at the beginning of the animation */
  }
  50% {
    /* Styles halfway through the animation */
  }
  100% {
    /* Styles at the end of the animation */
  }
}

.element {
  animation-name: animationName;
  animation-duration: 3s; /* Duration of the animation */
  animation-timing-function: ease; /* Timing function */
  animation-delay: 0s; /* Delay before the animation starts */
  animation-iteration-count: infinite; /* Number of times the animation should repeat */
  animation-direction: normal; /* Direction of the animation */
  animation-fill-mode: forwards; /* Specifies what values are applied by the animation outside the time it is executing */
}
```

Example:

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.element {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation-name: pulse;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
```

In this example, the `.element` will pulsate, increasing in size by 10% halfway through the animation and then returning to its original size.

### Properties:
- `animation-name`: Specifies the name of the `@keyframes` rule defining the animation.
- `animation-duration`: Specifies the duration of the animation in seconds or milliseconds.
- `animation-timing-function`: Specifies the timing function to control the pace of the animation, such as ease, linear, ease-in, ease-out, or ease-in-out.
- `animation-delay`: Specifies the delay before the animation starts.
- `animation-iteration-count`: Specifies the number of times the animation should repeat, or `infinite` for indefinite repetition.
- `animation-direction`: Specifies whether the animation should play forward (`normal`), backward (`reverse`), alternate between forward and backward (`alternate`), or alternate backward and forward (`alternate-reverse`).
- `animation-fill-mode`: Specifies what values are applied by the animation outside the time it is executing, such as `none`, `forwards`, `backwards`, or `both`.

### Using Animation Shorthand:
You can also use the `animation` shorthand property to specify all the animation properties in a single declaration.

```css
.element {
  animation: pulse 2s ease-in-out infinite;
}
```

CSS animations provide a flexible and powerful way to add dynamic and visually appealing effects to your web designs, enhancing user interaction and overall user experience.